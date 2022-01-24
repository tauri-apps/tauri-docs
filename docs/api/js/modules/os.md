[@tauri-apps/api](../index.md) / os

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

• `Const` **EOL**: ``"\r\n"`` \| ``"\n"``

The operating system-specific end-of-line marker.
- `\n` on POSIX
- `\r\n` on Windows

#### Defined in

[os.ts:34](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/os.ts#L34)

## Functions

### arch

▸ **arch**(): `Promise`<`string`\>

Returns the operating system CPU architecture for which the tauri app was compiled. Possible values are `'x86'`, `'x86_64'`, `'arm'`, `'aarch64'`, `'mips'`, `'mips64'`, `'powerpc'`, `'powerpc64'`, `'riscv64'`, `'s390x'`, `'sparc64'`

#### Returns

`Promise`<`string`\>

#### Defined in

[os.ts:76](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/os.ts#L76)

___

### platform

▸ **platform**(): `Promise`<`string`\>

Returns a string identifying the operating system platform.
The value is set at compile time. Possible values are `'aix'`, `'darwin'`, `'freebsd'`, `'linux'`, `'openbsd'`, `'sunos'`, and `'win32'`.

#### Returns

`Promise`<`string`\>

#### Defined in

[os.ts:40](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/os.ts#L40)

___

### tempdir

▸ **tempdir**(): `Promise`<`string`\>

Returns the operating system's default directory for temporary files as a string.

#### Returns

`Promise`<`string`\>

#### Defined in

[os.ts:88](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/os.ts#L88)

___

### type

▸ **type**(): `Promise`<`string`\>

Returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.

#### Returns

`Promise`<`string`\>

#### Defined in

[os.ts:64](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/os.ts#L64)

___

### version

▸ **version**(): `Promise`<`string`\>

Returns a string identifying the kernel version.

#### Returns

`Promise`<`string`\>

#### Defined in

[os.ts:52](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/os.ts#L52)
