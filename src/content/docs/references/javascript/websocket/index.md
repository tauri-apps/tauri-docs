---
title: '@tauri-apps/plugin-websocket'
editUrl: false
prev: false
next: false
---

## Classes

### default

#### Constructors

##### constructor()

```ts
new default(id, listeners): default
```

###### Parameters

| Parameter   | Type                |
| :---------- | :------------------ |
| `id`        | `number`            |
| `listeners` | (`arg`) => `void`[] |

###### Returns

[`default`](/references/javascript/websocket/#default)

**Source**: [index.ts:37](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/websocket/guest-js/index.ts#L37)

#### Properties

| Property                                                                 | Type                |
| :----------------------------------------------------------------------- | :------------------ |
| <a id="id" name="id"></a> `id`                                           | `number`            |
| `private` `readonly` <a id="listeners" name="listeners"></a> `listeners` | (`arg`) => `void`[] |

#### Methods

##### addListener()

```ts
addListener(cb): void
```

###### Parameters

| Parameter | Type              |
| :-------- | :---------------- |
| `cb`      | (`arg`) => `void` |

###### Returns

`void`

**Source**: [index.ts:64](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/websocket/guest-js/index.ts#L64)

---

##### disconnect()

```ts
disconnect(): Promise< void >
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:87](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/websocket/guest-js/index.ts#L87)

---

##### send()

```ts
send(message): Promise< void >
```

###### Parameters

| Parameter | Type                                                                             |
| :-------- | :------------------------------------------------------------------------------- |
| `message` | `string` \| `number`[] \| [`Message`](/references/javascript/websocket/#message) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:68](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/websocket/guest-js/index.ts#L68)

---

##### connect()

```ts
static connect(url, config?): Promise< default >
```

###### Parameters

| Parameter | Type                                                                     |
| :-------- | :----------------------------------------------------------------------- |
| `url`     | `string`                                                                 |
| `config`? | [`ConnectionConfig`](/references/javascript/websocket/#connectionconfig) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`default`](/references/javascript/websocket/#default) \>

**Source**: [index.ts:42](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/websocket/guest-js/index.ts#L42)

## Interfaces

### CloseFrame

#### Properties

| Property                                   | Type     |
| :----------------------------------------- | :------- |
| <a id="code" name="code"></a> `code`       | `number` |
| <a id="reason" name="reason"></a> `reason` | `string` |

---

### ConnectionConfig

#### Properties

| Property                                                                              | Type          |
| :------------------------------------------------------------------------------------ | :------------ |
| <a id="acceptunmaskedframes" name="acceptunmaskedframes"></a> `acceptUnmaskedFrames`? | `boolean`     |
| <a id="headers" name="headers"></a> `headers`?                                        | `HeadersInit` |
| <a id="maxframesize" name="maxframesize"></a> `maxFrameSize`?                         | `number`      |
| <a id="maxmessagesize" name="maxmessagesize"></a> `maxMessageSize`?                   | `number`      |
| <a id="maxwritebuffersize" name="maxwritebuffersize"></a> `maxWriteBufferSize`?       | `number`      |
| <a id="writebuffersize" name="writebuffersize"></a> `writeBufferSize`?                | `number`      |

---

### MessageKind

#### Type parameters

| Parameter |
| :-------- |
| `T`       |
| `D`       |

#### Properties

| Property                             | Type |
| :----------------------------------- | :--- |
| <a id="data" name="data"></a> `data` | `D`  |
| <a id="type" name="type"></a> `type` | `T`  |

## Type Aliases

### Message

```ts
Message: MessageKind<'Text', string> |
  MessageKind<'Binary', number[]> |
  MessageKind<'Ping', number[]> |
  MessageKind<'Pong', number[]> |
  MessageKind<'Close', CloseFrame | null>;
```

**Source**: [index.ts:26](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/websocket/guest-js/index.ts#L26)
