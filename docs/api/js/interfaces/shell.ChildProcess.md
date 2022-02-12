[@tauri-apps/api](../index.md) / [shell](../modules/shell.md) / ChildProcess

# Interface: ChildProcess

[shell](../modules/shell.md).ChildProcess

## Properties

### code

• **code**: ``null`` \| `number`

Exit code of the process. `null` if the process was terminated by a signal on Unix.

#### Defined in

[shell.ts:95](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/shell.ts#L95)

___

### signal

• **signal**: ``null`` \| `number`

If the process was terminated by a signal, represents that signal.

#### Defined in

[shell.ts:97](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/shell.ts#L97)

___

### stderr

• **stderr**: `string`

The data that the process wrote to `stderr`.

#### Defined in

[shell.ts:101](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/shell.ts#L101)

___

### stdout

• **stdout**: `string`

The data that the process wrote to `stdout`.

#### Defined in

[shell.ts:99](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/shell.ts#L99)
