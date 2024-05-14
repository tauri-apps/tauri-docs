---
title: 'image'
editUrl: false
sidebar:
  label: 'image'
---

## Classes

### Image

An RGBA Image in row-major order from top to bottom.

#### Extends

- [`Resource`](/references/javascript/api/namespacecore/#resource)

#### Properties

| Property                                                  | Type     |
| :-------------------------------------------------------- | :------- |
| `private` `readonly` <a id="#rid" name="#rid"></a> `#rid` | `number` |

#### Accessors

##### rid

```ts
get rid(): number
```

**Source**: [core.ts:222](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L222)

###### Inherited from

[`Resource`](/references/javascript/api/namespacecore/#resource).[`rid`](/references/javascript/api/namespacecore/#rid)

#### Methods

##### close()

```ts
close(): Promise< void >
```

Destroys and cleans up this resource from memory.
**You should not call any method on this object anymore and should drop any reference to it.**

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

###### Inherited from

[`Resource`](/references/javascript/api/namespacecore/#resource).[`close`](/references/javascript/api/namespacecore/#close)

**Source**: [core.ts:234](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/core.ts#L234)

---

##### rgba()

```ts
rgba(): Promise< Uint8Array >
```

Returns the RGBA data for this image, in row-major order from top to bottom.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \>

**Source**: [image.ts:79](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/image.ts#L79)

---

##### size()

```ts
size(): Promise< ImageSize >
```

Returns the size of this image.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`ImageSize`](/references/javascript/api/namespaceimage/#imagesize) \>

**Source**: [image.ts:86](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/image.ts#L86)

---

##### fromBytes()

```ts
static fromBytes(bytes): Promise< Image >
```

Creates a new image using the provided bytes by inferring the file format.
If the format is known, prefer [@link Image.fromPngBytes] or [@link Image.fromIcoBytes].

Only `ico` and `png` are supported (based on activated feature flag).

Note that you need the `image-ico` or `image-png` Cargo features to use this API.
To enable it, change your Cargo.toml file:

```toml
[dependencies]
tauri = { version = "...", features = ["...", "image-png"] }
```

###### Parameters

| Parameter | Type                                                                                                                                                                                                                           |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bytes`   | `number`[] \| [`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Image`](/references/javascript/api/namespaceimage/#image) \>

**Source**: [image.ts:52](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/image.ts#L52)

---

##### fromPath()

```ts
static fromPath(path): Promise< Image >
```

Creates a new image using the provided path.

Only `ico` and `png` are supported (based on activated feature flag).

Note that you need the `image-ico` or `image-png` Cargo features to use this API.
To enable it, change your Cargo.toml file:

```toml
[dependencies]
tauri = { version = "...", features = ["...", "image-png"] }
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `path`    | `string` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Image`](/references/javascript/api/namespaceimage/#image) \>

**Source**: [image.ts:72](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/image.ts#L72)

---

##### new()

```ts
static new(
  rgba,
  width,
  height): Promise< Image >
```

Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height.

###### Parameters

| Parameter | Type                                                                                                                                                                                                                           |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rgba`    | `number`[] \| [`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) |
| `width`   | `number`                                                                                                                                                                                                                       |
| `height`  | `number`                                                                                                                                                                                                                       |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Image`](/references/javascript/api/namespaceimage/#image) \>

**Source**: [image.ts:27](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/image.ts#L27)

## Interfaces

### ImageSize

#### Properties

| Property                                   | Type     |
| :----------------------------------------- | :------- |
| <a id="height" name="height"></a> `height` | `number` |
| <a id="width" name="width"></a> `width`    | `number` |

## Functions

### transformImage()

```ts
transformImage<T>(image): T
```

Transforms image from various types into a type acceptable by Rust.

See [tauri::image::JsImage](https://docs.rs/tauri/2/tauri/image/enum.JsImage.html) for more information.
Note the API signature is not stable and might change.

#### Type parameters

| Parameter |
| :-------- |
| `T`       |

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                                                                                |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `image`   | `null` \| `string` \| `number`[] \| [`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \| [`Image`](/references/javascript/api/namespaceimage/#image) |

#### Returns

`T`

**Source**: [image.ts:97](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/image.ts#L97)
