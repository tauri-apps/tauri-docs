---
sidebar_position: 3
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 종속성 업데이트하기

## Npm 패키지 업데이트

`tauri` 패키지를 사용할 경우:

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm install @tauri-apps/cli@latest @tauri-apps/api@latest
```

  </TabItem>
  <TabItem value="Yarn Classic">

```shell
yarn upgrade @tauri-apps/cli @tauri-apps/api --latest
```

  </TabItem>
  <TabItem value="Yarn Berry">

```shell
yarn up @tauri-apps/cli @tauri-apps/api
```

  </TabItem>
  <TabItem value="pnpm">

```shell
pnpm update @tauri-apps/cli @tauri-apps/api --latest
```

  </TabItem>
</Tabs>

다음 항목을 사용하여 명령줄에서 최신 버전의 Tauri를 검색할 수 있습니다:

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm outdated @tauri-apps/cli
```

  </TabItem>
  <TabItem value="Yarn">

```shell
yarn outdated @tauri-apps/cli
```

  </TabItem>
  <TabItem value="pnpm">

```shell
pnpm outdated @tauri-apps/cli
```

  </TabItem>
</Tabs>

대안으로 `vue-cli-plugin-tauri` 방식을 사용하는 경우:

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm install vue-cli-plugin-tauri@latest
```

  </TabItem>
  <TabItem value="Yarn Classic">

```shell
yarn upgrade vue-cli-plugin-tauri --latest
```

  </TabItem>
  <TabItem value="Yarn Berry">

```shell
yarn up vue-cli-plugin-tauri
```

  </TabItem>
  <TabItem value="pnpm">

```shell
pnpm update vue-cli-plugin-tauri --latest
```

  </TabItem>
</Tabs>

## Cargo 패키지 업데이트

[`cargo outdated`][]나 crates.io 페이지에서 이전 패키지 내용을 확인할 수 있습니다: [tauri][] / [tauri-build][].

`src-tauri/Cargo.toml`에서 `tauri`와 `tauri-build` 를 아래와 같이 바꿔줍니다.

```toml
[build-dependencies]
tauri-build = "%version%"

[dependencies]
tauri = { version = "%version%" }
```

여기서 `%version%`는 위에 버전 번호입니다. <!-- TODO: (You can just use the `MAJOR.MINOR`) version, like `0.9`. -->

그리고, 아래와 같이 실행합니다.

```shell
cd src-tauri
cargo update
```

또한, [cargo-edit][]에서 제공하는 `cargo upgrade` 명령을 실행하여 이 모든 작업을 자동으로 수행할 수 있습니다.

[`cargo outdated`]: https://github.com/kbknapp/cargo-outdated
[tauri]: https://crates.io/crates/tauri/versions
[tauri-build]: https://crates.io/crates/tauri-build/versions
[cargo-edit]: https://github.com/killercup/cargo-edit
