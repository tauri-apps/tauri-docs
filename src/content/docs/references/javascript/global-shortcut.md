---
title: '@tauri-apps/plugin-global-shortcut'
editUrl: false
sidebar:
  label: 'global-shortcut'
---

Register global shortcuts.

## Type Aliases

### ShortcutHandler

```ts
ShortcutHandler: (shortcut) => void
```

#### Parameters

| Parameter  | Type     |
| :--------- | :------- |
| `shortcut` | `string` |

#### Returns

`void`

**Source**: [index.ts:13](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/global-shortcut/guest-js/index.ts#L13)

## Functions

### isRegistered()

```ts
isRegistered(shortcut): Promise< boolean >
```

Determines whether the given shortcut is registered by this application or not.

If the shortcut is registered by another application, it will still return `false`.

#### Example

```typescript
import { isRegistered } from '@tauri-apps/plugin-global-shortcut';
const isRegistered = await isRegistered('CommandOrControl+P');
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type     | Description                                                                 |
| :--------- | :------- | :-------------------------------------------------------------------------- |
| `shortcut` | `string` | shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

**Source**: [index.ts:86](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/global-shortcut/guest-js/index.ts#L86)

---

### register()

```ts
register(shortcut, handler): Promise< void >
```

Register a global shortcut.

#### Example

```typescript
import { register } from '@tauri-apps/plugin-global-shortcut';
await register('CommandOrControl+Shift+C', () => {
  console.log('Shortcut triggered');
});
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                         | Description                                                                 |
| :--------- | :--------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| `shortcut` | `string`                                                                     | Shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q |
| `handler`  | [`ShortcutHandler`](/references/javascript/global-shortcut/#shortcuthandler) | Shortcut handler callback - takes the triggered shortcut as argument        |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:30](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/global-shortcut/guest-js/index.ts#L30)

---

### registerAll()

```ts
registerAll(shortcuts, handler): Promise< void >
```

Register a collection of global shortcuts.

#### Example

```typescript
import { registerAll } from '@tauri-apps/plugin-global-shortcut';
await registerAll(['CommandOrControl+Shift+C', 'Ctrl+Alt+F12'], (shortcut) => {
  console.log(`Shortcut ${shortcut} triggered`);
});
```

#### Since

2.0.0

#### Parameters

| Parameter   | Type                                                                         | Description                                                                           |
| :---------- | :--------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| `shortcuts` | `string`[]                                                                   | Array of shortcut definitions, modifiers and key separated by "+" e.g. CmdOrControl+Q |
| `handler`   | [`ShortcutHandler`](/references/javascript/global-shortcut/#shortcuthandler) | Shortcut handler callback - takes the triggered shortcut as argument                  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:58](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/global-shortcut/guest-js/index.ts#L58)

---

### unregister()

```ts
unregister(shortcut): Promise< void >
```

Unregister a global shortcut.

#### Example

```typescript
import { unregister } from '@tauri-apps/plugin-global-shortcut';
await unregister('CmdOrControl+Space');
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type     | Description                                                                 |
| :--------- | :------- | :-------------------------------------------------------------------------- |
| `shortcut` | `string` | shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:104](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/global-shortcut/guest-js/index.ts#L104)

---

### unregisterAll()

```ts
unregisterAll(): Promise< void >
```

Unregisters all shortcuts registered by the application.

#### Example

```typescript
import { unregisterAll } from '@tauri-apps/plugin-global-shortcut';
await unregisterAll();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:120](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/global-shortcut/guest-js/index.ts#L120)
