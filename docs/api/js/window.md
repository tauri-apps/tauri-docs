# window

Provides APIs to create windows, communicate with other windows and manipulate the current window.

## Window events

Events can be listened to using [listen](window.md#listen):
```typescript
import { getCurrent } from "@tauri-apps/api/window";
getCurrent().listen("my-window-event", ({ event, payload }) => { });
```

## Enumerations

### `Effect`

Platform-specific window effects

**Since**: 2.0.0

#### Enumeration Members

| Name | Type | Description | Defined in |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="window.Effect.Acrylic"><a href="#window.Effect.Acrylic">`Acrylic`</a></div> | `"acrylic"` | **Windows 10/11**<br/><br/>## Notes<br/><br/>This effect has bad performance when resizing/dragging the window on Windows 10 v1903+ and Windows 11 build 22000. | [window.ts:1901](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1901) |
| <div class="anchor-with-padding" id="window.Effect.AppearanceBased"><a href="#window.Effect.AppearanceBased">`AppearanceBased`</a></div> | `"appearanceBased"` | A default material appropriate for the view's effectiveAppearance.  **macOS 10.14-**<br/><br/>**Deprecated**<br/><br/>since macOS 10.14. You should instead choose an appropriate semantic material. | [window.ts:1801](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1801) |
| <div class="anchor-with-padding" id="window.Effect.Blur"><a href="#window.Effect.Blur">`Blur`</a></div> | `"blur"` | **Windows 7/10/11(22H1) Only**<br/><br/>## Notes<br/><br/>This effect has bad performance when resizing/dragging the window on Windows 11 build 22621. | [window.ts:1893](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1893) |
| <div class="anchor-with-padding" id="window.Effect.ContentBackground"><a href="#window.Effect.ContentBackground">`ContentBackground`</a></div> | `"contentBackground"` | **macOS 10.14+** | [window.ts:1873](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1873) |
| <div class="anchor-with-padding" id="window.Effect.Dark"><a href="#window.Effect.Dark">`Dark`</a></div> | `"dark"` | **macOS 10.14-**<br/><br/>**Deprecated**<br/><br/>since macOS 10.14. Use a semantic material instead. | [window.ts:1813](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1813) |
| <div class="anchor-with-padding" id="window.Effect.FullScreenUI"><a href="#window.Effect.FullScreenUI">`FullScreenUI`</a></div> | `"fullScreenUI"` | **macOS 10.14+** | [window.ts:1865](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1865) |
| <div class="anchor-with-padding" id="window.Effect.HeaderView"><a href="#window.Effect.HeaderView">`HeaderView`</a></div> | `"headerView"` | **macOS 10.14+** | [window.ts:1849](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1849) |
| <div class="anchor-with-padding" id="window.Effect.HudWindow"><a href="#window.Effect.HudWindow">`HudWindow`</a></div> | `"hudWindow"` | **macOS 10.14+** | [window.ts:1861](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1861) |
| <div class="anchor-with-padding" id="window.Effect.Light"><a href="#window.Effect.Light">`Light`</a></div> | `"light"` | **macOS 10.14-**<br/><br/>**Deprecated**<br/><br/>since macOS 10.14. Use a semantic material instead. | [window.ts:1807](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1807) |
| <div class="anchor-with-padding" id="window.Effect.MediumLight"><a href="#window.Effect.MediumLight">`MediumLight`</a></div> | `"mediumLight"` | **macOS 10.14-**<br/><br/>**Deprecated**<br/><br/>since macOS 10.14. Use a semantic material instead. | [window.ts:1819](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1819) |
| <div class="anchor-with-padding" id="window.Effect.Menu"><a href="#window.Effect.Menu">`Menu`</a></div> | `"menu"` | **macOS 10.11+** | [window.ts:1837](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1837) |
| <div class="anchor-with-padding" id="window.Effect.Mica"><a href="#window.Effect.Mica">`Mica`</a></div> | `"mica"` | **Windows 11 Only** | [window.ts:1885](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1885) |
| <div class="anchor-with-padding" id="window.Effect.Popover"><a href="#window.Effect.Popover">`Popover`</a></div> | `"popover"` | **macOS 10.11+** | [window.ts:1841](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1841) |
| <div class="anchor-with-padding" id="window.Effect.Selection"><a href="#window.Effect.Selection">`Selection`</a></div> | `"selection"` | **macOS 10.10+** | [window.ts:1833](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1833) |
| <div class="anchor-with-padding" id="window.Effect.Sheet"><a href="#window.Effect.Sheet">`Sheet`</a></div> | `"sheet"` | **macOS 10.14+** | [window.ts:1853](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1853) |
| <div class="anchor-with-padding" id="window.Effect.Sidebar"><a href="#window.Effect.Sidebar">`Sidebar`</a></div> | `"sidebar"` | **macOS 10.11+** | [window.ts:1845](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1845) |
| <div class="anchor-with-padding" id="window.Effect.Tabbed"><a href="#window.Effect.Tabbed">`Tabbed`</a></div> | `"tabbed"` | Tabbed effect that matches the system dark perefence **Windows 11 Only** | [window.ts:1905](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1905) |
| <div class="anchor-with-padding" id="window.Effect.TabbedDark"><a href="#window.Effect.TabbedDark">`TabbedDark`</a></div> | `"tabbedDark"` | Tabbed effect with dark mode but only if dark mode is enabled on the system **Windows 11 Only** | [window.ts:1909](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1909) |
| <div class="anchor-with-padding" id="window.Effect.TabbedLight"><a href="#window.Effect.TabbedLight">`TabbedLight`</a></div> | `"tabbedLight"` | Tabbed effect with light mode **Windows 11 Only** | [window.ts:1913](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1913) |
| <div class="anchor-with-padding" id="window.Effect.Titlebar"><a href="#window.Effect.Titlebar">`Titlebar`</a></div> | `"titlebar"` | **macOS 10.10+** | [window.ts:1829](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1829) |
| <div class="anchor-with-padding" id="window.Effect.Tooltip"><a href="#window.Effect.Tooltip">`Tooltip`</a></div> | `"tooltip"` | **macOS 10.14+** | [window.ts:1869](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1869) |
| <div class="anchor-with-padding" id="window.Effect.UltraDark"><a href="#window.Effect.UltraDark">`UltraDark`</a></div> | `"ultraDark"` | **macOS 10.14-**<br/><br/>**Deprecated**<br/><br/>since macOS 10.14. Use a semantic material instead. | [window.ts:1825](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1825) |
| <div class="anchor-with-padding" id="window.Effect.UnderPageBackground"><a href="#window.Effect.UnderPageBackground">`UnderPageBackground`</a></div> | `"underPageBackground"` | **macOS 10.14+** | [window.ts:1881](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1881) |
| <div class="anchor-with-padding" id="window.Effect.UnderWindowBackground"><a href="#window.Effect.UnderWindowBackground">`UnderWindowBackground`</a></div> | `"underWindowBackground"` | **macOS 10.14+** | [window.ts:1877](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1877) |
| <div class="anchor-with-padding" id="window.Effect.WindowBackground"><a href="#window.Effect.WindowBackground">`WindowBackground`</a></div> | `"windowBackground"` | **macOS 10.14+** | [window.ts:1857](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1857) |

### `EffectState`

Window effect state **macOS only**

**See**

https://developer.apple.com/documentation/appkit/nsvisualeffectview/state

**Since**: 2.0.0

#### Enumeration Members

| Name | Type | Description | Defined in |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="window.EffectState.Active"><a href="#window.EffectState.Active">`Active`</a></div> | `"active"` | Make window effect state always active **macOS only** | [window.ts:1931](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1931) |
| <div class="anchor-with-padding" id="window.EffectState.FollowsWindowActiveState"><a href="#window.EffectState.FollowsWindowActiveState">`FollowsWindowActiveState`</a></div> | `"followsWindowActiveState"` | Make window effect state follow the window's active state **macOS only** | [window.ts:1927](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1927) |
| <div class="anchor-with-padding" id="window.EffectState.Inactive"><a href="#window.EffectState.Inactive">`Inactive`</a></div> | `"inactive"` | Make window effect state always inactive **macOS only** | [window.ts:1935](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1935) |

### `ProgressBarStatus`

#### Enumeration Members

| Name | Type | Description | Defined in |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="window.ProgressBarStatus.Error"><a href="#window.ProgressBarStatus.Error">`Error`</a></div> | `"error"` | Error state. **Treated as Normal on linux** | [window.ts:171](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L171) |
| <div class="anchor-with-padding" id="window.ProgressBarStatus.Indeterminate"><a href="#window.ProgressBarStatus.Indeterminate">`Indeterminate`</a></div> | `"indeterminate"` | Indeterminate state. **Treated as Normal on Linux and macOS** | [window.ts:163](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L163) |
| <div class="anchor-with-padding" id="window.ProgressBarStatus.None"><a href="#window.ProgressBarStatus.None">`None`</a></div> | `"none"` | Hide progress bar. | [window.ts:155](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L155) |
| <div class="anchor-with-padding" id="window.ProgressBarStatus.Normal"><a href="#window.ProgressBarStatus.Normal">`Normal`</a></div> | `"normal"` | Normal state. | [window.ts:159](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L159) |
| <div class="anchor-with-padding" id="window.ProgressBarStatus.Paused"><a href="#window.ProgressBarStatus.Paused">`Paused`</a></div> | `"paused"` | Paused state. **Treated as Normal on Linux** | [window.ts:167](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L167) |

### `UserAttentionType`

Attention type to request on a window.

**Since**: 1.0.0

#### Enumeration Members

| Name | Type | Description | Defined in |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="window.UserAttentionType.Critical"><a href="#window.UserAttentionType.Critical">`Critical`</a></div> | `1` | #### Platform-specific<br/>- **macOS:** Bounces the dock icon until the application is in focus.<br/>- **Windows:** Flashes both the window and the taskbar button until the application is in focus. | [window.ts:77](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L77) |
| <div class="anchor-with-padding" id="window.UserAttentionType.Informational"><a href="#window.UserAttentionType.Informational">`Informational`</a></div> | `2` | #### Platform-specific<br/>- **macOS:** Bounces the dock icon once.<br/>- **Windows:** Flashes the taskbar button until the application is in focus. | [window.ts:83](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L83) |

## Classes

### `CloseRequestedEvent`

#### Constructors

##### `constructor`

> **new CloseRequestedEvent**(`event`: [`Event`](event.md#event)<`null`\>): [`CloseRequestedEvent`](window.md#closerequestedevent)

**Parameters**

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](event.md#event)<`null`\> |

**Defined in:** [window.ts:95](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L95)

#### Properties

##### `event`

>  **event**: [`EventName`](event.md#eventname)

Event name

**Defined in:** [window.ts:88](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L88)

##### `id`

>  **id**: `number`

Event identifier used to unlisten

**Defined in:** [window.ts:92](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L92)

##### `windowLabel`

>  **windowLabel**: `string`

The label of the window that emitted this event.

**Defined in:** [window.ts:90](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L90)

#### Methods

##### `isPreventDefault`

> **isPreventDefault**(): `boolean`

**Returns: **`boolean`

##### `preventDefault`

> **preventDefault**(): `void`

**Returns: **`void`

### `LogicalPosition`

A position represented in logical pixels.

**Since**: 2.0.0

#### Constructors

##### `constructor`

> **new LogicalPosition**(`x`: `number`, `y`: `number`): [`LogicalPosition`](window.md#logicalposition)

**Parameters**

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

**Defined in:** [dpi.ts:62](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L62)

#### Properties

##### `type`

>  **type**: `string` = `'Logical'`

**Defined in:** [dpi.ts:58](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L58)

##### `x`

>  **x**: `number`

**Defined in:** [dpi.ts:59](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L59)

##### `y`

>  **y**: `number`

**Defined in:** [dpi.ts:60](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L60)

### `LogicalSize`

A size represented in logical pixels.

**Since**: 2.0.0

#### Constructors

##### `constructor`

> **new LogicalSize**(`width`: `number`, `height`: `number`): [`LogicalSize`](window.md#logicalsize)

**Parameters**

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

**Defined in:** [dpi.ts:15](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L15)

#### Properties

##### `height`

>  **height**: `number`

**Defined in:** [dpi.ts:13](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L13)

##### `type`

>  **type**: `string` = `'Logical'`

**Defined in:** [dpi.ts:11](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L11)

##### `width`

>  **width**: `number`

**Defined in:** [dpi.ts:12](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L12)

### `PhysicalPosition`

A position represented in physical pixels.

**Since**: 2.0.0

#### Constructors

##### `constructor`

> **new PhysicalPosition**(`x`: `number`, `y`: `number`): [`PhysicalPosition`](window.md#physicalposition)

**Parameters**

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

**Defined in:** [dpi.ts:78](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L78)

#### Properties

##### `type`

>  **type**: `string` = `'Physical'`

**Defined in:** [dpi.ts:74](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L74)

##### `x`

>  **x**: `number`

**Defined in:** [dpi.ts:75](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L75)

##### `y`

>  **y**: `number`

**Defined in:** [dpi.ts:76](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L76)

#### Methods

##### `toLogical`

> **toLogical**(`scaleFactor`: `number`): [`LogicalPosition`](window.md#logicalposition)

Converts the physical position to a logical one.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const appWindow = getCurrent();
const factor = await appWindow.scaleFactor();
const position = await appWindow.innerPosition();
const logical = position.toLogical(factor);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `scaleFactor` | `number` |

**Returns: **[`LogicalPosition`](window.md#logicalposition)

### `PhysicalSize`

A size represented in physical pixels.

**Since**: 2.0.0

#### Constructors

##### `constructor`

> **new PhysicalSize**(`width`: `number`, `height`: `number`): [`PhysicalSize`](window.md#physicalsize)

**Parameters**

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

**Defined in:** [dpi.ts:31](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L31)

#### Properties

##### `height`

>  **height**: `number`

**Defined in:** [dpi.ts:29](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L29)

##### `type`

>  **type**: `string` = `'Physical'`

**Defined in:** [dpi.ts:27](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L27)

##### `width`

>  **width**: `number`

**Defined in:** [dpi.ts:28](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/dpi.ts#L28)

#### Methods

##### `toLogical`

> **toLogical**(`scaleFactor`: `number`): [`LogicalSize`](window.md#logicalsize)

Converts the physical size to a logical one.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const appWindow = getCurrent();
const factor = await appWindow.scaleFactor();
const size = await appWindow.innerSize();
const logical = size.toLogical(factor);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `scaleFactor` | `number` |

**Returns: **[`LogicalSize`](window.md#logicalsize)

### `Window`

Create new webview window or get a handle to an existing one.

Windows are identified by a *label*  a unique identifier that can be used to reference it later.
It may only contain alphanumeric characters `a-zA-Z` plus the following special characters `-`, `/`, `:` and `_`.

**Example**

```typescript
// loading embedded asset:
const appWindow = new Window('theUniqueLabel', {
  url: 'path/to/page.html'
});
// alternatively, load a remote URL:
const appWindow = new Window('theUniqueLabel', {
  url: 'https://github.com/tauri-apps/tauri'
});

appWindow.once('tauri://created', function () {
 // window successfully created
});
appWindow.once('tauri://error', function (e) {
 // an error happened creating the window
});

// emit an event to the backend
await appWindow.emit("some event", "data");
// listen to an event from the backend
const unlisten = await appWindow.listen("event name", e => {});
unlisten();
```

**Since**: 2.0.0

#### Constructors

##### `constructor`

> **new Window**(`label`: `string`, `options?`: [`WindowOptions`](window.md#windowoptions)): [`Window`](window.md#window)

Creates a new Window.

**Example**

```typescript
import { Window } from '@tauri-apps/api/window';
const appWindow = new Window('my-label', {
  url: 'https://github.com/tauri-apps/tauri'
});
appWindow.once('tauri://created', function () {
 // window successfully created
});
appWindow.once('tauri://error', function (e) {
 // an error happened creating the window
});
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The unique webview window label. Must be alphanumeric: `a-zA-Z-/:_`. |
| `options` | [`WindowOptions`](window.md#windowoptions) | - |

**Defined in:** [window.ts:281](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L281)

#### Properties

##### `label`

>  **label**: `string`

The window label. It is a unique identifier for the window, can be used to reference it later.

**Defined in:** [window.ts:257](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L257)

##### `listeners`

>  **listeners**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`string`, [`EventCallback`](event.md#eventcallback)<`any`\>[]\>

Local event listeners.

**Defined in:** [window.ts:260](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L260)

#### Methods

##### `center`

> **center**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Centers the window.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().center();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `clearEffects`

> **clearEffects**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Clear any applied effects if possible.

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

##### `close`

> **close**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Closes the window.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().close();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `emit`

> **emit**(`event`: `string`, `payload?`: `unknown`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Emits an event to the backend, tied to the webview window.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().emit('window-loaded', { loggedIn: true, token: 'authToken' });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | Event payload. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

##### `hide`

> **hide**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window visibility to false.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().hide();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `innerPosition`

> **innerPosition**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalPosition`](window.md#physicalposition)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const position = await getCurrent().innerPosition();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalPosition`](window.md#physicalposition)\>

The window's inner position.

##### `innerSize`

> **innerSize**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalSize`](window.md#physicalsize)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const size = await getCurrent().innerSize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalSize`](window.md#physicalsize)\>

The window's inner size.

##### `isClosable`

> **isClosable**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window’s native close button state.

#### Platform-specific

- **iOS / Android:** Unsupported.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const closable = await getCurrent().isClosable();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window's native close button is enabled or not.

##### `isDecorated`

> **isDecorated**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current decorated state.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const decorated = await getCurrent().isDecorated();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window is decorated or not.

##### `isFocused`

> **isFocused**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current focus state.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const focused = await getCurrent().isFocused();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window is focused or not.

##### `isFullscreen`

> **isFullscreen**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current fullscreen state.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const fullscreen = await getCurrent().isFullscreen();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window is in fullscreen mode or not.

##### `isMaximizable`

> **isMaximizable**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window’s native maximize button state.

#### Platform-specific

- **Linux / iOS / Android:** Unsupported.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const maximizable = await getCurrent().isMaximizable();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window's native maximize button is enabled or not.

##### `isMaximized`

> **isMaximized**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current maximized state.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const maximized = await getCurrent().isMaximized();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window is maximized or not.

##### `isMinimizable`

> **isMinimizable**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window’s native minimize button state.

#### Platform-specific

- **Linux / iOS / Android:** Unsupported.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const minimizable = await getCurrent().isMinimizable();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window's native minimize button is enabled or not.

##### `isMinimized`

> **isMinimized**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current minimized state.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const minimized = await getCurrent().isMinimized();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

##### `isResizable`

> **isResizable**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current resizable state.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const resizable = await getCurrent().isResizable();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window is resizable or not.

##### `isVisible`

> **isVisible**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current visible state.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const visible = await getCurrent().isVisible();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window is visible or not.

##### `listen`

> **listen**<`T`\>(`event`: [`EventName`](event.md#eventname), `handler`: [`EventCallback`](event.md#eventcallback)<`T`\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an event emitted by the backend that is tied to the webview window.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const unlisten = await getCurrent().listen<string>('state-changed', (event) => {
  console.log(`Got error: ${payload}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`EventName`](event.md#eventname) | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `maximize`

> **maximize**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Maximizes the window.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().maximize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `minimize`

> **minimize**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Minimizes the window.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().minimize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `onCloseRequested`

> **onCloseRequested**(`handler`: `fn`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to window close requested. Emitted when the user requests to closes the window.

**Example**

```typescript
import { getCurrent } from "@tauri-apps/api/window";
import { confirm } from '@tauri-apps/api/dialog';
const unlisten = await getCurrent().onCloseRequested(async (event) => {
  const confirmed = await confirm('Are you sure?');
  if (!confirmed) {
    // user did not confirm closing the window; let's prevent it
    event.preventDefault();
  }
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | (`event`: [`CloseRequestedEvent`](window.md#closerequestedevent)) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onFileDropEvent`

> **onFileDropEvent**(`handler`: [`EventCallback`](event.md#eventcallback)<[`FileDropEvent`](window.md#filedropevent)\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to a file drop event.
The listener is triggered when the user hovers the selected files on the window,
drops the files or cancels the operation.

**Example**

```typescript
import { getCurrent } from "@tauri-apps/api/window";
const unlisten = await getCurrent().onFileDropEvent((event) => {
 if (event.payload.type === 'hover') {
   console.log('User hovering', event.payload.paths);
 } else if (event.payload.type === 'drop') {
   console.log('User dropped', event.payload.paths);
 } else {
   console.log('File drop cancelled');
 }
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<[`FileDropEvent`](window.md#filedropevent)\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onFocusChanged`

> **onFocusChanged**(`handler`: [`EventCallback`](event.md#eventcallback)<`boolean`\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to window focus change.

**Example**

```typescript
import { getCurrent } from "@tauri-apps/api/window";
const unlisten = await getCurrent().onFocusChanged(({ payload: focused }) => {
 console.log('Focus changed, window is focused? ' + focused);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<`boolean`\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onMenuClicked`

> **onMenuClicked**(`handler`: [`EventCallback`](event.md#eventcallback)<`string`\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to the window menu item click. The payload is the item id.

**Example**

```typescript
import { getCurrent } from "@tauri-apps/api/window";
const unlisten = await getCurrent().onMenuClicked(({ payload: menuId }) => {
 console.log('Menu clicked: ' + menuId);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<`string`\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onMoved`

> **onMoved**(`handler`: [`EventCallback`](event.md#eventcallback)<[`PhysicalPosition`](window.md#physicalposition)\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to window move.

**Example**

```typescript
import { getCurrent } from "@tauri-apps/api/window";
const unlisten = await getCurrent().onMoved(({ payload: position }) => {
 console.log('Window moved', position);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<[`PhysicalPosition`](window.md#physicalposition)\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onResized`

> **onResized**(`handler`: [`EventCallback`](event.md#eventcallback)<[`PhysicalSize`](window.md#physicalsize)\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to window resize.

**Example**

```typescript
import { getCurrent } from "@tauri-apps/api/window";
const unlisten = await getCurrent().onResized(({ payload: size }) => {
 console.log('Window resized', size);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<[`PhysicalSize`](window.md#physicalsize)\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onScaleChanged`

> **onScaleChanged**(`handler`: [`EventCallback`](event.md#eventcallback)<[`ScaleFactorChanged`](window.md#scalefactorchanged)\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to window scale change. Emitted when the window's scale factor has changed.
The following user actions can cause DPI changes:
- Changing the display's resolution.
- Changing the display's scale factor (e.g. in Control Panel on Windows).
- Moving the window to a display with a different scale factor.

**Example**

```typescript
import { getCurrent } from "@tauri-apps/api/window";
const unlisten = await getCurrent().onScaleChanged(({ payload }) => {
 console.log('Scale changed', payload.scaleFactor, payload.size);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<[`ScaleFactorChanged`](window.md#scalefactorchanged)\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onThemeChanged`

> **onThemeChanged**(`handler`: [`EventCallback`](event.md#eventcallback)<[`Theme`](window.md#theme)\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to the system theme change.

**Example**

```typescript
import { getCurrent } from "@tauri-apps/api/window";
const unlisten = await getCurrent().onThemeChanged(({ payload: theme }) => {
 console.log('New theme: ' + theme);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<[`Theme`](window.md#theme)\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `once`

> **once**<`T`\>(`event`: `string`, `handler`: [`EventCallback`](event.md#eventcallback)<`T`\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an one-off event emitted by the backend that is tied to the webview window.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const unlisten = await getCurrent().once<null>('initialized', (event) => {
  console.log(`Window initialized!`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `outerPosition`

> **outerPosition**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalPosition`](window.md#physicalposition)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const position = await getCurrent().outerPosition();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalPosition`](window.md#physicalposition)\>

The window's outer position.

##### `outerSize`

> **outerSize**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalSize`](window.md#physicalsize)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const size = await getCurrent().outerSize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalSize`](window.md#physicalsize)\>

The window's outer size.

##### `requestUserAttention`

> **requestUserAttention**(`requestType`: `null` \| [`UserAttentionType`](window.md#userattentiontype)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Requests user attention to the window, this has no effect if the application
is already focused. How requesting for user attention manifests is platform dependent,
see `UserAttentionType` for details.

Providing `null` will unset the request for user attention. Unsetting the request for
user attention might not be done automatically by the WM when the window receives input.

#### Platform-specific

- **macOS:** `null` has no effect.
- **Linux:** Urgency levels have the same effect.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().requestUserAttention();
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `requestType` | `null` \| [`UserAttentionType`](window.md#userattentiontype) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `scaleFactor`

> **scaleFactor**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`number`\>

The scale factor that can be used to map physical pixels to logical pixels.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const factor = await getCurrent().scaleFactor();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`number`\>

The window's monitor scale factor.

##### `setAlwaysOnBottom`

> **setAlwaysOnBottom**(`alwaysOnBottom`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Whether the window should always be below other windows.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setAlwaysOnBottom(true);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `alwaysOnBottom` | `boolean` | Whether the window should always be below other windows or not. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setAlwaysOnTop`

> **setAlwaysOnTop**(`alwaysOnTop`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Whether the window should always be on top of other windows.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setAlwaysOnTop(true);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `alwaysOnTop` | `boolean` | Whether the window should always be on top of other windows or not. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setClosable`

> **setClosable**(`closable`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets whether the window's native close button is enabled or not.

#### Platform-specific

- **Linux:** GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible
- **iOS / Android:** Unsupported.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setClosable(false);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `closable` | `boolean` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setContentProtected`

> **setContentProtected**(`protected_`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Prevents the window contents from being captured by other apps.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setContentProtected(true);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `protected_` | `boolean` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setCursorGrab`

> **setCursorGrab**(`grab`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Grabs the cursor, preventing it from leaving the window.

There's no guarantee that the cursor will be hidden. You should
hide it by yourself if you want so.

#### Platform-specific

- **Linux:** Unsupported.
- **macOS:** This locks the cursor in a fixed location, which looks visually awkward.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setCursorGrab(true);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `grab` | `boolean` | `true` to grab the cursor icon, `false` to release it. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setCursorIcon`

> **setCursorIcon**(`icon`: [`CursorIcon`](window.md#cursoricon)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Modifies the cursor icon of the window.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setCursorIcon('help');
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | [`CursorIcon`](window.md#cursoricon) | The new cursor icon. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setCursorPosition`

> **setCursorPosition**(`position`: [`LogicalPosition`](window.md#logicalposition) \| [`PhysicalPosition`](window.md#physicalposition)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Changes the position of the cursor in window coordinates.

**Example**

```typescript
import { getCurrent, LogicalPosition } from '@tauri-apps/api/window';
await getCurrent().setCursorPosition(new LogicalPosition(600, 300));
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`LogicalPosition`](window.md#logicalposition) \| [`PhysicalPosition`](window.md#physicalposition) | The new cursor position. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setCursorVisible`

> **setCursorVisible**(`visible`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Modifies the cursor's visibility.

#### Platform-specific

- **Windows:** The cursor is only hidden within the confines of the window.
- **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
  outside of the window.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setCursorVisible(false);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | If `false`, this will hide the cursor. If `true`, this will show the cursor. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setDecorations`

> **setDecorations**(`decorations`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Whether the window should have borders and bars.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setDecorations(false);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `decorations` | `boolean` | Whether the window should have borders and bars. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setEffects`

> **setEffects**(`effects`: [`Effects`](window.md#effects)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Set window effects.

**Parameters**

| Name | Type |
| :------ | :------ |
| `effects` | [`Effects`](window.md#effects) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

##### `setFocus`

> **setFocus**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Bring the window to front and focus.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setFocus();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setFullscreen`

> **setFullscreen**(`fullscreen`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window fullscreen state.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setFullscreen(true);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullscreen` | `boolean` | Whether the window should go to fullscreen or not. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setIcon`

> **setIcon**(`icon`: `string` \| [`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window icon.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setIcon('/tauri/awesome.png');
```

Note that you need the `icon-ico` or `icon-png` Cargo features to use this API.
To enable it, change your Cargo.toml file:
```toml
[dependencies]
tauri = { version = "...", features = ["...", "icon-png"] }
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | `string` \| [`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) | Icon bytes or path to the icon file. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setIgnoreCursorEvents`

> **setIgnoreCursorEvents**(`ignore`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Changes the cursor events behavior.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setIgnoreCursorEvents(true);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `ignore` | `boolean` | `true` to ignore the cursor events; `false` to process them as usual. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setMaxSize`

> **setMaxSize**(`size`: `undefined` \| `null` \| [`LogicalSize`](window.md#logicalsize) \| [`PhysicalSize`](window.md#physicalsize)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.

**Example**

```typescript
import { getCurrent, LogicalSize } from '@tauri-apps/api/window';
await getCurrent().setMaxSize(new LogicalSize(600, 500));
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| `null` \| [`LogicalSize`](window.md#logicalsize) \| [`PhysicalSize`](window.md#physicalsize) | The logical or physical inner size, or `null` to unset the constraint. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setMaximizable`

> **setMaximizable**(`maximizable`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets whether the window's native maximize button is enabled or not.
If resizable is set to false, this setting is ignored.

#### Platform-specific

- **macOS:** Disables the "zoom" button in the window titlebar, which is also used to enter fullscreen mode.
- **Linux / iOS / Android:** Unsupported.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setMaximizable(false);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `maximizable` | `boolean` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setMinSize`

> **setMinSize**(`size`: `undefined` \| `null` \| [`LogicalSize`](window.md#logicalsize) \| [`PhysicalSize`](window.md#physicalsize)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.

**Example**

```typescript
import { getCurrent, PhysicalSize } from '@tauri-apps/api/window';
await getCurrent().setMinSize(new PhysicalSize(600, 500));
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| `null` \| [`LogicalSize`](window.md#logicalsize) \| [`PhysicalSize`](window.md#physicalsize) | The logical or physical inner size, or `null` to unset the constraint. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setMinimizable`

> **setMinimizable**(`minimizable`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets whether the window's native minimize button is enabled or not.

#### Platform-specific

- **Linux / iOS / Android:** Unsupported.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setMinimizable(false);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `minimizable` | `boolean` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setPosition`

> **setPosition**(`position`: [`LogicalPosition`](window.md#logicalposition) \| [`PhysicalPosition`](window.md#physicalposition)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window outer position.

**Example**

```typescript
import { getCurrent, LogicalPosition } from '@tauri-apps/api/window';
await getCurrent().setPosition(new LogicalPosition(600, 500));
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`LogicalPosition`](window.md#logicalposition) \| [`PhysicalPosition`](window.md#physicalposition) | The new position, in logical or physical pixels. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setProgressBar`

> **setProgressBar**(`state`: [`ProgressBarState`](window.md#progressbarstate)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the taskbar progress state.

#### Platform-specific

- **Linux / macOS**: Progress bar is app-wide and not specific to this window.
- **Linux**: Only supported desktop environments with `libunity` (e.g. GNOME).

**Example**

```typescript
import { getCurrent, ProgressBarStatus } from '@tauri-apps/api/window';
await getCurrent().setProgressBar({
  status: ProgressBarStatus.Normal,
  progress: 50,
});
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `state` | [`ProgressBarState`](window.md#progressbarstate) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setResizable`

> **setResizable**(`resizable`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Updates the window resizable flag.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setResizable(false);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `resizable` | `boolean` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setShadow`

> **setShadow**(`enable`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Whether or not the window should have shadow.

#### Platform-specific

- **Windows:**
  - `false` has no effect on decorated window, shadows are always ON.
  - `true` will make ndecorated window have a 1px white border,
and on Windows 11, it will have a rounded corners.
- **Linux:** Unsupported.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setShadow(false);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setSize`

> **setSize**(`size`: [`LogicalSize`](window.md#logicalsize) \| [`PhysicalSize`](window.md#physicalsize)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resizes the window with a new inner size.

**Example**

```typescript
import { getCurrent, LogicalSize } from '@tauri-apps/api/window';
await getCurrent().setSize(new LogicalSize(600, 500));
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [`LogicalSize`](window.md#logicalsize) \| [`PhysicalSize`](window.md#physicalsize) | The logical or physical inner size. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setSkipTaskbar`

> **setSkipTaskbar**(`skip`: `boolean`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Whether the window icon should be hidden from the taskbar or not.

#### Platform-specific

- **macOS:** Unsupported.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setSkipTaskbar(true);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `skip` | `boolean` | true to hide window icon, false to show it. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setTitle`

> **setTitle**(`title`: `string`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window title.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setTitle('Tauri');
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | The new title |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `show`

> **show**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window visibility to true.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().show();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `startDragging`

> **startDragging**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Starts dragging the window.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().startDragging();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `theme`

> **theme**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`null` \| [`Theme`](window.md#theme)\>

Gets the window's current theme.

#### Platform-specific

- **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const theme = await getCurrent().theme();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`null` \| [`Theme`](window.md#theme)\>

The window theme.

##### `title`

> **title**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Gets the window's current title.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const title = await getCurrent().title();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

##### `toggleMaximize`

> **toggleMaximize**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Toggles the window maximized state.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().toggleMaximize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `unmaximize`

> **unmaximize**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Unmaximizes the window.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().unmaximize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `unminimize`

> **unminimize**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Unminimizes the window.

**Example**

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().unminimize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `getAll`

> `Static` **getAll**(): [`Window`](window.md#window)[]

Gets a list of instances of `Window` for all available windows.

**Returns: **[`Window`](window.md#window)[]

##### `getByLabel`

> `Static` **getByLabel**(`label`: `string`): `null` \| [`Window`](window.md#window)

Gets the Window for the webview associated with the given label.

**Example**

```typescript
import { Window } from '@tauri-apps/api/window';
const mainWindow = Window.getByLabel('main');
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The webview window label. |

**Returns: **`null` \| [`Window`](window.md#window)

The Window instance to communicate with the webview or null if the webview doesn't exist.

##### `getCurrent`

> `Static` **getCurrent**(): [`Window`](window.md#window)

Get an instance of `Window` for the current window.

**Returns: **[`Window`](window.md#window)

##### `getFocusedWindow`

> `Static` **getFocusedWindow**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`null` \| [`Window`](window.md#window)\>

Gets the focused window.

**Example**

```typescript
import { Window } from '@tauri-apps/api/window';
const focusedWindow = Window.getFocusedWindow();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`null` \| [`Window`](window.md#window)\>

The Window instance to communicate with the webview or `undefined` if there is not any focused window.

## Interfaces

### `Effects`

The window effects configuration object

**Since**: 2.0.0

#### Properties

##### `color`

> `Optional` **color**: [`Color`](window.md#color)

Window effect color. Affects [Blur](window.md#blur) and [Acrylic](window.md#acrylic) only
on Windows 10 v1903+. Doesn't have any effect on Windows 7 or Windows 11.

**Defined in:** [window.ts:1960](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1960)

##### `effects`

>  **effects**: [`Effect`](window.md#effect)[]

List of Window effects to apply to the Window.
Conflicting effects will apply the first one and ignore the rest.

**Defined in:** [window.ts:1947](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1947)

##### `radius`

> `Optional` **radius**: `number`

Window effect corner radius **macOS Only**

**Defined in:** [window.ts:1955](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1955)

##### `state`

> `Optional` **state**: [`EffectState`](window.md#effectstate)

Window effect state **macOS Only**

**Defined in:** [window.ts:1951](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1951)

### `Monitor`

Allows you to retrieve information about a given monitor.

**Since**: 1.0.0

#### Properties

##### `name`

>  **name**: `null` \| `string`

Human-readable name of the monitor

**Defined in:** [window.ts:36](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L36)

##### `position`

>  **position**: [`PhysicalPosition`](window.md#physicalposition)

the Top-left corner position of the monitor relative to the larger full screen area.

**Defined in:** [window.ts:40](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L40)

##### `scaleFactor`

>  **scaleFactor**: `number`

The scale factor that can be used to map physical pixels to logical pixels.

**Defined in:** [window.ts:42](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L42)

##### `size`

>  **size**: [`PhysicalSize`](window.md#physicalsize)

The monitor's resolution.

**Defined in:** [window.ts:38](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L38)

### `ProgressBarState`

#### Properties

##### `progress`

> `Optional` **progress**: `number`

The progress bar progress. This can be a value ranging from `0` to `100`

**Defined in:** [window.ts:182](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L182)

##### `status`

> `Optional` **status**: [`ProgressBarStatus`](window.md#progressbarstatus)

The progress bar status.

**Defined in:** [window.ts:178](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L178)

##### `unityUri`

> `Optional` **unityUri**: `string`

The identifier for your app to communicate with the Unity desktop window manager **Linux Only**

**Defined in:** [window.ts:186](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L186)

### `ScaleFactorChanged`

The payload for the `scaleChange` event.

**Since**: 1.0.2

#### Properties

##### `scaleFactor`

>  **scaleFactor**: `number`

The new window scale factor.

**Defined in:** [window.ts:55](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L55)

##### `size`

>  **size**: [`PhysicalSize`](window.md#physicalsize)

The new window size

**Defined in:** [window.ts:57](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L57)

### `WindowOptions`

Configuration for the window to create.

**Since**: 1.0.0

#### Properties

##### `acceptFirstMouse`

> `Optional` **acceptFirstMouse**: `boolean`

Whether clicking an inactive window also clicks through to the webview on macOS.

**Defined in:** [window.ts:2060](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2060)

##### `alwaysOnBottom`

> `Optional` **alwaysOnBottom**: `boolean`

Whether the window should always be below other windows.

**Defined in:** [window.ts:2018](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2018)

##### `alwaysOnTop`

> `Optional` **alwaysOnTop**: `boolean`

Whether the window should always be on top of other windows or not.

**Defined in:** [window.ts:2016](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2016)

##### `center`

> `Optional` **center**: `boolean`

Show window in the center of the screen..

**Defined in:** [window.ts:1978](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1978)

##### `closable`

> `Optional` **closable**: `boolean`

Whether the window's native close button is enabled or not. Defaults to `true`.

**Defined in:** [window.ts:2091](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2091)

##### `contentProtected`

> `Optional` **contentProtected**: `boolean`

Prevents the window contents from being captured by other apps.

**Defined in:** [window.ts:2020](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2020)

##### `decorations`

> `Optional` **decorations**: `boolean`

Whether the window should have borders and bars or not.

**Defined in:** [window.ts:2014](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2014)

##### `fileDropEnabled`

> `Optional` **fileDropEnabled**: `boolean`

Whether the file drop is enabled or not on the webview. By default it is enabled.

Disabling it is required to use drag and drop on the frontend on Windows.

**Defined in:** [window.ts:2042](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2042)

##### `focus`

> `Optional` **focus**: `boolean`

Whether the window will be initially focused or not.

**Defined in:** [window.ts:2002](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2002)

##### `fullscreen`

> `Optional` **fullscreen**: `boolean`

Whether the window is in fullscreen mode or not.

**Defined in:** [window.ts:2000](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2000)

##### `height`

> `Optional` **height**: `number`

The initial height.

**Defined in:** [window.ts:1986](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1986)

##### `hiddenTitle`

> `Optional` **hiddenTitle**: `boolean`

If `true`, sets the window title to be hidden on macOS.

**Defined in:** [window.ts:2056](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2056)

##### `incognito`

> `Optional` **incognito**: `boolean`

Whether or not the webview should be launched in incognito mode.

#### Platform-specific

- **Android:** Unsupported.

**Defined in:** [window.ts:2079](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2079)

##### `maxHeight`

> `Optional` **maxHeight**: `number`

The maximum height. Only applies if `maxWidth` is also set.

**Defined in:** [window.ts:1994](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1994)

##### `maxWidth`

> `Optional` **maxWidth**: `number`

The maximum width. Only applies if `maxHeight` is also set.

**Defined in:** [window.ts:1992](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1992)

##### `maximizable`

> `Optional` **maximizable**: `boolean`

Whether the window's native maximize button is enabled or not. Defaults to `true`.

**Defined in:** [window.ts:2083](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2083)

##### `maximized`

> `Optional` **maximized**: `boolean`

Whether the window should be maximized upon creation or not.

**Defined in:** [window.ts:2010](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2010)

##### `minHeight`

> `Optional` **minHeight**: `number`

The minimum height. Only applies if `minWidth` is also set.

**Defined in:** [window.ts:1990](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1990)

##### `minWidth`

> `Optional` **minWidth**: `number`

The minimum width. Only applies if `minHeight` is also set.

**Defined in:** [window.ts:1988](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1988)

##### `minimizable`

> `Optional` **minimizable**: `boolean`

Whether the window's native minimize button is enabled or not. Defaults to `true`.

**Defined in:** [window.ts:2087](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2087)

##### `resizable`

> `Optional` **resizable**: `boolean`

Whether the window is resizable or not.

**Defined in:** [window.ts:1996](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1996)

##### `shadow`

> `Optional` **shadow**: `boolean`

Whether or not the window has shadow.

#### Platform-specific

- **Windows:**
  - `false` has no effect on decorated window, shadows are always ON.
  - `true` will make ndecorated window have a 1px white border,
and on Windows 11, it will have a rounded corners.
- **Linux:** Unsupported.

**Since**: 2.0.0

**Defined in:** [window.ts:2036](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2036)

##### `skipTaskbar`

> `Optional` **skipTaskbar**: `boolean`

Whether or not the window icon should be added to the taskbar.

**Defined in:** [window.ts:2022](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2022)

##### `tabbingIdentifier`

> `Optional` **tabbingIdentifier**: `string`

Defines the window [tabbing identifier](https://developer.apple.com/documentation/appkit/nswindow/1644704-tabbingidentifier) on macOS.

Windows with the same tabbing identifier will be grouped together.
If the tabbing identifier is not set, automatic tabbing will be disabled.

**Defined in:** [window.ts:2067](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2067)

##### `theme`

> `Optional` **theme**: [`Theme`](window.md#theme)

The initial window theme. Defaults to the system theme.

Only implemented on Windows and macOS 10.14+.

**Defined in:** [window.ts:2048](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2048)

##### `title`

> `Optional` **title**: `string`

Window title.

**Defined in:** [window.ts:1998](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1998)

##### `titleBarStyle`

> `Optional` **titleBarStyle**: [`TitleBarStyle`](window.md#titlebarstyle)

The style of the macOS title bar.

**Defined in:** [window.ts:2052](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2052)

##### `transparent`

> `Optional` **transparent**: `boolean`

Whether the window is transparent or not.
Note that on `macOS` this requires the `macos-private-api` feature flag, enabled under `tauri.conf.json > tauri > macOSPrivateApi`.
WARNING: Using private APIs on `macOS` prevents your application from being accepted to the `App Store`.

**Defined in:** [window.ts:2008](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2008)

##### `url`

> `Optional` **url**: `string`

Remote URL or local file path to open.

- URL such as `https://github.com/tauri-apps` is opened directly on a Tauri window.
- data: URL such as `data:text/html,<html>...` is only supported with the `window-data-url` Cargo feature for the `tauri` dependency.
- local file path or route such as `/path/to/page.html` or `/users` is appended to the application URL (the devServer URL on development, or `tauri://localhost/` and `https://tauri.localhost/` on production).

**Defined in:** [window.ts:1976](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1976)

##### `userAgent`

> `Optional` **userAgent**: `string`

The user agent for the webview.

**Defined in:** [window.ts:2071](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2071)

##### `visible`

> `Optional` **visible**: `boolean`

Whether the window should be immediately visible upon creation or not.

**Defined in:** [window.ts:2012](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L2012)

##### `width`

> `Optional` **width**: `number`

The initial width.

**Defined in:** [window.ts:1984](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1984)

##### `x`

> `Optional` **x**: `number`

The initial vertical position. Only applies if `y` is also set.

**Defined in:** [window.ts:1980](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1980)

##### `y`

> `Optional` **y**: `number`

The initial horizontal position. Only applies if `x` is also set.

**Defined in:** [window.ts:1982](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1982)

## Type Aliases

### `Color`

>  **Color**: [`number`, `number`, `number`, `number`]

an array RGBA colors. Each value has minimum of 0 and maximum of 255.

**Since**: 2.0.0

**Defined in:** [window.ts:1788](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L1788)

### `CursorIcon`

>  **CursorIcon**: `"default"` \| `"crosshair"` \| `"hand"` \| `"arrow"` \| `"move"` \| `"text"` \| `"wait"` \| `"help"` \| `"progress"` \| `"notAllowed"` \| `"contextMenu"` \| `"cell"` \| `"verticalText"` \| `"alias"` \| `"copy"` \| `"noDrop"` \| `"grab"` \| `"grabbing"` \| `"allScroll"` \| `"zoomIn"` \| `"zoomOut"` \| `"eResize"` \| `"nResize"` \| `"neResize"` \| `"nwResize"` \| `"sResize"` \| `"seResize"` \| `"swResize"` \| `"wResize"` \| `"ewResize"` \| `"nsResize"` \| `"neswResize"` \| `"nwseResize"` \| `"colResize"` \| `"rowResize"`

**Defined in:** [window.ts:110](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L110)

### `FileDropEvent`

>  **FileDropEvent**: { `paths`: `string`[] ; `type`: `"hover"`  } \| { `paths`: `string`[] ; `type`: `"drop"`  } \| { `type`: `"cancel"`  }

The file drop event types.

**Defined in:** [window.ts:61](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L61)

### `Theme`

>  **Theme**: `"light"` \| `"dark"`

**Defined in:** [window.ts:45](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L45)

### `TitleBarStyle`

>  **TitleBarStyle**: `"visible"` \| `"transparent"` \| `"overlay"`

**Defined in:** [window.ts:46](https://github.com/tauri-apps/tauri/blob/b5e1334/tooling/api/src/window.ts#L46)

## Functions

### `availableMonitors`

> **availableMonitors**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Monitor`](window.md#monitor)[]\>

Returns the list of all the monitors available on the system.

**Example**

```typescript
import { availableMonitors } from '@tauri-apps/api/window';
const monitors = availableMonitors();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Monitor`](window.md#monitor)[]\>

### `currentMonitor`

> **currentMonitor**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Monitor`](window.md#monitor) \| `null`\>

Returns the monitor on which the window currently resides.
Returns `null` if current monitor can't be detected.

**Example**

```typescript
import { currentMonitor } from '@tauri-apps/api/window';
const monitor = currentMonitor();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Monitor`](window.md#monitor) \| `null`\>

### `getAll`

> **getAll**(): [`Window`](window.md#window)[]

Gets a list of instances of `Window` for all available windows.

**Since**: 1.0.0

**Returns: **[`Window`](window.md#window)[]

### `getCurrent`

> **getCurrent**(): [`Window`](window.md#window)

Get an instance of `Window` for the current window.

**Since**: 1.0.0

**Returns: **[`Window`](window.md#window)

### `primaryMonitor`

> **primaryMonitor**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Monitor`](window.md#monitor) \| `null`\>

Returns the primary monitor of the system.
Returns `null` if it can't identify any monitor as a primary one.

**Example**

```typescript
import { primaryMonitor } from '@tauri-apps/api/window';
const monitor = primaryMonitor();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Monitor`](window.md#monitor) \| `null`\>
