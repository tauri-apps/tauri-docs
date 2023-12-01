# mocks

## Functions

### `clearMocks`

> **clearMocks**(): `void`

Clears mocked functions/data injected by the other functions in this module.
When using a test runner that doesn't provide a fresh window object for each test, calling this function will reset tauri specific properties.

# Example

```js
import { mockWindows, clearMocks } from "@tauri-apps/api/mocks"

afterEach(() => {
   clearMocks()
})

test("mocked windows", () => {
   mockWindows("main", "second", "third");

   expect(window).toHaveProperty("__TAURI_METADATA__")
})

test("no mocked windows", () => {
   expect(window).not.toHaveProperty("__TAURI_METADATA__")
})
```

**Since**: 1.0.0

**Returns: **`void`

### `mockConvertFileSrc`

> **mockConvertFileSrc**(`osName`: `string`, `windowsProtocolScheme?`: `string`): `void`

Mock `convertFileSrc` function

**Example**

```js
import { mockConvertFileSrc } from "@tauri-apps/api/mocks";
import { convertFileSrc } from "@tauri-apps/api/tauri";

mockConvertFileSrc("windows")

const url = convertFileSrc("C:\\Users\\user\\file.txt")
```

**Since**: 1.6.0

**Parameters**

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `osName` | `string` | `undefined` | The operating system to mock, can be one of linux, macos, or windows |
| `windowsProtocolScheme` | `string` | `'https'` | The scheme to use on Windows, can be either `http` or `https` and defaults to `https` |

**Returns: **`void`

### `mockIPC`

> **mockIPC**(`cb`: `fn`): `void`

Intercepts all IPC requests with the given mock handler.

This function can be used when testing tauri frontend applications or when running the frontend in a Node.js context during static site generation.

# Examples

Testing setup using vitest:
```js
import { mockIPC, clearMocks } from "@tauri-apps/api/mocks"
import { invoke } from "@tauri-apps/api/tauri"

afterEach(() => {
   clearMocks()
})

test("mocked command", () => {
 mockIPC((cmd, args) => {
  switch (cmd) {
    case "add":
      return (args.a as number) + (args.b as number);
    default:
      break;
    }
 });

 expect(invoke('add', { a: 12, b: 15 })).resolves.toBe(27);
})
```

The callback function can also return a Promise:
```js
import { mockIPC, clearMocks } from "@tauri-apps/api/mocks"
import { invoke } from "@tauri-apps/api/tauri"

afterEach(() => {
   clearMocks()
})

test("mocked command", () => {
 mockIPC((cmd, args) => {
  if(cmd === "get_data") {
   return fetch("https://example.com/data.json")
     .then((response) => response.json())
  }
 });

 expect(invoke('get_data')).resolves.toBe({ foo: 'bar' });
})
```

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `cb` | (`cmd`: `string`, `args`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`string`, `unknown`\>) => `any` |

**Returns: **`void`

### `mockWindows`

> **mockWindows**(`current`: `string`, ...`additionalWindows`: `string`[]): `void`

Mocks one or many window labels.
In non-tauri context it is required to call this function *before* using the `@tauri-apps/api/window` module.

This function only mocks the *presence* of windows,
window properties (e.g. width and height) can be mocked like regular IPC calls using the `mockIPC` function.

# Examples

```js
import { mockWindows } from "@tauri-apps/api/mocks";
import { getCurrent } from "@tauri-apps/api/window";

mockWindows("main", "second", "third");

const win = getCurrent();

win.label // "main"
```

```js
import { mockWindows } from "@tauri-apps/api/mocks";

mockWindows("main", "second", "third");

mockIPC((cmd, args) => {
 if (cmd === "tauri") {
   if (
     args?.__tauriModule === "Window" &&
     args?.message?.cmd === "manage" &&
     args?.message?.data?.cmd?.type === "close"
   ) {
     console.log('closing window!');
   }
 }
});

const { getCurrent } = await import("@tauri-apps/api/window");

const win = getCurrent();
await win.close(); // this will cause the mocked IPC handler to log to the console.
```

**Since**: 1.0.0

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `current` | `string` | Label of window this JavaScript context is running in. |
| `...additionalWindows` | `string`[] | Label of additional windows the app has. |

**Returns: **`void`
