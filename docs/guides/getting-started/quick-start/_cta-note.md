import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note `create-tauri-app`
The easiest way to scaffold a new project is the `create-tauri-app` utility. It will ask you a bunch of questions and create template based on those questions. It has support for vanilla HTML/CSS/JS but also many frontend frameworks, like React, Vue or Svelte.

<Tabs>
<TabItem value="npx" label="npx" default>

```shell
npx create-tauri-app
```

</TabItem>
<TabItem value="yarn" label="yarn">

```shell
yarn create tauri-app
```

</TabItem>
<TabItem value="pnpm" label="pnpm">

```shell
pnpm create tauri-app
```

</TabItem>
</Tabs>

Follow the instructions and choose the web front-end framework you prefer.
:::