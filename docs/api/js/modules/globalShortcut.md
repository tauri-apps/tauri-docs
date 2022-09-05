[@tauri-apps/api](../README.md) / globalShortcut

# Module: globalShortcut

Register global shortcuts.

This package is also accessible with `window.__TAURI__.globalShortcut` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

The APIs must be added to [`tauri.allowlist.globalShortcut`](https://tauri.app/v1/api/config/#allowlistconfig.globalshortcut) in `tauri.conf.json`:
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

 **ShortcutHandler**: (`shortcut`: `string`) => `void`

#### Type declaration

(`shortcut`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `shortcut` | `string` |

##### Returns

`void`

#### Defined in

[globalShortcut.ts:29](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/globalShortcut.ts#L29)

## Functions

### isRegistered

**isRegistered**(`shortcut`): `Promise`<`boolean`\>

Determines whether the given shortcut is registered by this application or not.

**`Example`**

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

___

### register

**register**(`shortcut`, `handler`): `Promise`<`void`\>

Register a global shortcut.

**`Example`**

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

___

### registerAll

**registerAll**(`shortcuts`, `handler`): `Promise`<`void`\>

Register a collection of global shortcuts.

**`Example`**

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

___

### unregister

**unregister**(`shortcut`): `Promise`<`void`\>

Unregister a global shortcut.

**`Example`**

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

___

### unregisterAll

**unregisterAll**(): `Promise`<`void`\>

Unregisters all shortcuts registered by the application.

**`Example`**

```typescript
import { unregisterAll } from '@tauri-apps/api/globalShortcut';
await unregisterAll();
```

#### Returns

`Promise`<`void`\>
