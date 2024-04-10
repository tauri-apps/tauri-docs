---
title: '@tauri-apps/plugin-positioner'
editUrl: false
prev: false
next: false
---

## Enumerations

### Position

Well known window positions.

#### Enumeration Members

##### BottomCenter

```ts
BottomCenter: 5;
```

**Source**: [index.ts:17](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L17)

---

##### BottomLeft

```ts
BottomLeft: 2;
```

**Source**: [index.ts:14](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L14)

---

##### BottomRight

```ts
BottomRight: 3;
```

**Source**: [index.ts:15](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L15)

---

##### Center

```ts
Center: 8;
```

**Source**: [index.ts:20](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L20)

---

##### LeftCenter

```ts
LeftCenter: 6;
```

**Source**: [index.ts:18](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L18)

---

##### RightCenter

```ts
RightCenter: 7;
```

**Source**: [index.ts:19](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L19)

---

##### TopCenter

```ts
TopCenter: 4;
```

**Source**: [index.ts:16](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L16)

---

##### TopLeft

```ts
TopLeft: 0;
```

**Source**: [index.ts:12](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L12)

---

##### TopRight

```ts
TopRight: 1;
```

**Source**: [index.ts:13](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L13)

---

##### TrayBottomCenter

```ts
TrayBottomCenter: 14;
```

**Source**: [index.ts:26](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L26)

---

##### TrayBottomLeft

```ts
TrayBottomLeft: 10;
```

**Source**: [index.ts:22](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L22)

---

##### TrayBottomRight

```ts
TrayBottomRight: 12;
```

**Source**: [index.ts:24](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L24)

---

##### TrayCenter

```ts
TrayCenter: 13;
```

**Source**: [index.ts:25](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L25)

---

##### TrayLeft

```ts
TrayLeft: 9;
```

**Source**: [index.ts:21](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L21)

---

##### TrayRight

```ts
TrayRight: 11;
```

**Source**: [index.ts:23](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L23)

## Functions

### moveWindow()

```ts
moveWindow(to): Promise< void >
```

Moves the `Window` to the given [Position](/references/js/positioner/#position) using `WindowExt.move_window()`
All positions are relative to the **current** screen.

#### Parameters

| Parameter | Type                                              | Description                                                     |
| :-------- | :------------------------------------------------ | :-------------------------------------------------------------- |
| `to`      | [`Position`](/references/js/positioner/#position) | The [Position](/references/js/positioner/#position) to move to. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:35](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/positioner/guest-js/index.ts#L35)
