---
title: '@tauri-apps/plugin-store'
editUrl: false
sidebar:
  label: 'store'
---

## Classes

### Store

A key-value store persisted by the backend layer.

#### Constructors

##### constructor()

```ts
new Store(path): Store
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `path`    | `string` |

###### Returns

[`Store`](/references/javascript/store/#store)

**Source**: [index.ts:20](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L20)

#### Properties

| Property                             | Type     |
| :----------------------------------- | :------- |
| <a id="path" name="path"></a> `path` | `string` |

#### Methods

##### clear()

```ts
clear(): Promise< void >
```

Clears the store, removing all key-value pairs.

Note: To clear the storage and reset it to it's `default` value, use `reset` instead.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:84](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L84)

---

##### delete()

```ts
delete(key): Promise< boolean >
```

Removes a key-value pair from the store.

###### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `key`     | `string` |             |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

**Source**: [index.ts:71](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L71)

---

##### entries()

```ts
entries<T>(): Promise< [string, T][] >
```

Returns a list of all entries in the store.

###### Type parameters

| Parameter |
| :-------- |
| `T`       |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`string`, `T`][] \>

**Source**: [index.ts:129](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L129)

---

##### get()

```ts
get<T>(key): Promise< null | T >
```

Returns the value for the given `key` or `null` the key does not exist.

###### Type parameters

| Parameter |
| :-------- |
| `T`       |

###### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `key`     | `string` |             |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `null` \| `T` \>

**Source**: [index.ts:45](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L45)

---

##### has()

```ts
has(key): Promise< boolean >
```

Returns `true` if the given `key` exists in the store.

###### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `key`     | `string` |             |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

**Source**: [index.ts:58](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L58)

---

##### keys()

```ts
keys(): Promise< string[] >
```

Returns a list of all key in the store.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string`[] \>

**Source**: [index.ts:107](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L107)

---

##### length()

```ts
length(): Promise< number >
```

Returns the number of key-value pairs in the store.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `number` \>

**Source**: [index.ts:140](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L140)

---

##### load()

```ts
load(): Promise< void >
```

Attempts to load the on-disk state at the stores `path` into memory.

This method is useful if the on-disk state was edited by the user and you want to synchronize the changes.

Note: This method does not emit change events.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:154](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L154)

---

##### onChange()

```ts
onChange<T>(cb): Promise< UnlistenFn >
```

Listen to changes on the store.

###### Since

2.0.0

###### Type parameters

| Parameter |
| :-------- |
| `T`       |

###### Parameters

| Parameter | Type                       | Description |
| :-------- | :------------------------- | :---------- |
| `cb`      | (`key`, `value`) => `void` |             |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `UnlistenFn` \>

A promise resolving to a function to unlisten to the event.

**Source**: [index.ts:199](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L199)

---

##### onKeyChange()

```ts
onKeyChange<T>(key, cb): Promise< UnlistenFn >
```

Listen to changes on a store key.

###### Since

2.0.0

###### Type parameters

| Parameter |
| :-------- |
| `T`       |

###### Parameters

| Parameter | Type                | Description |
| :-------- | :------------------ | :---------- |
| `key`     | `string`            |             |
| `cb`      | (`value`) => `void` |             |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `UnlistenFn` \>

A promise resolving to a function to unlisten to the event.

**Source**: [index.ts:181](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L181)

---

##### reset()

```ts
reset(): Promise< void >
```

Resets the store to it's `default` value.

If no default value has been set, this method behaves identical to `clear`.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:96](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L96)

---

##### save()

```ts
save(): Promise< void >
```

Saves the store to disk at the stores `path`.

As the store is only persisted to disk before the apps exit, changes might be lost in a crash.
This method lets you persist the store to disk whenever you deem necessary.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:167](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L167)

---

##### set()

```ts
set(key, value): Promise< void >
```

Inserts a key-value pair into the store.

###### Parameters

| Parameter | Type      | Description |
| :-------- | :-------- | :---------- |
| `key`     | `string`  |             |
| `value`   | `unknown` |             |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:31](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L31)

---

##### values()

```ts
values<T>(): Promise< T[] >
```

Returns a list of all values in the store.

###### Type parameters

| Parameter |
| :-------- |
| `T`       |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `T`[] \>

**Source**: [index.ts:118](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/store/guest-js/index.ts#L118)
