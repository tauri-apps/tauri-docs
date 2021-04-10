---
title: "Module: updater"
sidebar_label: "updater"
custom_edit_url: null
hide_title: true
---

# Module: updater

## Table of contents

### Interfaces

- [UpdateManifest](../interfaces/updater.updatemanifest.md)
- [UpdateResult](../interfaces/updater.updateresult.md)
- [UpdateStatusResult](../interfaces/updater.updatestatusresult.md)

## Type aliases

### UpdateStatus

Ƭ **UpdateStatus**: *PENDING* \| *ERROR* \| *DONE* \| *UPTODATE*

Defined in: [updater.ts:3](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/updater.ts#L3)

## Functions

### checkUpdate

▸ **checkUpdate**(): *Promise*<[*UpdateResult*](../interfaces/updater.updateresult.md)\>

**Returns:** *Promise*<[*UpdateResult*](../interfaces/updater.updateresult.md)\>

Defined in: [updater.ts:68](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/updater.ts#L68)

___

### installUpdate

▸ **installUpdate**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [updater.ts:21](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/updater.ts#L21)
