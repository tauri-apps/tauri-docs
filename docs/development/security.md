---
title: Security
---

import Alert from '@theme/Alert'

Whether you like it or not, today's applications live in operating systems that can be -- and regularly are -- compromised by any number of attacks. When your insecure application is a gateway for such lateral movement into the operating system, you are contributing to the tools that professional hackers have at their disposal. Don't be a tool.

This is why we have taken every opportunity to help you secure your application, prevent undesired access to system level interfaces, and manufacture bullet-proof applications. Your users assume you are following best practices. We make that easy, but you should still read up on it below.

## Security Is A Community Responsibility (adapted from [Electron](https://www.electronjs.org/docs/latest/tutorial/security#security-is-everyones-responsibility)) 
It is important to remember that the security of your Tauri application is the result of the overall security of Tauri itself, all Rust and NPM dependencies, your code, and the devices that run the final application. The Tauri Team does its best to do its part, the security community does its part, and you too would do well to follow a few important best practices:

- **Keep your application up-to-date with the latest Tauri release.** When releasing your app into the wild, you are also shipping a bundle that has Tauri in it. Vulnerabilities affecting Tauri may impact the security of your application. By updating Tauri to the latest version, you ensure that critical vulnerabilities are already patched and cannot be exploited in your application. Also be sure to keep your compiler (rustc) and transpilers (nodejs) up to date, because there are often security issues that are resolved.

- **Evaluate your dependencies.** While NPM and Crates.io provide many convenient packages, it is your responsibility to choose trustworthy 3rd-party libraries - or rewrite them in Rust. If you do use outdated libraries affected by known vulnerabilities or are unmaintained, your application security and good-night's sleep could be in jeopardy. Use tooling like `npm audit` and `cargo audit` to automate this process and lean on the security community's important work.
 
- **Adopt more secure coding practices.** The first line of defense for your application is your own code. Although Tauri can protect you from common web vulnerabilities, such as Cross-Site Scripting based Remote Code Execution, improper configurations can have a security impact. Even if this were not the case, it is highly recommended to adopt secure software development best practices and perform security testing. We detail what this means in the next section.

- **Educate your Users.** True security really means that unexpected behaviour cannot happen. So in a sense, being more secure means having the peace of mind in knowing that ONLY those things that you want to happen can happen. In the real world, though, this is a utopian "dream". However, by removing as many vectors as possible and building on a solid foundation, your choice for Tauri is a signal to your users that you really care about them, their safety, and their devices. 

## Threat Models
Tauri applications are composed of many pieces at different points of the lifecycle. Here we describe classical threats and what you SHOULD do about them.

- **Upstream Threats.** Tauri is a direct dependency of your project, and we maintain strict authorial control of commits, reviews, pull-requests, and releases. We do our best to maintain up-to-date dependencies and take action to either update or fork&fix. Other projects may not be so well maintained, and may not even have ever been audited. Please consider their health when integrating them, because otherwise you may have adopted architectural debt without even knowing it.

- **Development Threats.** We assume that you, the developer, care for your development environment like a shrine of purity because it is a thing of beauty. It is on you to make sure that your operating system, build toolchains, and associated dependencies are kept up to date. A very real risk all of us face is what is known as "supply-chain attacks", which are usually considered to be attacks on direct dependencies of your project. However, there is a growing class of attacks in the wild that directly target development machines, and you would be well-off to address these head-on. One practice that we highly recommend, even if it is a bit more time intensive, is to only ever consume critical dependencies from git using hash revisions at best or named tags as second best. This holds true for Rust as well as the Node ecosystem. Also, consider requiring all contributors to sign their commits and protect GIT branches and pipelines.

- **Buildtime Threats.** Modern organisations use CI/CD to manufacture binary artifacts. At Tauri, we even provide a Github Workflow for building on multiple platforms. If you create your own CI/CD and depend on third-party tooling, be wary of actions whose versions you have not explicitly pinned. You should sign your binaries for the platform you are shipping to, and while this can be complicated and somewhat costly to setup, end-users expect that your app is verifiably from you.

- **Runtime Threats** We assume the webview is insecure, which has led Tauri to implement several protections regarding webview access to system APIs in the context of loading untrusted userland content. You can read more in detail below, but using the CSP will lockdown types of communication that the Webview can undertake. Furthermore, there is a novel "Isolation" pattern that prevents untrusted content or scripts from accessing the API within the Webview. And please, whatever you do, DO NOT trust the results of cryptography using private keys in the Webview. We gave you Rust for a reason.

- **Updater Threats** We have done our best to make shipping hot-updates to the app as straightforward and secure as possible. However, if you lose control of the manifest server, the build server, or the binary hosting service - all bets are off. If you are building your own system, consult a professional OPS architect and build it properly.

## An unsorted list of big ole DONT'S:
- DON'T accept content over http:// or ws://
- DON'T ship an app with the development console enabled
- DON'T forget to [read about XSS](https://owasp.org/www-community/attacks/xss/)
- DON'T ship any kind of localhost server unless the app needs to talk to other devices
- DON'T consume JS from a CDN without using an integrity checksum

## Security Researchers
Nothing is perfect, attack vectors will be found, and if you have found one - we want to know about it. If you have a discovery, PLEASE DO NOT FILE A PUBLIC ISSUE OR MAKE A PULL REQUEST. Please discretely reach out to a member of the team via Discord or Email for verification, vulnerability acceptance, and remediation timeline. We believe in - and participate in - responsible disclosure. At this time we do not have a bug-bounty programme in place, but are actively considering it.

## Tauri Features to keep you Safer

### Secure content loading

Tauri restricts the [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) of your HTML pages. Local scripts are hashed, styles and external scripts are referenced using a cryptographic nonce, which prevents unallowed content from being loaded.

The CSP protection is only enabled if [`tauri.security.csp`](/docs/api/config/#tauri.security.csp) is set on the Tauri configuration file. You should make it as restricted as possible, only allowing the webview to load assets from hosts you trust and preferably own. At compile time, Tauri appends its nonces and hashes to the relevant CSP attributes automatically, so you only need to worry about what is unique to your application.

<Alert title="Note">
See <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src">script-src</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src">style-src</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources">CSP Sources</a> for more information about this protection.
</Alert>

<Alert title="Note">
With the CSP protection enabled, using inline `style` attributes it not allowed.
</Alert>

<Alert title="Caution">
Avoid loading remote content such as scripts served over a CDN as they introduce an attack vector, but any untrusted file can introduce new and subtle attack vectors.
</Alert>

### Isolation Pattern

The [Isolation pattern](../architecture/patterns/isolation.md) is a way to inject a secondary, ideally minimal,
JavaScript application in between your frontend application and Tauri Core. This minimal Isolation application can then
be used to securely verify and modify IPC messages before they reach Tauri Core. [The Isolation pattern guide](../architecture/patterns/isolation.md)
has more information.

### Tauri API

The [Tauri API](https://www.npmjs.com/package/@tauri-apps/api) provides functions to access common native functionality such as filesystem access, HTTP requests, system notifications and child processes usage. They provide an easy path to JavaScript developers to access the operating system, but they should be used carefully.

#### Prefer specific commands

When accessing a native API, you should prefer writing a dedicated command to implement your business logic instead of writing everything on the frontend layer.

For instance, see the following frontend API usage:

```typescript
import { writeFile, Dir } from '@tauri-apps/api/fs'
await writeFile({
  path: 'report.txt',
  contents: 'the file content'
}, {
  dir: Dir.App,
})
```

If you do not enable the [isolation pattern](#Isolation-pattern), an attacker with remote code execution can overwrite the contents of `report.txt` since that API is generic and enabled. If you use a dedicated command, this is not an issue:

```rust
#[tauri::command]
async fn write_report(app: tauri::AppHandle) -> Result<(), String> {
  let app_dir = app.path_resolver().app_dir().expect("failed to get app dir");
  let report_path = app_dir.join("report.txt");
  std::fs::write(&report_path, "the file content")
    .map_err(|e| e.to_string());
  Ok(())
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![write_report])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

```typescript
import { invoke } from '@tauri-apps/api/tauri'
await invoke('write_report')
```

This example command written on the backend cannot be exploited.

<Alert title="Note">
Tauri recommends using the webview as only a user interface layer, keeping important logic on the core layer.
</Alert>

#### The allowlist

When using the API package, you **must** enable only the interfaces your application is using. See [the allowlist configuration](/docs/api/config/#tauri.allowlist) for options to restrict which APIs are enabled. This not only reduces surface area, but also treeshakes out unneeded functionality -- which reduces final binary size.

#### API scoping

Some API modules provides a configuration to scope the API access and restrict the system resources accessed.

##### Filesystem

You can restrict the folders and files that can be accessed when using the `fs` module. The scope array lists what paths are allowed using glob patterns and predefined variables that resolves to a system base directory.

<Alert title="Note">
The variables are: `$AUDIO`, `$CACHE`, `$CONFIG`, `$DATA`, `$LOCALDATA`, `$DESKTOP`, `$DOCUMENT`, `$DOWNLOAD`, `$EXE`, `$FONT`, `$HOME`, `$PICTURE`, `$PUBLIC`, `$RUNTIME`, `$TEMPLATE`, `$VIDEO`, `$RESOURCE`, `$APP` and `$CWD`.
</Alert>

```json
{
  "tauri": {
    "allowlist": {
      "fs": {
        "scope": ["$APP/db/*", "$RESOURCE/check.png"]
      }
    } 
  }
}
```

###### Asset protocol

You can restrict the folders and files that can be accessed when using the `asset` protocol. The scope array has the same syntax as the `fs` scope array:

```json
{
  "tauri": {
    "allowlist": {
      "path": { "all": true },
      "protocol": {
        "asset": true,
        "assetScope": ['$APP/assets/*']
      }
    } 
  }
}
```

```typescript
import { appDir, join } from '@tauri-apps/api/path'
import { convertFileSrc } from '@tauri-apps/api/tauri'

const appDirPath = await appDir()
// this path is allowed - is matches $APP/assets/*
// you can use this on <video> tags or window.fetch() calls
const allowedPath = convertFileSrc(await join(appDirPath, 'assets', 'tauri.mp4'))
// this path is not allowed - it does not match $APP/assets/*
const disallowedPath = convertFileSrc(await join(appDirPath, 'tauri.mp4'))
```

###### HTTP

You can restrict the URLs and paths that can be accessed when using the `http` module:

```json
{
  "tauri": {
    "allowlist": {
      "http": {
        "scope": ["https://api.github.com/repos/tauri-apps/*"]
      }
    } 
  }
}
```

```typescript
import { fetch } from '@tauri-apps/api/http'
// this promise is resolved
await fetch('https://api.github.com/repos/tauri-apps/tauri')
// this promise is rejected - the URL is not allowed on the scope
await fetch('https://api.github.com/repos/electron/electron')
```

###### Shell

To prevent unrestricted access to process spawning, Tauri offers a configuration to define programs and command line arguments that are allowed to be used. While it can make userland ergonomics less simple, is good security hygiene to lock down shell commands from spawning other, unexpected commands.

```json
{
  "tauri": {
    "allowlist": {
      "shell": {
        "scope": [
          {
            "name": "install-dep",
            "cmd": "apt-get",
            "args": [
              "install",
              {
                "validator": "(gcc|rustc)$"
              }
            ]
          }
        ],
        // allows using the `open` API only using arguments that match this regex
        // `true` is also a valid value, which defines the regex as `https?://`.
        "open": "^https://github.com/tauri-apps/"
      }
    } 
  }
}
```

```typescript
import { Command, open } from '@tauri-apps/api/shell'

// this command is allowed
new Command('install-dep', ['install', 'rustc']).spawn()
// this command is not found - does not match the `name` value of the scope definition
new Command('install-my-dep', ['install', 'rustc']).spawn()
// this command is rejected - does not match validator regex for the second argument
new Command('install-dep', ['install', 'tar']).spawn()
// this command is rejected - extra argument
new Command('install-dep', ['install', 'rustc', '-y']).spawn()

// this open() usage is allowed because it matches the `open` regex
await open('https://github.com/tauri-apps/tauri')
// this open() call is rejected - does not match validator regex
open('https://docs.rs/tauri/latest/tauri')
```
