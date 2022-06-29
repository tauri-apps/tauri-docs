[@tauri-apps/api](../README.md) / globalShortcut

# Module: globalShortcut

Register global shortcuts.

This package is also accessible with `window.__TAURI__.globalShortcut` when `tauri.conf.json > build > withGlobalTauri` is set to true.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "globalShortcut": {
        "all": true // enable all global shortcut APIs
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Type Aliases

### ShortcutHandler

Ƭ **ShortcutHandler**: (`shortcut`: `string`) => `void`

#### Type declaration

▸ (`shortcut`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `shortcut` | `string` |

##### Returns

`void`

#### Defined in

[globalShortcut.ts:29](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/globalShortcut.ts#L29)

## Functions

### isRegistered

▸ **isRegistered**(`shortcut`): `Promise`<`boolean`\>

Determines whether the given shortcut is registered by this application or not.

**`example`**
```typescript
import { isRegistered } from '@tauri-apps/api/globalShortcut';
const isRegistered = await isRegistered('CommandOrControl+P');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shortcut` | `string` | Array of shortcut definitions, modifiers and key separated by "+" e.g. CmdOrControl+Q |

#### Returns

`Promise`<`boolean`\>

A promise resolving to the state.

#### Defined in

[globalShortcut.ts:98](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/globalShortcut.ts#L98)

___

### register

▸ **register**(`shortcut`, `handler`): `Promise`<`void`\>

Register a global shortcut.

**`example`**
```typescript
import { register } from '@tauri-apps/api/globalShortcut';
await register('CommandOrControl+Shift+C', () => {
  console.log('Shortcut triggered');
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shortcut` | `string` | Shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q |
| `handler` | [`ShortcutHandler`](globalShortcut.md#shortcuthandler) | Shortcut handler callback - takes the triggered shortcut as argument |

#### Returns

`Promise`<`void`\>

#### Defined in

[globalShortcut.ts:45](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/globalShortcut.ts#L45)

___

### registerAll

▸ **registerAll**(`shortcuts`, `handler`): `Promise`<`void`\>

Register a collection of global shortcuts.

**`example`**
```typescript
import { registerAll } from '@tauri-apps/api/globalShortcut';
await registerAll(['CommandOrControl+Shift+C', 'Ctrl+Alt+F12'], (shortcut) => {
  console.log(`Shortcut ${shortcut} triggered`);
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shortcuts` | `string`[] | Array of shortcut definitions, modifiers and key separated by "+" e.g. CmdOrControl+Q |
| `handler` | [`ShortcutHandler`](globalShortcut.md#shortcuthandler) | Shortcut handler callback - takes the triggered shortcut as argument |

#### Returns

`Promise`<`void`\>

#### Defined in

[globalShortcut.ts:73](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/globalShortcut.ts#L73)

___

### unregister

▸ **unregister**(`shortcut`): `Promise`<`void`\>

Unregister a global shortcut.

**`example`**
```typescript
import { unregister } from '@tauri-apps/api/globalShortcut';
await unregister('CmdOrControl+Space');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shortcut` | `string` | shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q |

#### Returns

`Promise`<`void`\>

#### Defined in

[globalShortcut.ts:119](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/globalShortcut.ts#L119)

___

### unregisterAll

▸ **unregisterAll**(): `Promise`<`void`\>

Unregisters all shortcuts registered by the application.

**`example`**
```typescript
import { unregisterAll } from '@tauri-apps/api/globalShortcut';
await unregisterAll();
```

#### Returns

`Promise`<`void`\>

#### Defined in

[globalShortcut.ts:139](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/globalShortcut.ts#L139)
