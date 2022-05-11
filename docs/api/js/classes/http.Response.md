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

[http.ts:216](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/http.ts#L216)

___

### headers

• **headers**: `Record`<`string`, `string`\>

The response headers.

#### Defined in

[http.ts:212](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/http.ts#L212)

___

### ok

• **ok**: `boolean`

A boolean indicating whether the response was successful (status in the range 200–299) or not.

#### Defined in

[http.ts:210](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/http.ts#L210)

___

### rawHeaders

• **rawHeaders**: `Record`<`string`, `string`[]\>

The response raw headers.

#### Defined in

[http.ts:214](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/http.ts#L214)

___

### status

• **status**: `number`

The response status code.

#### Defined in

[http.ts:208](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/http.ts#L208)

___

### url

• **url**: `string`

The request URL.

#### Defined in

[http.ts:206](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/http.ts#L206)
