[@tauri-apps/api](../README.md) / [event](../modules/event.md) / Event

# Interface: Event<T\>

[event](../modules/event.md).Event

## Type parameters

| Name |
| :------ |
| `T` |

## Properties

### event

 **event**: `string`

Event name

#### Defined in

[helpers/event.ts:11](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/helpers/event.ts#L11)

___

### id

 **id**: `number`

Event identifier used to unlisten

#### Defined in

[helpers/event.ts:15](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/helpers/event.ts#L15)

___

### payload

 **payload**: `T`

Event payload

#### Defined in

[helpers/event.ts:17](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/helpers/event.ts#L17)

___

### windowLabel

 **windowLabel**: `string`

The label of the window that emitted this event.

#### Defined in

[helpers/event.ts:13](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/helpers/event.ts#L13)
