[@tauri-apps/api](../index.md) / os

# Namespace: os

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

• **EOL**: ``"\r\n"`` \| ``"\n"``

The operating system-specific end-of-line marker.
- `\n` on POSIX
- `\r\n` on Windows

#### Defined in

[os.ts:35](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/os.ts#L35)

## Functions

### arch

▸ **arch**(): `Promise`<`LiteralUnion`<``"x86"`` \| ``"x86_64"`` \| ``"arm"`` \| ``"aarch64"`` \| ``"mips"`` \| ``"mips64"`` \| ``"powerpc"`` \| ``"powerpc64"`` \| ``"riscv64"`` \| ``"s390x"`` \| ``"sparc64"``, `string`\>\>

Returns the operating system CPU architecture for which the tauri app was compiled. Possible values are `'x86'`, `'x86_64'`, `'arm'`, `'aarch64'`, `'mips'`, `'mips64'`, `'powerpc'`, `'powerpc64'`, `'riscv64'`, `'s390x'`, `'sparc64'`

#### Returns

`Promise`<`LiteralUnion`<``"x86"`` \| ``"x86_64"`` \| ``"arm"`` \| ``"aarch64"`` \| ``"mips"`` \| ``"mips64"`` \| ``"powerpc"`` \| ``"powerpc64"`` \| ``"riscv64"`` \| ``"s390x"`` \| ``"sparc64"``, `string`\>\>

#### Defined in

[os.ts:93](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/os.ts#L93)

___

### platform

▸ **platform**(): `Promise`<`LiteralUnion`<``"linux"`` \| ``"darwin"`` \| ``"ios"`` \| ``"freebsd"`` \| ``"dragonfly"`` \| ``"netbsd"`` \| ``"openbsd"`` \| ``"solaris"`` \| ``"android"`` \| ``"win32"``, `string`\>\>

Returns a string identifying the operating system platform.
The value is set at compile time. Possible values are `'linux'`, `'darwin'`, `'ios'`, `'freebsd'`, `'dragonfly'`, `'netbsd'`, `'openbsd'`, `'solaris'`, `'android'`, `'win32'`

#### Returns

`Promise`<`LiteralUnion`<``"linux"`` \| ``"darwin"`` \| ``"ios"`` \| ``"freebsd"`` \| ``"dragonfly"`` \| ``"netbsd"`` \| ``"openbsd"`` \| ``"solaris"`` \| ``"android"`` \| ``"win32"``, `string`\>\>

#### Defined in

[os.ts:41](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/os.ts#L41)

___

### tempdir

▸ **tempdir**(): `Promise`<`string`\>

Returns the operating system's default directory for temporary files as a string.

#### Returns

`Promise`<`string`\>

#### Defined in

[os.ts:120](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/os.ts#L120)

___

### type

▸ **type**(): `Promise`<`LiteralUnion`<``"Linux"`` \| ``"Darwin"`` \| ``"Windows_NT"``, `string`\>\>

Returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.

#### Returns

`Promise`<`LiteralUnion`<``"Linux"`` \| ``"Darwin"`` \| ``"Windows_NT"``, `string`\>\>

#### Defined in

[os.ts:79](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/os.ts#L79)

___

### version

▸ **version**(): `Promise`<`string`\>

Returns a string identifying the kernel version.

#### Returns

`Promise`<`string`\>

#### Defined in

[os.ts:67](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/os.ts#L67)
