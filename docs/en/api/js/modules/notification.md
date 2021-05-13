---
title: "Module: notification"
sidebar_label: "notification"
custom_edit_url: null
hide_title: true
---

# Module: notification

Send notifications to your user. Can also be used with the Notification Web API.

## Table of contents

### Interfaces

- [Options](../interfaces/notification.options.md)

## Type aliases

### Permission

Ƭ **Permission**: *granted* \| *denied* \| *default*

Possible permission values.

Defined in: [notification.ts:25](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/notification.ts#L25)

## Functions

### isPermissionGranted

▸ **isPermissionGranted**(): *Promise*<boolean \| *null*\>

Checks if the permission to send notifications is granted.

**Returns:** *Promise*<boolean \| *null*\>

Defined in: [notification.ts:32](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/notification.ts#L32)

___

### requestPermission

▸ **requestPermission**(): *Promise*<[*Permission*](notification.md#permission)\>

Requests the permission to send notifications.

**Returns:** *Promise*<[*Permission*](notification.md#permission)\>

A promise resolving to whether the user granted the permission or not.

Defined in: [notification.ts:49](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/notification.ts#L49)

___

### sendNotification

▸ **sendNotification**(`options`: [*Options*](../interfaces/notification.options.md) \| *string*): *void*

Sends a notification to the user.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options` | [*Options*](../interfaces/notification.options.md) \| *string* | Notification options.    |

**Returns:** *void*

Defined in: [notification.ts:58](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/notification.ts#L58)
