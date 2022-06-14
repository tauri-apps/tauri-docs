[@tauri-apps/api](../README.md) / [http](../modules/http.md) / HttpOptions

# Interface: HttpOptions

[http](../modules/http.md).HttpOptions

Options object sent to the backend.

## Properties

### body

• `Optional` **body**: [`Body`](../classes/http.Body.md)

#### Defined in

[http.ts:200](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/http.ts#L200)

___

### headers

• `Optional` **headers**: `Record`<`string`, `any`\>

#### Defined in

[http.ts:198](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/http.ts#L198)

___

### method

• **method**: [`HttpVerb`](../modules/http.md#httpverb)

#### Defined in

[http.ts:196](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/http.ts#L196)

___

### query

• `Optional` **query**: `Record`<`string`, `any`\>

#### Defined in

[http.ts:199](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/http.ts#L199)

___

### responseType

• `Optional` **responseType**: [`ResponseType`](../enums/http.ResponseType.md)

#### Defined in

[http.ts:202](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/http.ts#L202)

___

### timeout

• `Optional` **timeout**: `number` \| [`Duration`](http.Duration.md)

#### Defined in

[http.ts:201](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/http.ts#L201)

___

### url

• **url**: `string`

#### Defined in

[http.ts:197](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/http.ts#L197)
