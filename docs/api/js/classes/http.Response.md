[@tauri-apps/api](../README.md) / [http](../modules/http.md) / Response

# Class: Response<T\>

[http](../modules/http.md).Response

Response object.

## Type parameters

| Name |
| :------ |
| `T` |

## Properties

### data

• **data**: `T`

The response data.

#### Defined in

[http.ts:211](https://github.com/tauri-apps/tauri/blob/feac1d1/tooling/api/src/http.ts#L211)

___

### headers

• **headers**: `Record`<`string`, `string`\>

The response headers.

#### Defined in

[http.ts:207](https://github.com/tauri-apps/tauri/blob/feac1d1/tooling/api/src/http.ts#L207)

___

### ok

• **ok**: `boolean`

A boolean indicating whether the response was successful (status in the range 200–299) or not.

#### Defined in

[http.ts:205](https://github.com/tauri-apps/tauri/blob/feac1d1/tooling/api/src/http.ts#L205)

___

### rawHeaders

• **rawHeaders**: `Record`<`string`, `string`[]\>

The response raw headers.

#### Defined in

[http.ts:209](https://github.com/tauri-apps/tauri/blob/feac1d1/tooling/api/src/http.ts#L209)

___

### status

• **status**: `number`

The response status code.

#### Defined in

[http.ts:203](https://github.com/tauri-apps/tauri/blob/feac1d1/tooling/api/src/http.ts#L203)

___

### url

• **url**: `string`

The request URL.

#### Defined in

[http.ts:201](https://github.com/tauri-apps/tauri/blob/feac1d1/tooling/api/src/http.ts#L201)
