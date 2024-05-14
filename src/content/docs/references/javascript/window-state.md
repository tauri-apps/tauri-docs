---
title: '@tauri-apps/plugin-window-state'
editUrl: false
sidebar:
  label: 'window-state'
---

## Enumerations

### StateFlags

#### Enumeration Members

##### ALL

```ts
ALL: 63;
```

**Source**: [index.ts:15](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/window-state/guest-js/index.ts#L15)

---

##### DECORATIONS

```ts
DECORATIONS: 16;
```

**Source**: [index.ts:13](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/window-state/guest-js/index.ts#L13)

---

##### FULLSCREEN

```ts
FULLSCREEN: 32;
```

**Source**: [index.ts:14](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/window-state/guest-js/index.ts#L14)

---

##### MAXIMIZED

```ts
MAXIMIZED: 4;
```

**Source**: [index.ts:11](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/window-state/guest-js/index.ts#L11)

---

##### POSITION

```ts
POSITION: 2;
```

**Source**: [index.ts:10](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/window-state/guest-js/index.ts#L10)

---

##### SIZE

```ts
SIZE: 1;
```

**Source**: [index.ts:9](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/window-state/guest-js/index.ts#L9)

---

##### VISIBLE

```ts
VISIBLE: 8;
```

**Source**: [index.ts:12](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/window-state/guest-js/index.ts#L12)

## Functions

### restoreState()

```ts
restoreState(label, flags): Promise< void >
```

Restore the state for the specified window from disk.

#### Parameters

| Parameter | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `label`   | `string`                                                        |
| `flags`   | [`StateFlags`](/references/javascript/window-state/#stateflags) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:28](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/window-state/guest-js/index.ts#L28)

---

### restoreStateCurrent()

```ts
restoreStateCurrent(flags): Promise< void >
```

Restore the state for the current window from disk.

#### Parameters

| Parameter | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `flags`   | [`StateFlags`](/references/javascript/window-state/#stateflags) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:38](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/window-state/guest-js/index.ts#L38)

---

### saveWindowState()

```ts
saveWindowState(flags): Promise< void >
```

Save the state of all open windows to disk.

#### Parameters

| Parameter | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `flags`   | [`StateFlags`](/references/javascript/window-state/#stateflags) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:21](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/window-state/guest-js/index.ts#L21)
