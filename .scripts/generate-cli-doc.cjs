const childProcess = require('child_process')
const path = require('path')
const fs = require('fs')
const templatePath = path.join(__dirname, './cli-template.md')

// TODO: get the actual version
const targetPath = path.join(__dirname, '../src/content/api/en/cli/1/index.md')
const template = fs.readFileSync(templatePath, 'utf8')

const commands = ['info', 'init', 'plugin init', 'dev', 'build', 'icon']

let doc = template

for (const cmd of commands) {
  const output = childProcess
    .execSync(`cargo tauri ${cmd} --help`)
    .toString()
    .split('\n')
  output.splice(0, 2)
  output.splice(-1)
  doc = doc.replace(
    `{${cmd}}`,
    '```\n' +
      output
        .join('\n')
        .replace(' [default: /home/runner/work/tauri-docs/tauri-docs]', '')
        .replace('cargo-tauri', 'tauri') +
      '\n```'
  )
}

fs.writeFileSync(targetPath, doc)
