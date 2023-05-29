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

**Since**: 1.0.0

#### Enumeration Members

| Name | Type | Defined in |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="http.ResponseType.Binary"><a href="#http.ResponseType.Binary">`Binary`</a></div> | `3` | [http.ts:74](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L74) |
| <div class="anchor-with-padding" id="http.ResponseType.JSON"><a href="#http.ResponseType.JSON">`JSON`</a></div> | `1` | [http.ts:72](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L72) |
| <div class="anchor-with-padding" id="http.ResponseType.Text"><a href="#http.ResponseType.Text">`Text`</a></div> | `2` | [http.ts:73](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L73) |

## Classes

### `Body`

The body object to be used on POST and PUT requests.

**Since**: 1.0.0

#### Properties

##### `payload`

>  **payload**: `unknown`

**Defined in:** [http.ts:95](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L95)

##### `type`

>  **type**: `string`

**Defined in:** [http.ts:94](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L94)

#### Methods

##### `bytes`

> `Static` **bytes**(`bytes`: `Iterable`<`number`\> \| [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) \| `ArrayLike`<`number`\>): [`Body`](http.md#body)

Creates a new byte array body.

**Example**

```typescript
import { Body } from "@tauri-apps/api/http"
Body.bytes(new Uint8Array([1, 2, 3]));
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Iterable`<`number`\> \| [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) \| `ArrayLike`<`number`\> | The body byte array. |

**Returns: **[`Body`](http.md#body)

The body object ready to be used on the POST and PUT requests.

##### `form`

> `Static` **form**(`data`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`string`, [`Part`](http.md#part)\> \| [`FormData`]( https://developer.mozilla.org/en-US/docs/Web/API/FormData )): [`Body`](http.md#body)

Creates a new form data body. The form data is an object where each key is the entry name,
and the value is either a string or a file object.

By default it sets the `application/x-www-form-urlencoded` Content-Type header,
but you can set it to `multipart/form-data` if the Cargo feature `http-multipart` is enabled.

Note that a file path must be allowed in the `fs` allowlist scope.

**Example**

```typescript
import { Body } from "@tauri-apps/api/http"
const body = Body.form({
  key: 'value',
  image: {
    file: '/path/to/file', // either a path or an array buffer of the file contents
    mime: 'image/jpeg', // optional
    fileName: 'image.jpg' // optional
  }
});

// alternatively, use a FormData:
const form = new FormData();
form.append('key', 'value');
form.append('image', file, 'image.png');
const formBody = Body.form(form);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`string`, [`Part`](http.md#part)\> \| [`FormData`]( https://developer.mozilla.org/en-US/docs/Web/API/FormData ) | The body data. |

**Returns: **[`Body`](http.md#body)

The body object ready to be used on the POST and PUT requests.

##### `json`

> `Static` **json**(`data`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`any`, `any`\>): [`Body`](http.md#body)

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
| `data` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`any`, `any`\> | The body JSON object. |

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The body string. |

**Returns: **[`Body`](http.md#body)

The body object ready to be used on the POST and PUT requests.

### `Client`

**Since**: 1.0.0

#### Properties

##### `id`

>  **id**: `number`

**Defined in:** [http.ts:303](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L303)

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

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`RequestOptions`](http.md#requestoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

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

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`RequestOptions`](http.md#requestoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

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

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`RequestOptions`](http.md#requestoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

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

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `body?` | [`Body`](http.md#body) |
| `options?` | [`RequestOptions`](http.md#requestoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

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

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `body?` | [`Body`](http.md#body) |
| `options?` | [`RequestOptions`](http.md#requestoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

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

| Name | Type |
| :------ | :------ |
| `options` | [`HttpOptions`](http.md#httpoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

### `Response<T>`

Response object.

**Since**: 1.0.0

**Type parameters**

- `T`

#### Properties

##### `data`

>  **data**: `T`

The response data.

**Defined in:** [http.ts:286](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L286)

##### `headers`

>  **headers**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`string`, `string`\>

The response headers.

**Defined in:** [http.ts:282](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L282)

##### `ok`

>  **ok**: `boolean`

A boolean indicating whether the response was successful (status in the range 200–299) or not.

**Defined in:** [http.ts:280](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L280)

##### `rawHeaders`

>  **rawHeaders**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`string`, `string`[]\>

The response raw headers.

**Defined in:** [http.ts:284](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L284)

##### `status`

>  **status**: `number`

The response status code.

**Defined in:** [http.ts:278](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L278)

##### `url`

>  **url**: `string`

The request URL.

**Defined in:** [http.ts:276](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L276)

## Interfaces

### `ClientOptions`

**Since**: 1.0.0

#### Properties

##### `connectTimeout`

> `Optional` **connectTimeout**: `number` \| [`Duration`](http.md#duration)

**Defined in:** [http.ts:65](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L65)

##### `maxRedirections`

> `Optional` **maxRedirections**: `number`

Defines the maximum number of redirects the client should follow.
If set to 0, no redirects will be followed.

**Defined in:** [http.ts:64](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L64)

### `Duration`

**Since**: 1.0.0

#### Properties

##### `nanos`

>  **nanos**: `number`

**Defined in:** [http.ts:53](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L53)

##### `secs`

>  **secs**: `number`

**Defined in:** [http.ts:52](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L52)

### `FilePart<T>`

**Since**: 1.0.0

**Type parameters**

- `T`

#### Properties

##### `file`

>  **file**: `string` \| `T`

**Defined in:** [http.ts:81](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L81)

##### `fileName`

> `Optional` **fileName**: `string`

**Defined in:** [http.ts:83](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L83)

##### `mime`

> `Optional` **mime**: `string`

**Defined in:** [http.ts:82](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L82)

### `HttpOptions`

Options object sent to the backend.

**Since**: 1.0.0

#### Properties

##### `body`

> `Optional` **body**: [`Body`](http.md#body)

**Defined in:** [http.ts:250](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L250)

##### `headers`

> `Optional` **headers**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`string`, `any`\>

**Defined in:** [http.ts:248](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L248)

##### `method`

>  **method**: [`HttpVerb`](http.md#httpverb)

**Defined in:** [http.ts:246](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L246)

##### `query`

> `Optional` **query**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`string`, `any`\>

**Defined in:** [http.ts:249](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L249)

##### `responseType`

> `Optional` **responseType**: [`ResponseType`](http.md#responsetype)

**Defined in:** [http.ts:252](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L252)

##### `timeout`

> `Optional` **timeout**: `number` \| [`Duration`](http.md#duration)

**Defined in:** [http.ts:251](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L251)

##### `url`

>  **url**: `string`

**Defined in:** [http.ts:247](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L247)

## Type Aliases

### `FetchOptions`

>  **FetchOptions**: [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )<[`HttpOptions`](http.md#httpoptions), `"url"`\>

Options for the `fetch` API.

**Defined in:** [http.ts:258](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L258)

### `HttpVerb`

>  **HttpVerb**: `"GET"` \| `"POST"` \| `"PUT"` \| `"DELETE"` \| `"PATCH"` \| `"HEAD"` \| `"OPTIONS"` \| `"CONNECT"` \| `"TRACE"`

The request HTTP verb.

**Defined in:** [http.ts:229](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L229)

### `Part`

>  **Part**: `string` \| [`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) \| [`FilePart`](http.md#filepart)<[`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )\>

**Defined in:** [http.ts:86](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L86)

### `RequestOptions`

>  **RequestOptions**: [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )<[`HttpOptions`](http.md#httpoptions), `"method"` \| `"url"`\>

Request options.

**Defined in:** [http.ts:256](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/http.ts#L256)

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

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`FetchOptions`](http.md#fetchoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Response`](http.md#response)<`T`\>\>

### `getClient`

> **getClient**(`options?`: [`ClientOptions`](http.md#clientoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Client`](http.md#client)\>

Creates a new client using the specified options.

**Example**

```typescript
import { getClient } from '@tauri-apps/api/http';
const client = await getClient();
```

**Since**: 1.0.0

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ClientOptions`](http.md#clientoptions) | Client configuration. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Client`](http.md#client)\>

A promise resolving to the client instance.
