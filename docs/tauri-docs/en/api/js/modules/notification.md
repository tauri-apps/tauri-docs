---
title: "Module: notification"
sidebar_label: "notification"
custom_edit_url: null
hide_title: true
---

# Module: notification

Send notifications to your user. Can also be used with the Notification Web API.

This package is also accessible with `window.__TAURI__.notification` when `tauri.conf.json > build > withGlobalTauri` is set to true.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "notification": {
        "all": true // enable all notification APIs
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Interfaces

- [Options](../interfaces/notification.options.md)

## Type aliases

### Permission

Ƭ **Permission**: ``"granted"`` \| ``"denied"`` \| ``"default"``

Possible permission values.

#### Defined in

[notification.ts:41](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/notification.ts#L41)

## Functions

### isPermissionGranted

▸ **isPermissionGranted**(): `Promise`<boolean \| ``null``\>

Checks if the permission to send notifications is granted.

#### Returns

`Promise`<boolean \| ``null``\>

#### Defined in

[notification.ts:48](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/notification.ts#L48)

___

### requestPermission

▸ **requestPermission**(): `Promise`<[Permission](notification.md#permission)\>

Requests the permission to send notifications.

#### Returns

`Promise`<[Permission](notification.md#permission)\>

A promise resolving to whether the user granted the permission or not.

#### Defined in

[notification.ts:65](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/notification.ts#L65)

___

### sendNotification

▸ **sendNotification**(`options`): `void`

Sends a notification to the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [Options](../interfaces/notification.options.md) \| `string` | Notification options. |

#### Returns

`void`

#### Defined in

[notification.ts:74](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/notification.ts#L74)
