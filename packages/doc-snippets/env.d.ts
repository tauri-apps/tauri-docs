// Ambient declarations for the few modules used in the docs that are not worth installing.

declare module 'unocss/vite' {
  const UnoCSS: (...args: unknown[]) => import('vite').Plugin;
  export default UnoCSS;
}

declare module 'internal-ip' {
  export function internalIpV4(): Promise<string | undefined>;
  export function internalIpV4Sync(): string | undefined;
}

// Nuxt auto-imports this in nuxt.config.ts
declare function defineNuxtConfig(config: Record<string, unknown>): unknown;

// Globals Tauri injects into the webview
interface Window {
  // set by the isolation application, see the isolation pattern docs
  __TAURI_ISOLATION_HOOK__?: (payload: unknown) => unknown;
}
