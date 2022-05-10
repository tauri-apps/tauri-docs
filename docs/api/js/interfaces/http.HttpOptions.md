[@tauri-apps/api](../README.md) / [http](../modules/http.md) / HttpOptions

# Interface: HttpOptions

[http](../modules/http.md).HttpOptions

Options object sent to the backend.

## Properties

### body

• `Optional` **body**: [`Body`](../classes/http.Body.md)

#### Defined in

[http.ts:184](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/http.ts#L184)

___

### headers

• `Optional` **headers**: `Record`<`string`, `any`\>

#### Defined in

[http.ts:182](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/http.ts#L182)

___

### method

• **method**: [`HttpVerb`](../modules/http.md#httpverb)

#### Defined in

[http.ts:180](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/http.ts#L180)

___

### query

• `Optional` **query**: `Record`<`string`, `any`\>

#### Defined in

[http.ts:183](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/http.ts#L183)

___

### responseType

• `Optional` **responseType**: [`ResponseType`](../enums/http.ResponseType.md)

#### Defined in

[http.ts:186](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/http.ts#L186)

___

### timeout

• `Optional` **timeout**: `number` \| [`Duration`](http.Duration.md)

#### Defined in

[http.ts:185](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/http.ts#L185)

___

### url

• **url**: `string`

#### Defined in

[http.ts:181](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/http.ts#L181)
