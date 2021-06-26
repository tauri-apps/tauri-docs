---
title: "Enumeration: UserAttentionType"
sidebar_label: "UserAttentionType"
custom_edit_url: null
hide_title: true
---

# Enumeration: UserAttentionType

[window](../modules/window.md).UserAttentionType

Attention type to request on a window.

## Enumeration members

### Critical

• **Critical** = `1`

## Platform-specific
 - **macOS:** Bounces the dock icon until the application is in focus.
- **Windows:** Flashes both the window and the taskbar button until the application is in focus.

#### Defined in

[window.ts:123](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L123)

___

### Informational

• **Informational** = `2`

## Platform-specific
- **macOS:** Bounces the dock icon once.
- **Windows:** Flashes the taskbar button until the application is in focus.

#### Defined in

[window.ts:129](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L129)
