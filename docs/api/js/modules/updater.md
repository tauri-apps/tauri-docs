[@tauri-apps/api](../README.md) / updater

# Module: updater

Customize the auto updater flow.

This package is also accessible with `window.__TAURI__.updater` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Interfaces

- [UpdateManifest](../interfaces/updater.UpdateManifest.md)
- [UpdateResult](../interfaces/updater.UpdateResult.md)
- [UpdateStatusResult](../interfaces/updater.UpdateStatusResult.md)

## Type Aliases

### UpdateStatus

Ƭ **UpdateStatus**: ``"PENDING"`` \| ``"ERROR"`` \| ``"DONE"`` \| ``"UPTODATE"``

#### Defined in

[updater.ts:14](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/updater.ts#L14)

## Functions

### checkUpdate

▸ **checkUpdate**(): `Promise`<[`UpdateResult`](../interfaces/updater.UpdateResult.md)\>

Checks if an update is available.

**`example`**
```typescript
import { checkUpdate } from '@tauri-apps/api/updater';
const update = await checkUpdate();
// now run installUpdate() if needed
```

#### Returns

`Promise`<[`UpdateResult`](../interfaces/updater.UpdateResult.md)\>

Promise resolving to the update status.

#### Defined in

[updater.ts:104](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/updater.ts#L104)

___

### installUpdate

▸ **installUpdate**(): `Promise`<`void`\>

Install the update if there's one available.

**`example`**
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

#### Defined in

[updater.ts:46](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/updater.ts#L46)
