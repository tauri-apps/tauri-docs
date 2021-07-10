---
title: "Module: app"
sidebar_label: "app"
custom_edit_url: null
hide_title: true
---

# Module: app

Get application metadata.

import Imports from '@theme/Imports'

<Imports mod="app" items="getName, getTauriVersion, getVersion" />

## Functions

### getName

▸ **getName**(): `Promise`<`string`\>

Gets the application name.

#### Returns

`Promise`<`string`\>

A promise resolving to application name.

#### Defined in

[app.ts:33](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/app.ts#L33)

___

### getTauriVersion

▸ **getTauriVersion**(): `Promise`<`string`\>

Gets the tauri version.

#### Returns

`Promise`<`string`\>

A promise resolving to tauri version.

#### Defined in

[app.ts:47](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/app.ts#L47)

___

### getVersion

▸ **getVersion**(): `Promise`<`string`\>

Gets the application version.

#### Returns

`Promise`<`string`\>

A promise resolving to the application version.

#### Defined in

[app.ts:19](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/app.ts#L19)
