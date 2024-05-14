---
title: '@tauri-apps/plugin-deep-link'
editUrl: false
sidebar:
  label: 'deep-link'
---

## Functions

### getCurrent()

```ts
getCurrent(): Promise< string[] | null >
```

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string`[] \| `null` \>

**Source**: [index.ts:8](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/deep-link/guest-js/index.ts#L8)

---

### onOpenUrl()

```ts
onOpenUrl(handler): Promise< UnlistenFn >
```

#### Parameters

| Parameter | Type               |
| :-------- | :----------------- |
| `handler` | (`urls`) => `void` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `UnlistenFn` \>

**Source**: [index.ts:14](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/deep-link/guest-js/index.ts#L14)
