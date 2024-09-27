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
  const supportLabel = `${supportLevel} support`;
  switch (supportLevel) {
    case 'full':
      return `<svg aria-label="${supportLabel}" alt="${supportLabel}" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}
  ><path
    fill="currentColor"
    d="m10.562 15.908l6.396-6.396l-.708-.708l-5.688 5.688l-2.85-2.85l-.708.708zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
  ></path></svg
>`;
    case 'partial':
      return `<svg aria-label="${supportLabel}" alt="${supportLabel}" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}
  ><path
    fill="currentColor"
    d="m10.562 15.908l6.396-6.396l-.708-.708l-5.688 5.688l-2.85-2.85l-.708.708zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
  ></path></svg
>
`;
    case 'none':
      return `<svg aria-label="${supportLabel}" alt="${supportLabel}" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}
  ><path
    fill="currentColor"
    d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"
  ></path></svg
>

`;
    default:
      return '?';
  }
}

// function getSaturationFilter(saturation: number) {
//   return `
//   <defs>
//     <filter id="halfSaturation">
//       <feColorMatrix type="saturate" values="${saturation}"/>
//     </filter>
//   </defs>
// `;
// }

function renderWindowsIcon(halfWidth?: boolean, opacity = 1) {
  const width = halfWidth ? 64 : 256;
  return `<svg opacity="${opacity}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 ${width} 256"><path fill="#0078D4" d="M0 0h121.329v121.329H0zm134.671 0H256v121.329H134.671zM0 134.671h121.329V256H0zm134.671 0H256V256H134.671z"/>
      </svg>`;
}

function renderLinuxIcon(halfWidth?: boolean, opacity = 1) {
  // have to play with halfWidth numbers
  const width = halfWidth ? 32 : 256;
  return ``;
}

function renderAndroidIcon(halfWidth?: boolean, opacity = 1) {
  const width = halfWidth ? 4 : 24;
  return `<svg opacity="${opacity}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 ${width} 24"><path fill="currentColor" d="M1 18q.225-2.675 1.638-4.925T6.4 9.5L4.55 6.3q-.15-.225-.075-.475T4.8 5.45q.2-.125.45-.05t.4.3L7.5 8.9Q9.65 8 12 8t4.5.9l1.85-3.2q.15-.225.4-.3t.45.05q.25.125.325.375t-.075.475L17.6 9.5q2.35 1.325 3.762 3.575T23 18zm6-2.75q.525 0 .888-.363T8.25 14t-.363-.888T7 12.75t-.888.363T5.75 14t.363.888t.887.362m10 0q.525 0 .888-.363T18.25 14t-.363-.888T17 12.75t-.888.363t-.362.887t.363.888t.887.362"/></svg>`;
}

export function getPlatformSupportIcon(supportLevel: string, platform: string): string {
  const icons: Record<string, any> = {
    windows: {
      full: renderWindowsIcon(),
      partial: renderWindowsIcon(true),
      none: renderWindowsIcon(false, 0.3),
      unknown: '?',
    },
    linux: {
      full: renderLinuxIcon(),
      partial: renderLinuxIcon(true),
      none: renderLinuxIcon(false, 0.3),
      unknown: '',
    },
    ios: {
      full: '',
      partial: '',
      none: '',
      unknown: '',
    },
    macos: {
      full: '',
      partial: '',
      none: '',
      unknown: '',
    },
    android: {
      full: renderAndroidIcon(),
      partial: renderAndroidIcon(true),
      none: renderAndroidIcon(false, 0.3),
      unknown: '?',
    },
  };

  const platformIcons = icons[platform.toLowerCase()];
  if (platformIcons) {
    return platformIcons[supportLevel] || '';
  }

  return '?';
}
