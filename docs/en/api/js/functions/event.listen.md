---
id: "event.listen"
title: "Function: listen"
sidebar_label: "listen"
custom_edit_url: null
hide_title: true
---

# Function: listen

[event](../modules/event.md).listen

▸ **listen**<T\>(`event`: *string*, `handler`: [*EventCallback*](../types/event.eventcallback.md)<T\>, `once?`: *boolean*): *void*

listen to an event from the backend

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`event` | *string* | - | the event name   |
`handler` | [*EventCallback*](../types/event.eventcallback.md)<T\> | - | the event handler callback    |
`once` | *boolean* | false | - |

**Returns:** *void*

Defined in: [event.ts:16](https://github.com/tauri-apps/tauri/blob/237b49b/cli/tauri.js/api-src/event.ts#L16)
