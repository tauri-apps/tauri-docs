# Debugging in CLion

In this guide, we’ll be setting up IntelliJ CLion for debugging the [Core Process of your Tauri app][].

## Prérequis

You need to install the [IntelliJ Rust Plugin](https://plugins.jetbrains.com/plugin/8182-rust/docs) so that Rust features are enabled.

## Top-level Cargo Workspace

By default, Tauri places the Rust project in a subdirectory called `src-tauri`. CLion may not recognize Cargo projects that are not at the top-level, in which case you should be able to attach it by using `Cargo -> Attach Cargo project`. If this option does not work, you will need to create a top-level Workspace that just points to the main `Cargo.toml` file:

```toml title=Cargo.toml
[workspace]
members = ["src-tauri"]
```

Before you proceed, make sure that your project is fully loaded. If the indexing is finished and the Cargo tool window shows all the modules and targets of the workspace, you’re good to go.

## Run/Debug Configuration

We will set up a Run/Debug configuration that we can use to launch our Tauri app in debugging mode. To create a configuration, go to Edit Configurations, click **+**, and then select Cargo Command.

![Add Run/Debug Configuration](/img/guides/debugging/clion/add-cargo-config-light.png#gh-light-mode-only) ![Add Run/Debug Configuration](/img/guides/debugging/clion/add-cargo-config-dark.png#gh-dark-mode-only)

With that created we need to configure CLion so it instructs Cargo to build our app without any default features. This will tell Tauri to use your development server instead of reading assets from disk. Normally this flag is passed by the Tauri CLI, but since we're completely sidestepping that here, we need to pass the flag manually.

![Add <code>--no-default-features</code> flag](/img/guides/debugging/clion/set-no-default-features-light.png#gh-light-mode-only) ![Add <code>--no-default-features</code> flag](/img/guides/debugging/clion/set-no-default-features-dark.png#gh-dark-mode-only)

Now we can optionally rename the Run/Debug Configuration to something more memorable, in this example we called it "Run Tauri App", but you can name it whatever you want.

![Rename Configuration](/img/guides/debugging/clion/rename-configuration-light.png#gh-light-mode-only) ![Rename Configuration](/img/guides/debugging/clion/rename-configuration-dark.png#gh-dark-mode-only)

:::caution

On Windows you must also make sure that CLion uses the correct debugger toolchain. To do this, open the Settings (`File -> Settings...`), select `Build, Execution, Deployment -> Toolchains` and move the `Visual Studio` toolchain to the top.

:::

## Launch the Development Server

The above configuration will use Cargo directly to build the Rust application and attach the debugger to it. This means we completely sidestep the Tauri CLI, so features like the `beforeDevCommand` and `beforeBuildCommand` will **not** be executed. We need to take care of that by opening a new Terminal and starting running the development server manually:

```sh
pnpm vite dev
```

> Note that CLion currently has no support for background tasks in Run/Debug configurations like VS Code has, so for now you need to manually run the development server.

## Launch a Debugging Session

With the development server running and the Run/Debug Configuration selected in the Switcher, you can now start a new debugging session by clicking Debug. CLion will automatically recognize breakpoints placed in any Rust file in your project.

[Core Process of your Tauri app]: ../../references/architecture/process-model.md#the-core-process
