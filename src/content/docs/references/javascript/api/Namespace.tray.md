---
title: 'tray'
editUrl: false
sidebar:
  label: 'tray'
---

## Classes

### TrayIcon

Tray icon class and associated methods. This type constructor is private,
instead, you should use the static method [`TrayIcon.new`](/references/javascript/api/namespacetray/#new).

#### Warning

Unlike Rust, javascript does not have any way to run cleanup code
when an object is being removed by garbage collection, but this tray icon
will be cleaned up when the tauri app exists, however if you want to cleanup
this object early, you need to call [`TrayIcon.close`](/references/javascript/api/namespacecore/#close).

#### Example

```ts
import { TrayIcon } from '@tauri-apps/api/tray';
const tray = await TrayIcon.new({ tooltip: 'awesome tray tooltip' });
tray.set_tooltip('new tooltip');
```

#### Extends

- [`Resource`](/references/javascript/api/namespacecore/#resource)

#### Constructors

##### constructor()

```ts
private new TrayIcon(rid, id): TrayIcon
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `rid`     | `number` |
| `id`      | `string` |

###### Returns

[`TrayIcon`](/references/javascript/api/namespacetray/#trayicon)

###### Overrides

[`Resource`](/references/javascript/api/namespacecore/#resource).[`constructor`](/references/javascript/api/namespacecore/#constructor)

**Source**: [tray.ts:117](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/tray.ts#L117)

#### Properties

| Property                                                  | Type     | Description                            |
| :-------------------------------------------------------- | :------- | :------------------------------------- |
| `private` `readonly` <a id="#rid" name="#rid"></a> `#rid` | `number` | -                                      |
| <a id="id" name="id"></a> `id`                            | `string` | The id associated with this tray icon. |

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

##### setIcon()

```ts
setIcon(icon): Promise< void >
```

Sets a new tray icon. If `null` is provided, it will remove the icon.

Note that you need the `image-ico` or `image-png` Cargo features to use this API.
To enable it, change your Cargo.toml file:

```toml
[dependencies]
tauri = { version = "...", features = ["...", "image-png"] }
```

###### Parameters

| Parameter | Type                                                                                                                                                                                                                                                                                                                |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `icon`    | `null` \| `string` \| `number`[] \| [`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \| [`Image`](/references/javascript/api/namespaceimage/#image) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [tray.ts:178](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/tray.ts#L178)

---

##### setIconAsTemplate()

```ts
setIconAsTemplate(asTemplate): Promise< void >
```

Sets the current icon as a [template](https://developer.apple.com/documentation/appkit/nsimage/1520017-template?language=objc). **macOS only**

###### Parameters

| Parameter    | Type      |
| :----------- | :-------- |
| `asTemplate` | `boolean` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [tray.ts:246](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/tray.ts#L246)

---

##### setMenu()

```ts
setMenu(menu): Promise< void >
```

Sets a new tray menu.

#### Platform-specific:

- **Linux**: once a menu is set it cannot be removed so `null` has no effect

###### Parameters

| Parameter | Type                                                                                                                                 |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `menu`    | `null` \| [`Submenu`](/references/javascript/api/namespacemenu/#submenu) \| [`Menu`](/references/javascript/api/namespacemenu/#menu) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [tray.ts:195](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/tray.ts#L195)

---

##### setMenuOnLeftClick()

```ts
setMenuOnLeftClick(onLeft): Promise< void >
```

Disable or enable showing the tray menu on left click. **macOS only**.

###### Parameters

| Parameter | Type      |
| :-------- | :-------- |
| `onLeft`  | `boolean` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [tray.ts:254](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/tray.ts#L254)

---

##### setTempDirPath()

```ts
setTempDirPath(path): Promise< void >
```

Sets the tray icon temp dir path. **Linux only**.

On Linux, we need to write the icon to the disk and usually it will
be `$XDG_RUNTIME_DIR/tray-icon` or `$TEMP/tray-icon`.

###### Parameters

| Parameter | Type               |
| :-------- | :----------------- |
| `path`    | `null` \| `string` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [tray.ts:241](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/tray.ts#L241)

---

##### setTitle()

```ts
setTitle(title): Promise< void >
```

Sets the tooltip for this tray icon.

## Platform-specific:

- **Linux:** The title will not be shown unless there is an icon
  as well. The title is useful for numerical and other frequently
  updated information. In general, it shouldn't be shown unless a
  user requests it as it can take up a significant amount of space
  on the user's panel. This may not be shown in all visualizations.
- **Windows:** Unsupported

###### Parameters

| Parameter | Type               |
| :-------- | :----------------- |
| `title`   | `null` \| `string` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [tray.ts:226](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/tray.ts#L226)

---

##### setTooltip()

```ts
setTooltip(tooltip): Promise< void >
```

Sets the tooltip for this tray icon.

## Platform-specific:

- **Linux:** Unsupported

###### Parameters

| Parameter | Type               |
| :-------- | :----------------- |
| `tooltip` | `null` \| `string` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [tray.ts:210](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/tray.ts#L210)

---

##### setVisible()

```ts
setVisible(visible): Promise< void >
```

Show or hide this tray icon.

###### Parameters

| Parameter | Type      |
| :-------- | :-------- |
| `visible` | `boolean` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [tray.ts:231](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/tray.ts#L231)

---

##### getById()

```ts
static getById(id): Promise< null | TrayIcon >
```

Gets a tray icon using the provided id.

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `null` \| [`TrayIcon`](/references/javascript/api/namespacetray/#trayicon) \>

**Source**: [tray.ts:123](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/tray.ts#L123)

---

##### new()

```ts
static new(options?): Promise< TrayIcon >
```

Creates a new [`TrayIcon`](/references/javascript/api/namespacetray/#trayicon)

#### Platform-specific:

- **Linux:** Sometimes the icon won't be visible unless a menu is set.
  Setting an empty [`Menu`](/references/javascript/api/namespacemenu/#menu) is enough.

###### Parameters

| Parameter  | Type                                                                           |
| :--------- | :----------------------------------------------------------------------------- |
| `options`? | [`TrayIconOptions`](/references/javascript/api/namespacetray/#trayiconoptions) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`TrayIcon`](/references/javascript/api/namespacetray/#trayicon) \>

**Source**: [tray.ts:147](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/tray.ts#L147)

---

##### removeById()

```ts
static removeById(id): Promise< void >
```

Removes a tray icon using the provided id from tauri's internal state.

Note that this may cause the tray icon to disappear
if it wasn't cloned somewhere else or referenced by JS.

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [tray.ts:135](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/tray.ts#L135)

## Interfaces

### TrayIconEvent

Describes a tray event emitted when a tray icon is clicked

#### Platform-specific:

- **Linux**: Unsupported. The event is not emitted even though the icon is shown,
  the icon will still show a context menu on right click.

#### Properties

| Property                                            | Type                                | Description                                                  |
| :-------------------------------------------------- | :---------------------------------- | :----------------------------------------------------------- |
| <a id="clicktype" name="clicktype"></a> `clickType` | `"Left"` \| `"Right"` \| `"Double"` | The click type that triggered this event.                    |
| <a id="iconrect" name="iconrect"></a> `iconRect`    | `object`                            | Position and size of the tray icon.                          |
| <a id="bottom" name="bottom"></a> `iconRect.bottom` | `number`                            | The y-coordinate of the lower-right corner of the rectangle. |
| <a id="left" name="left"></a> `iconRect.left`       | `number`                            | The x-coordinate of the upper-left corner of the rectangle.  |
| <a id="right" name="right"></a> `iconRect.right`    | `number`                            | The x-coordinate of the lower-right corner of the rectangle. |
| <a id="top" name="top"></a> `iconRect.top`          | `number`                            | The y-coordinate of the upper-left corner of the rectangle.  |
| <a id="id" name="id"></a> `id`                      | `string`                            | Id of the tray icon which triggered this event.              |
| <a id="x" name="x"></a> `x`                         | `number`                            | Physical X Position of the click the triggered this event.   |
| <a id="y" name="y"></a> `y`                         | `number`                            | Physical Y Position of the click the triggered this event.   |

---

### TrayIconOptions

TrayIcon.new|`TrayIcon` creation options

#### Properties

| Property                                                               | Type                                                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :--------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="action" name="action"></a> `action`?                            | (`event`) => `void`                                                                                                                                                                                                                                                                                       | -                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| <a id="icon" name="icon"></a> `icon`?                                  | `string` \| `number`[] \| [`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \| [`Image`](/references/javascript/api/namespaceimage/#image) | The tray icon which could be icon bytes or path to the icon file.<br /><br />Note that you need the `image-ico` or `image-png` Cargo features to use this API.<br />To enable it, change your Cargo.toml file:<br />`toml [dependencies] tauri = { version = "...", features = ["...", "image-png"] } `                                                                                                                                              |
| <a id="iconastemplate" name="iconastemplate"></a> `iconAsTemplate`?    | `boolean`                                                                                                                                                                                                                                                                                                 | Use the icon as a [template](https://developer.apple.com/documentation/appkit/nsimage/1520017-template?language=objc). **macOS only**.                                                                                                                                                                                                                                                                                                               |
| <a id="id" name="id"></a> `id`?                                        | `string`                                                                                                                                                                                                                                                                                                  | The tray icon id. If undefined, a random one will be assigned                                                                                                                                                                                                                                                                                                                                                                                        |
| <a id="menu" name="menu"></a> `menu`?                                  | [`Submenu`](/references/javascript/api/namespacemenu/#submenu) \| [`Menu`](/references/javascript/api/namespacemenu/#menu)                                                                                                                                                                                | The tray icon menu                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| <a id="menuonleftclick" name="menuonleftclick"></a> `menuOnLeftClick`? | `boolean`                                                                                                                                                                                                                                                                                                 | Whether to show the tray menu on left click or not, default is `true`. **macOS only**.                                                                                                                                                                                                                                                                                                                                                               |
| <a id="tempdirpath" name="tempdirpath"></a> `tempDirPath`?             | `string`                                                                                                                                                                                                                                                                                                  | The tray icon temp dir path. **Linux only**.<br /><br />On Linux, we need to write the icon to the disk and usually it will<br />be `$XDG_RUNTIME_DIR/tray-icon` or `$TEMP/tray-icon`.                                                                                                                                                                                                                                                               |
| <a id="title" name="title"></a> `title`?                               | `string`                                                                                                                                                                                                                                                                                                  | The tray title<br /><br />#### Platform-specific<br /><br />- **Linux:** The title will not be shown unless there is an icon<br />as well. The title is useful for numerical and other frequently<br />updated information. In general, it shouldn't be shown unless a<br />user requests it as it can take up a significant amount of space<br />on the user's panel. This may not be shown in all visualizations.<br />- **Windows:** Unsupported. |
| <a id="tooltip" name="tooltip"></a> `tooltip`?                         | `string`                                                                                                                                                                                                                                                                                                  | The tray icon tooltip                                                                                                                                                                                                                                                                                                                                                                                                                                |
