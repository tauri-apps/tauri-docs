import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { slug } from 'github-slugger';

interface Command {
  name: string;
  description: string;
}

function getSubcommands(commandOutput: string): Command[] {
  const subcommands = [];

  let readingSubcommands = false;
  for (const line of commandOutput.split('\n').map((l) => l.trim())) {
    if (readingSubcommands) {
      if (line.length === 0) {
        readingSubcommands = false;
      } else {
        const subcommand = line.substring(0, line.indexOf(' '));
        const description = line.substring(subcommand.length).trim();
        if (subcommand !== 'help') {
          subcommands.push({ name: subcommand, description });
        }
      }
    }
    if (line === 'Commands:') {
      readingSubcommands = true;
    }
  }

  return subcommands;
}

function generateCommandDoc(command: string, level: number, subcommandList: Command[]): string {
  const output = execSync(`pnpm tauri ${command} --help`)
    .toString()
    .replace('pnpm run build', 'tauri');
  const subcommands = getSubcommands(output);

  subcommandList.push(
    ...subcommands.map((subcommand) => ({
      ...subcommand,
      name: `${command} ${subcommand.name}`,
    }))
  );

  const subcommandsDoc =
    subcommands.length === 0
      ? ''
      : `\n${subcommands.map(({ name }) => generateCommandDoc(`${command} ${name}`, level + 1, commandList)).join('\n\n')}`;

  const heading = '#'.repeat(level);
  return `${heading} \`${command}\`
  
<CommandTabs
  npm="npm run tauri ${command}"
  yarn="yarn tauri ${command}"
  pnpm="pnpm tauri ${command}"
  cargo="cargo tauri ${command}"
/>

\`\`\`
${output}
\`\`\`
${subcommandsDoc}
`;
}

const output = execSync('pnpm tauri --help').toString();
const subcommands = getSubcommands(output);

const commandList: Command[] = [];

let doc = '';

for (const command of subcommands) {
  commandList.push(command);
  const commandDoc = generateCommandDoc(command.name, 3, commandList);
  doc += commandDoc;
}

let summary = `| Command | Description |
| ---------- | ------------------- |
`;

for (const { name, description } of commandList) {
  summary += `| [\`${name}\`](#${slug(name)}) | ${description} |\n`;
}

const template = readFileSync('../../src/content/docs/reference/_cli.mdx').toString();

writeFileSync(
  '../../src/content/docs/reference/cli.mdx',
  template.replace(
    '$LIST_OF_COMMANDS',
    `${summary}

${doc}`
  )
);
