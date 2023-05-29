# Tauri API 모킹

프런트엔드 테스트를 작성할 때 "가짜" Tauri 환경을 사용하여 창을 모의 시험하거나 IPC 호출을 가로채는 것이 일반적이며 이를 _mocking_이라고 합니다. [`@tauri-apps/api/mocks`][] 모듈은 이를 쉽게 할 수 있도록 몇 가지 도움이 되는 도구들을 제공합니다.

:::주의

실행 간 모의 상태 변경을 취소하려면, 각 테스트 실행 후 모킹을 지우는 것을 잊지 마십시오! 자세한 정보는 [`clearMocks()`][] 문서에서 확인할 수 있습니다.

:::

## IPC 요청

가장 일반적으로, IPC 요청을 가로채고 싶다면, 이것은 다양한 상황에서 도움이 될 수 있습니다.

- 백엔드 호출이 올바르게 이루어졌는지 확인
- 백엔드 함수에서 다른 결과 모의 실험

Tauri는 IPC 요청을 가로채는 mockIPC 기능을 제공합니다. 특정 API에 대한 상세한 정보를 원할 경우 [여기][<code>mockipc()</code>]에서 확인할 수 있습니다.

:::노트
다음 예제는 [Vitest][]를 사용하지만 jest와 같은 다른 프런트엔드 테스트 라이브러리를 사용할 수 있습니다.
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

때때로, IPC 호출에 대한 추가 정보를 추적하려는 경우가 있습니다. 명령이 몇 번 호출되었을까? 전혀, 호출되지 않았을까? 이를 테스트를 하기 위해 [`mockIPC()`][] 와 함께 다른 탐색, 모킹 도구를 사용할 수 있습니다.

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

사이드카 또는 셸 명령에 대한 IPC 요청을 모방하려면 `spawn()`이나 `execute()`가 호출될 때 이벤트 핸들러의 ID를 가져와 이 ID를 사용하여 백엔드가 다시 보낼 이벤트를 내보내야 합니다:

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

경우에 따라 윈도우 관련 코드(예: 시작 화면 윈도우) 가 있으므로 다른 창을 모의 실험해야 합니다. 가짜 윈도우 레이블을 생성하기 위해 [`mockWindows()`][] 함수를 사용할 수 있습니다. 첫 번째 문자열은 "현재" 윈도우(예, JavaScript 스스로가 윈도우라고 믿는)를 식별하고 다른 모든 문자열은 추가 창으로 처리됩니다.

:::note

[`mockWindows()`][]는 실제 윈도우 속성이 아닌 윈도우의 가짜 존재입니다. 윈도우 속성을 모의실험 해보기 위해, [`mockIPC()`][]를 사용하여 올바른 호출을 가로채야 합니다.

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
