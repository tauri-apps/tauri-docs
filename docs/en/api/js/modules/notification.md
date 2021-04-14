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

Defined in: [notification.ts:13](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/notification.ts#L13)

___

### Permission

Ƭ **Permission**: *granted* \| *denied* \| *default*

Defined in: [notification.ts:14](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/notification.ts#L14)

## Functions

### isPermissionGranted

▸ **isPermissionGranted**(): *Promise*<boolean \| *null*\>

Checks if the permission to send notifications is granted.

**Returns:** *Promise*<boolean \| *null*\>

Defined in: [notification.ts:21](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/notification.ts#L21)

___

### requestPermission

▸ **requestPermission**(): *Promise*<[*Permission*](notification.md#permission)\>

Requests the permission to send notifications.

**Returns:** *Promise*<[*Permission*](notification.md#permission)\>

A promise resolving to whether the user granted the permission or not.

Defined in: [notification.ts:38](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/notification.ts#L38)

___

### sendNotification

▸ **sendNotification**(`options`: [*Options*](../interfaces/notification.options.md) \| *string*): *void*

Sends a notification to the user.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options` | [*Options*](../interfaces/notification.options.md) \| *string* | Notification options   |

**Returns:** *void*

Defined in: [notification.ts:48](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/notification.ts#L48)
