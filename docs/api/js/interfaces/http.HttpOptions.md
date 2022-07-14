[@tauri-apps/api](../README.md) / [http](../modules/http.md) / HttpOptions

# Interface: HttpOptions

[http](../modules/http.md).HttpOptions

Options object sent to the backend.

## Properties

### body

 `Optional` **body**: [`Body`](../classes/http.Body.md)

#### Defined in

[http.ts:205](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/http.ts#L205)

___

### headers

 `Optional` **headers**: `Record`<`string`, `any`\>

#### Defined in

[http.ts:203](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/http.ts#L203)

___

### method

 **method**: [`HttpVerb`](../modules/http.md#httpverb)

#### Defined in

[http.ts:201](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/http.ts#L201)

___

### query

 `Optional` **query**: `Record`<`string`, `any`\>

#### Defined in

[http.ts:204](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/http.ts#L204)

___

### responseType

 `Optional` **responseType**: [`ResponseType`](../enums/http.ResponseType.md)

#### Defined in

[http.ts:207](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/http.ts#L207)

___

### timeout

 `Optional` **timeout**: `number` \| [`Duration`](http.Duration.md)

#### Defined in

[http.ts:206](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/http.ts#L206)

___

### url

 **url**: `string`

#### Defined in

[http.ts:202](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/http.ts#L202)
