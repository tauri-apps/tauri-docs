import starlightTypeDoc from 'starlight-typedoc';
import { existsSync } from 'fs';

const tauriPlugins = [
  { name: 'fs', path: 'fs' },
  { name: 'autostart', path: 'autostart' },
  { name: 'barcode-scanner', path: 'barcode-scanner' },
  { name: 'biometric', path: 'biometric' },
  { name: 'cli', path: 'cli' },
  { name: 'clipboard-manager', path: 'clipboard-manager' },
  { name: 'deep-link', path: 'deep-link' },
  { name: 'dialog', path: 'dialog' },
  { name: 'global-shortcut', path: 'global-shortcut' },
  { name: 'http', path: 'http' },
  { name: 'log', path: 'log' },
  { name: 'nfc', path: 'nfc' },
  { name: 'notification', path: 'notification' },
  { name: 'opener', path: 'opener' },
  { name: 'os', path: 'os' },
  { name: 'positioner', path: 'positioner' },
  { name: 'process', path: 'process' },
  { name: 'shell', path: 'shell' },
  { name: 'sql', path: 'sql' },
  { name: 'store', path: 'store' },
  { name: 'stronghold', path: 'stronghold' },
  { name: 'updater', path: 'updater' },
  { name: 'upload', path: 'upload' },
  { name: 'websocket', path: 'websocket' },
  { name: 'window-state', path: 'window-state' },
];

const coreOutput = 'reference/javascript/core';
const pluginOutput = 'reference/javascript/plugins';

export function getTauriTypeDocPlugins(): {
  plugins: Array<any>;
} {
  const plugins: any[] = [];

  tauriPlugins.forEach((plugin) => {
    const dir = `src/content/docs/${pluginOutput}/${plugin.path}/README.md`;
    if (!existsSync(dir)) {
      plugins.push(
        starlightTypeDoc({
          tsconfig: `./packages/plugins-workspace/plugins/${plugin.path}/tsconfig.json`,
          entryPoints: [`./packages/plugins-workspace/plugins/${plugin.path}/guest-js/index.ts`],
          output: `${pluginOutput}/${plugin.path}`,
        })
      );
    }
  });

  const dir = `src/content/docs/${coreOutput}/README.md`;
  if (!existsSync(dir)) {
    plugins.push(
      starlightTypeDoc({
        tsconfig: './packages/tauri/packages/api/tsconfig.json',
        entryPoints: ['./packages/tauri/packages/api/src/index.ts'],
        output: coreOutput,
      })
    );
  }

  return {
    plugins,
  };
}
