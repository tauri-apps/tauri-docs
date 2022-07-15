[@tauri-apps/api](../README.md) / [http](../modules/http.md) / Client

# Class: Client

[http](../modules/http.md).Client

## Properties

### id

 **id**: `number`

#### Defined in

[http.ts:251](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/http.ts#L251)

## Methods

### delete

**delete**<`T`\>(`url`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a DELETE request.

**`Example`**

```typescript
import { getClient } from '@tauri-apps/api/http';
const client = await getClient();
const response = await client.delete('http://localhost:3003/users/1');
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

___

### drop

**drop**(): `Promise`<`void`\>

Drops the client instance.

**`Example`**

```typescript
import { getClient } from '@tauri-apps/api/http';
const client = await getClient();
await client.drop();
```

#### Returns

`Promise`<`void`\>

___

### get

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

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

___

### patch

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

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

___

### post

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

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `body?` | [`Body`](http.Body.md) | The body of the request. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

___

### put

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

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `body?` | [`Body`](http.Body.md) | The body of the request. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | Request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

___

### request

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

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`HttpOptions`](../interfaces/http.HttpOptions.md) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.
