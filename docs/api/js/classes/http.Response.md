[@tauri-apps/api](../index.md) / [http](../modules/http.md) / Response

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

[http.ts:175](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L175)

___

### headers

• **headers**: `Record`<`string`, `string`\>

The response headers.

#### Defined in

[http.ts:171](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L171)

___

### ok

• **ok**: `boolean`

A boolean indicating whether the response was successful (status in the range 200–299) or not.

#### Defined in

[http.ts:169](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L169)

___

### rawHeaders

• **rawHeaders**: `Record`<`string`, `string`[]\>

The response raw headers.

#### Defined in

[http.ts:173](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L173)

___

### status

• **status**: `number`

The response status code.

#### Defined in

[http.ts:167](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L167)

___

### url

• **url**: `string`

The request URL.

#### Defined in

[http.ts:165](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/http.ts#L165)
