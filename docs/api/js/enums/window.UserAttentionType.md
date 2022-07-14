[@tauri-apps/api](../README.md) / [window](../modules/window.md) / UserAttentionType

# Enumeration: UserAttentionType

[window](../modules/window.md).UserAttentionType

Attention type to request on a window.

## Enumeration Members

### Critical

 **Critical** = ``1``

#### Platform-specific
 - **macOS:** Bounces the dock icon until the application is in focus.
- **Windows:** Flashes both the window and the taskbar button until the application is in focus.

#### Defined in

[window.ts:193](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/window.ts#L193)

___

### Informational

 **Informational** = ``2``

#### Platform-specific
- **macOS:** Bounces the dock icon once.
- **Windows:** Flashes the taskbar button until the application is in focus.

#### Defined in

[window.ts:199](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/window.ts#L199)
