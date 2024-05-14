---
title: '@tauri-apps/plugin-process'
editUrl: false
sidebar:
  label: 'process'
---

Perform operations on the current process.

## Functions

### exit()

```ts
exit(code = 0): Promise< void >
```

Exits immediately with the given `exitCode`.

#### Example

```typescript
import { exit } from '@tauri-apps/plugin-process';
await exit(1);
```

#### Since

2.0.0

#### Parameters

| Parameter | Type     | Default value | Description           |
| :-------- | :------- | :------------ | :-------------------- |
| `code`    | `number` | `0`           | The exit code to use. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:25](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/process/guest-js/index.ts#L25)

---

### relaunch()

```ts
relaunch(): Promise< void >
```

Exits the current instance of the app then relaunches it.

#### Example

```typescript
import { relaunch } from '@tauri-apps/plugin-process';
await relaunch();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:41](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/process/guest-js/index.ts#L41)
