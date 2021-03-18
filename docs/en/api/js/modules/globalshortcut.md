---
title: "Module: globalShortcut"
sidebar_label: "globalShortcut"
custom_edit_url: null
hide_title: true
---

# Module: globalShortcut

## Functions

### isRegistered

▸ **isRegistered**(`shortcut`: *string*): *Promise*<boolean\>

Determines whether the given shortcut is registered by this application or not.

#### Parameters:

Name | Type |
:------ | :------ |
`shortcut` | *string* |

**Returns:** *Promise*<boolean\>

promise resolving to the state

Defined in: [globalShortcut.ts:47](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/globalShortcut.ts#L47)

___

### register

▸ **register**(`shortcut`: *string*, `handler`: (`shortcut`: *string*) => *void*): *Promise*<void\>

Register a global shortcut

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`shortcut` | *string* | shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q   |
`handler` | (`shortcut`: *string*) => *void* | shortcut handler callback - takes the triggered shortcut as argument    |

**Returns:** *Promise*<void\>

Defined in: [globalShortcut.ts:8](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/globalShortcut.ts#L8)

___

### registerAll

▸ **registerAll**(`shortcuts`: *string*[], `handler`: (`shortcut`: *string*) => *void*): *Promise*<void\>

Register a collection of global shortcuts

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`shortcuts` | *string*[] | array of shortcut definitions, modifiers and key separated by "+" e.g. CmdOrControl+Q   |
`handler` | (`shortcut`: *string*) => *void* | shortcut handler callback - takes the triggered shortcut as argument    |

**Returns:** *Promise*<void\>

Defined in: [globalShortcut.ts:27](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/globalShortcut.ts#L27)

___

### unregister

▸ **unregister**(`shortcut`: *string*): *Promise*<void\>

Unregister a global shortcut

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`shortcut` | *string* | shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q    |

**Returns:** *Promise*<void\>

Defined in: [globalShortcut.ts:61](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/globalShortcut.ts#L61)

___

### unregisterAll

▸ **unregisterAll**(): *Promise*<void\>

Unregisters all shortcuts registered by the application.

**Returns:** *Promise*<void\>

Defined in: [globalShortcut.ts:74](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/globalShortcut.ts#L74)
