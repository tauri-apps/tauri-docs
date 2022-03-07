[@tauri-apps/api](../README.md) / mocks

# Module: mocks

## Functions

### clearMocks

▸ **clearMocks**(): `void`

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

#### Returns

`void`

#### Defined in

[mocks.ts:142](https://github.com/tauri-apps/tauri/blob/a30712f/tooling/api/src/mocks.ts#L142)

___

### mockIPC

▸ **mockIPC**(`cb`): `void`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`cmd`: `string`, `args`: `Record`<`string`, `unknown`\>) => `any` |

#### Returns

`void`

#### Defined in

[mocks.ts:40](https://github.com/tauri-apps/tauri/blob/a30712f/tooling/api/src/mocks.ts#L40)

___

### mockWindows

▸ **mockWindows**(`current`, ...`additionalWindows`): `void`

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `current` | `string` | Label of window this JavaScript context is running in. |
| `...additionalWindows` | `string`[] | Label of additional windows the app has. |

#### Returns

`void`

#### Defined in

[mocks.ts:108](https://github.com/tauri-apps/tauri/blob/a30712f/tooling/api/src/mocks.ts#L108)
