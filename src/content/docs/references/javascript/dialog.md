---
title: '@tauri-apps/plugin-dialog'
editUrl: false
sidebar:
  label: 'dialog'
---

## Interfaces

### ConfirmDialogOptions

#### Properties

| Property                                                   | Type                                 | Description                                        |
| :--------------------------------------------------------- | :----------------------------------- | :------------------------------------------------- |
| <a id="cancellabel" name="cancellabel"></a> `cancelLabel`? | `string`                             | The label of the cancel button.                    |
| <a id="oklabel" name="oklabel"></a> `okLabel`?             | `string`                             | The label of the confirm button.                   |
| <a id="title" name="title"></a> `title`?                   | `string`                             | The title of the dialog. Defaults to the app name. |
| <a id="type" name="type"></a> `type`?                      | `"info"` \| `"warning"` \| `"error"` | The type of the dialog. Defaults to `info`.        |

---

### DialogFilter

Extension filters for the file dialog.

#### Since

2.0.0

#### Properties

| Property                                               | Type       | Description                                                                                                            |
| :----------------------------------------------------- | :--------- | :--------------------------------------------------------------------------------------------------------------------- |
| <a id="extensions" name="extensions"></a> `extensions` | `string`[] | Extensions to filter, without a `.` prefix.<br /><br />**Example**<br /><br />`typescript extensions: ['svg', 'png'] ` |
| <a id="name" name="name"></a> `name`                   | `string`   | Filter name.                                                                                                           |

---

### FileResponse

#### Properties

| Property                                                | Type     |
| :------------------------------------------------------ | :------- |
| <a id="base64data" name="base64data"></a> `base64Data`? | `string` |
| <a id="duration" name="duration"></a> `duration`?       | `number` |
| <a id="height" name="height"></a> `height`?             | `number` |
| <a id="mimetype" name="mimetype"></a> `mimeType`?       | `string` |
| <a id="modifiedat" name="modifiedat"></a> `modifiedAt`? | `number` |
| <a id="name" name="name"></a> `name`?                   | `string` |
| <a id="path" name="path"></a> `path`                    | `string` |
| <a id="size" name="size"></a> `size`                    | `number` |
| <a id="width" name="width"></a> `width`?                | `number` |

---

### MessageDialogOptions

#### Since

2.0.0

#### Properties

| Property                                       | Type                                 | Description                                        |
| :--------------------------------------------- | :----------------------------------- | :------------------------------------------------- |
| <a id="oklabel" name="oklabel"></a> `okLabel`? | `string`                             | The label of the confirm button.                   |
| <a id="title" name="title"></a> `title`?       | `string`                             | The title of the dialog. Defaults to the app name. |
| <a id="type" name="type"></a> `type`?          | `"info"` \| `"warning"` \| `"error"` | The type of the dialog. Defaults to `info`.        |

---

### OpenDialogOptions

Options for the open dialog.

#### Since

2.0.0

#### Properties

| Property                                                   | Type                                                            | Description                                                                                                                                        |
| :--------------------------------------------------------- | :-------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="defaultpath" name="defaultpath"></a> `defaultPath`? | `string`                                                        | Initial directory or file path.                                                                                                                    |
| <a id="directory" name="directory"></a> `directory`?       | `boolean`                                                       | Whether the dialog is a directory selection or not.                                                                                                |
| <a id="filters" name="filters"></a> `filters`?             | [`DialogFilter`](/references/javascript/dialog/#dialogfilter)[] | The filters of the dialog.                                                                                                                         |
| <a id="multiple" name="multiple"></a> `multiple`?          | `boolean`                                                       | Whether the dialog allows multiple selection or not.                                                                                               |
| <a id="recursive" name="recursive"></a> `recursive`?       | `boolean`                                                       | If `directory` is true, indicates that it will be read recursively later.<br />Defines whether subdirectories will be allowed on the scope or not. |
| <a id="title" name="title"></a> `title`?                   | `string`                                                        | The title of the dialog window.                                                                                                                    |

---

### SaveDialogOptions

Options for the save dialog.

#### Since

2.0.0

#### Properties

| Property                                                   | Type                                                            | Description                                                                                                                                                                                                                                                        |
| :--------------------------------------------------------- | :-------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="defaultpath" name="defaultpath"></a> `defaultPath`? | `string`                                                        | Initial directory or file path.<br />If it's a directory path, the dialog interface will change to that folder.<br />If it's not an existing directory, the file name will be set to the dialog's file name input and the dialog will be set to the parent folder. |
| <a id="filters" name="filters"></a> `filters`?             | [`DialogFilter`](/references/javascript/dialog/#dialogfilter)[] | The filters of the dialog.                                                                                                                                                                                                                                         |
| <a id="title" name="title"></a> `title`?                   | `string`                                                        | The title of the dialog window.                                                                                                                                                                                                                                    |

## Type Aliases

### OpenDialogReturn

```ts
OpenDialogReturn: <T> T["directory"] extends true ? T["multiple"] extends true ? string[] | null : string | null : T["multiple"] extends true ? FileResponse[] | null : FileResponse | null
```

#### Type parameters

| Parameter                                                                             |
| :------------------------------------------------------------------------------------ |
| `T` _extends_ [`OpenDialogOptions`](/references/javascript/dialog/#opendialogoptions) |

**Source**: [index.ts:101](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/dialog/guest-js/index.ts#L101)

## Functions

### ask()

```ts
ask(message, options?): Promise< boolean >
```

Shows a question dialog with `Yes` and `No` buttons.

#### Example

```typescript
import { ask } from '@tauri-apps/plugin-dialog';
const yes = await ask('Are you sure?', 'Tauri');
const yes2 = await ask('This action cannot be reverted. Are you sure?', {
  title: 'Tauri',
  type: 'warning',
});
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                                      | Description                                                        |
| :--------- | :---------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| `message`  | `string`                                                                                  | The message to show.                                               |
| `options`? | `string` \| [`ConfirmDialogOptions`](/references/javascript/dialog/#confirmdialogoptions) | The dialog's options. If a string, it represents the dialog title. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

A promise resolving to a boolean indicating whether `Yes` was clicked or not.

**Source**: [index.ts:249](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/dialog/guest-js/index.ts#L249)

---

### confirm()

```ts
confirm(message, options?): Promise< boolean >
```

Shows a question dialog with `Ok` and `Cancel` buttons.

#### Example

```typescript
import { confirm } from '@tauri-apps/plugin-dialog';
const confirmed = await confirm('Are you sure?', 'Tauri');
const confirmed2 = await confirm(
  'This action cannot be reverted. Are you sure?',
  {
    title: 'Tauri',
    type: 'warning',
  }
);
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                                      | Description                                                        |
| :--------- | :---------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| `message`  | `string`                                                                                  | The message to show.                                               |
| `options`? | `string` \| [`ConfirmDialogOptions`](/references/javascript/dialog/#confirmdialogoptions) | The dialog's options. If a string, it represents the dialog title. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

A promise resolving to a boolean indicating whether `Ok` was clicked or not.

**Source**: [index.ts:279](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/dialog/guest-js/index.ts#L279)

---

### message()

```ts
message(message, options?): Promise< void >
```

Shows a message dialog with an `Ok` button.

#### Example

```typescript
import { message } from '@tauri-apps/plugin-dialog';
await message('Tauri is awesome', 'Tauri');
await message('File not found', { title: 'Tauri', type: 'error' });
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                                      | Description                                                        |
| :--------- | :---------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| `message`  | `string`                                                                                  | The message to show.                                               |
| `options`? | `string` \| [`MessageDialogOptions`](/references/javascript/dialog/#messagedialogoptions) | The dialog's options. If a string, it represents the dialog title. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:220](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/dialog/guest-js/index.ts#L220)

---

### open()

```ts
open<T>(options = ...): Promise< OpenDialogReturn< T > >
```

Open a file/directory selection dialog.

The selected paths are added to the filesystem and asset protocol scopes.
When security is more important than the easy of use of this API,
prefer writing a dedicated command instead.

Note that the scope change is not persisted, so the values are cleared when the application is restarted.
You can save it to the filesystem using [tauri-plugin-persisted-scope](https://github.com/tauri-apps/tauri-plugin-persisted-scope).

#### Example

```typescript
import { open } from '@tauri-apps/plugin-dialog';
// Open a selection dialog for image files
const selected = await open({
  multiple: true,
  filters: [
    {
      name: 'Image',
      extensions: ['png', 'jpeg'],
    },
  ],
});
if (Array.isArray(selected)) {
  // user selected multiple files
} else if (selected === null) {
  // user cancelled the selection
} else {
  // user selected a single file
}
```

#### Example

```typescript
import { open } from '@tauri-apps/plugin-dialog';
import { appDir } from '@tauri-apps/api/path';
// Open a selection dialog for directories
const selected = await open({
  directory: true,
  multiple: true,
  defaultPath: await appDir(),
});
if (Array.isArray(selected)) {
  // user selected multiple directories
} else if (selected === null) {
  // user cancelled the selection
} else {
  // user selected a single directory
}
```

#### Since

2.0.0

#### Type parameters

| Parameter                                                                             |
| :------------------------------------------------------------------------------------ |
| `T` _extends_ [`OpenDialogOptions`](/references/javascript/dialog/#opendialogoptions) |

#### Parameters

| Parameter | Type |
| :-------- | :--- |
| `options` | `T`  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`OpenDialogReturn`](/references/javascript/dialog/#opendialogreturn)\< `T` \> \>

A promise resolving to the selected path(s)

**Source**: [index.ts:161](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/dialog/guest-js/index.ts#L161)

---

### save()

```ts
save(options = {}): Promise< string | null >
```

Open a file/directory save dialog.

The selected path is added to the filesystem and asset protocol scopes.
When security is more important than the easy of use of this API,
prefer writing a dedicated command instead.

Note that the scope change is not persisted, so the values are cleared when the application is restarted.
You can save it to the filesystem using [tauri-plugin-persisted-scope](https://github.com/tauri-apps/tauri-plugin-persisted-scope).

#### Example

```typescript
import { save } from '@tauri-apps/plugin-dialog';
const filePath = await save({
  filters: [
    {
      name: 'Image',
      extensions: ['png', 'jpeg'],
    },
  ],
});
```

#### Since

2.0.0

#### Parameters

| Parameter | Type                                                                    |
| :-------- | :---------------------------------------------------------------------- |
| `options` | [`SaveDialogOptions`](/references/javascript/dialog/#savedialogoptions) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \| `null` \>

A promise resolving to the selected path.

**Source**: [index.ts:195](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/dialog/guest-js/index.ts#L195)
