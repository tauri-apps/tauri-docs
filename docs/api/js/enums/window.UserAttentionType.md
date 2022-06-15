[@tauri-apps/api](../README.md) / [window](../modules/window.md) / UserAttentionType

# Enumeration: UserAttentionType

[window](../modules/window.md).UserAttentionType

Attention type to request on a window.

## Enumeration Members

### Critical

• **Critical**

#### Platform-specific
 - **macOS:** Bounces the dock icon until the application is in focus.
- **Windows:** Flashes both the window and the taskbar button until the application is in focus.

#### Defined in

[window.ts:228](https://github.com/tauri-apps/tauri/blob/dc432ef/tooling/api/src/window.ts#L228)

___

### Informational

• **Informational**

#### Platform-specific
- **macOS:** Bounces the dock icon once.
- **Windows:** Flashes the taskbar button until the application is in focus.

#### Defined in

[window.ts:234](https://github.com/tauri-apps/tauri/blob/dc432ef/tooling/api/src/window.ts#L234)
