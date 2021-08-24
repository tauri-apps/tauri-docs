---
title: "Class: Response<T>"
sidebar_label: "Response"
custom_edit_url: null
hide_title: true
---

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

[http.ts:145](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/http.ts#L145)

___

### headers

• **headers**: `Record`<`string`, `string`\>

The response headers.

#### Defined in

[http.ts:143](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/http.ts#L143)

___

### ok

• **ok**: `boolean`

A boolean indicating whether the response was successful (status in the range 200–299) or not.

#### Defined in

[http.ts:141](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/http.ts#L141)

___

### status

• **status**: `number`

The response status code.

#### Defined in

[http.ts:139](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/http.ts#L139)

___

### url

• **url**: `string`

The request URL.

#### Defined in

[http.ts:137](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/http.ts#L137)
