---
title: '@tauri-apps/plugin-updater'
editUrl: false
prev: false
next: false
---

## Classes

### Update

#### Extends

- `Resource`

#### Constructors

##### constructor()

```ts
new Update(metadata): Update
```

###### Parameters

| Parameter  | Type             |
| :--------- | :--------------- |
| `metadata` | `UpdateMetadata` |

###### Returns

[`Update`](/references/js/updater/#update)

###### Overrides

Resource.constructor

**Source**: [plugins/updater/guest-js/index.ts:49](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/updater/guest-js/index.ts#L49)

#### Properties

| Property                                                           | Type      |
| :----------------------------------------------------------------- | :-------- |
| `private` <a id="#private" name="#private"></a> `#private`         | `any`     |
| <a id="available" name="available"></a> `available`                | `boolean` |
| <a id="body" name="body"></a> `body`?                              | `string`  |
| <a id="currentversion" name="currentversion"></a> `currentVersion` | `string`  |
| <a id="date" name="date"></a> `date`?                              | `string`  |
| <a id="version" name="version"></a> `version`                      | `string`  |

#### Accessors

##### rid

```ts
get rid(): number
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/core.d.ts:123](undefined)

###### Inherited from

Resource.rid

#### Methods

##### close()

```ts
close(): Promise< void >
```

Destroys and cleans up this resource from memory.
**You should not call any method on this object anymore and should drop any reference to it.**

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

###### Inherited from

Resource.close

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/core.d.ts:129](undefined)

---

##### downloadAndInstall()

```ts
downloadAndInstall(onEvent?): Promise< void >
```

Downloads the updater package and installs it

###### Parameters

| Parameter  | Type                   |
| :--------- | :--------------------- |
| `onEvent`? | (`progress`) => `void` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [plugins/updater/guest-js/index.ts:59](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/updater/guest-js/index.ts#L59)

## Interfaces

### CheckOptions

Options used to check for updates

#### Properties

| Property                                       | Type          | Description                                                                 |
| :--------------------------------------------- | :------------ | :-------------------------------------------------------------------------- |
| <a id="headers" name="headers"></a> `headers`? | `HeadersInit` | Request headers                                                             |
| <a id="proxy" name="proxy"></a> `proxy`?       | `string`      | A proxy url to be used when checking and downloading updates.               |
| <a id="target" name="target"></a> `target`?    | `string`      | Target identifier for the running application. This is sent to the backend. |
| <a id="timeout" name="timeout"></a> `timeout`? | `number`      | Timeout in seconds                                                          |

## Type Aliases

### DownloadEvent

```ts
DownloadEvent: {data: {contentLength: number;}; event: "Started";} | {data: {chunkLength: number;}; event: "Progress";} | {event: "Finished";}
```

Updater download event

**Source**: [plugins/updater/guest-js/index.ts:37](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/updater/guest-js/index.ts#L37)

## Functions

### check()

```ts
check(options?): Promise< Update | null >
```

Check for updates, resolves to `null` if no updates are available

#### Parameters

| Parameter  | Type                                                   |
| :--------- | :----------------------------------------------------- |
| `options`? | [`CheckOptions`](/references/js/updater/#checkoptions) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Update`](/references/js/updater/#update) \| `null` \>

**Source**: [plugins/updater/guest-js/index.ts:74](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/updater/guest-js/index.ts#L74)
