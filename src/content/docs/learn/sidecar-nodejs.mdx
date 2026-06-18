---
title: Node.js as a sidecar
sidebar:
  order: 1
i18nReady: true
---

import CommandTabs from '@components/CommandTabs.astro';
import { Tabs, TabItem, Steps } from '@astrojs/starlight/components';
import CTA from '@fragments/cta.mdx';

In this guide we are going to package a Node.js application to a self contained binary
to be used as a sidecar in a Tauri application without requiring the end user to have a Node.js installation.
This example tutorial is applicable for desktop operating systems only.

We recommend reading the general [sidecar guide] first for a deeper understanding of how Tauri sidecars work.

## Goals

- Package a Node.js application as a binary.
- Integrate this binary as a Tauri sidecar.

## Implementation Details

- For this we use the [pkg] tool, but any other tool that can compile JavaScript or Typescript into a binary application will work.
- You can also embed the Node runtime itself into your Tauri application and ship bundled JavaScript as a resource, but this will ship the JavaScript content as readable-ish files and the runtime is usually larger than a `pkg` packaged application.

In this example we will create a Node.js application that reads input from the command line [process.argv]
and writes output to stdout using [console.log]. <br/>
You can leverage alternative inter-process communication systems such as a localhost server, stdin/stdout or local sockets.
Note that each has their own advantages, drawbacks and security concerns.

## Prerequisites

An existing Tauri application set up with the shell plugin, that compiles and runs for you locally.

:::tip[Create a lab app]

If you are not an advanced user it's **highly recommended** that you use the options and frameworks provided here. It's just a lab, you can delete the project when you're done.

<CTA />

- Project name: `node-sidecar-lab`
- Choose which language to use for your frontend: `Typescript / Javascript`
- Choose your package manager: `pnpm`
- Choose your UI template: `Vanilla`
- Choose your UI flavor: `Typescript`

:::

:::note
Please follow the [shell plugin guide](/plugin/shell/) first to set up and initialize the plugin correctly.
Without the plugin being initialized and configured the example won't work.
:::

## Guide

<Steps>

1.  ##### Initialize Sidecar Project

    Let's create a new Node.js project to contain our sidecar implementation.
    Create a new directory **in your Tauri application root folder** (in this example we will call it `sidecar-app`)
    and run the `init` command of your preferred Node.js package manager inside the directory:

    <CommandTabs npm="npm init" yarn="yarn init" pnpm="pnpm init" />

    We will compile our Node.js application to a self container binary using [pkg] among other options.
    Let's install it as a development dependency into the new `sidecar-app`:

    <CommandTabs
      npm="npm add @yao-pkg/pkg --save-dev"
      yarn="yarn add @yao-pkg/pkg --dev"
      pnpm="pnpm add @yao-pkg/pkg --save-dev"
    />

1.  ##### Write Sidecar Logic

    Now we can start writing JavaScript code that will be executed by our Tauri application.

    In this example we will process a command from the command line argmuents and write output to stdout,
    which means our process will be short lived and only handle a single command at a time.
    If your application must be long lived, consider using alternative inter-process communication systems.

    Let's create a `index.js` file in our `sidecar-app` directory and write a basic Node.js app:

    ```js title=sidecar-app/index.js
    const command = process.argv[2];

    switch (command) {
      case 'hello':
        const message = process.argv[3];
        console.log(`Hello ${message}!`);
        break;
      default:
        console.error(`unknown command ${command}`);
        process.exit(1);
    }
    ```

1.  ##### Package the Sidecar

    To package our Node.js application into a self contained binary, create a script in `package.json`:

    ```json title="sidecar-app/package.json"
    {
      "scripts": {
        "build": "pkg index.ts --output my-sidecar"
      }
    }
    ```

    <CommandTabs npm="npm run build" yarn="yarn build" pnpm="pnpm build" />

    This will create the `sidecar-app/my-sidecar` binary on Linux and macOS, and a `sidecar-app/my-sidecar.exe` executable on Windows.

    For sidecar applications, we need to ensure that the binary is named in the correct pattern, for more information read [Embedding External Binaries](https://tauri.app/develop/sidecar/)
    To rename this file to the expected Tauri sidecar filename and also move to our Tauri project, we can use the following Node.js script as a starting example:

    ```js title="sidecar-app/rename.js"
    import { execSync } from 'child_process';
    import fs from 'fs';

    const ext = process.platform === 'win32' ? '.exe' : '';

    const targetTriple = execSync('rustc --print host-tuple').toString().trim();
    if (!targetTriple) {
      console.error('Failed to determine platform target triple');
    }
    // TODO: create `src-tauri/binaries` dir
    fs.renameSync(
      `my-sidecar${ext}`,
      `../src-tauri/binaries/my-sidecar-${targetTriple}${ext}`
    );
    ```

    :::note
    The `--print host-tuple` flag was added in Rust 1.84.0. If you're using an older version, you'll need to parse the output of `rustc -Vv` instead:

    ```js
    const rustInfo = execSync('rustc -vV');
    const targetTriple = /host: (\S+)/g.exec(rustInfo)[1];
    ```

    :::

    And run `node rename.js` from the `sidecar-app` directory.

    At this step the `/src-tauri/binaries` directory should contain the renamed sidecar binary.

1.  ##### Setup plugin-shell permission

    After installing the [shell plugin](/plugin/shell/) make sure you configure the required capabilities.

    Note that we use `"args": true` but you can optionally provide an array `["hello"]`, [read more](/develop/sidecar/#passing-arguments).

    ```json title='src-tauri/capabilities/default.json'
    {
      "permissions": [
        "core:default",
        "opener:default",
        {
          "identifier": "shell:allow-execute",
          "allow": [
            {
              "args": true,
              "name": "binaries/my-sidecar",
              "sidecar": true
            }
          ]
        }
      ]
    }
    ```

1.  ##### Configure the Sidecar in the Tauri Application

    Now that we have our Node.js application ready, we can connect it to our Tauri application
    by configuring the [`bundle > externalBin`] array:

    ```json title="src-tauri/tauri.conf.json"
    {
      "bundle": {
        "externalBin": ["binaries/my-sidecar"]
      }
    }
    ```

    The Tauri CLI will handle the bundling of the sidecar binary as long as it exists as `src-tauri/binaries/my-sidecar-<target-triple>`.

1.  ##### Execute the Sidecar

    We can run the sidecar binary either from Rust code or directly from JavaScript.

    <Tabs syncKey="lang">

      <TabItem label="JavaScript">

        Let's execute the `hello` command in the Node.js sidecar directly:

        ```js
        import { Command } from '@tauri-apps/plugin-shell';

        const message = 'Tauri';

        const command = Command.sidecar('binaries/my-sidecar', ['hello', message]);
        const output = await command.execute();
        // once everything is configured it should log "Hello Tauri" in the browser console.
        console.log(output.stdout)
        ```

      </TabItem>

      <TabItem label="Rust">

        Let's pipe a `hello` Tauri command to the Node.js sidecar:

        ```rust
        use tauri_plugin_shell::ShellExt;

        #[tauri::command]
        async fn hello(app: tauri::AppHandle, cmd: String, message: String) -> String {
            let sidecar_command = app
                .shell()
                .sidecar("my-sidecar")
                .unwrap()
                .arg(cmd)
                .arg(message);
            let output = sidecar_command.output().await.unwrap();
            String::from_utf8(output.stdout).unwrap()
        }
        ```

        Register it in `invoke_handler` and call it in the frontend with:

        ```js

        import { invoke } from "@tauri-apps/api/core";

        const message = "Tauri"
        console.log(await invoke("hello", { cmd: 'hello', message }))

        ```

      </TabItem>

    </Tabs>

1.  ##### Running

    Lets test it

    <CommandTabs
      npm="npm run tauri dev"
      yarn="yarn tauri dev"
      pnpm="pnpm tauri dev"
      deno="deno task tauri dev"
      bun="bun tauri dev"
      cargo="cargo tauri dev"
    />

    Open the DevTools with F12 (or `Cmd+Option+I` on macOS) and you should see the output of the sidecar command.

    If you find any issues, please open an issue on [GitHub](https://github.com/tauri-apps/tauri-docs).

</Steps>

[sidecar guide]: /develop/sidecar/
[process.argv]: https://nodejs.org/docs/latest/api/process.html#processargv
[console.log]: https://nodejs.org/api/console.html#consolelogdata-args
[pkg]: https://github.com/yao-pkg/pkg
[`bundle > externalBin`]: /reference/config/#externalbin
