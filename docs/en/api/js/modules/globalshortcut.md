---
title: "Module: globalShortcut"
sidebar_label: "globalShortcut"
custom_edit_url: null
hide_title: true
---

# Module: globalShortcut

## Type aliases

### ShortcutHandler

Ƭ **ShortcutHandler**: (`shortcut`: *string*) => *void*

#### Type declaration:

▸ (`shortcut`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`shortcut` | *string* |

**Returns:** *void*

Defined in: [globalShortcut.ts:8](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/globalShortcut.ts#L8)

## Functions

### isRegistered

▸ **isRegistered**(`shortcut`: *string*): *Promise*<boolean\>

Determines whether the given shortcut is registered by this application or not.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`shortcut` | *string* | Array of shortcut definitions, modifiers and key separated by "+" e.g. CmdOrControl+Q   |

**Returns:** *Promise*<boolean\>

A promise resolving to the state.

Defined in: [globalShortcut.ts:58](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/globalShortcut.ts#L58)

___

### register

▸ **register**(`shortcut`: *string*, `handler`: [*ShortcutHandler*](globalshortcut.md#shortcuthandler)): *Promise*<void\>

Register a global shortcut.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`shortcut` | *string* | Shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q   |
`handler` | [*ShortcutHandler*](globalshortcut.md#shortcuthandler) | Shortcut handler callback - takes the triggered shortcut as argument   |

**Returns:** *Promise*<void\>

Defined in: [globalShortcut.ts:17](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/globalShortcut.ts#L17)

___

### registerAll

▸ **registerAll**(`shortcuts`: *string*[], `handler`: [*ShortcutHandler*](globalshortcut.md#shortcuthandler)): *Promise*<void\>

Register a collection of global shortcuts.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`shortcuts` | *string*[] | Array of shortcut definitions, modifiers and key separated by "+" e.g. CmdOrControl+Q   |
`handler` | [*ShortcutHandler*](globalshortcut.md#shortcuthandler) | Shortcut handler callback - takes the triggered shortcut as argument   |

**Returns:** *Promise*<void\>

Defined in: [globalShortcut.ts:38](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/globalShortcut.ts#L38)

___

### unregister

▸ **unregister**(`shortcut`: *string*): *Promise*<void\>

Unregister a global shortcut.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`shortcut` | *string* | shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q   |

**Returns:** *Promise*<void\>

Defined in: [globalShortcut.ts:74](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/globalShortcut.ts#L74)

___

### unregisterAll

▸ **unregisterAll**(): *Promise*<void\>

Unregisters all shortcuts registered by the application.

**Returns:** *Promise*<void\>

Defined in: [globalShortcut.ts:89](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/globalShortcut.ts#L89)
