---
title: '@tauri-apps/plugin-os'
editUrl: false
sidebar:
  label: 'os'
---

Provides operating system-related utility methods and properties.

## Type Aliases

### Arch

```ts
Arch: 'x86' |
  'x86_64' |
  'arm' |
  'aarch64' |
  'mips' |
  'mips64' |
  'powerpc' |
  'powerpc64' |
  'riscv64' |
  's390x' |
  'sparc64';
```

**Source**: [index.ts:36](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L36)

---

### Family

```ts
Family: 'unix' | 'windows';
```

**Source**: [index.ts:91](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L91)

---

### OsType

```ts
OsType: 'linux' | 'windows' | 'macos' | 'ios' | 'android';
```

**Source**: [index.ts:34](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L34)

---

### Platform

```ts
Platform: 'linux' |
  'macos' |
  'ios' |
  'freebsd' |
  'dragonfly' |
  'netbsd' |
  'openbsd' |
  'solaris' |
  'android' |
  'windows';
```

**Source**: [index.ts:22](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L22)

## Functions

### arch()

```ts
arch(): Promise< Arch >
```

Returns the current operating system architecture.
Possible values are `'x86'`, `'x86_64'`, `'arm'`, `'aarch64'`, `'mips'`, `'mips64'`, `'powerpc'`, `'powerpc64'`, `'riscv64'`, `'s390x'`, `'sparc64'`.

#### Example

```typescript
import { arch } from '@tauri-apps/plugin-os';
const archName = await arch();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Arch`](/references/javascript/os/#arch) \>

**Source**: [index.ts:132](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L132)

---

### eol()

```ts
eol(): string
```

Returns the operating system-specific end-of-line marker.

- `\n` on POSIX
- `\r\n` on Windows

#### Since

2.0.0

#### Returns

`string`

**Source**: [index.ts:56](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L56)

---

### exeExtension()

```ts
exeExtension(): Promise< string | null >
```

Returns the file extension, if any, used for executable binaries on this platform. Possible values are `'exe'` and `''` (empty string).

#### Example

```typescript
import { exeExtension } from '@tauri-apps/plugin-os';
const exeExt = await exeExtension();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \| `null` \>

**Source**: [index.ts:163](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L163)

---

### family()

```ts
family(): Promise< Family >
```

Returns the current operating system family. Possible values are `'unix'`, `'windows'`.

#### Example

```typescript
import { family } from '@tauri-apps/plugin-os';
const family = await family();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Family`](/references/javascript/os/#family) \>

**Source**: [index.ts:103](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L103)

---

### hostname()

```ts
hostname(): Promise< string | null >
```

Returns the host name of the operating system.

#### Example

```typescript
import { hostname } from '@tauri-apps/plugin-os';
const hostname = await hostname();
```

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \| `null` \>

**Source**: [index.ts:175](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L175)

---

### locale()

```ts
locale(): Promise< string | null >
```

Returns a String with a `BCP-47` language tag inside. If the locale couldn’t be obtained, `null` is returned instead.

#### Example

```typescript
import { locale } from '@tauri-apps/plugin-os';
const locale = await locale();
if (locale) {
  // use the locale string here
}
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \| `null` \>

**Source**: [index.ts:149](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L149)

---

### platform()

```ts
platform(): Promise< Platform >
```

Returns a string describing the specific operating system in use.
The value is set at compile time. Possible values are `'linux'`, `'macos'`, `'ios'`, `'freebsd'`, `'dragonfly'`, `'netbsd'`, `'openbsd'`, `'solaris'`, `'android'`, `'windows'`

#### Example

```typescript
import { platform } from '@tauri-apps/plugin-os';
const platformName = await platform();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Platform`](/references/javascript/os/#platform) \>

**Source**: [index.ts:73](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L73)

---

### type()

```ts
type(): Promise< OsType >
```

Returns the current operating system type. Returns `'linux'` on Linux, `'macos'` on macOS, `'windows'` on Windows, `'ios'` on iOS and `'android'` on Android.

#### Example

```typescript
import { type } from '@tauri-apps/plugin-os';
const osType = await type();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`OsType`](/references/javascript/os/#ostype) \>

**Source**: [index.ts:117](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L117)

---

### version()

```ts
version(): Promise< string >
```

Returns the current operating system version.

#### Example

```typescript
import { version } from '@tauri-apps/plugin-os';
const osVersion = await version();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [index.ts:87](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/os/guest-js/index.ts#L87)
