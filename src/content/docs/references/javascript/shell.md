---
title: '@tauri-apps/plugin-shell'
editUrl: false
sidebar:
  label: 'shell'
---

Access the system shell.
Allows you to spawn child processes and manage files and URLs using their default application.

## Security

This API has a scope configuration that forces you to restrict the programs and arguments that can be used.

### Restricting access to the [`open`](/references/javascript/shell/#open) API

On the configuration object, `open: true` means that the [open](/references/javascript/shell/#open) API can be used with any URL,
as the argument is validated with the `^((mailto:\w+)|(tel:\w+)|(https?://\w+)).+` regex.
You can change that regex by changing the boolean value to a string, e.g. `open: ^https://github.com/`.

### Restricting access to the [`Command`](/references/javascript/shell/#command) APIs

The plugin configuration object has a `scope` field that defines an array of CLIs that can be used.
Each CLI is a configuration object `{ name: string, cmd: string, sidecar?: bool, args?: boolean | Arg[] }`.

- `name`: the unique identifier of the command, passed to the [Command.create function](/references/javascript/shell/#create).
  If it's a sidecar, this must be the value defined on `tauri.conf.json > tauri > bundle > externalBin`.
- `cmd`: the program that is executed on this configuration. If it's a sidecar, this value is ignored.
- `sidecar`: whether the object configures a sidecar or a system program.
- `args`: the arguments that can be passed to the program. By default no arguments are allowed.
  - `true` means that any argument list is allowed.
  - `false` means that no arguments are allowed.
  - otherwise an array can be configured. Each item is either a string representing the fixed argument value
    or a `{ validator: string }` that defines a regex validating the argument value.

#### Example scope configuration

CLI: `git commit -m "the commit message"`

Configuration:

```json
{
  "plugins": {
    "shell": {
      "scope": [
        {
          "name": "run-git-commit",
          "cmd": "git",
          "args": ["commit", "-m", { "validator": "\\S+" }]
        }
      ]
    }
  }
}
```

Usage:

```typescript
import { Command } from '@tauri-apps/plugin-shell';
Command.create('run-git-commit', ['commit', '-m', 'the commit message']);
```

Trying to execute any API with a program not configured on the scope results in a promise rejection due to denied access.

## Classes

### Child

#### Since

2.0.0

#### Constructors

##### constructor()

```ts
new Child(pid): Child
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `pid`     | `number` |

###### Returns

[`Child`](/references/javascript/shell/#child)

**Source**: [index.ts:335](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L335)

#### Properties

| Property                          | Type     | Description              |
| :-------------------------------- | :------- | :----------------------- |
| <a id="pid" name="pid"></a> `pid` | `number` | The child process `pid`. |

#### Methods

##### kill()

```ts
kill(): Promise< void >
```

Kills the child process.

###### Since

2.0.0

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:371](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L371)

---

##### write()

```ts
write(data): Promise< void >
```

Writes `data` to the `stdin`.

###### Example

```typescript
import { Command } from '@tauri-apps/plugin-shell';
const command = Command.create('node');
const child = await command.spawn();
await child.write('message');
await child.write([0, 1, 2, 3, 4, 5]);
```

###### Since

2.0.0

###### Parameters

| Parameter | Type                                                   | Description                                            |
| :-------- | :----------------------------------------------------- | :----------------------------------------------------- |
| `data`    | [`IOPayload`](/references/javascript/shell/#iopayload) | The message to write, either a string or a byte array. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:356](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L356)

---

### Command

The entry point for spawning child processes.
It emits the `close` and `error` events.

#### Example

```typescript
import { Command } from '@tauri-apps/plugin-shell';
const command = Command.create('node');
command.on('close', (data) => {
  console.log(`command finished with code ${data.code} and signal ${data.signal}`);
});
command.on('error', (error) => console.error(`command error: "${error}"`));
command.stdout.on('data', (line) => console.log(`command stdout: "${line}"`));
command.stderr.on('data', (line) => console.log(`command stderr: "${line}"`));

const child = await command.spawn();
console.log('pid:', child.pid);
```

#### Since

2.0.0

#### Extends

- [`EventEmitter`](/references/javascript/shell/#eventemitter)\< [`CommandEvents`](/references/javascript/shell/#commandevents) \>

#### Type parameters

| Parameter                                                            |
| :------------------------------------------------------------------- |
| `O` _extends_ [`IOPayload`](/references/javascript/shell/#iopayload) |

#### Properties

| Property                                              | Type                                                                                                                                    | Description                                             |
| :---------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------ |
| `readonly` <a id="stderr" name="stderr"></a> `stderr` | [`EventEmitter`](/references/javascript/shell/#eventemitter)\< [`OutputEvents`](/references/javascript/shell/#outputevents)\< `O` \> \> | Event emitter for the `stderr`. Emits the `data` event. |
| `readonly` <a id="stdout" name="stdout"></a> `stdout` | [`EventEmitter`](/references/javascript/shell/#eventemitter)\< [`OutputEvents`](/references/javascript/shell/#outputevents)\< `O` \> \> | Event emitter for the `stdout`. Emits the `data` event. |

#### Methods

##### addListener()

```ts
addListener<N>(eventName, listener): this
```

Alias for `emitter.on(eventName, listener)`.

###### Since

2.0.0

###### Type parameters

| Parameter                                                                            |
| :----------------------------------------------------------------------------------- |
| `N` _extends_ _keyof_ [`CommandEvents`](/references/javascript/shell/#commandevents) |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](/references/javascript/shell/#eventemitter).[`addListener`](/references/javascript/shell/#addlistener)

**Source**: [index.ts:150](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L150)

---

##### execute()

```ts
execute(): Promise< ChildProcess< O > >
```

Executes the command as a child process, waiting for it to finish and collecting all of its output.

###### Example

```typescript
import { Command } from '@tauri-apps/plugin-shell';
const output = await Command.create('echo', 'message').execute();
assert(output.code === 0);
assert(output.signal === null);
assert(output.stdout === 'message');
assert(output.stderr === '');
```

###### Since

2.0.0

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`ChildProcess`](/references/javascript/shell/#childprocess)\< `O` \> \>

A promise resolving to the child process output.

**Source**: [index.ts:554](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L554)

---

##### listenerCount()

```ts
listenerCount<N>(eventName): number
```

Returns the number of listeners listening to the event named `eventName`.

###### Since

2.0.0

###### Type parameters

| Parameter                                                                            |
| :----------------------------------------------------------------------------------- |
| `N` _extends_ _keyof_ [`CommandEvents`](/references/javascript/shell/#commandevents) |

###### Parameters

| Parameter   | Type |
| :---------- | :--- |
| `eventName` | `N`  |

###### Returns

`number`

###### Inherited from

[`EventEmitter`](/references/javascript/shell/#eventemitter).[`listenerCount`](/references/javascript/shell/#listenercount)

**Source**: [index.ts:275](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L275)

---

##### off()

```ts
off<N>(eventName, listener): this
```

Removes the all specified listener from the listener array for the event eventName
Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Since

2.0.0

###### Type parameters

| Parameter                                                                            |
| :----------------------------------------------------------------------------------- |
| `N` _extends_ _keyof_ [`CommandEvents`](/references/javascript/shell/#commandevents) |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](/references/javascript/shell/#eventemitter).[`off`](/references/javascript/shell/#off)

**Source**: [index.ts:219](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L219)

---

##### on()

```ts
on<N>(eventName, listener): this
```

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Since

2.0.0

###### Type parameters

| Parameter                                                                            |
| :----------------------------------------------------------------------------------- |
| `N` _extends_ _keyof_ [`CommandEvents`](/references/javascript/shell/#commandevents) |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](/references/javascript/shell/#eventemitter).[`on`](/references/javascript/shell/#on)

**Source**: [index.ts:179](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L179)

---

##### once()

```ts
once<N>(eventName, listener): this
```

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Since

2.0.0

###### Type parameters

| Parameter                                                                            |
| :----------------------------------------------------------------------------------- |
| `N` _extends_ _keyof_ [`CommandEvents`](/references/javascript/shell/#commandevents) |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](/references/javascript/shell/#eventemitter).[`once`](/references/javascript/shell/#once)

**Source**: [index.ts:201](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L201)

---

##### prependListener()

```ts
prependListener<N>(eventName, listener): this
```

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Since

2.0.0

###### Type parameters

| Parameter                                                                            |
| :----------------------------------------------------------------------------------- |
| `N` _extends_ _keyof_ [`CommandEvents`](/references/javascript/shell/#commandevents) |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](/references/javascript/shell/#eventemitter).[`prependListener`](/references/javascript/shell/#prependlistener)

**Source**: [index.ts:292](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L292)

---

##### prependOnceListener()

```ts
prependOnceListener<N>(eventName, listener): this
```

Adds a **one-time**`listener` function for the event named `eventName` to the*beginning* of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Since

2.0.0

###### Type parameters

| Parameter                                                                            |
| :----------------------------------------------------------------------------------- |
| `N` _extends_ _keyof_ [`CommandEvents`](/references/javascript/shell/#commandevents) |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](/references/javascript/shell/#eventemitter).[`prependOnceListener`](/references/javascript/shell/#prependoncelistener)

**Source**: [index.ts:314](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L314)

---

##### removeAllListeners()

```ts
removeAllListeners<N>(event?): this
```

Removes all listeners, or those of the specified eventName.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Since

2.0.0

###### Type parameters

| Parameter                                                                            |
| :----------------------------------------------------------------------------------- |
| `N` _extends_ _keyof_ [`CommandEvents`](/references/javascript/shell/#commandevents) |

###### Parameters

| Parameter | Type |
| :-------- | :--- |
| `event`?  | `N`  |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](/references/javascript/shell/#eventemitter).[`removeAllListeners`](/references/javascript/shell/#removealllisteners)

**Source**: [index.ts:239](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L239)

---

##### removeListener()

```ts
removeListener<N>(eventName, listener): this
```

Alias for `emitter.off(eventName, listener)`.

###### Since

2.0.0

###### Type parameters

| Parameter                                                                            |
| :----------------------------------------------------------------------------------- |
| `N` _extends_ _keyof_ [`CommandEvents`](/references/javascript/shell/#commandevents) |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](/references/javascript/shell/#eventemitter).[`removeListener`](/references/javascript/shell/#removelistener)

**Source**: [index.ts:162](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L162)

---

##### spawn()

```ts
spawn(): Promise< Child >
```

Executes the command as a child process, returning a handle to it.

###### Since

2.0.0

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Child`](/references/javascript/shell/#child) \>

A promise resolving to the child process handle.

**Source**: [index.ts:514](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L514)

---

##### create()

```ts
static create(program, args?): Command< string >
```

Creates a command to execute the given program.

###### Example

```typescript
import { Command } from '@tauri-apps/plugin-shell';
const command = Command.create('my-app', ['run', 'tauri']);
const output = await command.execute();
```

###### Parameters

| Parameter | Type                   | Description                                                                                        |
| :-------- | :--------------------- | :------------------------------------------------------------------------------------------------- |
| `program` | `string`               | The program to execute.<br />It must be configured on `tauri.conf.json > plugins > shell > scope`. |
| `args`?   | `string` \| `string`[] | -                                                                                                  |

###### Returns

[`Command`](/references/javascript/shell/#command)\< `string` \>

**Source**: [index.ts:441](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L441)

```ts
static create(
  program,
  args?,
  options?): Command< Uint8Array >
```

Creates a command to execute the given program.

###### Example

```typescript
import { Command } from '@tauri-apps/plugin-shell';
const command = Command.create('my-app', ['run', 'tauri']);
const output = await command.execute();
```

###### Parameters

| Parameter  | Type                                                                                   | Description                                                                                        |
| :--------- | :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| `program`  | `string`                                                                               | The program to execute.<br />It must be configured on `tauri.conf.json > plugins > shell > scope`. |
| `args`?    | `string` \| `string`[]                                                                 | -                                                                                                  |
| `options`? | [`SpawnOptions`](/references/javascript/shell/#spawnoptions) & \{`encoding`: `"raw"`;} | -                                                                                                  |

###### Returns

[`Command`](/references/javascript/shell/#command)\< [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \>

**Source**: [index.ts:442](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L442)

```ts
static create(
  program,
  args?,
  options?): Command< string >
```

Creates a command to execute the given program.

###### Example

```typescript
import { Command } from '@tauri-apps/plugin-shell';
const command = Command.create('my-app', ['run', 'tauri']);
const output = await command.execute();
```

###### Parameters

| Parameter  | Type                                                         | Description                                                                                        |
| :--------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| `program`  | `string`                                                     | The program to execute.<br />It must be configured on `tauri.conf.json > plugins > shell > scope`. |
| `args`?    | `string` \| `string`[]                                       | -                                                                                                  |
| `options`? | [`SpawnOptions`](/references/javascript/shell/#spawnoptions) | -                                                                                                  |

###### Returns

[`Command`](/references/javascript/shell/#command)\< `string` \>

**Source**: [index.ts:447](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L447)

---

##### sidecar()

```ts
static sidecar(program, args?): Command< string >
```

Creates a command to execute the given sidecar program.

###### Example

```typescript
import { Command } from '@tauri-apps/plugin-shell';
const command = Command.sidecar('my-sidecar');
const output = await command.execute();
```

###### Parameters

| Parameter | Type                   | Description                                                                                        |
| :-------- | :--------------------- | :------------------------------------------------------------------------------------------------- |
| `program` | `string`               | The program to execute.<br />It must be configured on `tauri.conf.json > plugins > shell > scope`. |
| `args`?   | `string` \| `string`[] | -                                                                                                  |

###### Returns

[`Command`](/references/javascript/shell/#command)\< `string` \>

**Source**: [index.ts:473](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L473)

```ts
static sidecar(
  program,
  args?,
  options?): Command< Uint8Array >
```

Creates a command to execute the given sidecar program.

###### Example

```typescript
import { Command } from '@tauri-apps/plugin-shell';
const command = Command.sidecar('my-sidecar');
const output = await command.execute();
```

###### Parameters

| Parameter  | Type                                                                                   | Description                                                                                        |
| :--------- | :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| `program`  | `string`                                                                               | The program to execute.<br />It must be configured on `tauri.conf.json > plugins > shell > scope`. |
| `args`?    | `string` \| `string`[]                                                                 | -                                                                                                  |
| `options`? | [`SpawnOptions`](/references/javascript/shell/#spawnoptions) & \{`encoding`: `"raw"`;} | -                                                                                                  |

###### Returns

[`Command`](/references/javascript/shell/#command)\< [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \>

**Source**: [index.ts:474](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L474)

```ts
static sidecar(
  program,
  args?,
  options?): Command< string >
```

Creates a command to execute the given sidecar program.

###### Example

```typescript
import { Command } from '@tauri-apps/plugin-shell';
const command = Command.sidecar('my-sidecar');
const output = await command.execute();
```

###### Parameters

| Parameter  | Type                                                         | Description                                                                                        |
| :--------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| `program`  | `string`                                                     | The program to execute.<br />It must be configured on `tauri.conf.json > plugins > shell > scope`. |
| `args`?    | `string` \| `string`[]                                       | -                                                                                                  |
| `options`? | [`SpawnOptions`](/references/javascript/shell/#spawnoptions) | -                                                                                                  |

###### Returns

[`Command`](/references/javascript/shell/#command)\< `string` \>

**Source**: [index.ts:479](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L479)

---

### EventEmitter

#### Since

2.0.0

#### Extended By

- [`Command`](/references/javascript/shell/#command)

#### Type parameters

| Parameter                                                                                                                      |
| :----------------------------------------------------------------------------------------------------------------------------- |
| `E` _extends_ [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, `any` \> |

#### Constructors

##### constructor()

```ts
new EventEmitter<E>(): EventEmitter< E >
```

###### Type parameters

| Parameter                                                                                                                      |
| :----------------------------------------------------------------------------------------------------------------------------- |
| `E` _extends_ [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, `any` \> |

###### Returns

[`EventEmitter`](/references/javascript/shell/#eventemitter)\< `E` \>

#### Methods

##### addListener()

```ts
addListener<N>(eventName, listener): this
```

Alias for `emitter.on(eventName, listener)`.

###### Since

2.0.0

###### Type parameters

| Parameter                                      |
| :--------------------------------------------- |
| `N` _extends_ `string` \| `number` \| `symbol` |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

**Source**: [index.ts:150](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L150)

---

##### listenerCount()

```ts
listenerCount<N>(eventName): number
```

Returns the number of listeners listening to the event named `eventName`.

###### Since

2.0.0

###### Type parameters

| Parameter                                      |
| :--------------------------------------------- |
| `N` _extends_ `string` \| `number` \| `symbol` |

###### Parameters

| Parameter   | Type |
| :---------- | :--- |
| `eventName` | `N`  |

###### Returns

`number`

**Source**: [index.ts:275](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L275)

---

##### off()

```ts
off<N>(eventName, listener): this
```

Removes the all specified listener from the listener array for the event eventName
Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Since

2.0.0

###### Type parameters

| Parameter                                      |
| :--------------------------------------------- |
| `N` _extends_ `string` \| `number` \| `symbol` |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

**Source**: [index.ts:219](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L219)

---

##### on()

```ts
on<N>(eventName, listener): this
```

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Since

2.0.0

###### Type parameters

| Parameter                                      |
| :--------------------------------------------- |
| `N` _extends_ `string` \| `number` \| `symbol` |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

**Source**: [index.ts:179](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L179)

---

##### once()

```ts
once<N>(eventName, listener): this
```

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Since

2.0.0

###### Type parameters

| Parameter                                      |
| :--------------------------------------------- |
| `N` _extends_ `string` \| `number` \| `symbol` |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

**Source**: [index.ts:201](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L201)

---

##### prependListener()

```ts
prependListener<N>(eventName, listener): this
```

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Since

2.0.0

###### Type parameters

| Parameter                                      |
| :--------------------------------------------- |
| `N` _extends_ `string` \| `number` \| `symbol` |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

**Source**: [index.ts:292](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L292)

---

##### prependOnceListener()

```ts
prependOnceListener<N>(eventName, listener): this
```

Adds a **one-time**`listener` function for the event named `eventName` to the*beginning* of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Since

2.0.0

###### Type parameters

| Parameter                                      |
| :--------------------------------------------- |
| `N` _extends_ `string` \| `number` \| `symbol` |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

**Source**: [index.ts:314](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L314)

---

##### removeAllListeners()

```ts
removeAllListeners<N>(event?): this
```

Removes all listeners, or those of the specified eventName.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Since

2.0.0

###### Type parameters

| Parameter                                      |
| :--------------------------------------------- |
| `N` _extends_ `string` \| `number` \| `symbol` |

###### Parameters

| Parameter | Type |
| :-------- | :--- |
| `event`?  | `N`  |

###### Returns

`this`

**Source**: [index.ts:239](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L239)

---

##### removeListener()

```ts
removeListener<N>(eventName, listener): this
```

Alias for `emitter.off(eventName, listener)`.

###### Since

2.0.0

###### Type parameters

| Parameter                                      |
| :--------------------------------------------- |
| `N` _extends_ `string` \| `number` \| `symbol` |

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `eventName` | `N`               |
| `listener`  | (`arg`) => `void` |

###### Returns

`this`

**Source**: [index.ts:162](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L162)

## Interfaces

### ChildProcess

#### Since

2.0.0

#### Type parameters

| Parameter                                                            |
| :------------------------------------------------------------------- |
| `O` _extends_ [`IOPayload`](/references/javascript/shell/#iopayload) |

#### Properties

| Property                                   | Type               | Description                                                                         |
| :----------------------------------------- | :----------------- | :---------------------------------------------------------------------------------- |
| <a id="code" name="code"></a> `code`       | `null` \| `number` | Exit code of the process. `null` if the process was terminated by a signal on Unix. |
| <a id="signal" name="signal"></a> `signal` | `null` \| `number` | If the process was terminated by a signal, represents that signal.                  |
| <a id="stderr" name="stderr"></a> `stderr` | `O`                | The data that the process wrote to `stderr`.                                        |
| <a id="stdout" name="stdout"></a> `stdout` | `O`                | The data that the process wrote to `stdout`.                                        |

---

### CommandEvents

#### Properties

| Property                                | Type                                                                   |
| :-------------------------------------- | :--------------------------------------------------------------------- |
| <a id="close" name="close"></a> `close` | [`TerminatedPayload`](/references/javascript/shell/#terminatedpayload) |
| <a id="error" name="error"></a> `error` | `string`                                                               |

---

### OutputEvents

#### Type parameters

| Parameter                                                            |
| :------------------------------------------------------------------- |
| `O` _extends_ [`IOPayload`](/references/javascript/shell/#iopayload) |

#### Properties

| Property                             | Type |
| :----------------------------------- | :--- |
| <a id="data" name="data"></a> `data` | `O`  |

---

### SpawnOptions

#### Since

2.0.0

#### Properties

| Property                                          | Type                                                                                                                | Description                                                                |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------- |
| <a id="cwd" name="cwd"></a> `cwd`?                | `string`                                                                                                            | Current working directory.                                                 |
| <a id="encoding" name="encoding"></a> `encoding`? | `string`                                                                                                            | Character encoding for stdout/stderr<br /><br />**Since**<br /><br />2.0.0 |
| <a id="env" name="env"></a> `env`?                | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, `string` \> | Environment variables. set to `null` to clear the process env.             |

---

### TerminatedPayload

Payload for the `Terminated` command event.

#### Properties

| Property                                   | Type               | Description                                                                         |
| :----------------------------------------- | :----------------- | :---------------------------------------------------------------------------------- |
| <a id="code" name="code"></a> `code`       | `null` \| `number` | Exit code of the process. `null` if the process was terminated by a signal on Unix. |
| <a id="signal" name="signal"></a> `signal` | `null` \| `number` | If the process was terminated by a signal, represents that signal.                  |

## Type Aliases

### IOPayload

```ts
IOPayload: string | Uint8Array;
```

Event payload type

**Source**: [index.ts:611](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L611)

## Functions

### open()

```ts
open(path, openWith?): Promise< void >
```

Opens a path or URL with the system's default app,
or the one specified with `openWith`.

The `openWith` value must be one of `firefox`, `google chrome`, `chromium` `safari`,
`open`, `start`, `xdg-open`, `gio`, `gnome-open`, `kde-open` or `wslview`.

#### Example

```typescript
import { open } from '@tauri-apps/plugin-shell';
// opens the given URL on the default browser:
await open('https://github.com/tauri-apps/tauri');
// opens the given URL using `firefox`:
await open('https://github.com/tauri-apps/tauri', 'firefox');
// opens a file using the default program:
await open('/path/to/file');
```

#### Since

2.0.0

#### Parameters

| Parameter   | Type     | Description                                                                                                                                                                                                |
| :---------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`      | `string` | The path or URL to open.<br />This value is matched against the string regex defined on `tauri.conf.json > plugins > shell > open`,<br />which defaults to `^((mailto:\w+)\|(tel:\w+)\|(https?://\w+)).+`. |
| `openWith`? | `string` | The app to open the file or URL with.<br />Defaults to the system default application for the specified path type.                                                                                         |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:646](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/shell/guest-js/index.ts#L646)
