---
title: "Interface: Response<T>"
sidebar_label: "Response"
custom_edit_url: null
hide_title: true
---

# Interface: Response<T\>

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

[http.ts:135](https://github.com/tauri-apps/tauri/blob/4bee3a7/tooling/api/src/http.ts#L135)

___

### headers

• **headers**: `Record`<string, string\>

The response headers.

#### Defined in

[http.ts:133](https://github.com/tauri-apps/tauri/blob/4bee3a7/tooling/api/src/http.ts#L133)

___

### status

• **status**: `number`

The response status code.

#### Defined in

[http.ts:131](https://github.com/tauri-apps/tauri/blob/4bee3a7/tooling/api/src/http.ts#L131)

___

### url

• **url**: `string`

The request URL.

#### Defined in

[http.ts:129](https://github.com/tauri-apps/tauri/blob/4bee3a7/tooling/api/src/http.ts#L129)
