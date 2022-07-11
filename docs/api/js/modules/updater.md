[@tauri-apps/api](../README.md) / updater

# Module: updater

Customize the auto updater flow.

This package is also accessible with `window.__TAURI__.updater` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Interfaces

- [UpdateManifest](../interfaces/updater.UpdateManifest.md)
- [UpdateResult](../interfaces/updater.UpdateResult.md)
- [UpdateStatusResult](../interfaces/updater.UpdateStatusResult.md)

## Type Aliases

### UpdateStatus

 **UpdateStatus**: ``"PENDING"`` \| ``"ERROR"`` \| ``"DONE"`` \| ``"UPTODATE"``

#### Defined in

[updater.ts:14](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/updater.ts#L14)

## Functions

### checkUpdate

**checkUpdate**(): `Promise`<[`UpdateResult`](../interfaces/updater.UpdateResult.md)\>

Checks if an update is available.

**`Example`**

```typescript
import { checkUpdate } from '@tauri-apps/api/updater';
const update = await checkUpdate();
// now run installUpdate() if needed
```

#### Returns

`Promise`<[`UpdateResult`](../interfaces/updater.UpdateResult.md)\>

Promise resolving to the update status.

___

### installUpdate

**installUpdate**(): `Promise`<`void`\>

Install the update if there's one available.

**`Example`**

```typescript
import { checkUpdate, installUpdate } from '@tauri-apps/api/updater';
const update = await checkUpdate();
if (update.shouldUpdate) {
  console.log(`Installing update ${update.manifest?.version}, ${update.manifest?.date}, ${update.manifest.body}`);
  await installUpdate();
}
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### onUpdaterEvent

**onUpdaterEvent**(`handler`): `Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an updater event.

**`Example`**

```typescript
import { onUpdaterEvent } from "@tauri-apps/api/updater";
const unlisten = await onUpdaterEvent(({ error, status }) => {
 console.log('Updater event', error, status);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`status`: [`UpdateStatusResult`](../interfaces/updater.UpdateStatusResult.md)) => `void` |

#### Returns

`Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
