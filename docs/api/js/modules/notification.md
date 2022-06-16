[@tauri-apps/api](../README.md) / notification

# Module: notification

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

## Type Aliases

### Permission

Ƭ **Permission**: ``"granted"`` \| ``"denied"`` \| ``"default"``

Possible permission values.

#### Defined in

[notification.ts:42](https://github.com/tauri-apps/tauri/blob/13c2fc1/tooling/api/src/notification.ts#L42)

## Functions

### isPermissionGranted

▸ **isPermissionGranted**(): `Promise`<`boolean`\>

Checks if the permission to send notifications is granted.

**`example`**
```typescript
import { isPermissionGranted } from '@tauri-apps/api/notification';
const permissionGranted = await isPermissionGranted();
```

#### Returns

`Promise`<`boolean`\>

#### Defined in

[notification.ts:54](https://github.com/tauri-apps/tauri/blob/13c2fc1/tooling/api/src/notification.ts#L54)

___

### requestPermission

▸ **requestPermission**(): `Promise`<[`Permission`](notification.md#permission)\>

Requests the permission to send notifications.

**`example`**
```typescript
import { isPermissionGranted, requestPermission } from '@tauri-apps/api/notification';
let permissionGranted = await isPermissionGranted();
if (!permissionGranted) {
  const permission = await requestPermission();
  permissionGranted = permission === 'granted';
}
```

#### Returns

`Promise`<[`Permission`](notification.md#permission)\>

A promise resolving to whether the user granted the permission or not.

#### Defined in

[notification.ts:80](https://github.com/tauri-apps/tauri/blob/13c2fc1/tooling/api/src/notification.ts#L80)

___

### sendNotification

▸ **sendNotification**(`options`): `void`

Sends a notification to the user.

**`example`**
```typescript
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';
let permissionGranted = await isPermissionGranted();
if (!permissionGranted) {
  const permission = await requestPermission();
  permissionGranted = permission === 'granted';
}
if (permissionGranted) {
  sendNotification('Tauri is awesome!');
  sendNotification({ title: 'TAURI', body: 'Tauri is awesome!' });
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`Options`](../interfaces/notification.Options.md) | Notification options. |

#### Returns

`void`

#### Defined in

[notification.ts:102](https://github.com/tauri-apps/tauri/blob/13c2fc1/tooling/api/src/notification.ts#L102)
