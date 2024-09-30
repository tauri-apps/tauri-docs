export interface PluginSupport {
  platform: string;
  level: string;
  // possible markdown
  notes?: string;
}

export interface PluginData {
  rustVersion: string;
  support: PluginSupport[];
}

type Platform = 'windows' | 'linux' | 'ios' | 'macos' | 'android';

// ids from /public/assets/platforms.svg sprite
type IconId =
  | 'material-symbols-android'
  | 'simple-icons-ios'
  | 'simple-icons-macos'
  | 'cib-linux'
  | 'bi-windows';

export function getSupportText(supportLevel: string) {
  switch (supportLevel) {
    case 'full':
      return 'Full support';
    case 'partial':
      return 'Partial support';
    case 'none':
      return 'No support';
    default:
      return `Support: ${supportLevel}`;
  }
}

export function getSupportIcon(supportLevel: string) {
  const supportLabel = getSupportText(supportLevel);
  switch (supportLevel) {
    case 'full':
      return `<svg aria-label="${supportLabel}" alt="${supportLabel}" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
  ><path
    fill="currentColor"
    d="m10.562 15.908l6.396-6.396l-.708-.708l-5.688 5.688l-2.85-2.85l-.708.708zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
  ></path></svg
>`;
    case 'partial':
      return `<svg aria-label="${supportLabel}" alt="${supportLabel}" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
  ><path
    fill="currentColor"
    d="m10.562 15.908l6.396-6.396l-.708-.708l-5.688 5.688l-2.85-2.85l-.708.708zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
  ></path></svg
>
`;
    case 'none':
      return `<svg aria-label="${supportLabel}" alt="${supportLabel}" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
  ><path
    fill="currentColor"
    d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"
  ></path></svg
>
`;
    default:
      return `<svg viewBox="0 0 24 24" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
  <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" />
</svg>`;
  }
}

// depends on /assets/platforms.svg
function renderPlatformIcon(iconId: IconId) {
  return `
  <div style="padding-inline-end: 4px">
    <svg width="24" height="24">
      <use xlink:href="/assets/platforms.svg#${iconId}"></use>
    </svg>
  </div>
`;
}

export function getPlatformSupportIcon(supportLevel: string, platform: Platform): string {
  const iconMap: Record<Platform, IconId> = {
    windows: 'bi-windows',
    linux: 'cib-linux',
    ios: 'simple-icons-ios',
    macos: 'simple-icons-macos',
    android: 'material-symbols-android',
  };

  const iconId = iconMap[platform];

  if (supportLevel !== 'full' && supportLevel !== 'partial') {
    return '';
  }

  return renderPlatformIcon(iconId);
}
