---
title: Mock Tauri APIs（モック・ランタイム）
sidebar:
  order: 10
i18nReady: true
---

import TranslationNote from '@components/i18n/TranslationNote.astro';

フロントエンド・テストを作成する場合、ウィンドウをシミュレートしたり IPC 呼び出しをインターセプトしたりするための「仮の」Tauri 環境（いわゆる **モッキング**）を用意するのが一般的です。
[`@tauri-apps/api/mocks`] モジュールは、簡単にこの擬似環境を実現するための便利なツールをいくつか提供しています：

:::caution

疑似環境でのテスト毎の変更（モックでの状態変化）を取り消すために、各テストの実行後に必ず「モック」をクリアしてください。詳細については、目次 **Reference** の「Mock」の章にある [`clearMocks()`] のドキュメントを参照してください。

:::

## IPC 要求

テストでの最も一般的な検証事項は、「IPC 要求」をインターセプトすることです。これはさまざまな状況で役立ちます。たとえば：

- 正しいバックエンド呼び出しが行なわれていることを確認する
- バックエンド関数からの異なる結果をシミュレーションする

Tauri では「IPC 要求」をインターセプトするための mockIPC 関数が利用できます。具体的な API の詳細については、[こちら][`mockipc()`] をご覧ください。

:::note

以下の事例では テスト・フレームワークの [Vitest] を使用していますが、[jest] のような他のフロントエンド・テスト・ライブラリを使用することもできます。

:::

```javascript
import { beforeAll, expect, test } from "vitest";
import { randomFillSync } from "crypto";

import { mockIPC } from "@tauri-apps/api/mocks";
import { invoke } from "@tauri-apps/api/core";

// 「jsdom テスト環境」には WebCrypto 実装が付属していません
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
    // 二つの数字を加算するだけの「add」という Rust コマンドをシミュレートします
    if(cmd === "add") {
      return (args.a as number) + (args.b as number);
    }
  });
});
```

時には IPC 呼び出しに関するより多くの情報を追跡したい場合があります；　たとえば、コマンドは何回呼び出されたか、そもそもコマンドは呼び出されたのかどうか、などです。
このようなテストには、他のスパイ・ツール（監視）およびモック・ツールと一緒に [`mockIPC()`] を使用できます。

```javascript
import { beforeAll, expect, test, vi } from "vitest";
import { randomFillSync } from "crypto";

import { mockIPC } from "@tauri-apps/api/mocks";
import { invoke } from "@tauri-apps/api/core";

// 「jsdom テスト環境」には WebCrypto 実装が付属していません
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
    // 二つの数字を加算するだけの「add」という Rust コマンドをシミュレートします
    if(cmd === "add") {
      return (args.a as number) + (args.b as number);
    }
  });

  // vitest が提供するスパイ・ツールを使用して、モック化された関数を追跡することができます。
  const spy = vi.spyOn(window.__TAURI_INTERNALS__, "invoke");

  expect(invoke("add", { a: 12, b: 15 })).resolves.toBe(27);
  expect(spy).toHaveBeenCalled();
});
```

<TranslationNote lang="ja">

**モック化**　mocked function「モック化された関数」。テスト環境などで呼び出されるモック関数で指定され、仮想的・擬似的に実行される（仮の）関数。

</TranslationNote>

「[サイドカー]」（埋め込まれた外部プログラム）やシェル・コマンドへの IPC 要求をモック化するには、`spawn()` または `execute()` が呼び出されたときのイベント・ハンドラーの ID を取得し、この ID を使用してバックエンドが返信するイベントを発行させます：

```javascript
mockIPC(async (cmd, args) => {
  if (args.message.cmd === 'execute') {
    const eventCallbackId = `_${args.message.onEventFn}`;
    const eventEmitter = window[eventCallbackId];

    // 「標準出力 Stdout」イベントは何度でも呼び出し可能です
    eventEmitter({
      event: 'Stdout',
      payload: 'some data sent from the process',
    });

    // 「プロミス」での処理を完了するには、最後に「Terminated」イベントを呼び出します
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

<TranslationNote lang="ja">

**プロミス**　Promise：　Promise は JavaScript で非同期処理が完了したときに結果（resolve または reject）を返すオブジェクトです。

</TranslationNote>

## Windows の場合

Windows では、時として Windows 固有のコード（たとえば、スプラッシュ・スクリーン・ウィンドウ）のために、異なるウィンドウのシミュレーションが必要となる場合があります。
[`mockWindows()`] メソッドを使用すると、仮のウィンドウ・ラベルを作成できます。最初の文字列が「現在の」ウィンドウ（つまり、JavaScript 自身がそのウィンドウ内にあると認識しているウィンドウ）を識別し、その他の文字列は追加ウィンドウとして扱われます。

:::note

[`mockWindows()`] はウィンドウの存在を見せ掛けるだけで、ウィンドウのプロパティを擬装するわけではありません。ウィンドウのプロパティをシミュレートするには、[`mockIPC()`] を使用して正規の呼び出しをインターセプトする必要があります。

:::

```javascript
import { beforeAll, expect, test } from 'vitest';
import { randomFillSync } from 'crypto';

import { mockWindows } from '@tauri-apps/api/mocks';

// 「jsdom テスト環境」には WebCrypto 実装が付属していません
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
[jest]: https://jestjs.io/ja/
[サイドカー]: /ja/develop/sidecar/

<div style="text-align: right">
  【※ この日本語版は、「Jan 22, 2025 英語版」に基づいています】
</div>
