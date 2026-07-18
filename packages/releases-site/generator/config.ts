import type { Repository } from './types.js';

export const note =
  '\n#### NOTE: This file is auto-generated in packages/releases-site/generator/build.ts';

// All paths are relative to the package root (scripts run as `tsx generator/build.ts`)
export const contentDir = 'src/content/docs';
export const publicDir = 'public';
export const generatorDir = 'generator';

// const releaseBaseUrl () => = ""
// if repo === name, except tauri
// releaseFormat = "repo/name/version"

// todo: remove non userfacing packages
// todo: deal with branches

export const repositories = [
  {
    name: 'tauri',
    displayName: 'Tauri',
    repoUrl: 'https://github.com/tauri-apps/tauri',
    packages: [
      {
        name: 'tauri',
        githubPath: 'crates/tauri',
        description: 'The core Tauri runtime.',
        cratesPath: 'tauri',
      },
      {
        name: 'tauri-cli',
        githubPath: 'crates/tauri-cli',
        description: 'CLI to create, develop, and build Tauri apps.',
        cratesPath: 'tauri-cli',
      },
      {
        name: '@tauri-apps/api',
        githubPath: 'packages/api',
        description: 'JS/TS API for interaction with the Rust backend.',
        npmPath: '@tauri-apps/api',
      },
      {
        name: '@tauri-apps/cli',
        githubPath: 'packages/cli',
        description: 'Node.js wrapper for the `tauri-cli` Rust binary.',
        npmPath: '@tauri-apps/cli',
      },
      {
        name: 'tauri-bundler',
        githubPath: 'crates/tauri-bundler',
        description: 'Create platform-specific bundles and installers.',
        cratesPath: 'tauri-bundler',
      },
      {
        name: 'tauri-build',
        githubPath: 'crates/tauri-build',
        description: "A helper library for tauri app's build script.",
        cratesPath: 'tauri-build',
      },
      {
        name: 'tauri-codegen',
        githubPath: 'crates/tauri-codegen',
        description: 'Compile-time code generation for Tauri.',
        cratesPath: 'tauri-codegen',
      },
      {
        name: 'tauri-driver',
        githubPath: 'crates/tauri-driver',
        description: 'WebDriver client for testing Tauri applications.',
        cratesPath: 'tauri-driver',
      },
      {
        name: 'tauri-macros',
        githubPath: 'crates/tauri-macros',
        description: 'Internal macros for the Tauri framework.',
        cratesPath: 'tauri-macros',
      },
      {
        name: 'tauri-plugin',
        githubPath: 'crates/tauri-plugin',
        description: 'The Tauri plugin system.',
        cratesPath: 'tauri-plugin',
      },
      {
        name: 'tauri-runtime',
        githubPath: 'crates/tauri-runtime',
        description: "Tauri's runtime abstraction layer.",
        cratesPath: 'tauri-runtime',
      },
      {
        name: 'tauri-runtime-wry',
        githubPath: 'crates/tauri-runtime-wry',
        description: 'The Wry-based runtime for Tauri.',
        cratesPath: 'tauri-runtime-wry',
      },
      {
        name: 'tauri-utils',
        githubPath: 'crates/tauri-utils',
        description: 'Common utilities for the Tauri framework.',
        cratesPath: 'tauri-utils',
      },
    ],
  },
  {
    name: 'wry',
    displayName: 'Wry',
    repoUrl: 'https://github.com/tauri-apps/wry',
    packages: [
      {
        name: 'wry',
        githubPath: '__root__',
        description: 'Cross-platform WebView rendering library in Rust.',
        cratesPath: 'wry',
      },
    ],
  },
  {
    name: 'tao',
    displayName: 'Tao',
    repoUrl: 'https://github.com/tauri-apps/tao',
    packages: [
      {
        name: 'tao',
        githubPath: '__root__',
        description: 'Cross-platform application window creation library in Rust.',
        cratesPath: 'tao',
      },
    ],
  },
  {
    name: 'create-tauri-app',
    displayName: 'CTA',
    repoUrl: 'https://github.com/tauri-apps/create-tauri-app',
    packages: [
      {
        name: 'create-tauri-app',
        githubPath: '__root__',
        description: 'Rapidly scaffold out a new Tauri project.',
        npmPath: 'create-tauri-app',
      },
    ],
  },
  {
    name: 'plugins-workspace',
    displayName: 'Plugins',
    repoUrl: 'https://github.com/tauri-apps/plugins-workspace',
    branch: 'v2',
    packages: [
      {
        name: 'autostart',
        githubPath: 'plugins/autostart',
        description: 'Register your app to run on startup.',
        cratesPath: 'tauri-plugin-autostart',
        npmPath: '@tauri-apps/plugin-autostart',
      },
      {
        name: 'barcode-scanner',
        githubPath: 'plugins/barcode-scanner',
        description: 'Scan barcodes and QR codes.',
        cratesPath: 'tauri-plugin-barcode-scanner',
        npmPath: '@tauri-apps/plugin-barcode-scanner',
      },
      {
        name: 'biometric',
        githubPath: 'plugins/biometric',
        description: 'Authenticate users with biometrics.',
        cratesPath: 'tauri-plugin-biometric',
        npmPath: '@tauri-apps/plugin-biometric',
      },
      {
        name: 'clipboard-manager',
        githubPath: 'plugins/clipboard-manager',
        description: 'Manage the system clipboard.',
        cratesPath: 'tauri-plugin-clipboard-manager',
        npmPath: '@tauri-apps/plugin-clipboard-manager',
      },
      {
        name: 'deep-link',
        githubPath: 'plugins/deep-link',
        description: 'Open your app through a custom URL scheme.',
        cratesPath: 'tauri-plugin-deep-link',
        npmPath: '@tauri-apps/plugin-deep-link',
      },
      {
        name: 'dialog',
        githubPath: 'plugins/dialog',
        description: 'Native dialogs for your app.',
        cratesPath: 'tauri-plugin-dialog',
        npmPath: '@tauri-apps/plugin-dialog',
      },
      {
        name: 'fs',
        githubPath: 'plugins/fs',
        description: 'Modern and easy-to-use file system API.',
        cratesPath: 'tauri-plugin-fs',
        npmPath: '@tauri-apps/plugin-fs',
      },
      {
        name: 'global-shortcut',
        githubPath: 'plugins/global-shortcut',
        description: 'Register global shortcuts for your app.',
        cratesPath: 'tauri-plugin-global-shortcut',
        npmPath: '@tauri-apps/plugin-global-shortcut',
      },
      {
        name: 'http',
        githubPath: 'plugins/http',
        description: 'Make HTTP requests from your app.',
        cratesPath: 'tauri-plugin-http',
        npmPath: '@tauri-apps/plugin-http',
      },
      {
        name: 'log',
        githubPath: 'plugins/log',
        description: 'Configurable logging for your app.',
        cratesPath: 'tauri-plugin-log',
        npmPath: '@tauri-apps/plugin-log',
      },
      {
        name: 'nfc',
        githubPath: 'plugins/nfc',
        description: 'Read and write NFC tags.',
        cratesPath: 'tauri-plugin-nfc',
        npmPath: '@tauri-apps/plugin-nfc',
      },
      {
        name: 'notification',
        githubPath: 'plugins/notification',
        description: 'Send native notifications from your app.',
        cratesPath: 'tauri-plugin-notification',
        npmPath: '@tauri-apps/plugin-notification',
      },
      {
        name: 'os',
        githubPath: 'plugins/os',
        description: 'Access operating system-specific information.',
        cratesPath: 'tauri-plugin-os',
        npmPath: '@tauri-apps/plugin-os',
      },
      {
        name: 'positioner',
        githubPath: 'plugins/positioner',
        description: "Move and resize your app's windows.",
        cratesPath: 'tauri-plugin-positioner',
        npmPath: '@tauri-apps/plugin-positioner',
      },
      {
        name: 'process',
        githubPath: 'plugins/process',
        description: 'Manage child processes.',
        cratesPath: 'tauri-plugin-process',
        npmPath: '@tauri-apps/plugin-process',
      },
      {
        name: 'shell',
        githubPath: 'plugins/shell',
        description: 'Open external programs and URLs.',
        cratesPath: 'tauri-plugin-shell',
        npmPath: '@tauri-apps/plugin-shell',
      },
      {
        name: 'sql',
        githubPath: 'plugins/sql',
        description: 'Connect to and manage SQL databases.',
        cratesPath: 'tauri-plugin-sql',
        npmPath: '@tauri-apps/plugin-sql',
      },
      {
        name: 'store',
        githubPath: 'plugins/store',
        description: 'Persistent key-value storage for your app.',
        cratesPath: 'tauri-plugin-store',
        npmPath: '@tauri-apps/plugin-store',
      },
      {
        name: 'stronghold',
        githubPath: 'plugins/stronghold',
        description: 'Securely store sensitive data.',
        cratesPath: 'tauri-plugin-stronghold',
        npmPath: '@tauri-apps/plugin-stronghold',
      },
      {
        name: 'updater',
        githubPath: 'plugins/updater',
        description: 'Update your app from a remote server.',
        cratesPath: 'tauri-plugin-updater',
        npmPath: '@tauri-apps/plugin-updater',
      },
      {
        name: 'upload',
        githubPath: 'plugins/upload',
        description: 'Upload files to a remote server.',
        cratesPath: 'tauri-plugin-upload',
        npmPath: '@tauri-apps/plugin-upload',
      },
      {
        name: 'websocket',
        githubPath: 'plugins/websocket',
        description: 'Connect to and manage WebSocket connections.',
        cratesPath: 'tauri-plugin-websocket',
        npmPath: '@tauri-apps/plugin-websocket',
      },
      {
        name: 'window-state',
        githubPath: 'plugins/window-state',
        description: 'Save and restore window state.',
        cratesPath: 'tauri-plugin-window-state',
        npmPath: '@tauri-apps/plugin-window-state',
      },
    ],
  },
] satisfies Repository[];
