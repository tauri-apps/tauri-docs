[@tauri-apps/api](../README.md) / os

# Module: os

Provides operating system-related utility methods and properties.

This package is also accessible with `window.__TAURI__.os` when `tauri.conf.json > build > withGlobalTauri` is set to true.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "os": {
        "all": true, // enable all Os APIs
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Variables

### EOL

• `Const` **EOL**: ``"\n"`` \| ``"\r\n"``

The operating system-specific end-of-line marker.
- `\n` on POSIX
- `\r\n` on Windows

#### Defined in

[os.ts:35](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/os.ts#L35)

## Functions

### arch

▸ **arch**(): `Promise`<`LiteralUnion`<``"x86"`` \| ``"x86_64"`` \| ``"arm"`` \| ``"aarch64"`` \| ``"mips"`` \| ``"mips64"`` \| ``"powerpc"`` \| ``"powerpc64"`` \| ``"riscv64"`` \| ``"s390x"`` \| ``"sparc64"``, `string`\>\>

Returns the operating system CPU architecture for which the tauri app was compiled.
Possible values are `'x86'`, `'x86_64'`, `'arm'`, `'aarch64'`, `'mips'`, `'mips64'`, `'powerpc'`, `'powerpc64'`, `'riscv64'`, `'s390x'`, `'sparc64'`.

**`example`**
```typescript
import { arch } from '@tauri-apps/api/os';
const archName = await arch();
```

#### Returns

`Promise`<`LiteralUnion`<``"x86"`` \| ``"x86_64"`` \| ``"arm"`` \| ``"aarch64"`` \| ``"mips"`` \| ``"mips64"`` \| ``"powerpc"`` \| ``"powerpc64"`` \| ``"riscv64"`` \| ``"s390x"`` \| ``"sparc64"``, `string`\>\>

#### Defined in

[os.ts:114](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/os.ts#L114)

___

### platform

▸ **platform**(): `Promise`<`LiteralUnion`<``"linux"`` \| ``"darwin"`` \| ``"ios"`` \| ``"freebsd"`` \| ``"dragonfly"`` \| ``"netbsd"`` \| ``"openbsd"`` \| ``"solaris"`` \| ``"android"`` \| ``"win32"``, `string`\>\>

Returns a string identifying the operating system platform.
The value is set at compile time. Possible values are `'linux'`, `'darwin'`, `'ios'`, `'freebsd'`, `'dragonfly'`, `'netbsd'`, `'openbsd'`, `'solaris'`, `'android'`, `'win32'`

**`example`**
```typescript
import { platform } from '@tauri-apps/api/os';
const platformName = await platform();
```

#### Returns

`Promise`<`LiteralUnion`<``"linux"`` \| ``"darwin"`` \| ``"ios"`` \| ``"freebsd"`` \| ``"dragonfly"`` \| ``"netbsd"`` \| ``"openbsd"`` \| ``"solaris"`` \| ``"android"`` \| ``"win32"``, `string`\>\>

#### Defined in

[os.ts:46](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/os.ts#L46)

___

### tempdir

▸ **tempdir**(): `Promise`<`string`\>

Returns the operating system's default directory for temporary files as a string.

**`example`**
```typescript
import { tempdir } from '@tauri-apps/api/os';
const tempdirPath = await tempdir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[os.ts:146](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/os.ts#L146)

___

### type

▸ **type**(): `Promise`<`LiteralUnion`<``"Linux"`` \| ``"Darwin"`` \| ``"Windows_NT"``, `string`\>\>

Returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.

**`example`**
```typescript
import { type } from '@tauri-apps/api/os';
const osType = await type();
```

#### Returns

`Promise`<`LiteralUnion`<``"Linux"`` \| ``"Darwin"`` \| ``"Windows_NT"``, `string`\>\>

#### Defined in

[os.ts:94](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/os.ts#L94)

___

### version

▸ **version**(): `Promise`<`string`\>

Returns a string identifying the kernel version.

**`example`**
```typescript
import { version } from '@tauri-apps/api/os';
const osVersion = await version();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[os.ts:77](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/os.ts#L77)
