---
title: '@tauri-apps/plugin-notification'
editUrl: false
sidebar:
  label: 'notification'
---

Send toast notifications (brief auto-expiring OS window element) to your user.
Can also be used with the Notification Web API.

## Enumerations

### Importance

#### Enumeration Members

##### Default

```ts
Default: 3;
```

**Source**: [index.ts:283](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L283)

---

##### High

```ts
High: 4;
```

**Source**: [index.ts:284](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L284)

---

##### Low

```ts
Low: 2;
```

**Source**: [index.ts:282](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L282)

---

##### Min

```ts
Min: 1;
```

**Source**: [index.ts:281](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L281)

---

##### None

```ts
None: 0;
```

**Source**: [index.ts:280](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L280)

---

### ScheduleEvery

#### Enumeration Members

##### Day

```ts
Day: 'day';
```

**Source**: [index.ts:157](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L157)

---

##### Hour

```ts
Hour: 'hour';
```

**Source**: [index.ts:158](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L158)

---

##### Minute

```ts
Minute: 'minute';
```

**Source**: [index.ts:159](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L159)

---

##### Month

```ts
Month: 'month';
```

**Source**: [index.ts:154](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L154)

---

##### Second

```ts
Second: 'second';
```

Not supported on iOS.

**Source**: [index.ts:163](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L163)

---

##### TwoWeeks

```ts
TwoWeeks: 'twoWeeks';
```

**Source**: [index.ts:155](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L155)

---

##### Week

```ts
Week: 'week';
```

**Source**: [index.ts:156](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L156)

---

##### Year

```ts
Year: 'year';
```

**Source**: [index.ts:153](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L153)

---

### Visibility

#### Enumeration Members

##### Private

```ts
Private: 0;
```

**Source**: [index.ts:289](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L289)

---

##### Public

```ts
Public: 1;
```

**Source**: [index.ts:290](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L290)

---

##### Secret

```ts
Secret: -1;
```

**Source**: [index.ts:288](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L288)

## Classes

### Schedule

#### Constructors

##### constructor()

```ts
new Schedule(): Schedule
```

###### Returns

[`Schedule`](/references/javascript/notification/#schedule)

#### Properties

| Property                                         | Type                                                                                                                                                                      |
| :----------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <a id="at" name="at"></a> `at`                   | `undefined` \| \{`allowWhileIdle`: `boolean`; `date`: [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date); `repeating`: `boolean`;} |
| <a id="every" name="every"></a> `every`          | `undefined` \| \{`allowWhileIdle`: `boolean`; `count`: `number`; `interval`: [`ScheduleEvery`](/references/javascript/notification/#scheduleevery);}                      |
| <a id="interval" name="interval"></a> `interval` | `undefined` \| \{`allowWhileIdle`: `boolean`; `interval`: [`ScheduleInterval`](/references/javascript/notification/#scheduleinterval);}                                   |

#### Methods

##### at()

```ts
static at(
  date,
  repeating = false,
  allowWhileIdle = false): Schedule
```

###### Parameters

| Parameter        | Type                                                                                      | Default value |
| :--------------- | :---------------------------------------------------------------------------------------- | :------------ |
| `date`           | [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) | `undefined`   |
| `repeating`      | `boolean`                                                                                 | `false`       |
| `allowWhileIdle` | `boolean`                                                                                 | `false`       |

###### Returns

[`Schedule`](/references/javascript/notification/#schedule)

**Source**: [index.ts:188](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L188)

---

##### every()

```ts
static every(
  kind,
  count,
  allowWhileIdle = false): Schedule
```

###### Parameters

| Parameter        | Type                                                                  | Default value |
| :--------------- | :-------------------------------------------------------------------- | :------------ |
| `kind`           | [`ScheduleEvery`](/references/javascript/notification/#scheduleevery) | `undefined`   |
| `count`          | `number`                                                              | `undefined`   |
| `allowWhileIdle` | `boolean`                                                             | `false`       |

###### Returns

[`Schedule`](/references/javascript/notification/#schedule)

**Source**: [index.ts:207](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L207)

---

##### interval()

```ts
static interval(interval, allowWhileIdle = false): Schedule
```

###### Parameters

| Parameter        | Type                                                                        | Default value |
| :--------------- | :-------------------------------------------------------------------------- | :------------ |
| `interval`       | [`ScheduleInterval`](/references/javascript/notification/#scheduleinterval) | `undefined`   |
| `allowWhileIdle` | `boolean`                                                                   | `false`       |

###### Returns

[`Schedule`](/references/javascript/notification/#schedule)

**Source**: [index.ts:196](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L196)

## Interfaces

### Action

#### Properties

| Property                                                                                    | Type      |
| :------------------------------------------------------------------------------------------ | :-------- |
| <a id="destructive" name="destructive"></a> `destructive`?                                  | `boolean` |
| <a id="foreground" name="foreground"></a> `foreground`?                                     | `boolean` |
| <a id="id" name="id"></a> `id`                                                              | `string`  |
| <a id="input" name="input"></a> `input`?                                                    | `boolean` |
| <a id="inputbuttontitle" name="inputbuttontitle"></a> `inputButtonTitle`?                   | `string`  |
| <a id="inputplaceholder" name="inputplaceholder"></a> `inputPlaceholder`?                   | `string`  |
| <a id="requiresauthentication" name="requiresauthentication"></a> `requiresAuthentication`? | `boolean` |
| <a id="title" name="title"></a> `title`                                                     | `string`  |

---

### ActionType

#### Properties

| Property                                                                                                         | Type                                                      | Description                        |
| :--------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- | :--------------------------------- |
| <a id="actions" name="actions"></a> `actions`                                                                    | [`Action`](/references/javascript/notification/#action)[] | The list of associated actions     |
| <a id="allowincarplay" name="allowincarplay"></a> `allowInCarPlay`?                                              | `boolean`                                                 | -                                  |
| <a id="customdismissaction" name="customdismissaction"></a> `customDismissAction`?                               | `boolean`                                                 | -                                  |
| <a id="hiddenpreviewsbodyplaceholder" name="hiddenpreviewsbodyplaceholder"></a> `hiddenPreviewsBodyPlaceholder`? | `string`                                                  | -                                  |
| <a id="hiddenpreviewsshowsubtitle" name="hiddenpreviewsshowsubtitle"></a> `hiddenPreviewsShowSubtitle`?          | `boolean`                                                 | -                                  |
| <a id="hiddenpreviewsshowtitle" name="hiddenpreviewsshowtitle"></a> `hiddenPreviewsShowTitle`?                   | `boolean`                                                 | -                                  |
| <a id="id" name="id"></a> `id`                                                                                   | `string`                                                  | The identifier of this action type |

---

### ActiveNotification

#### Properties

| Property                                                      | Type                                                                                                                 |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| <a id="actiontypeid" name="actiontypeid"></a> `actionTypeId`? | `string`                                                                                                             |
| <a id="attachments" name="attachments"></a> `attachments`     | [`Attachment`](/references/javascript/notification/#attachment)[]                                                    |
| <a id="body" name="body"></a> `body`?                         | `string`                                                                                                             |
| <a id="data" name="data"></a> `data`                          | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, `string` \>  |
| <a id="extra" name="extra"></a> `extra`                       | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, `unknown` \> |
| <a id="group" name="group"></a> `group`?                      | `string`                                                                                                             |
| <a id="groupsummary" name="groupsummary"></a> `groupSummary`  | `boolean`                                                                                                            |
| <a id="id" name="id"></a> `id`                                | `number`                                                                                                             |
| <a id="schedule" name="schedule"></a> `schedule`?             | [`Schedule`](/references/javascript/notification/#schedule)                                                          |
| <a id="sound" name="sound"></a> `sound`?                      | `string`                                                                                                             |
| <a id="tag" name="tag"></a> `tag`?                            | `string`                                                                                                             |
| <a id="title" name="title"></a> `title`?                      | `string`                                                                                                             |

---

### Attachment

Attachment of a notification.

#### Properties

| Property                          | Type     | Description                                               |
| :-------------------------------- | :------- | :-------------------------------------------------------- |
| <a id="id" name="id"></a> `id`    | `string` | Attachment identifier.                                    |
| <a id="url" name="url"></a> `url` | `string` | Attachment URL. Accepts the `asset` and `file` protocols. |

---

### Channel

#### Properties

| Property                                                   | Type                                                            |
| :--------------------------------------------------------- | :-------------------------------------------------------------- |
| <a id="description" name="description"></a> `description`? | `string`                                                        |
| <a id="id" name="id"></a> `id`                             | `string`                                                        |
| <a id="importance" name="importance"></a> `importance`?    | [`Importance`](/references/javascript/notification/#importance) |
| <a id="lightcolor" name="lightcolor"></a> `lightColor`?    | `string`                                                        |
| <a id="lights" name="lights"></a> `lights`?                | `boolean`                                                       |
| <a id="name" name="name"></a> `name`                       | `string`                                                        |
| <a id="sound" name="sound"></a> `sound`?                   | `string`                                                        |
| <a id="vibration" name="vibration"></a> `vibration`?       | `boolean`                                                       |
| <a id="visibility" name="visibility"></a> `visibility`?    | [`Visibility`](/references/javascript/notification/#visibility) |

---

### Options

Options to send a notification.

#### Since

2.0.0

#### Properties

| Property                                                      | Type                                                              | Description                                                                                                                                                                                                                                                                                                     |
| :------------------------------------------------------------ | :---------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="actiontypeid" name="actiontypeid"></a> `actionTypeId`? | `string`                                                          | Defines an action type for this notification.                                                                                                                                                                                                                                                                   |
| <a id="attachments" name="attachments"></a> `attachments`?    | [`Attachment`](/references/javascript/notification/#attachment)[] | Notification attachments.                                                                                                                                                                                                                                                                                       |
| <a id="autocancel" name="autocancel"></a> `autoCancel`?       | `boolean`                                                         | Automatically cancel the notification when the user clicks on it.                                                                                                                                                                                                                                               |
| <a id="body" name="body"></a> `body`?                         | `string`                                                          | Optional notification body.                                                                                                                                                                                                                                                                                     |
| <a id="channelid" name="channelid"></a> `channelId`?          | `string`                                                          | Identifier of the [Channel](/references/javascript/notification/#channel) that deliveres this notification.<br /><br />If the channel does not exist, the notification won't fire.<br />Make sure the channel exists with listChannels and [createChannel](/references/javascript/notification/#createchannel). |
| <a id="extra" name="extra"></a> `extra`?                      | `object`                                                          | Extra payload to store in the notification.                                                                                                                                                                                                                                                                     |
| <a id="group" name="group"></a> `group`?                      | `string`                                                          | Identifier used to group multiple notifications.<br /><br />https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/1649872-threadidentifier                                                                                                                                   |
| <a id="groupsummary" name="groupsummary"></a> `groupSummary`? | `boolean`                                                         | Instructs the system that this notification is the summary of a group on Android.                                                                                                                                                                                                                               |
| <a id="icon" name="icon"></a> `icon`?                         | `string`                                                          | Notification icon.<br /><br />On Android the icon must be placed in the app's `res/drawable` folder.                                                                                                                                                                                                            |
| <a id="iconcolor" name="iconcolor"></a> `iconColor`?          | `string`                                                          | Icon color on Android.                                                                                                                                                                                                                                                                                          |
| <a id="id" name="id"></a> `id`?                               | `number`                                                          | The notification identifier to reference this object later. Must be a 32-bit integer.                                                                                                                                                                                                                           |
| <a id="inboxlines" name="inboxlines"></a> `inboxLines`?       | `string`[]                                                        | List of lines to add to the notification.<br />Changes the notification style to inbox.<br />Cannot be used with `largeBody`.<br /><br />Only supports up to 5 lines.                                                                                                                                           |
| <a id="largebody" name="largebody"></a> `largeBody`?          | `string`                                                          | Multiline text.<br />Changes the notification style to big text.<br />Cannot be used with `inboxLines`.                                                                                                                                                                                                         |
| <a id="largeicon" name="largeicon"></a> `largeIcon`?          | `string`                                                          | Notification large icon (Android).<br /><br />The icon must be placed in the app's `res/drawable` folder.                                                                                                                                                                                                       |
| <a id="number" name="number"></a> `number`?                   | `number`                                                          | Sets the number of items this notification represents on Android.                                                                                                                                                                                                                                               |
| <a id="ongoing" name="ongoing"></a> `ongoing`?                | `boolean`                                                         | If true, the notification cannot be dismissed by the user on Android.<br /><br />An application service must manage the dismissal of the notification.<br />It is typically used to indicate a background task that is pending (e.g. a file download)<br />or the user is engaged with (e.g. playing music).    |
| <a id="schedule" name="schedule"></a> `schedule`?             | [`Schedule`](/references/javascript/notification/#schedule)       | Schedule this notification to fire on a later time or a fixed interval.                                                                                                                                                                                                                                         |
| <a id="silent" name="silent"></a> `silent`?                   | `boolean`                                                         | Changes the notification presentation to be silent on iOS (no badge, no sound, not listed).                                                                                                                                                                                                                     |
| <a id="sound" name="sound"></a> `sound`?                      | `string`                                                          | The sound resource name. Only available on mobile.                                                                                                                                                                                                                                                              |
| <a id="summary" name="summary"></a> `summary`?                | `string`                                                          | Detail text for the notification with `largeBody`, `inboxLines` or `groupSummary`.                                                                                                                                                                                                                              |
| <a id="title" name="title"></a> `title`                       | `string`                                                          | Notification title.                                                                                                                                                                                                                                                                                             |
| <a id="visibility" name="visibility"></a> `visibility`?       | [`Visibility`](/references/javascript/notification/#visibility)   | Notification visibility.                                                                                                                                                                                                                                                                                        |

---

### PendingNotification

#### Properties

| Property                                         | Type                                                        |
| :----------------------------------------------- | :---------------------------------------------------------- |
| <a id="body" name="body"></a> `body`?            | `string`                                                    |
| <a id="id" name="id"></a> `id`                   | `number`                                                    |
| <a id="schedule" name="schedule"></a> `schedule` | [`Schedule`](/references/javascript/notification/#schedule) |
| <a id="title" name="title"></a> `title`?         | `string`                                                    |

## Type Aliases

### Permission

```ts
Permission: 'granted' | 'denied' | 'default';
```

Possible permission values.

**Source**: [index.ts:306](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L306)

---

### ScheduleInterval

```ts
ScheduleInterval: object;
```

#### Type declaration

| Member                                         | Type     | Description                                                                                                        |
| :--------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------- |
| <a id="day" name="day"></a> `day`?             | `number` | -                                                                                                                  |
| <a id="hour" name="hour"></a> `hour`?          | `number` | -                                                                                                                  |
| <a id="minute" name="minute"></a> `minute`?    | `number` | -                                                                                                                  |
| <a id="month" name="month"></a> `month`?       | `number` | -                                                                                                                  |
| <a id="second" name="second"></a> `second`?    | `number` | -                                                                                                                  |
| <a id="weekday" name="weekday"></a> `weekday`? | `number` | 1 - Sunday<br />2 - Monday<br />3 - Tuesday<br />4 - Wednesday<br />5 - Thursday<br />6 - Friday<br />7 - Saturday |
| <a id="year" name="year"></a> `year`?          | `number` | -                                                                                                                  |

**Source**: [index.ts:133](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L133)

## Functions

### active()

```ts
active(): Promise< ActiveNotification[] >
```

Retrieves the list of active notifications.

#### Example

```typescript
import { active } from '@tauri-apps/plugin-notification';
const activeNotifications = await active();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`ActiveNotification`](/references/javascript/notification/#activenotification)[] \>

A promise resolving to the list of active notifications.

**Source**: [index.ts:460](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L460)

---

### cancel()

```ts
cancel(notifications): Promise< void >
```

Cancels the pending notifications with the given list of identifiers.

#### Example

```typescript
import { cancel } from '@tauri-apps/plugin-notification';
await cancel([-34234, 23432, 4311]);
```

#### Since

2.0.0

#### Parameters

| Parameter       | Type       |
| :-------------- | :--------- |
| `notifications` | `number`[] |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:426](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L426)

---

### cancelAll()

```ts
cancelAll(): Promise< void >
```

Cancels all pending notifications.

#### Example

```typescript
import { cancelAll } from '@tauri-apps/plugin-notification';
await cancelAll();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:443](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L443)

---

### channels()

```ts
channels(): Promise< Channel[] >
```

Retrieves the list of notification channels.

#### Example

```typescript
import { channels } from '@tauri-apps/plugin-notification';
const notificationChannels = await channels();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Channel`](/references/javascript/notification/#channel)[] \>

A promise resolving to the list of notification channels.

**Source**: [index.ts:554](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L554)

---

### createChannel()

```ts
createChannel(channel): Promise< void >
```

Creates a notification channel.

#### Example

```typescript
import {
  createChannel,
  Importance,
  Visibility,
} from '@tauri-apps/plugin-notification';
await createChannel({
  id: 'new-messages',
  name: 'New Messages',
  lights: true,
  vibration: true,
  importance: Importance.Default,
  visibility: Visibility.Private,
});
```

#### Since

2.0.0

#### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `channel` | [`Channel`](/references/javascript/notification/#channel) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:520](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L520)

---

### isPermissionGranted()

```ts
isPermissionGranted(): Promise< boolean >
```

Checks if the permission to send notifications is granted.

#### Example

```typescript
import { isPermissionGranted } from '@tauri-apps/plugin-notification';
const permissionGranted = await isPermissionGranted();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

**Source**: [index.ts:318](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L318)

---

### onAction()

```ts
onAction(cb): Promise< PluginListener >
```

#### Parameters

| Parameter | Type                       |
| :-------- | :------------------------- |
| `cb`      | (`notification`) => `void` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `PluginListener` \>

**Source**: [index.ts:564](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L564)

---

### onNotificationReceived()

```ts
onNotificationReceived(cb): Promise< PluginListener >
```

#### Parameters

| Parameter | Type                       |
| :-------- | :------------------------- |
| `cb`      | (`notification`) => `void` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `PluginListener` \>

**Source**: [index.ts:558](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L558)

---

### pending()

```ts
pending(): Promise< PendingNotification[] >
```

Retrieves the list of pending notifications.

#### Example

```typescript
import { pending } from '@tauri-apps/plugin-notification';
const pendingNotifications = await pending();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PendingNotification`](/references/javascript/notification/#pendingnotification)[] \>

A promise resolving to the list of pending notifications.

**Source**: [index.ts:409](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L409)

---

### registerActionTypes()

```ts
registerActionTypes(types): Promise< void >
```

Register actions that are performed when the user clicks on the notification.

#### Example

```typescript
import { registerActionTypes } from '@tauri-apps/plugin-notification';
await registerActionTypes([
  {
    id: 'tauri',
    actions: [
      {
        id: 'my-action',
        title: 'Settings',
      },
    ],
  },
]);
```

#### Since

2.0.0

#### Parameters

| Parameter | Type                                                              |
| :-------- | :---------------------------------------------------------------- |
| `types`   | [`ActionType`](/references/javascript/notification/#actiontype)[] |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:392](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L392)

---

### removeActive()

```ts
removeActive(notifications): Promise< void >
```

Removes the active notifications with the given list of identifiers.

#### Example

```typescript
import { cancel } from '@tauri-apps/plugin-notification';
await cancel([-34234, 23432, 4311]);
```

#### Since

2.0.0

#### Parameters

| Parameter       | Type                                  |
| :-------------- | :------------------------------------ |
| `notifications` | \{`id`: `number`; `tag`: `string`;}[] |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:477](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L477)

---

### removeAllActive()

```ts
removeAllActive(): Promise< void >
```

Removes all active notifications.

#### Example

```typescript
import { removeAllActive } from '@tauri-apps/plugin-notification';
await removeAllActive();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:496](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L496)

---

### removeChannel()

```ts
removeChannel(id): Promise< void >
```

Removes the channel with the given identifier.

#### Example

```typescript
import { removeChannel } from '@tauri-apps/plugin-notification';
await removeChannel();
```

#### Since

2.0.0

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:537](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L537)

---

### requestPermission()

```ts
requestPermission(): Promise< Permission >
```

Requests the permission to send notifications.

#### Example

```typescript
import {
  isPermissionGranted,
  requestPermission,
} from '@tauri-apps/plugin-notification';
let permissionGranted = await isPermissionGranted();
if (!permissionGranted) {
  const permission = await requestPermission();
  permissionGranted = permission === 'granted';
}
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Permission`](/references/javascript/notification/#permission) \>

A promise resolving to whether the user granted the permission or not.

**Source**: [index.ts:341](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L341)

---

### sendNotification()

```ts
sendNotification(options): void
```

Sends a notification to the user.

#### Example

```typescript
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from '@tauri-apps/plugin-notification';
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

#### Since

2.0.0

#### Parameters

| Parameter | Type                                                                  |
| :-------- | :-------------------------------------------------------------------- |
| `options` | `string` \| [`Options`](/references/javascript/notification/#options) |

#### Returns

`void`

**Source**: [index.ts:363](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/notification/guest-js/index.ts#L363)
