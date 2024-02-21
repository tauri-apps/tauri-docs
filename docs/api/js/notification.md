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

**Since**: 1.0.0

#### Properties

##### `body`

> `Optional` **body**: `string`

Optional notification body.

**Defined in:** [notification.ts:38](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/notification.ts#L38)

##### `icon`

> `Optional` **icon**: `string`

Optional notification icon.

#### Platform-specific

- **Windows**: The app must be installed for this to have any effect.

**Defined in:** [notification.ts:47](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/notification.ts#L47)

##### `sound`

> `Optional` **sound**: `string`

Optional notification sound.

#### Platform-specific

Each OS has a different sound name so you will need to conditionally specify an appropriate sound
based on the OS in use, 'default' represents the default system sound. For a list of sounds see:
- **Linux**: can be one of the sounds listed in [https://0pointer.de/public/sound-naming-spec.html](https://0pointer.de/public/sound-naming-spec.html)
- **Windows**: can be one of the sounds listed in [https://learn.microsoft.com/en-us/uwp/schemas/tiles/toastschema/element-audio](https://learn.microsoft.com/en-us/uwp/schemas/tiles/toastschema/element-audio)
  but without the prefix, for example, if `ms-winsoundevent:Notification.Default` you would use `Default` and
  if `ms-winsoundevent:Notification.Looping.Alarm2`, you would use `Alarm2`.
  Windows 7 is not supported, if a sound is provided, it will play the default sound, otherwise it will be silent.
- **macOS**: you can specify the name of the sound you'd like to play when the notification is shown.
Any of the default sounds (under System Preferences > Sound) can be used, in addition to custom sound files.
Be sure that the sound file is copied under the app bundle (e.g., `YourApp.app/Contents/Resources`), or one of the following locations:
  - `~/Library/Sounds`
  - `/Library/Sounds`
  - `/Network/Library/Sounds`
  - `/System/Library/Sounds`

  See the [NSSound](https://developer.apple.com/documentation/appkit/nssound) docs for more information.

**Since**: 1.5.0

**Defined in:** [notification.ts:72](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/notification.ts#L72)

##### `title`

>  **title**: `string`

Notification title.

**Defined in:** [notification.ts:36](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/notification.ts#L36)

## Type Aliases

### `Permission`

>  **Permission**: `"granted"` \| `"denied"` \| `"default"`

Possible permission values.

**Defined in:** [notification.ts:76](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/notification.ts#L76)

## Functions

### `isPermissionGranted`

> **isPermissionGranted**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Checks if the permission to send notifications is granted.

**Example**

```typescript
import { isPermissionGranted } from '@tauri-apps/api/notification';
const permissionGranted = await isPermissionGranted();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

### `requestPermission`

> **requestPermission**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Permission`](notification.md#permission)\>

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

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Permission`](notification.md#permission)\>

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

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `options` | `string` \| [`Options`](notification.md#options) |

**Returns: **`void`
