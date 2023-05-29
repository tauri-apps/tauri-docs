# os

Provides operating system-related utility methods and properties.

This package is also accessible with `window.__TAURI__.os` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

The APIs must be added to [`tauri.allowlist.os`](https://tauri.app/v1/api/config/#allowlistconfig.os) in `tauri.conf.json`:
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

## Type Aliases

### `Arch`

>  **Arch**: `"x86"` \| `"x86_64"` \| `"arm"` \| `"aarch64"` \| `"mips"` \| `"mips64"` \| `"powerpc"` \| `"powerpc64"` \| `"riscv64"` \| `"s390x"` \| `"sparc64"`

**Defined in:** [os.ts:43](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/os.ts#L43)

### `OsType`

>  **OsType**: `"Linux"` \| `"Darwin"` \| `"Windows_NT"`

**Defined in:** [os.ts:41](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/os.ts#L41)

### `Platform`

>  **Platform**: `"linux"` \| `"darwin"` \| `"ios"` \| `"freebsd"` \| `"dragonfly"` \| `"netbsd"` \| `"openbsd"` \| `"solaris"` \| `"android"` \| `"win32"`

**Defined in:** [os.ts:29](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/os.ts#L29)

## Variables

### `EOL`

> `Const` **EOL**: `"\n"` \| `"\r\n"`

The operating system-specific end-of-line marker.
- `\n` on POSIX
- `\r\n` on Windows

**Since**: 1.0.0

**Defined in:** [os.ts:63](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/os.ts#L63)

## Functions

### `arch`

> **arch**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Arch`](os.md#arch)\>

Returns the operating system CPU architecture for which the tauri app was compiled.
Possible values are `'x86'`, `'x86_64'`, `'arm'`, `'aarch64'`, `'mips'`, `'mips64'`, `'powerpc'`, `'powerpc64'`, `'riscv64'`, `'s390x'`, `'sparc64'`.

**Example**

```typescript
import { arch } from '@tauri-apps/api/os';
const archName = await arch();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Arch`](os.md#arch)\>

### `platform`

> **platform**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Platform`](os.md#platform)\>

Returns a string identifying the operating system platform.
The value is set at compile time. Possible values are `'linux'`, `'darwin'`, `'ios'`, `'freebsd'`, `'dragonfly'`, `'netbsd'`, `'openbsd'`, `'solaris'`, `'android'`, `'win32'`

**Example**

```typescript
import { platform } from '@tauri-apps/api/os';
const platformName = await platform();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Platform`](os.md#platform)\>

### `tempdir`

> **tempdir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the operating system's default directory for temporary files as a string.

**Example**

```typescript
import { tempdir } from '@tauri-apps/api/os';
const tempdirPath = await tempdir();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `type`

> **type**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`OsType`](os.md#ostype)\>

Returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.

**Example**

```typescript
import { type } from '@tauri-apps/api/os';
const osType = await type();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`OsType`](os.md#ostype)\>

### `version`

> **version**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns a string identifying the kernel version.

**Example**

```typescript
import { version } from '@tauri-apps/api/os';
const osVersion = await version();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>
