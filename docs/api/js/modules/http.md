[@tauri-apps/api](../README.md) / http

# Module: http

Access the HTTP client written in Rust.

This package is also accessible with `window.__TAURI__.http` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "http": {
        "all": true, // enable all http APIs
        "request": true // enable HTTP request API
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Security

This API has a scope configuration that forces you to restrict the URLs and paths that can be accessed using glob patterns.

For instance, this scope configuration only allows making HTTP requests to the GitHub API for the `tauri-apps` organization:
```json
{
  "tauri": {
    "allowlist": {
      "http": {
        "scope": ["https://api.github.com/repos/tauri-apps/*"]
      }
    }
  }
}
```
Trying to execute any API with a URL not configured on the scope results in a promise rejection due to denied access.

## Enumerations

### ResponseType

#### Members

##### Binary

 **Binary** = ``3``

###### Defined in

[http.ts:61](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L61)

___

##### JSON

 **JSON** = ``1``

###### Defined in

[http.ts:59](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L59)

___

##### Text

 **Text** = ``2``

###### Defined in

[http.ts:60](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L60)


## Classes

### Body

The body object to be used on POST and PUT requests.

#### Properties

##### payload

 **payload**: `unknown`

###### Defined in

[http.ts:75](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L75)

___

##### type

 **type**: `string`

###### Defined in

[http.ts:74](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L74)

#### Methods

##### bytes

`Static` **bytes**(`bytes`): [`Body`](http.Body.md)

Creates a new byte array body.

**`Example`**

```typescript
import { Body } from "@tauri-apps/api/http"
Body.bytes(new Uint8Array([1, 2, 3]));
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `ArrayBuffer` \| `ArrayLike`<`number`\> \| `Iterable`<`number`\> |

###### Returns

[`Body`](http.Body.md)

The body object ready to be used on the POST and PUT requests.

___

##### form

`Static` **form**(`data`): [`Body`](http.Body.md)

Creates a new form data body. The form data is an object where each key is the entry name,
and the value is either a string or a file object.

By default it sets the `application/x-www-form-urlencoded` Content-Type header,
but you can set it to `multipart/form-data` if the Cargo feature `http-multipart` is enabled.

Note that a file path must be allowed in the `fs` allowlist scope.

**`Example`**

```typescript
import { Body } from "@tauri-apps/api/http"
Body.form({
  key: 'value',
  image: {
    file: '/path/to/file', // either a path or an array buffer of the file contents
    mime: 'image/jpeg', // optional
    fileName: 'image.jpg' // optional
  }
});
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Record`<`string`, [`Part`](../modules/http.md#part)\> | The body data. |

###### Returns

[`Body`](http.Body.md)

The body object ready to be used on the POST and PUT requests.

___

##### json

`Static` **json**(`data`): [`Body`](http.Body.md)

Creates a new JSON body.

**`Example`**

```typescript
import { Body } from "@tauri-apps/api/http"
Body.json({
  registered: true,
  name: 'tauri'
});
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Record`<`any`, `any`\> | The body JSON object. |

###### Returns

[`Body`](http.Body.md)

The body object ready to be used on the POST and PUT requests.

___

##### text

`Static` **text**(`value`): [`Body`](http.Body.md)

Creates a new UTF-8 string body.

**`Example`**

```typescript
import { Body } from "@tauri-apps/api/http"
Body.text('The body content as a string');
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

###### Returns

[`Body`](http.Body.md)

The body object ready to be used on the POST and PUT requests.

### Client

#### Properties

##### id

 **id**: `number`

###### Defined in

[http.ts:251](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L251)

#### Methods

##### delete

**delete**<`T`\>(`url`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a DELETE request.

**`Example`**

```typescript
import { getClient } from '@tauri-apps/api/http';
const client = await getClient();
const response = await client.delete('http://localhost:3003/users/1');
```

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

###### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

___

##### drop

**drop**(): `Promise`<`void`\>

Drops the client instance.

**`Example`**

```typescript
import { getClient } from '@tauri-apps/api/http';
const client = await getClient();
await client.drop();
```

###### Returns

`Promise`<`void`\>

___

##### get

**get**<`T`\>(`url`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a GET request.

**`Example`**

```typescript
import { getClient, ResponseType } from '@tauri-apps/api/http';
const client = await getClient();
const response = await client.get('http://localhost:3003/users', {
  timeout: 30,
  // the expected response type
  responseType: ResponseType.JSON
});
```

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

###### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

___

##### patch

**patch**<`T`\>(`url`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a PATCH request.

**`Example`**

```typescript
import { getClient, Body } from '@tauri-apps/api/http';
const client = await getClient();
const response = await client.patch('http://localhost:3003/users/1', {
  body: Body.json({ email: 'contact@tauri.app' })
});
```

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

###### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

___

##### post

**post**<`T`\>(`url`, `body?`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a POST request.

**`Example`**

```typescript
import { getClient, Body, ResponseType } from '@tauri-apps/api/http';
const client = await getClient();
const response = await client.post('http://localhost:3003/users', {
  body: Body.json({
    name: 'tauri',
    password: 'awesome'
  }),
  // in this case the server returns a simple string
  responseType: ResponseType.Text,
});
```

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `body?` | [`Body`](http.Body.md) | The body of the request. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

###### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

___

##### put

**put**<`T`\>(`url`, `body?`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a PUT request.

**`Example`**

```typescript
import { getClient, Body } from '@tauri-apps/api/http';
const client = await getClient();
const response = await client.put('http://localhost:3003/users/1', {
  body: Body.form({
    file: {
      file: '/home/tauri/avatar.png',
      mime: 'image/png',
      fileName: 'avatar.png'
    }
  })
});
```

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `body?` | [`Body`](http.Body.md) | The body of the request. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | Request options. |

###### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

___

##### request

**request**<`T`\>(`options`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes an HTTP request.

**`Example`**

```typescript
import { getClient } from '@tauri-apps/api/http';
const client = await getClient();
const response = await client.request({
  method: 'GET',
  url: 'http://localhost:3003/users',
});
```

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`HttpOptions`](../interfaces/http.HttpOptions.md) | The request options. |

###### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

### Response<T\>

Response object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Properties

##### data

 **data**: `T`

The response data.

###### Defined in

[http.ts:237](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L237)

___

##### headers

 **headers**: `Record`<`string`, `string`\>

The response headers.

###### Defined in

[http.ts:233](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L233)

___

##### ok

 **ok**: `boolean`

A boolean indicating whether the response was successful (status in the range 200–299) or not.

###### Defined in

[http.ts:231](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L231)

___

##### rawHeaders

 **rawHeaders**: `Record`<`string`, `string`[]\>

The response raw headers.

###### Defined in

[http.ts:235](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L235)

___

##### status

 **status**: `number`

The response status code.

###### Defined in

[http.ts:229](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L229)

___

##### url

 **url**: `string`

The request URL.

###### Defined in

[http.ts:227](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L227)


## Interfaces

### ClientOptions

#### Properties

##### connectTimeout

 `Optional` **connectTimeout**: `number` \| [`Duration`](http.Duration.md)

###### Defined in

[http.ts:55](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L55)

___

##### maxRedirections

 `Optional` **maxRedirections**: `number`

###### Defined in

[http.ts:54](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L54)

### Duration

#### Properties

##### nanos

 **nanos**: `number`

###### Defined in

[http.ts:50](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L50)

___

##### secs

 **secs**: `number`

###### Defined in

[http.ts:49](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L49)

### FilePart<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Properties

##### file

 **file**: `string` \| `T`

###### Defined in

[http.ts:65](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L65)

___

##### fileName

 `Optional` **fileName**: `string`

###### Defined in

[http.ts:67](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L67)

___

##### mime

 `Optional` **mime**: `string`

###### Defined in

[http.ts:66](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L66)

### HttpOptions

Options object sent to the backend.

#### Properties

##### body

 `Optional` **body**: [`Body`](../classes/http.Body.md)

###### Defined in

[http.ts:205](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L205)

___

##### headers

 `Optional` **headers**: `Record`<`string`, `any`\>

###### Defined in

[http.ts:203](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L203)

___

##### method

 **method**: [`HttpVerb`](../modules/http.md#httpverb)

###### Defined in

[http.ts:201](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L201)

___

##### query

 `Optional` **query**: `Record`<`string`, `any`\>

###### Defined in

[http.ts:204](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L204)

___

##### responseType

 `Optional` **responseType**: [`ResponseType`](../enums/http.ResponseType.md)

###### Defined in

[http.ts:207](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L207)

___

##### timeout

 `Optional` **timeout**: `number` \| [`Duration`](http.Duration.md)

###### Defined in

[http.ts:206](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L206)

___

##### url

 **url**: `string`

###### Defined in

[http.ts:202](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L202)


## Type Aliases

### FetchOptions

 **FetchOptions**: `Omit`<[`HttpOptions`](../interfaces/http.HttpOptions.md), ``"url"``\>

Options for the `fetch` API.

#### Defined in

[http.ts:213](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L213)

___

### HttpVerb

 **HttpVerb**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"DELETE"`` \| ``"PATCH"`` \| ``"HEAD"`` \| ``"OPTIONS"`` \| ``"CONNECT"`` \| ``"TRACE"``

The request HTTP verb.

#### Defined in

[http.ts:188](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L188)

___

### Part

 **Part**: `string` \| `Uint8Array` \| [`FilePart`](../interfaces/http.FilePart.md)<`Uint8Array`\>

#### Defined in

[http.ts:70](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L70)

___

### RequestOptions

 **RequestOptions**: `Omit`<[`HttpOptions`](../interfaces/http.HttpOptions.md), ``"method"`` \| ``"url"``\>

Request options.

#### Defined in

[http.ts:211](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L211)

## Functions

### fetch

**fetch**<`T`\>(`url`, `options?`): `Promise`<[`Response`](../classes/http.Response.md)<`T`\>\>

Perform an HTTP request using the default client.

**`Example`**

```typescript
import { fetch } from '@tauri-apps/api/http';
const response = await fetch('http://localhost:3003/users/2', {
  method: 'GET',
  timeout: 30,
});
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`FetchOptions`](http.md#fetchoptions) | The fetch options. |

#### Returns

`Promise`<[`Response`](../classes/http.Response.md)<`T`\>\>

The response object.

___

### getClient

**getClient**(`options?`): `Promise`<[`Client`](../classes/http.Client.md)\>

Creates a new client using the specified options.

**`Example`**

```typescript
import { getClient } from '@tauri-apps/api/http';
const client = await getClient();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ClientOptions`](../interfaces/http.ClientOptions.md) | Client configuration. |

#### Returns

`Promise`<[`Client`](../classes/http.Client.md)\>

A promise resolving to the client instance.
