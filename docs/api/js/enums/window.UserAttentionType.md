[@tauri-apps/api](../index.md) / [window](../modules/window.md) / UserAttentionType

# Enumeration: UserAttentionType

[window](../modules/window.md).UserAttentionType

Attention type to request on a window.

## Enumeration members

### Critical

• **Critical** = `1`

#### Platform-specific
 - **macOS:** Bounces the dock icon until the application is in focus.
- **Windows:** Flashes both the window and the taskbar button until the application is in focus.

#### Defined in

[window.ts:181](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L181)

___

### Informational

• **Informational** = `2`

#### Platform-specific
- **macOS:** Bounces the dock icon once.
- **Windows:** Flashes the taskbar button until the application is in focus.

#### Defined in

[window.ts:187](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L187)
