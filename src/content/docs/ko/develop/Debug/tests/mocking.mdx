---
title: Mock Tauri APIs(모의 런타임)
sidebar:
  order: 10
i18nReady: true
---

import TranslationNote from '@components/i18n/TranslationNote.astro';

프론트엔드 테스트를 작성할 때, 창을 시뮬레이션하거나 IPC 호출을 가로채기 위한 "임시" Tauri 환경(소위 **모킹**)을 준비하는 것이 일반적입니다.
[`@tauri-apps/api/mocks`] 모듈은 쉽게 이 가상 환경을 구현하기 위한 몇 가지 편리한 도구를 제공합니다:

:::caution

가상 환경에서의 테스트별 변경(모의 상태 변화)을 취소하기 위해, 각 테스트 실행 후에 반드시 "모의"를 클리어하십시오. 자세한 내용은 목차 **Reference**의 "Mock" 장에 있는 [`clearMocks()`] 문서를 참조하십시오.

:::

## IPC 요청

테스트에서 가장 일반적인 검증 사항은 "IPC 요청"을 가로채는 것입니다. 이는 다양한 상황에서 유용합니다. 예를 들어:

- 올바른 백엔드 호출이 이루어지고 있는지 확인
- 백엔드 함수로부터 다른 결과를 시뮬레이션

Tauri에서는 "IPC 요청"을 가로채기 위한 mockIPC 함수를 사용할 수 있습니다. 구체적인 API 세부 정보는 [여기][`mockipc()`]를 참조하십시오.

:::note

아래 예제에서는 테스트 프레임워크로 [Vitest]를 사용하지만, [jest]와 같은 다른 프론트엔드 테스트 라이브러리를 사용할 수도 있습니다.

:::

```javascript
import { beforeAll, expect, test } from "vitest";
import { randomFillSync } from "crypto";

import { mockIPC } from "@tauri-apps/api/mocks";
import { invoke } from "@tauri-apps/api/core";

// "jsdom 테스트 환경"에는 WebCrypto 구현이 포함되어 있지 않습니다
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
    // 두 숫자를 더하는 "add"라는 Rust 명령을 시뮬레이션합니다
    if(cmd === "add") {
      return (args.a as number) + (args.b as number);
    }
  });
});
```

때로는 IPC 호출에 대한 더 많은 정보를 추적하고 싶을 때가 있습니다. 예를 들어, 명령이 몇 번 호출되었는지, 애초에 명령이 호출되었는지 여부 등입니다.
이러한 테스트에는 다른 스파이 도구(감시) 및 모의 도구와 함께 [`mockIPC()`]를 사용할 수 있습니다.

```javascript
import { beforeAll, expect, test, vi } from "vitest";
import { randomFillSync } from "crypto";

import { mockIPC } from "@tauri-apps/api/mocks";
import { invoke } from "@tauri-apps/api/core";

// "jsdom 테스트 환경"에는 WebCrypto 구현이 포함되어 있지 않습니다
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
    // 두 숫자를 더하는 "add"라는 Rust 명령을 시뮬레이션합니다
    if(cmd === "add") {
      return (args.a as number) + (args.b as number);
    }
  });

  // vitest가 제공하는 스파이 도구를 사용하여 모의화된 함수를 추적할 수 있습니다.
  const spy = vi.spyOn(window.__TAURI_INTERNALS__, "invoke");

  expect(invoke("add", { a: 12, b: 15 })).resolves.toBe(27);
  expect(spy).toHaveBeenCalled();
});
```

<TranslationNote lang="ko">

**모의화** mocked function "모의화된 함수". 테스트 환경 등에서 호출되는 모의 함수로 지정되어 가상으로 실행되는 (임시) 함수.

</TranslationNote>

"[사이드카]"(내장된 외부 프로그램)나 셸 명령에 대한 IPC 요청을 모의화하려면, `spawn()` 또는 `execute()`가 호출되었을 때의 이벤트 핸들러 ID를 가져와 이 ID를 사용하여 백엔드가 응답하는 이벤트를 발생시킵니다:

```javascript
mockIPC(async (cmd, args) => {
  if (args.message.cmd === 'execute') {
    const eventCallbackId = `_${args.message.onEventFn}`;
    const eventEmitter = window[eventCallbackId];

    // "표준 출력 Stdout" 이벤트는 몇 번이든 호출 가능합니다
    eventEmitter({
      event: 'Stdout',
      payload: 'some data sent from the process',
    });

    // "프로미스" 처리를 완료하려면 마지막에 "Terminated" 이벤트를 호출합니다
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

<TranslationNote lang="ko">

**프로미스** Promise: Promise는 JavaScript에서 비동기 처리가 완료되었을 때 결과(resolve 또는 reject)를 반환하는 객체입니다.

</TranslationNote>

## Windows의 경우

Windows에서는 때때로 Windows 고유의 코드(예: 스플래시 스크린 창) 때문에 다른 창의 시뮬레이션이 필요할 수 있습니다.
[`mockWindows()`] 메서드를 사용하면 임시 창 레이블을 만들 수 있습니다. 첫 번째 문자열이 "현재" 창(즉, JavaScript 자체가 해당 창 내에 있다고 인식하는 창)을 식별하고, 다른 문자열은 추가 창으로 처리됩니다.

:::note

[`mockWindows()`]는 창의 존재를 가장할 뿐, 창의 속성을 위장하는 것은 아닙니다. 창의 속성을 시뮬레이션하려면 [`mockIPC()`]를 사용하여 정규 호출을 가로채야 합니다.

:::

```javascript
import { beforeAll, expect, test } from 'vitest';
import { randomFillSync } from 'crypto';

import { mockWindows } from '@tauri-apps/api/mocks';

// "jsdom 테스트 환경"에는 WebCrypto 구현이 포함되어 있지 않습니다
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

  const { getCurrent, getAll } = await import('@tauri-apps/api/webviewWindow');

  expect(getCurrent()).toHaveProperty('label', 'main');
  expect(getAll().map((w) => w.label)).toEqual(['main', 'second', 'third']);
});
```

[`@tauri-apps/api/mocks`]: /reference/javascript/api/namespacemocks/
[`mockipc()`]: /reference/javascript/api/namespacemocks/#mockipc
[`mockwindows()`]: /reference/javascript/api/namespacemocks/#mockwindows
[`clearmocks()`]: /reference/javascript/api/namespacemocks/#clearmocks
[Vitest]: https://vitest.dev
[jest]: https://jestjs.io/ko/
[사이드카]: /ko/develop/sidecar/

<div style="text-align: right">
  【※ 이 한국어판은, 「Jan 22, 2025 영문판」에 근거하고 있습니다】
</div>
