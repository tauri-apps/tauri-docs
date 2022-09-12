# http

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

### `ResponseType`

#### Enumeration Members

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="http.ResponseType.Binary"><a href="#http.ResponseType.Binary">`Binary`</a></div> | `3` | [http.ts:61](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L61) |
| <div class="anchor-with-padding" id="http.ResponseType.JSON"><a href="#http.ResponseType.JSON">`JSON`</a></div> | `1` | [http.ts:59](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L59) |
| <div class="anchor-with-padding" id="http.ResponseType.Text"><a href="#http.ResponseType.Text">`Text`</a></div> | `2` | [http.ts:60](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L60) |

## Classes

### `Body`

The body object to be used on POST and PUT requests.

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="http.Body.payload"><a href="#http.Body.payload">`payload`</a></div> | `unknown` | [http.ts:75](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L75) |
| <div class="anchor-with-padding" id="http.Body.type"><a href="#http.Body.type">`type`</a></div> | `string` | [http.ts:74](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L74) |

#### Methods

##### `bytes`

> `Static` **bytes**(`bytes`: [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) \| `ArrayLike`<`number`\> \| `Iterable`<`number`\>): [`Body`](http.md#body)

Creates a new byte array body.

**Example**

```typescript
import { Body } from "@tauri-apps/api/http"
Body.bytes(new Uint8Array([1, 2, 3]));
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `bytes` | [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) \| `ArrayLike`<`number`\> \| `Iterable`<`number`\> |

**Returns: **[`Body`](http.md#body)

The body object ready to be used on the POST and PUT requests.

##### `form`

> `Static` **form**(`data`: `Record`<`string`, [`Part`](http.md#part)\>): [`Body`](http.md#body)

Creates a new form data body. The form data is an object where each key is the entry name,
and the value is either a string or a file object.

By default it sets the `application/x-www-form-urlencoded` Content-Type header,
but you can set it to `multipart/form-data` if the Cargo feature `http-multipart` is enabled.

Note that a file path must be allowed in the `fs` allowlist scope.

**Example**

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

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Record`<`string`, [`Part`](http.md#part)\> | The body data. |

**Returns: **[`Body`](http.md#body)

The body object ready to be used on the POST and PUT requests.

##### `json`

> `Static` **json**(`data`: `Record`<`any`, `any`\>): [`Body`](http.md#body)

Creates a new JSON body.

**Example**

```typescript
import { Body } from "@tauri-apps/api/http"
Body.json({
  registered: true,
  name: 'tauri'
});
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Record`<`any`, `any`\> | The body JSON object. |

**Returns: **[`Body`](http.md#body)

The body object ready to be used on the POST and PUT requests.

##### `text`

> `Static` **text**(`value`: `string`): [`Body`](http.md#body)

Creates a new UTF-8 string body.

**Example**

```typescript
import { Body } from "@tauri-apps/api/http"
Body.text('The body content as a string');
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `value` | `string` |

**Returns: **[`Body`](http.md#body)

The body object ready to be used on the POST and PUT requests.

### `Client`

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="http.Client.id"><a href="#http.Client.id">`id`</a></div> | `number` | [http.ts:251](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L251) |

#### Methods

##### `delete`

> **delete**<`T`\>(`url`: `string`, `options?`: [`RequestOptions`](http.md#requestoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

Makes a DELETE request.

**Example**

```typescript
import { getClient } from '@tauri-apps/api/http';
const client = await getClient();
const response = await client.delete('http://localhost:3003/users/1');
```

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](http.md#requestoptions) | The request options. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

A promise resolving to the response.

##### `drop`

> **drop**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Drops the client instance.

**Example**

```typescript
import { getClient } from '@tauri-apps/api/http';
const client = await getClient();
await client.drop();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

##### `get`

> **get**<`T`\>(`url`: `string`, `options?`: [`RequestOptions`](http.md#requestoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

Makes a GET request.

**Example**

```typescript
import { getClient, ResponseType } from '@tauri-apps/api/http';
const client = await getClient();
const response = await client.get('http://localhost:3003/users', {
  timeout: 30,
  // the expected response type
  responseType: ResponseType.JSON
});
```

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](http.md#requestoptions) | The request options. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

A promise resolving to the response.

##### `patch`

> **patch**<`T`\>(`url`: `string`, `options?`: [`RequestOptions`](http.md#requestoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

Makes a PATCH request.

**Example**

```typescript
import { getClient, Body } from '@tauri-apps/api/http';
const client = await getClient();
const response = await client.patch('http://localhost:3003/users/1', {
  body: Body.json({ email: 'contact@tauri.app' })
});
```

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](http.md#requestoptions) | The request options. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

A promise resolving to the response.

##### `post`

> **post**<`T`\>(`url`: `string`, `body?`: [`Body`](http.md#body), `options?`: [`RequestOptions`](http.md#requestoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

Makes a POST request.

**Example**

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

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `body?` | [`Body`](http.md#body) | The body of the request. |
| `options?` | [`RequestOptions`](http.md#requestoptions) | The request options. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

A promise resolving to the response.

##### `put`

> **put**<`T`\>(`url`: `string`, `body?`: [`Body`](http.md#body), `options?`: [`RequestOptions`](http.md#requestoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

Makes a PUT request.

**Example**

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

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `body?` | [`Body`](http.md#body) | The body of the request. |
| `options?` | [`RequestOptions`](http.md#requestoptions) | Request options. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

A promise resolving to the response.

##### `request`

> **request**<`T`\>(`options`: [`HttpOptions`](http.md#httpoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

Makes an HTTP request.

**Example**

```typescript
import { getClient } from '@tauri-apps/api/http';
const client = await getClient();
const response = await client.request({
  method: 'GET',
  url: 'http://localhost:3003/users',
});
```

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`HttpOptions`](http.md#httpoptions) | The request options. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

A promise resolving to the response.

### `Response<T\>`

Response object.

**Type parameters**

- `T`

#### Properties

| Name | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="http.Response.data"><a href="#http.Response.data">`data`</a></div> | `T` | The response data. | [http.ts:237](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L237) |
| <div class="anchor-with-padding" id="http.Response.headers"><a href="#http.Response.headers">`headers`</a></div> | `Record`<`string`, `string`\> | The response headers. | [http.ts:233](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L233) |
| <div class="anchor-with-padding" id="http.Response.ok"><a href="#http.Response.ok">`ok`</a></div> | `boolean` | A boolean indicating whether the response was successful (status in the range 200–299) or not. | [http.ts:231](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L231) |
| <div class="anchor-with-padding" id="http.Response.rawHeaders"><a href="#http.Response.rawHeaders">`rawHeaders`</a></div> | `Record`<`string`, `string`[]\> | The response raw headers. | [http.ts:235](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L235) |
| <div class="anchor-with-padding" id="http.Response.status"><a href="#http.Response.status">`status`</a></div> | `number` | The response status code. | [http.ts:229](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L229) |
| <div class="anchor-with-padding" id="http.Response.url"><a href="#http.Response.url">`url`</a></div> | `string` | The request URL. | [http.ts:227](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L227) |

## Interfaces

### `ClientOptions`

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="http.ClientOptions.connectTimeout"><a href="#http.ClientOptions.connectTimeout">`connectTimeout?`</a></div> | `number` \| [`Duration`](http.md#duration) | [http.ts:55](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L55) |
| <div class="anchor-with-padding" id="http.ClientOptions.maxRedirections"><a href="#http.ClientOptions.maxRedirections">`maxRedirections?`</a></div> | `number` | [http.ts:54](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L54) |

### `Duration`

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="http.Duration.nanos"><a href="#http.Duration.nanos">`nanos`</a></div> | `number` | [http.ts:50](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L50) |
| <div class="anchor-with-padding" id="http.Duration.secs"><a href="#http.Duration.secs">`secs`</a></div> | `number` | [http.ts:49](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L49) |

### `FilePart<T\>`

**Type parameters**

- `T`

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="http.FilePart.file"><a href="#http.FilePart.file">`file`</a></div> | `string` \| `T` | [http.ts:65](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L65) |
| <div class="anchor-with-padding" id="http.FilePart.fileName"><a href="#http.FilePart.fileName">`fileName?`</a></div> | `string` | [http.ts:67](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L67) |
| <div class="anchor-with-padding" id="http.FilePart.mime"><a href="#http.FilePart.mime">`mime?`</a></div> | `string` | [http.ts:66](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L66) |

### `HttpOptions`

Options object sent to the backend.

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="http.HttpOptions.body"><a href="#http.HttpOptions.body">`body?`</a></div> | [`Body`](http.md#body) | [http.ts:205](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L205) |
| <div class="anchor-with-padding" id="http.HttpOptions.headers"><a href="#http.HttpOptions.headers">`headers?`</a></div> | `Record`<`string`, `any`\> | [http.ts:203](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L203) |
| <div class="anchor-with-padding" id="http.HttpOptions.method"><a href="#http.HttpOptions.method">`method`</a></div> | [`HttpVerb`](http.md#httpverb) | [http.ts:201](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L201) |
| <div class="anchor-with-padding" id="http.HttpOptions.query"><a href="#http.HttpOptions.query">`query?`</a></div> | `Record`<`string`, `any`\> | [http.ts:204](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L204) |
| <div class="anchor-with-padding" id="http.HttpOptions.responseType"><a href="#http.HttpOptions.responseType">`responseType?`</a></div> | [`ResponseType`](http.md#responsetype) | [http.ts:207](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L207) |
| <div class="anchor-with-padding" id="http.HttpOptions.timeout"><a href="#http.HttpOptions.timeout">`timeout?`</a></div> | `number` \| [`Duration`](http.md#duration) | [http.ts:206](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L206) |
| <div class="anchor-with-padding" id="http.HttpOptions.url"><a href="#http.HttpOptions.url">`url`</a></div> | `string` | [http.ts:202](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L202) |

## Type Aliases

### `FetchOptions`

 **FetchOptions**: `Omit`<[`HttpOptions`](http.md#httpoptions), `"url"`\>

Options for the `fetch` API.

[http.ts:213](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L213)

### `HttpVerb`

 **HttpVerb**: `"GET"` \| `"POST"` \| `"PUT"` \| `"DELETE"` \| `"PATCH"` \| `"HEAD"` \| `"OPTIONS"` \| `"CONNECT"` \| `"TRACE"`

The request HTTP verb.

[http.ts:188](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L188)

### `Part`

 **Part**: `string` \| [`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) \| [`FilePart`](http.md#filepart)<[`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )\>

[http.ts:70](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L70)

### `RequestOptions`

 **RequestOptions**: `Omit`<[`HttpOptions`](http.md#httpoptions), `"method"` \| `"url"`\>

Request options.

[http.ts:211](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/http.ts#L211)

## Functions

### `fetch`

> **fetch**<`T`\>(`url`: `string`, `options?`: [`FetchOptions`](http.md#fetchoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

Perform an HTTP request using the default client.

**Example**

```typescript
import { fetch } from '@tauri-apps/api/http';
const response = await fetch('http://localhost:3003/users/2', {
  method: 'GET',
  timeout: 30,
});
```

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`FetchOptions`](http.md#fetchoptions) | The fetch options. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

The response object.

### `getClient`

> **getClient**(`options?`: [`ClientOptions`](http.md#clientoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Client`](http.md#client)\>

Creates a new client using the specified options.

**Example**

```typescript
import { getClient } from '@tauri-apps/api/http';
const client = await getClient();
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ClientOptions`](http.md#clientoptions) | Client configuration. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Client`](http.md#client)\>

A promise resolving to the client instance.
