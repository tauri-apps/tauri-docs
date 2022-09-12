# updater

Customize the auto updater flow.

This package is also accessible with `window.__TAURI__.updater` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Interfaces

### UpdateManifest

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="updater.UpdateManifest.body"><a href="#updater.UpdateManifest.body">`body`</a></div> | `string` | [updater.ts:24](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/updater.ts#L24) |
| <div class="anchor-with-padding" id="updater.UpdateManifest.date"><a href="#updater.UpdateManifest.date">`date`</a></div> | `string` | [updater.ts:23](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/updater.ts#L23) |
| <div class="anchor-with-padding" id="updater.UpdateManifest.version"><a href="#updater.UpdateManifest.version">`version`</a></div> | `string` | [updater.ts:22](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/updater.ts#L22) |

### UpdateResult

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="updater.UpdateResult.manifest"><a href="#updater.UpdateResult.manifest">`manifest?`</a></div> | [`UpdateManifest`](updater.md#updatemanifest) | [updater.ts:28](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/updater.ts#L28) |
| <div class="anchor-with-padding" id="updater.UpdateResult.shouldUpdate"><a href="#updater.UpdateResult.shouldUpdate">`shouldUpdate`</a></div> | `boolean` | [updater.ts:29](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/updater.ts#L29) |

### UpdateStatusResult

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="updater.UpdateStatusResult.error"><a href="#updater.UpdateStatusResult.error">`error?`</a></div> | `string` | [updater.ts:17](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/updater.ts#L17) |
| <div class="anchor-with-padding" id="updater.UpdateStatusResult.status"><a href="#updater.UpdateStatusResult.status">`status`</a></div> | [`UpdateStatus`](updater.md#updatestatus) | [updater.ts:18](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/updater.ts#L18) |

## Type Aliases

### UpdateStatus

 **UpdateStatus**: `"PENDING"` \| `"ERROR"` \| `"DONE"` \| `"UPTODATE"`

[updater.ts:14](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/updater.ts#L14)

## Functions

### checkUpdate

> **checkUpdate**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UpdateResult`](updater.md#updateresult)\>

Checks if an update is available.

**Example**

```typescript
import { checkUpdate } from '@tauri-apps/api/updater';
const update = await checkUpdate();
// now run installUpdate() if needed
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UpdateResult`](updater.md#updateresult)\>

Promise resolving to the update status.

### installUpdate

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

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### onUpdaterEvent

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

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | (`status`: [`UpdateStatusResult`](updater.md#updatestatusresult)) => `void` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
