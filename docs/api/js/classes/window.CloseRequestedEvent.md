[@tauri-apps/api](../README.md) / [window](../modules/window.md) / CloseRequestedEvent

# Class: CloseRequestedEvent

[window](../modules/window.md).CloseRequestedEvent

## Constructors

### constructor

• **new CloseRequestedEvent**(`event`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../interfaces/event.Event.md)<``null``\> |

## Properties

### \_preventDefault

• `Private` **\_preventDefault**: `boolean` = `false`

#### Defined in

[window.ts:1761](https://github.com/tauri-apps/tauri/blob/7bbf167/tooling/api/src/window.ts#L1761)

___

### event

• **event**: `string`

Event name

#### Defined in

[window.ts:1756](https://github.com/tauri-apps/tauri/blob/7bbf167/tooling/api/src/window.ts#L1756)

___

### id

• **id**: `number`

Event identifier used to unlisten

#### Defined in

[window.ts:1760](https://github.com/tauri-apps/tauri/blob/7bbf167/tooling/api/src/window.ts#L1760)

___

### windowLabel

• **windowLabel**: `string`

The label of the window that emitted this event.

#### Defined in

[window.ts:1758](https://github.com/tauri-apps/tauri/blob/7bbf167/tooling/api/src/window.ts#L1758)

## Methods

### isPreventDefault

▸ **isPreventDefault**(): `boolean`

#### Returns

`boolean`

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`
