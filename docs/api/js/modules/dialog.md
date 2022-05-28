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

▸ **ask**(`message`, `options?`): `Promise`<`boolean`\>

Shows a question dialog with `Yes` and `No` buttons.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| `MessageDialogOptions` | The dialog's options. If a string, it represents the dialog title. |

#### Returns

`Promise`<`boolean`\>

A promise resolving to a boolean indicating whether `Yes` was clicked or not.

#### Defined in

[dialog.ts:170](https://github.com/tauri-apps/tauri/blob/2c040ea/tooling/api/src/dialog.ts#L170)

___

### confirm

▸ **confirm**(`message`, `options?`): `Promise`<`boolean`\>

Shows a question dialog with `Ok` and `Cancel` buttons.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| `MessageDialogOptions` | The dialog's options. If a string, it represents the dialog title. |

#### Returns

`Promise`<`boolean`\>

A promise resolving to a boolean indicating whether `Ok` was clicked or not.

#### Defined in

[dialog.ts:194](https://github.com/tauri-apps/tauri/blob/2c040ea/tooling/api/src/dialog.ts#L194)

___

### message

▸ **message**(`message`, `options?`): `Promise`<`void`\>

Shows a message dialog with an `Ok` button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| `MessageDialogOptions` | The dialog's options. If a string, it represents the dialog title. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[dialog.ts:146](https://github.com/tauri-apps/tauri/blob/2c040ea/tooling/api/src/dialog.ts#L146)

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

[dialog.ts:96](https://github.com/tauri-apps/tauri/blob/2c040ea/tooling/api/src/dialog.ts#L96)

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

[dialog.ts:124](https://github.com/tauri-apps/tauri/blob/2c040ea/tooling/api/src/dialog.ts#L124)
