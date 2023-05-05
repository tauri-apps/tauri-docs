# process

Perform operations on the current process.

This package is also accessible with `window.__TAURI__.process` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Functions

### `exit`

> **exit**(`exitCode?`: `number`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Exits immediately with the given `exitCode`.

**Example**

```typescript
import { exit } from '@tauri-apps/api/process';
await exit(1);
```

**Since**: 1.0.0

**Parameters**

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `exitCode` | `number` | `0` | The exit code to use. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `relaunch`

> **relaunch**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Exits the current instance of the app then relaunches it.

**Example**

```typescript
import { relaunch } from '@tauri-apps/api/process';
await relaunch();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.
