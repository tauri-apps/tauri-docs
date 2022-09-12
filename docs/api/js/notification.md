# notification

Send toast notifications (brief auto-expiring OS window element) to your user.
Can also be used with the Notification Web API.

This package is also accessible with `window.__TAURI__.notification` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

The APIs must be added to [`tauri.allowlist.notification`](https://tauri.app/v1/api/config/#allowlistconfig.notification) in `tauri.conf.json`:
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

### `Options`

Options to send a notification.

#### Properties

| Name | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="notification.Options.body"><a href="#notification.Options.body">`body?`</a></div> | `string` | Optional notification body. | [notification.ts:36](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/notification.ts#L36) |
| <div class="anchor-with-padding" id="notification.Options.icon"><a href="#notification.Options.icon">`icon?`</a></div> | `string` | Optional notification icon. | [notification.ts:38](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/notification.ts#L38) |
| <div class="anchor-with-padding" id="notification.Options.title"><a href="#notification.Options.title">`title`</a></div> | `string` | Notification title. | [notification.ts:34](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/notification.ts#L34) |

## Type Aliases

### `Permission`

 **Permission**: `"granted"` \| `"denied"` \| `"default"`

Possible permission values.

[notification.ts:42](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/notification.ts#L42)

## Functions

### `isPermissionGranted`

> **isPermissionGranted**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Checks if the permission to send notifications is granted.

**Example**

```typescript
import { isPermissionGranted } from '@tauri-apps/api/notification';
const permissionGranted = await isPermissionGranted();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

### `requestPermission`

> **requestPermission**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Permission`](notification.md#permission)\>

Requests the permission to send notifications.

**Example**

```typescript
import { isPermissionGranted, requestPermission } from '@tauri-apps/api/notification';
let permissionGranted = await isPermissionGranted();
if (!permissionGranted) {
  const permission = await requestPermission();
  permissionGranted = permission === 'granted';
}
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Permission`](notification.md#permission)\>

A promise resolving to whether the user granted the permission or not.

### `sendNotification`

> **sendNotification**(`options`: `string` \| [`Options`](notification.md#options)): `void`

Sends a notification to the user.

**Example**

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

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`Options`](notification.md#options) | Notification options. |

**Returns: **`void`
