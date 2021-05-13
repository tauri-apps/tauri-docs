---
title: "Interface: ChildProcess"
sidebar_label: "ChildProcess"
custom_edit_url: null
hide_title: true
---

# Interface: ChildProcess

[shell](../modules/shell.md).ChildProcess

## Properties

### code

• **code**: *null* \| *number*

Exit code of the process. `null` if the process was terminated by a signal on Unix.

Defined in: [shell.ts:28](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L28)

___

### signal

• **signal**: *null* \| *number*

If the process was terminated by a signal, represents that signal.

Defined in: [shell.ts:30](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L30)

___

### stderr

• **stderr**: *string*

The data that the process wrote to `stderr`.

Defined in: [shell.ts:34](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L34)

___

### stdout

• **stdout**: *string*

The data that the process wrote to `stdout`.

Defined in: [shell.ts:32](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L32)
