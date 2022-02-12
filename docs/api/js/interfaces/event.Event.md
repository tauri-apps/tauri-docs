[@tauri-apps/api](../index.md) / [event](../modules/event.md) / Event

# Interface: Event<T\>

[event](../modules/event.md).Event

## Type parameters

| Name |
| :------ |
| `T` |

## Properties

### event

• **event**: [`EventName`](../modules/event.md#eventname)

Event name

#### Defined in

[helpers/event.ts:12](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/helpers/event.ts#L12)

___

### id

• **id**: `number`

Event identifier used to unlisten

#### Defined in

[helpers/event.ts:16](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/helpers/event.ts#L16)

___

### payload

• **payload**: `T`

Event payload

#### Defined in

[helpers/event.ts:18](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/helpers/event.ts#L18)

___

### windowLabel

• **windowLabel**: `string`

The label of the window that emitted this event.

#### Defined in

[helpers/event.ts:14](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/helpers/event.ts#L14)
