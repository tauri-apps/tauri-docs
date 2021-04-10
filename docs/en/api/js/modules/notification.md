---
title: "Module: notification"
sidebar_label: "notification"
custom_edit_url: null
hide_title: true
---

# Module: notification

## Table of contents

### Interfaces

- [Options](../interfaces/notification.options.md)

## Type aliases

### PartialOptions

Ƭ **PartialOptions**: *Omit*<[*Options*](../interfaces/notification.options.md), *title*\>

Defined in: [notification.ts:9](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/notification.ts#L9)

___

### Permission

Ƭ **Permission**: *granted* \| *denied* \| *default*

Defined in: [notification.ts:10](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/notification.ts#L10)

## Functions

### isPermissionGranted

▸ **isPermissionGranted**(): *Promise*<boolean \| *null*\>

**Returns:** *Promise*<boolean \| *null*\>

Defined in: [notification.ts:12](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/notification.ts#L12)

___

### requestPermission

▸ **requestPermission**(): *Promise*<[*Permission*](notification.md#permission)\>

**Returns:** *Promise*<[*Permission*](notification.md#permission)\>

Defined in: [notification.ts:24](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/notification.ts#L24)

___

### sendNotification

▸ **sendNotification**(`options`: [*Options*](../interfaces/notification.options.md) \| *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*Options*](../interfaces/notification.options.md) \| *string* |

**Returns:** *void*

Defined in: [notification.ts:28](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/notification.ts#L28)
