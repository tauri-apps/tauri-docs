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

[http.ts:237](https://github.com/tauri-apps/tauri/blob/95abf48/tooling/api/src/http.ts#L237)

___

### headers

• **headers**: `Record`<`string`, `string`\>

The response headers.

#### Defined in

[http.ts:233](https://github.com/tauri-apps/tauri/blob/95abf48/tooling/api/src/http.ts#L233)

___

### ok

• **ok**: `boolean`

A boolean indicating whether the response was successful (status in the range 200–299) or not.

#### Defined in

[http.ts:231](https://github.com/tauri-apps/tauri/blob/95abf48/tooling/api/src/http.ts#L231)

___

### rawHeaders

• **rawHeaders**: `Record`<`string`, `string`[]\>

The response raw headers.

#### Defined in

[http.ts:235](https://github.com/tauri-apps/tauri/blob/95abf48/tooling/api/src/http.ts#L235)

___

### status

• **status**: `number`

The response status code.

#### Defined in

[http.ts:229](https://github.com/tauri-apps/tauri/blob/95abf48/tooling/api/src/http.ts#L229)

___

### url

• **url**: `string`

The request URL.

#### Defined in

[http.ts:227](https://github.com/tauri-apps/tauri/blob/95abf48/tooling/api/src/http.ts#L227)
