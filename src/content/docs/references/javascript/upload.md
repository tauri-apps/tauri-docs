---
title: '@tauri-apps/plugin-upload'
editUrl: false
sidebar:
  label: 'upload'
---

## Functions

### download()

```ts
download(
  url,
  filePath,
  progressHandler?,
  headers?): Promise< void >
```

#### Parameters

| Parameter          | Type                                                                                                            |
| :----------------- | :-------------------------------------------------------------------------------------------------------------- |
| `url`              | `string`                                                                                                        |
| `filePath`         | `string`                                                                                                        |
| `progressHandler`? | `ProgressHandler`                                                                                               |
| `headers`?         | [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\< `string`, `string` \> |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:42](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/upload/guest-js/index.ts#L42)

---

### upload()

```ts
upload(
  url,
  filePath,
  progressHandler?,
  headers?): Promise< void >
```

#### Parameters

| Parameter          | Type                                                                                                            |
| :----------------- | :-------------------------------------------------------------------------------------------------------------- |
| `url`              | `string`                                                                                                        |
| `filePath`         | `string`                                                                                                        |
| `progressHandler`? | `ProgressHandler`                                                                                               |
| `headers`?         | [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\< `string`, `string` \> |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:14](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/upload/guest-js/index.ts#L14)
