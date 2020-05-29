---
title: Introduction
---

import Introduction from '@theme/Introduction'

Here you will find instructions to setup and customize Tauri on your environment

If you find an error or something unclear, or would like to propose an improvement, you have several options:<br />

1. Open an issue on our [Github Repo](https://github.com/tauri-apps/tauri-docs).<br />
2. Visit our [Discord server](https://discord.gg/SpmNs4S) and raise your concern.<br />
3. Request to join the education working group on Discord to gain access to its discussion channel.

## How Tauri Works

<Introduction />

### Flow

1. Create your web app with your frontend framework of choice and bundle it into HTML/CSS/JS.
2. The Tauri.js CLI takes it and rigs the underlying native code according to your configuration.
3. In dev mode it creates a webview window with debugging and hot-module-reloading.
4. In build mode it rigs the bundler and creates a final application according to your settings.

### Setting up Your Environment

We are assuming that you know what the command line is, how to install packages on your operating system and generally know your way around the development side of computing. Obviously, you must first make sure that all required languages / compilers are installed and available in your PATH. Read more about the details for your local development environment:

- [Linux Setup](setup-linux)
- [MacOS Setup](setup-macos)
- [MS Windows Setup](setup-windows)

After that, you'll be ready to [add Tauri to your project!](/docs/usage/development/integration)

Or read more about [Tauri under the hood](/docs/getting-started/technical-details).