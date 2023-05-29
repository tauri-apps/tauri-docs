# Mocking Tauri APIs

在编写前端测试时，您有一个“模拟” Tauri 环境来处理窗口或拦截IPC通话是常见的，即所谓的 _mocking_。 [`@tauri-apps/api/mocks`][] 模块提供一些有用的工具，让您更轻松地完成此操作：

:::caution

请记住在每次测试运行后清除模拟，以撤消运行之间的模拟状态更改！ 有关更多信息，请参阅 [`clearMocks()`][] 文档。

:::

## IPC 请求

最常见的是，您希望拦截 IPC 请求; 这在各种情况下都很有用：

- 确保进行正确的后端调用
- 模拟后端函数的不同结果

Tauri 提供 mockIPC 函数来拦截 IPC 请求。 您可以 [在此处][<code>mockipc()</code>]详细了解特定的 API。

:::note 以下示例使用 [Vitest][]，但您可以使用任何其他前端测试库，例如 jest。
:::

```js
import { beforeAll, expect, test } from "vitest";
import { randomFillSync } from "crypto";

import { mockIPC } from "@tauri-apps/api/mocks";
import { invoke } from "@tauri-apps/api/tauri";

// jsdom doesn't come with a WebCrypto implementation
beforeAll(() => {
  Object.defineProperty(window, 'crypto', {
    value: {
      // @ts-ignore      
      getRandomValues: (buffer) => {
        return randomFillSync(buffer);
      },
    },
  });
});


test("invoke simple", async () => {
  mockIPC((cmd, args) => {
    // simulated rust command called "add" that just adds two numbers
    if(cmd === "add") {
      return (args.a as number) + (args.b as number);
    }
  });
});
```

有时您想跟踪有关 IPC 呼叫的更多信息; 调用了多少次命令？ 它被调用了吗？ 您可以将 [`mockIPC()`][] 与其他侦测和 mocking 工具来测试这一点：

```js
import { beforeAll, expect, test, vi } from "vitest";
import { randomFillSync } from "crypto";

import { mockIPC } from "@tauri-apps/api/mocks";
import { invoke } from "@tauri-apps/api/tauri";

// jsdom doesn't come with a WebCrypto implementation
beforeAll(() => {
  Object.defineProperty(window, 'crypto', {
    value: {
      // @ts-ignore      
      getRandomValues: (buffer) => {
        return randomFillSync(buffer);
      },
    },
  });
});


test("invoke", async () => {
  mockIPC((cmd, args) => {
    // simulated rust command called "add" that just adds two numbers
    if(cmd === "add") {
      return (args.a as number) + (args.b as number);
    }
  });

  // we can use the spying tools provided by vitest to track the mocked function
  const spy = vi.spyOn(window, "__TAURI_IPC__");

  expect(invoke("add", { a: 12, b: 15 })).resolves.toBe(27);
  expect(spy).toHaveBeenCalled();
});
```

要模拟对 sidecar 或 shell 命令的 IPC 请求，当事件 `spawn()` 或 `execute()` 被调用时获取处理程序的 ID，并使用此 ID 返回给后端：

```js
mockIPC(async (cmd, args) => {
  if (args.message.cmd === 'execute') {
    const eventCallbackId = `_${args.message.onEventFn}`;
    const eventEmitter = window[eventCallbackId];

    // 'Stdout' event can be called multiple times
    eventEmitter({
      event: 'Stdout',
      payload: 'some data sent from the process',
    });

    // 'Terminated' event must be called at the end to resolve the promise
    eventEmitter({
      event: 'Terminated',
      payload: {
        code: 0,
        signal: 'kill',
      },
    });
  }
});
```

## Windows

有时您有特定于窗口的代码（例如初始屏幕窗口），因此您需要模拟不同的窗口。 您可以使用 [`mockWindows()`][] 方法来创建假窗口标签。 第一个字符串标识“当前”窗口（即 JavaScript 认为自己所在的窗口），所有其他字符串被视为附加窗口。

:::note

[`mockWindows()`][] 只模拟实现窗口，但没有窗口属性。 要模拟窗口属性，您需要使用 [`mockIPC()`][] 拦截正确的调用。

:::

```js
import { beforeAll, expect, test } from 'vitest';
import { randomFillSync } from 'crypto';

import { mockWindows } from '@tauri-apps/api/mocks';

// jsdom doesn't come with a WebCrypto implementation
beforeAll(() => {
  Object.defineProperty(window, 'crypto', {
    value: {
      // @ts-ignore      
      getRandomValues: (buffer) => {
        return randomFillSync(buffer);
      },
    },
  });
});

test('invoke', async () => {
  mockWindows('main', 'second', 'third');

  const { getCurrent, getAll } = await import('@tauri-apps/api/window');

  expect(getCurrent()).toHaveProperty('label', 'main');
  expect(getAll().map((w) => w.label)).toEqual(['main', 'second', 'third']);
});
```

[`@tauri-apps/api/mocks`]: ../../api/js/mocks.md
[<code>mockipc()</code>]: ../../api/js/mocks.md#mockipc
[`mockIPC()`]: ../../api/js/mocks.md#mockipc
[`mockWindows()`]: ../../api/js/mocks.md#mockwindows
[`clearMocks()`]: ../../api/js/mocks.md#clearmocks
[Vitest]: https://vitest.dev
