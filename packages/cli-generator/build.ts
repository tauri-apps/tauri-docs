import { existsSync, readFileSync, writeFileSync } from 'node:fs';
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
  deno="deno task tauri ${command}"
  bun="bun tauri ${command}"
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
  if (command.name === 'migrate' && process.platform !== 'darwin') {
    // placeholder resolved per locale below, so each language can ship its own iOS stub
    doc += '$IOS_COMMANDS\n\n';

    commandList.push(
      { name: 'ios', description: 'iOS commands' },
      {
        name: 'ios init',
        description: 'Initialize iOS target in the project',
      },
      {
        name: 'ios dev',
        description: 'Run your app in development mode on iOS',
      },
      {
        name: 'ios build',
        description: 'Build your app in release mode for iOS and generate IPAs',
      },
      {
        name: 'ios run',
        description: 'Run your app in production mode on iOS',
      }
    );
  }

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

const locales: Record<string, unknown> = JSON.parse(readFileSync('../../locales.json').toString());
const englishIos = '../../src/content/docs/reference/_cli_ios.mdx';

for (const locale of Object.keys(locales)) {
  const referenceDir =
    locale === 'root'
      ? '../../src/content/docs/reference'
      : `../../src/content/docs/${locale}/reference`;

  const templatePath = `${referenceDir}/_cli.mdx`;
  if (!existsSync(templatePath)) continue;

  const localizedIos = `${referenceDir}/_cli_ios.mdx`;
  const iosFragment = readFileSync(existsSync(localizedIos) ? localizedIos : englishIos).toString();

  // function replacers keep String.replace from expanding `$&`-style patterns in the templates
  const body = `${summary}\n\n${doc}`.replace('$IOS_COMMANDS\n\n', () => `${iosFragment}\n\n`);
  const template = readFileSync(templatePath).toString();

  writeFileSync(
    `${referenceDir}/cli.mdx`,
    template.replace('$LIST_OF_COMMANDS', () => body)
  );
}
