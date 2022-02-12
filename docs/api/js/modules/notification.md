[@tauri-apps/api](../index.md) / notification

# Namespace: notification

Send toast notifications (brief auto-expiring OS window element) to your user.
Can also be used with the Notification Web API.

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

- [Options](../interfaces/notification.Options.md)

## Type aliases

### Permission

Ƭ **Permission**: ``"granted"`` \| ``"denied"`` \| ``"default"``

Possible permission values.

#### Defined in

[notification.ts:42](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/notification.ts#L42)

## Functions

### isPermissionGranted

▸ **isPermissionGranted**(): `Promise`<`boolean` \| ``null``\>

Checks if the permission to send notifications is granted.

#### Returns

`Promise`<`boolean` \| ``null``\>

#### Defined in

[notification.ts:49](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/notification.ts#L49)

___

### requestPermission

▸ **requestPermission**(): `Promise`<[`Permission`](notification.md#permission)\>

Requests the permission to send notifications.

#### Returns

`Promise`<[`Permission`](notification.md#permission)\>

A promise resolving to whether the user granted the permission or not.

#### Defined in

[notification.ts:66](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/notification.ts#L66)

___

### sendNotification

▸ **sendNotification**(`options`): `void`

Sends a notification to the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`Options`](../interfaces/notification.Options.md) | Notification options. |

#### Returns

`void`

#### Defined in

[notification.ts:75](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/notification.ts#L75)
