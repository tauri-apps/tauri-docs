---
description: Build a Tauri app using HTML, CSS, and JavaScript using either Node or Cargo
pagination_next: guides/development/development-cycle
sidebar_position: 1
sidebar_custom_props:
  doc_card_image: /img/guides/getting-started/setup/html5-light.svg
  doc_card_image_dark: /img/guides/getting-started/setup/html5-dark.svg
---

import TauriInit from './_fragments/_tauri-init.mdx'
import Commands from './_fragments/_commands.mdx'
import Intro from './_fragments/_intro.mdx'
import CreateTauriAppGuide from './_fragments/_create-tauri-app-guide.mdx'
import Command from '@theme/Command'

# HTML, CSS, and JavaScript

This guide will walk you through creating your first Tauri app using just HTML, CSS, and JavaScript. This is probably the best place to start if you are new to web development.

<Intro />
<CreateTauriAppGuide />

Here's a preview of what we will be building:

![Preview of Application](/img/guides/getting-started/setup/html-css-js/html-css-js-light.png#gh-light-mode-only)
![Preview of Application](/img/guides/getting-started/setup/html-css-js/html-css-js-dark.png#gh-dark-mode-only)

## Create the Frontend

We will create a very minimal UI using an HTML file. To keep things tidy though, let's create a separate folder for it:

```shell
mkdir ui
```

Next, create an `index.html` file inside of that folder with the following contents:

```html title=index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Welcome from Tauri!</h1>
  </body>
</html>
```

We will keep the UI minimal for this guide, but feel free to play around with more content or add styling through CSS.

## Create the Rust Project

<TauriInit
  destDirExplination={{
    __html: 'Use <code>../ui</code> for this value.',
  }}
  devPathExplination={{
    __html: 'Use <code>../ui</code> for this value.',
  }}
  beforeDevCommandExplination={{
    __html: 'You can leave this blank since nothing needs to be compiled.',
  }}
  beforeBuildCommandExplination={{
    __html: 'You can leave this blank since nothing needs to be compiled.',
  }}
/>

And that's it! Now you can run the following command in your terminal to start a development build of your app:

<Command name="dev" />

Preview of Application

![Development Progress](/img/guides/getting-started/setup/html-css-js/html-css-js-dev-light.png#gh-light-mode-only)
![Development Progress](/img/guides/getting-started/setup/html-css-js/html-css-js-dev-dark.png#gh-dark-mode-only)

## Invoke Commands

<Commands />

We would normally be recommending the [`@tauri-apps/api`] package here, but since we're not using a bundler for this guide, please enable [`withGlobalTauri`] in your `tauri.conf.json` file:

```json title=tauri.conf.json
{
  "build": {
    "beforeBuildCommand": "",
    "beforeDevCommand": "",
    "devPath": "../ui",
    "distDir": "../ui",
    // highlight-next-line
    "withGlobalTauri": true
  },
```

This will inject a pre-bundled version of the API functions into your frontend.

You can now modify your `index.html` file to call your Command:

```html title=index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    // highlight-start
    <h1 id="header">Welcome from Tauri!</h1>
    <script>
      // access the pre-bundled global API functions
      const { invoke } = window.__TAURI__.tauri

      // now we can call our Command!
      // You will see "Welcome from Tauri" replaced
      // by "Hello, World!"!
      invoke('greet', { name: 'World' })
        // `invoke` returns a Promise
        .then((response) => {
          window.header.innerHTML = response
        })
    </script>
    // highlight-end
  </body>
</html>
```

:::tip

If you want to know more about the communication between Rust and JavaScript, please read the Tauri [Inter-Process Communication][inter-process-communication] guide.

:::

[inter-process-communication]: ../../../references/architecture/inter-process-communication/readme.md
[cargo]: https://doc.rust-lang.org/cargo/
[prerequisites]: ../prerequisites.md
[`withglobaltauri`]: ../../../api/config.md#buildconfig.withglobaltauri
[`@tauri-apps/api`]: ../../../api/js/
