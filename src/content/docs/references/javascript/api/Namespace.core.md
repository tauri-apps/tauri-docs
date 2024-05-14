---
title: 'core'
editUrl: false
sidebar:
  label: 'core'
---

Invoke your custom commands.

This package is also accessible with `window.__TAURI__.tauri` when [`app.withGlobalTauri`](https://tauri.app/v1/api/config/#appconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Classes

### Channel

#### Type parameters

| Parameter | Default   |
| :-------- | :-------- |
| `T`       | `unknown` |

#### Constructors

##### constructor()

```ts
new Channel<T>(): Channel< T >
```

###### Type parameters

| Parameter | Default   |
| :-------- | :-------- |
| `T`       | `unknown` |

###### Returns

[`Channel`](/references/javascript/api/namespacecore/#channel)\< `T` \>

**Source**: [core.ts:37](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L37)

#### Properties

| Property                                                                                                              | Type                                                                                                           |
| :-------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `private` <a id="#nextmessageid" name="#nextmessageid"></a> `#nextMessageId`                                          | `number`                                                                                                       |
| `private` <a id="#onmessage" name="#onmessage"></a> `#onmessage`                                                      | (`response`) => `void`                                                                                         |
| `private` <a id="#pendingmessages" name="#pendingmessages"></a> `#pendingMessages`                                    | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, `T` \> |
| `private` `readonly` <a id="__tauri_channel_marker__" name="__tauri_channel_marker__"></a> `__TAURI_CHANNEL_MARKER__` | `true`                                                                                                         |
| <a id="id" name="id"></a> `id`                                                                                        | `number`                                                                                                       |

#### Accessors

##### onmessage

```ts
get onmessage(): (response) => void
```

**Sources**: [core.ts:75](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L75), [core.ts:79](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L79)

#### Methods

##### toJSON()

```ts
toJSON(): string
```

###### Returns

`string`

**Source**: [core.ts:83](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L83)

---

### PluginListener

#### Constructors

##### constructor()

```ts
new PluginListener(
  plugin,
  event,
  channelId): PluginListener
```

###### Parameters

| Parameter   | Type     |
| :---------- | :------- |
| `plugin`    | `string` |
| `event`     | `string` |
| `channelId` | `number` |

###### Returns

[`PluginListener`](/references/javascript/api/namespacecore/#pluginlistener)

**Source**: [core.ts:93](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L93)

#### Properties

| Property                                            | Type     |
| :-------------------------------------------------- | :------- |
| <a id="channelid" name="channelid"></a> `channelId` | `number` |
| <a id="event" name="event"></a> `event`             | `string` |
| <a id="plugin" name="plugin"></a> `plugin`          | `string` |

#### Methods

##### unregister()

```ts
unregister(): Promise< void >
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [core.ts:99](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L99)

---

### Resource

A rust-backed resource stored through `tauri::Manager::resources_table` API.

The resource lives in the main process and does not exist
in the Javascript world, and thus will not be cleaned up automatiacally
except on application exit. If you want to clean it up early, call [`Resource.close`](/references/javascript/api/namespacecore/#close)

#### Example

```typescript
import { Resource, invoke } from '@tauri-apps/api/core';
export class DatabaseHandle extends Resource {
  static async open(path: string): Promise<DatabaseHandle> {
    const rid: number = await invoke('open_db', { path });
    return new DatabaseHandle(rid);
  }

  async execute(sql: string): Promise<void> {
    await invoke('execute_sql', { rid: this.rid, sql });
  }
}
```

#### Extended By

- [`TrayIcon`](/references/javascript/api/namespacetray/#trayicon)
- [`Image`](/references/javascript/api/namespaceimage/#image)

#### Constructors

##### constructor()

```ts
new Resource(rid): Resource
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `rid`     | `number` |

###### Returns

[`Resource`](/references/javascript/api/namespacecore/#resource)

**Source**: [core.ts:226](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L226)

#### Properties

| Property                                                  | Type     |
| :-------------------------------------------------------- | :------- |
| `private` `readonly` <a id="#rid" name="#rid"></a> `#rid` | `number` |

#### Accessors

##### rid

```ts
get rid(): number
```

**Source**: [core.ts:222](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L222)

#### Methods

##### close()

```ts
close(): Promise< void >
```

Destroys and cleans up this resource from memory.
**You should not call any method on this object anymore and should drop any reference to it.**

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [core.ts:234](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L234)

## Interfaces

### InvokeOptions

#### Since

2.0.0

#### Properties

| Property                                      | Type                                                                                                                                                                                   |
| :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="headers" name="headers"></a> `headers` | [`Headers`](https://developer.mozilla.org/docs/Web/API/Headers) \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, `string` \> |

## Type Aliases

### InvokeArgs

```ts
InvokeArgs: Record< string, unknown > | number[] | ArrayBuffer | Uint8Array
```

Command arguments.

#### Since

1.0.0

**Source**: [core.ts:131](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L131)

## Functions

### addPluginListener()

```ts
addPluginListener<T>(
  plugin,
  event,
  cb): Promise< PluginListener >
```

Adds a listener to a plugin event.

#### Since

2.0.0

#### Type parameters

| Parameter |
| :-------- |
| `T`       |

#### Parameters

| Parameter | Type                  |
| :-------- | :-------------------- |
| `plugin`  | `string`              |
| `event`   | `string`              |
| `cb`      | (`payload`) => `void` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PluginListener`](/references/javascript/api/namespacecore/#pluginlistener) \>

The listener object to stop listening to the events.

**Source**: [core.ts:114](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L114)

---

### convertFileSrc()

```ts
convertFileSrc(filePath, protocol = 'asset'): string
```

Convert a device file path to an URL that can be loaded by the webview.
Note that `asset:` and `http://asset.localhost` must be added to [`tauri.security.csp`](https://tauri.app/v1/api/config/#securityconfig.csp) in `tauri.conf.json`.
Example CSP value: `"csp": "default-src 'self' ipc: http://ipc.localhost; img-src 'self' asset: http://asset.localhost"` to use the asset protocol on image sources.

Additionally, `asset` must be added to [`tauri.allowlist.protocol`](https://tauri.app/v1/api/config/#allowlistconfig.protocol)
in `tauri.conf.json` and its access scope must be defined on the `assetScope` array on the same `protocol` object.

#### Example

```typescript
import { appDataDir, join } from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/core';
const appDataDirPath = await appDataDir();
const filePath = await join(appDataDirPath, 'assets/video.mp4');
const assetUrl = convertFileSrc(filePath);

const video = document.getElementById('my-video');
const source = document.createElement('source');
source.type = 'video/mp4';
source.src = assetUrl;
video.appendChild(source);
video.load();
```

#### Since

1.0.0

#### Parameters

| Parameter  | Type     | Default value | Description                                                                                       |
| :--------- | :------- | :------------ | :------------------------------------------------------------------------------------------------ |
| `filePath` | `string` | `undefined`   | The file path.                                                                                    |
| `protocol` | `string` | `'asset'`     | The protocol to use. Defaults to `asset`. You only need to set this when using a custom protocol. |

#### Returns

`string`

the URL that can be used as source on the webview.

**Source**: [core.ts:193](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L193)

---

### invoke()

```ts
invoke<T>(
  cmd,
  args = {},
  options?): Promise< T >
```

Sends a message to the backend.

#### Example

```typescript
import { invoke } from '@tauri-apps/api/core';
await invoke('login', { user: 'tauri', password: 'poiwe3h4r5ip3yrhtew9ty' });
```

#### Since

1.0.0

#### Type parameters

| Parameter |
| :-------- |
| `T`       |

#### Parameters

| Parameter  | Type                                                                       | Description                                    |
| :--------- | :------------------------------------------------------------------------- | :--------------------------------------------- |
| `cmd`      | `string`                                                                   | The command name.                              |
| `args`     | [`InvokeArgs`](/references/javascript/api/namespacecore/#invokeargs)       | The optional arguments to pass to the command. |
| `options`? | [`InvokeOptions`](/references/javascript/api/namespacecore/#invokeoptions) | The request options.                           |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `T` \>

A promise resolving or rejecting to the backend response.

**Source**: [core.ts:155](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L155)

---

### isTauri()

```ts
isTauri(): unknown
```

#### Returns

`unknown`

**Source**: [core.ts:241](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L241)

---

### transformCallback()

```ts
transformCallback<T>(callback?, once? = false): number
```

Transforms a callback function to a string identifier that can be passed to the backend.
The backend uses the identifier to `eval()` the callback.

#### Since

1.0.0

#### Type parameters

| Parameter | Default   |
| :-------- | :-------- |
| `T`       | `unknown` |

#### Parameters

| Parameter   | Type                   | Default value |
| :---------- | :--------------------- | :------------ |
| `callback`? | (`response`) => `void` | `undefined`   |
| `once`?     | `boolean`              | `false`       |

#### Returns

`number`

A unique identifier associated with the callback function.

**Source**: [core.ts:20](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L20)
