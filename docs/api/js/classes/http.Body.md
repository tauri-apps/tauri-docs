[@tauri-apps/api](../README.md) / [http](../modules/http.md) / Body

# Class: Body

[http](../modules/http.md).Body

The body object to be used on POST and PUT requests.

## Properties

### payload

 **payload**: `unknown`

#### Defined in

[http.ts:75](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/http.ts#L75)

___

### type

 **type**: `string`

#### Defined in

[http.ts:74](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/http.ts#L74)

## Methods

### bytes

`Static` **bytes**(`bytes`): [`Body`](http.Body.md)

Creates a new byte array body.

**`Example`**

```typescript
import { Body } from "@tauri-apps/api/http"
Body.bytes(new Uint8Array([1, 2, 3]));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `ArrayBuffer` \| `ArrayLike`<`number`\> \| `Iterable`<`number`\> |

#### Returns

[`Body`](http.Body.md)

The body object ready to be used on the POST and PUT requests.

___

### form

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Record`<`string`, [`Part`](../modules/http.md#part)\> | The body data. |

#### Returns

[`Body`](http.Body.md)

The body object ready to be used on the POST and PUT requests.

___

### json

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Record`<`any`, `any`\> | The body JSON object. |

#### Returns

[`Body`](http.Body.md)

The body object ready to be used on the POST and PUT requests.

___

### text

`Static` **text**(`value`): [`Body`](http.Body.md)

Creates a new UTF-8 string body.

**`Example`**

```typescript
import { Body } from "@tauri-apps/api/http"
Body.text('The body content as a string');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Body`](http.Body.md)

The body object ready to be used on the POST and PUT requests.
