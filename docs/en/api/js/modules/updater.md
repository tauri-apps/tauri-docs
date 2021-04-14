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

Defined in: [updater.ts:7](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/updater.ts#L7)

## Functions

### checkUpdate

▸ **checkUpdate**(): *Promise*<[*UpdateResult*](../interfaces/updater.updateresult.md)\>

**Returns:** *Promise*<[*UpdateResult*](../interfaces/updater.updateresult.md)\>

Defined in: [updater.ts:72](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/updater.ts#L72)

___

### installUpdate

▸ **installUpdate**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [updater.ts:25](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/updater.ts#L25)
