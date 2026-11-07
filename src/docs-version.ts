export const current = { major: 2 };

// `keepPath` missing page gives 404
export const versions = [
  { major: 1, label: 'v1', site: 'https://v1.tauri.app', keepPath: false },
  { major: 2, label: 'v2', site: 'https://v2.tauri.app', keepPath: true },
];
