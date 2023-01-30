---
meta_title: Getting Started
meta_description: Begin building your first Tauri app
meta_position: 1
---

import DocCardList from '@theme/DocCardList'
import { useCurrentSidebarCategory } from '@docusaurus/theme-common'
import { CreateTauriApp } from '@theme/Command'

# Quick Start

Tauri is compatible with **almost every frontend stack**. Select yours and get started!

:::tip `create-tauri-app`

The easiest way to scaffold a new project is the [`create-tauri-app`] utility. It provides opinionated templates for vanilla HTML/CSS/JavaScript and many frontend frameworks like React, Svelte, and Yew.

<CreateTauriApp />

Note that you do not need to follow the below guides if you use `create-tauri-app`, but we still recommend reading one (such as the [HTML/CSS/JavaScript] guide) to understand the setup.

:::

If you're unfamiliar with web development or have no favorite frontend stack you might find the [HTML/CSS/JavaScript] guide the most helpful. It guides you through getting started with the most minimal frontend setup possible using either Node or Cargo.

<DocCardList items={useCurrentSidebarCategory().items} />

:::info Missing your favorite framework?

If you miss your favorite frontend framework or build tool, we're always looking for Getting Started guides! Read our [contributing] guidelines and help us out!

:::

[html/css/javascript]: ./html-css-js.mdx
[contributing]: https://github.com/tauri-apps/tauri/blob/dev/.github/CONTRIBUTING.md
[`create-tauri-app`]: https://github.com/tauri-apps/create-tauri-app
