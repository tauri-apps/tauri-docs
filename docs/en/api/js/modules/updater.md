---
title: "Module: updater"
sidebar_label: "updater"
custom_edit_url: null
hide_title: true
---

# Module: updater

Customize the auto updater flow.

## Table of contents

### Interfaces

- [UpdateManifest](../interfaces/updater.updatemanifest.md)
- [UpdateResult](../interfaces/updater.updateresult.md)
- [UpdateStatusResult](../interfaces/updater.updatestatusresult.md)

## Type aliases

### UpdateStatus

Ƭ **UpdateStatus**: *PENDING* \| *ERROR* \| *DONE* \| *UPTODATE*

Defined in: [updater.ts:12](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/updater.ts#L12)

## Functions

### checkUpdate

▸ **checkUpdate**(): *Promise*<[*UpdateResult*](../interfaces/updater.updateresult.md)\>

Checks if an update is available.

**Returns:** *Promise*<[*UpdateResult*](../interfaces/updater.updateresult.md)\>

Promise resolving to the update status.

Defined in: [updater.ts:87](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/updater.ts#L87)

___

### installUpdate

▸ **installUpdate**(): *Promise*<void\>

Install the update if there's one available.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [updater.ts:35](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/updater.ts#L35)
