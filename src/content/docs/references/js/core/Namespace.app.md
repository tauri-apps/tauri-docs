---
title: 'app'
editUrl: false
prev: false
next: false
---

## Functions

### getName()

```ts
getName(): Promise< string >
```

Gets the application name.

#### Example

```typescript
import { getName } from '@tauri-apps/api/app';
const appName = await getName();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [app.ts:37](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/app.ts#L37)

---

### getTauriVersion()

```ts
getTauriVersion(): Promise< string >
```

Gets the Tauri version.

#### Example

```typescript
import { getTauriVersion } from '@tauri-apps/api/app';
const tauriVersion = await getTauriVersion();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [app.ts:52](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/app.ts#L52)

---

### getVersion()

```ts
getVersion(): Promise< string >
```

Gets the application version.

#### Example

```typescript
import { getVersion } from '@tauri-apps/api/app';
const appVersion = await getVersion();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [app.ts:23](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/app.ts#L23)

---

### hide()

```ts
hide(): Promise< void >
```

Hides the application on macOS.

#### Example

```typescript
import { hide } from '@tauri-apps/api/app';
await hide();
```

#### Since

1.2.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [app.ts:82](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/app.ts#L82)

---

### show()

```ts
show(): Promise< void >
```

Shows the application on macOS. This function does not automatically focus any specific app window.

#### Example

```typescript
import { show } from '@tauri-apps/api/app';
await show();
```

#### Since

1.2.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [app.ts:67](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/app.ts#L67)
