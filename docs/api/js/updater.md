# updater

Customize the auto updater flow.

This package is also accessible with `window.__TAURI__.updater` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Interfaces

### `UpdateManifest`

**Since**: 1.0.0

#### Properties

##### `body`

>  **body**: `string`

**Defined in:** [updater.ts:34](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/updater.ts#L34)

##### `date`

>  **date**: `string`

**Defined in:** [updater.ts:33](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/updater.ts#L33)

##### `version`

>  **version**: `string`

**Defined in:** [updater.ts:32](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/updater.ts#L32)

### `UpdateResult`

**Since**: 1.0.0

#### Properties

##### `manifest`

> `Optional` **manifest**: [`UpdateManifest`](updater.md#updatemanifest)

**Defined in:** [updater.ts:41](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/updater.ts#L41)

##### `shouldUpdate`

>  **shouldUpdate**: `boolean`

**Defined in:** [updater.ts:42](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/updater.ts#L42)

### `UpdateStatusResult`

**Since**: 1.0.0

#### Properties

##### `error`

> `Optional` **error**: `string`

**Defined in:** [updater.ts:24](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/updater.ts#L24)

##### `status`

>  **status**: [`UpdateStatus`](updater.md#updatestatus)

**Defined in:** [updater.ts:25](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/updater.ts#L25)

## Type Aliases

### `UpdateStatus`

>  **UpdateStatus**: `"PENDING"` \| `"ERROR"` \| `"DONE"` \| `"UPTODATE"`

**Since**: 1.0.0

**Defined in:** [updater.ts:18](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/updater.ts#L18)

## Functions

### `checkUpdate`

> **checkUpdate**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UpdateResult`](updater.md#updateresult)\>

Checks if an update is available.

**Example**

```typescript
import { checkUpdate } from '@tauri-apps/api/updater';
const update = await checkUpdate();
// now run installUpdate() if needed
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UpdateResult`](updater.md#updateresult)\>

Promise resolving to the update status.

### `installUpdate`

> **installUpdate**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Install the update if there's one available.

**Example**

```typescript
import { checkUpdate, installUpdate } from '@tauri-apps/api/updater';
const update = await checkUpdate();
if (update.shouldUpdate) {
  console.log(`Installing update ${update.manifest?.version}, ${update.manifest?.date}, ${update.manifest.body}`);
  await installUpdate();
}
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `onUpdaterEvent`

> **onUpdaterEvent**(`handler`: `fn`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an updater event.

**Example**

```typescript
import { onUpdaterEvent } from "@tauri-apps/api/updater";
const unlisten = await onUpdaterEvent(({ error, status }) => {
 console.log('Updater event', error, status);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Since**: 1.0.2

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | (`status`: [`UpdateStatusResult`](updater.md#updatestatusresult)) => `void` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
