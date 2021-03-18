---
title: "Class: WebviewWindow"
sidebar_label: "WebviewWindow"
custom_edit_url: null
hide_title: true
---

# Class: WebviewWindow

[window](../modules/window.md).WebviewWindow

## Hierarchy

* *WebviewWindowHandle*

  ↳ **WebviewWindow**

## Constructors

### constructor

\+ **new WebviewWindow**(`label`: *string*, `options?`: [*WindowOptions*](../interfaces/window.windowoptions.md)): [*WebviewWindow*](window.webviewwindow.md)

#### Parameters:

Name | Type |
:------ | :------ |
`label` | *string* |
`options` | [*WindowOptions*](../interfaces/window.windowoptions.md) |

**Returns:** [*WebviewWindow*](window.webviewwindow.md)

Defined in: [window.ts:97](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/window.ts#L97)

## Properties

### label

• **label**: *string*

Defined in: [window.ts:29](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/window.ts#L29)

___

### listeners

• **listeners**: *object*

#### Type declaration:

Defined in: [window.ts:30](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/window.ts#L30)

## Methods

### \_emitTauriEvent

▸ **_emitTauriEvent**(`event`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |

**Returns:** *void*

Defined in: [window.ts:94](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/window.ts#L94)

___

### \_handleTauriEvent

▸ **_handleTauriEvent**<T\>(`event`: *string*, `handler`: [*EventCallback*](../modules/helpers_event.md#eventcallback)<T\>): *boolean*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`handler` | [*EventCallback*](../modules/helpers_event.md#eventcallback)<T\> |

**Returns:** *boolean*

Defined in: [window.ts:80](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/window.ts#L80)

___

### emit

▸ **emit**(`event`: *string*, `payload?`: *string*): *Promise*<void\>

emits an event to the webview

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | the event name   |
`payload?` | *string* | - |

**Returns:** *Promise*<void\>

Defined in: [window.ts:69](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/window.ts#L69)

___

### listen

▸ **listen**<T\>(`event`: *string*, `handler`: [*EventCallback*](../modules/helpers_event.md#eventcallback)<T\>): *Promise*<void\>

Listen to an event emitted by the webview

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | the event name   |
`handler` | [*EventCallback*](../modules/helpers_event.md#eventcallback)<T\> | the event handler callback    |

**Returns:** *Promise*<void\>

Defined in: [window.ts:43](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/window.ts#L43)

___

### once

▸ **once**<T\>(`event`: *string*, `handler`: [*EventCallback*](../modules/helpers_event.md#eventcallback)<T\>): *Promise*<void\>

Listen to an one-off event emitted by the webview

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | the event name   |
`handler` | [*EventCallback*](../modules/helpers_event.md#eventcallback)<T\> | the event handler callback    |

**Returns:** *Promise*<void\>

Defined in: [window.ts:56](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/window.ts#L56)

___

### getByLabel

▸ `Static`**getByLabel**(`label`: *string*): *null* \| *WebviewWindowHandle*

Gets the WebviewWindow handle for the webview associated with the given label.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`label` | *string* | the webview window label.    |

**Returns:** *null* \| *WebviewWindowHandle*

the handle to communicate with the webview or null if the webview doesn't exist

Defined in: [window.ts:121](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/window.ts#L121)
