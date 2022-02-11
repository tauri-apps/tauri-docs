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

[http.ts:156](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L156)

___

### headers

• **headers**: `Record`<`string`, `string`\>

The response headers.

#### Defined in

[http.ts:152](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L152)

___

### ok

• **ok**: `boolean`

A boolean indicating whether the response was successful (status in the range 200–299) or not.

#### Defined in

[http.ts:150](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L150)

___

### rawHeaders

• **rawHeaders**: `Record`<`string`, `string`[]\>

The response raw headers.

#### Defined in

[http.ts:154](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L154)

___

### status

• **status**: `number`

The response status code.

#### Defined in

[http.ts:148](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L148)

___

### url

• **url**: `string`

The request URL.

#### Defined in

[http.ts:146](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/http.ts#L146)
