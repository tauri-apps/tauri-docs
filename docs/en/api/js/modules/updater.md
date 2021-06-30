---
title: "Module: updater"
sidebar_label: "updater"
custom_edit_url: null
hide_title: true
---

# Module: updater

Customize the auto updater flow.

This package is also accessible with `window.__TAURI__.updater` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Interfaces

- [UpdateManifest](../interfaces/updater.updatemanifest.md)
- [UpdateResult](../interfaces/updater.updateresult.md)
- [UpdateStatusResult](../interfaces/updater.updatestatusresult.md)

## Type aliases

### UpdateStatus

Ƭ **UpdateStatus**: ``"PENDING"`` \| ``"ERROR"`` \| ``"DONE"`` \| ``"UPTODATE"``

#### Defined in

[updater.ts:14](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/updater.ts#L14)

## Functions

### checkUpdate

▸ **checkUpdate**(): `Promise`<[`UpdateResult`](../interfaces/updater.updateresult.md)\>

Checks if an update is available.

#### Returns

`Promise`<[`UpdateResult`](../interfaces/updater.updateresult.md)\>

Promise resolving to the update status.

#### Defined in

[updater.ts:89](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/updater.ts#L89)

___

### installUpdate

▸ **installUpdate**(): `Promise`<`void`\>

Install the update if there's one available.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[updater.ts:37](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/updater.ts#L37)
