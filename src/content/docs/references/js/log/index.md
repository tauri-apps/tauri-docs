---
title: '@tauri-apps/plugin-log'
editUrl: false
prev: false
next: false
---

## Type Aliases

### LogOptions

```ts
LogOptions: object;
```

#### Type declaration

| Member                                               | Type                                                                                                                               |
| :--------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| <a id="file" name="file"></a> `file`?                | `string`                                                                                                                           |
| <a id="keyvalues" name="keyvalues"></a> `keyValues`? | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, `string` \| `undefined` \> |
| <a id="line" name="line"></a> `line`?                | `number`                                                                                                                           |

**Source**: [index.ts:9](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/log/guest-js/index.ts#L9)

## Functions

### attachConsole()

```ts
attachConsole(): Promise< UnlistenFn >
```

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `UnlistenFn` \>

**Source**: [index.ts:192](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/log/guest-js/index.ts#L192)

---

### debug()

```ts
debug(message, options?): Promise< void >
```

Logs a message at the debug level.

#### Parameters

| Parameter  | Type                                           | Description                                                                                                                                                       |
| :--------- | :--------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`  | `string`                                       | # Examples<br /><br />`js import { debug } from '@tauri-apps/plugin-log';  const pos = { x: 3.234, y: -1.223 };  debug(`New position: x: {pos.x}, y: {pos.y}`); ` |
| `options`? | [`LogOptions`](/references/js/log/#logoptions) | -                                                                                                                                                                 |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:158](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/log/guest-js/index.ts#L158)

---

### error()

```ts
error(message, options?): Promise< void >
```

Logs a message at the error level.

#### Parameters

| Parameter  | Type                                           | Description                                                                                                                                                                   |
| :--------- | :--------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`  | `string`                                       | # Examples<br /><br />`js import { error } from '@tauri-apps/plugin-log';  const err_info = "No connection"; const port = 22;  error(`Error: ${err_info} on port ${port}`); ` |
| `options`? | [`LogOptions`](/references/js/log/#logoptions) | -                                                                                                                                                                             |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:92](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/log/guest-js/index.ts#L92)

---

### info()

```ts
info(message, options?): Promise< void >
```

Logs a message at the info level.

#### Parameters

| Parameter  | Type                                           | Description                                                                                                                                                                                     |
| :--------- | :--------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`  | `string`                                       | # Examples<br /><br />`js import { info } from '@tauri-apps/plugin-log';  const conn_info = { port: 40, speed: 3.20 };  info(`Connected to port {conn_info.port} at {conn_info.speed} Mb/s`); ` |
| `options`? | [`LogOptions`](/references/js/log/#logoptions) | -                                                                                                                                                                                               |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:136](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/log/guest-js/index.ts#L136)

---

### trace()

```ts
trace(message, options?): Promise< void >
```

Logs a message at the trace level.

#### Parameters

| Parameter  | Type                                           | Description                                                                                                                                                    |
| :--------- | :--------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`  | `string`                                       | # Examples<br /><br />`js import { trace } from '@tauri-apps/plugin-log';  let pos = { x: 3.234, y: -1.223 };  trace(`Position is: x: {pos.x}, y: {pos.y}`); ` |
| `options`? | [`LogOptions`](/references/js/log/#logoptions) | -                                                                                                                                                              |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:180](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/log/guest-js/index.ts#L180)

---

### warn()

```ts
warn(message, options?): Promise< void >
```

Logs a message at the warn level.

#### Parameters

| Parameter  | Type                                           | Description                                                                                                                                                  |
| :--------- | :--------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`  | `string`                                       | # Examples<br /><br />`js import { warn } from '@tauri-apps/plugin-log';  const warn_description = "Invalid Input";  warn(`Warning! {warn_description}!`); ` |
| `options`? | [`LogOptions`](/references/js/log/#logoptions) | -                                                                                                                                                            |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:114](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/log/guest-js/index.ts#L114)
