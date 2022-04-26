[@tauri-apps/api](../README.md) / dialog

# Module: dialog

Native system dialogs for opening and saving files.

This package is also accessible with `window.__TAURI__.dialog` when `tauri.conf.json > build > withGlobalTauri` is set to true.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "dialog": {
        "all": true, // enable all dialog APIs
        "open": true, // enable file open API
        "save": true // enable file save API
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Interfaces

- [DialogFilter](../interfaces/dialog.DialogFilter.md)
- [OpenDialogOptions](../interfaces/dialog.OpenDialogOptions.md)
- [SaveDialogOptions](../interfaces/dialog.SaveDialogOptions.md)

## Functions

### ask

▸ **ask**(`message`, `title?`): `Promise`<`boolean`\>

Shows a question dialog with `Yes` and `No` buttons.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `title?` | `string` | The dialog's title. Defaults to the application name. |

#### Returns

`Promise`<`boolean`\>

A promise resolving to a boolean indicating whether `Yes` was clicked or not.

#### Defined in

[dialog.ts:156](https://github.com/tauri-apps/tauri/blob/feac1d1/tooling/api/src/dialog.ts#L156)

___

### confirm

▸ **confirm**(`message`, `title?`): `Promise`<`boolean`\>

Shows a question dialog with `Ok` and `Cancel` buttons.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `title?` | `string` | The dialog's title. Defaults to the application name. |

#### Returns

`Promise`<`boolean`\>

A promise resolving to a boolean indicating whether `Ok` was clicked or not.

#### Defined in

[dialog.ts:175](https://github.com/tauri-apps/tauri/blob/feac1d1/tooling/api/src/dialog.ts#L175)

___

### message

▸ **message**(`message`): `Promise`<`void`\>

Shows a message dialog with an `Ok` button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[dialog.ts:138](https://github.com/tauri-apps/tauri/blob/feac1d1/tooling/api/src/dialog.ts#L138)

___

### open

▸ **open**(`options?`): `Promise`<``null`` \| `string` \| `string`[]\>

Open a file/directory selection dialog.

The selected paths are added to the filesystem and asset protocol allowlist scopes.
When security is more important than the easy of use of this API,
prefer writing a dedicated command instead.

Note that the allowlist scope change is not persisted, so the values are cleared when the application is restarted.
You can save it to the filesystem using [tauri-plugin-persisted-scope](https://github.com/tauri-apps/tauri-plugin-persisted-scope).

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`OpenDialogOptions`](../interfaces/dialog.OpenDialogOptions.md) |

#### Returns

`Promise`<``null`` \| `string` \| `string`[]\>

A promise resolving to the selected path(s)

#### Defined in

[dialog.ts:89](https://github.com/tauri-apps/tauri/blob/feac1d1/tooling/api/src/dialog.ts#L89)

___

### save

▸ **save**(`options?`): `Promise`<`string`\>

Open a file/directory save dialog.

The selected path is added to the filesystem and asset protocol allowlist scopes.
When security is more important than the easy of use of this API,
prefer writing a dedicated command instead.

Note that the allowlist scope change is not persisted, so the values are cleared when the application is restarted.
You can save it to the filesystem using [tauri-plugin-persisted-scope](https://github.com/tauri-apps/tauri-plugin-persisted-scope).

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SaveDialogOptions`](../interfaces/dialog.SaveDialogOptions.md) |

#### Returns

`Promise`<`string`\>

A promise resolving to the selected path.

#### Defined in

[dialog.ts:117](https://github.com/tauri-apps/tauri/blob/feac1d1/tooling/api/src/dialog.ts#L117)
