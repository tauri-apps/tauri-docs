---
sidebar_position: 8
---

# Updater

## Configuration

Once you have your Tauri project ready, you need to configure the updater.

Add this in tauri.conf.json

```json
"updater": {
    "active": true,
    "endpoints": [
        "https://releases.myapp.com/{{target}}/{{current_version}}"
    ],
    "dialog": true,
    "pubkey": "YOUR_UPDATER_SIGNATURE_PUBKEY_HERE"
}
```

The required keys are "active", "endpoints" and "pubkey"; others are optional.

"active" must be a boolean. By default, it's set to false.

"endpoints" must be an array. The string `{{target}}` and `{{current_version}}` are automatically replaced in the URL allowing you determine [server-side](#update-server-json-format) if an update is available. If multiple endpoints are specified, the updater will fallback if a server is not responding within the pre-defined timeout.

"dialog" if present must be a boolean. By default, it's set to true. If enabled, [events](#events) are turned off as the updater handles everything. If you need the custom events, you MUST turn off the built-in dialog.

"pubkey" must be a valid public-key generated with Tauri CLI. See [Signing updates](#signing-updates).

### Update Requests

Tauri is indifferent to the request the client application provides for update checking.

`Accept: application/json` is added to the request headers because Tauri is responsible for parsing the response.

For the requirements imposed on the responses and the body format of an update, response see [Server Support](#server-support).

Your update request must _at least_ include a version identifier so that the server can determine whether an update for this specific version is required.

It may also include other identifying criteria, such as operating system version, to allow the server to deliver as fine-grained an update as you would like.

How you include the version identifier, or other criteria is specific to the server from which you request updates. A common approach is to use query parameters, [Configuration](#configuration) shows an example.

### Built-in dialog

By default, the updater uses a built-in dialog API from Tauri.

![New Update](https://i.imgur.com/UMilB5A.png)

The dialog release notes are represented by the update `note` provided by the [server](#server-support).
If the user accepts, the update is downloaded and installed. Afterward, the user is prompted to restart the application.

### Javascript API

:::caution
You need to _disable built-in dialog_ in your [tauri configuration](#configuration); Otherwise, the javascript API will NOT work.
:::

```js
import { checkUpdate, installUpdate } from '@tauri-apps/api/updater'
import { relaunch } from '@tauri-apps/api/process'
try {
  const { shouldUpdate, manifest } = await checkUpdate()
  if (shouldUpdate) {
    // display dialog
    await installUpdate()
    // install complete, restart app
    await relaunch()
  }
} catch (error) {
  console.log(error)
}
```

### Events

:::caution

You need to _disable the built-in dialog_ in your [tauri configuration](#configuration); Otherwise, events aren't emitted.

:::

To know when an update is ready to be installed, you can subscribe to these events:

#### Initialize updater and check if a new version is available

##### If a new version is available, the event `tauri://update-available` is emitted.

Event: `tauri://update`

#### Rust

```rust
window.emit("tauri://update".to_string(), None);
```

#### Javascript

```js
import { emit } from '@tauri-apps/api/event'
emit('tauri://update')
```

#### Listen New Update Available

Event: `tauri://update-available`

Emitted data:

```
version    Version announced by the server
date       Date announced by the server
body       Note announced by the server
```

#### Rust

```rust
window.listen("tauri://update-available".to_string(), move |msg| {
  println!("New version available: {:?}", msg);
})
```

#### Javascript

```js
import { listen } from '@tauri-apps/api/event'
listen('tauri://update-available', function (res) {
  console.log('New version available: ', res)
})
```

#### Emit Install and Download

You need to emit this event to initialize the download and listen to the [install progress](#listen-install-progress).

Event: `tauri://update-install`

#### Rust

```rust
window.emit("tauri://update-install".to_string(), None);
```

#### Javascript

```js
import { emit } from '@tauri-apps/api/event'
emit('tauri://update-install')
```

#### Listen Install Progress

Event: `tauri://update-status`

Emitted data:

```
status    [ERROR/PENDING/DONE]
error     String/null
```

PENDING is emitted when the download is started and DONE when the install is complete. You can then ask to restart the application.

ERROR is emitted when there is an error with the updater. We suggest listening to this event even if the dialog is enabled.

#### Rust

```rust
window.listen("tauri://update-status".to_string(), move |msg| {
  println!("New status: {:?}", msg);
})
```

#### Javascript

```js
import { listen } from '@tauri-apps/api/event'
listen('tauri://update-status', function (res) {
  console.log('New status: ', res)
})
```

## Server Support

Your server should determine whether an update is required based on the [Update Request](#update-requests) your client issues.

If an update is required, your server should respond with a status code of [200 OK] and include the [update JSON](#update-server-json-format) in the body.

If no update is required your server must respond with a status code of [204 No Content].

### Update Server JSON Format

When an update is available, Tauri expects the following schema in response to the update request provided:

```json
{
  "url": "https://mycompany.example.com/myapp/releases/myrelease.tar.gz",
  "version": "0.0.1",
  "notes": "Theses are some release notes",
  "pub_date": "2020-09-18T12:29:53+01:00",
  "signature": ""
}
```

The required keys are "url", "version" and "signature"; the others are optional.

"pub_date" if present must be formatted according to [RFC 3339][date and time on the internet: timestamps].

"signature" is content of .sig file that was generated by Tauri CLI while using keys that were generated by Tauri CLI [See Signing Updates](#signing-updates)

### Update File JSON Format

The alternate update technique uses a plain JSON file, storing your update metadata on S3, gist, or another static file store. Tauri checks against the version field, and if the version of the running process is smaller than the reported one of the JSON and the platform is available, it triggers an update. The format of this file is detailed below:

```json
{
  "version": "v1.0.0",
  "notes": "Test version",
  "pub_date": "2020-06-22T19:25:57Z",
  "platforms": {
    "darwin-x86_64": {
      "signature": "",
      "url": "https://github.com/lemarier/tauri-test/releases/download/v1.0.0/app.app.tar.gz"
    },
    "darwin-aarch64": {
      "signature": "",
      "url": "https://github.com/lemarier/tauri-test/releases/download/v1.0.0/silicon/app.app.tar.gz"
    },
    "linux-x86_64": {
      "signature": "",
      "url": "https://github.com/lemarier/tauri-test/releases/download/v1.0.0/app.AppImage.tar.gz"
    },
    "windows-x86_64": {
      "signature": "",
      "url": "https://github.com/lemarier/tauri-test/releases/download/v1.0.0/app.x64.msi.zip"
    }
  }
}
```

Note that each platform key is in the `OS-ARCH` format, where `OS` is one of `linux`, `darwin` or `windows`, and `ARCH` is one of `x86_64`, `aarch64`, `i686` or `armv7`.

## Bundler (Artifacts)

The Tauri bundler automatically generates update artifacts if the updater is enabled in `tauri.conf.json`
Your update artifacts are automatically signed if the bundler can locate your private and public key.

The signature can be found in the content `sig` file. The signature can be uploaded to GitHub safely or made public if your private key is secure.

You can see how it's [bundled with the CI][artifacts updater workflow] and a [sample tauri.conf.json].

### macOS

On macOS, we create a .tar.gz from the whole application. (.app)

```
target/release/bundle
└── macos
    └── app.app
    └── app.app.tar.gz (update bundle)
    └── app.app.tar.gz.sig
```

### Windows

On Windows, we create a .zip from the MSI; when downloaded and validated, we run the MSI install.

```
target/release/bundle
└── msi
    └── app.x64.msi
    └── app.x64.msi.zip (update bundle)
    └── app.x64.msi.zip.sig
```

### Linux

On Linux, we create a .tar.gz from the AppImage.

```
target/release/bundle
└── appimage
    └── app.AppImage
    └── app.AppImage.tar.gz (update bundle)
    └── app.AppImage.tar.gz.sig
```

## Signing updates

We offer a built-in signature to ensure your update is safe to be installed.

To sign your updates, you need two things.

The _Public-key_ (pubkey) should be added inside your `tauri.conf.json` to validate the update archive before installing.

The _Private key_ (privkey) is used to sign your update and should NEVER be shared with anyone. Also, if you lost this key, you'll NOT be able to publish a new update to the current user base. It's crucial to save it in a safe place, and you can always access it.

To generate your keys, you need to use the Tauri CLI:

```shell
tauri signer generate -w ~/.tauri/myapp.key
```

You have multiple options available

```
Generate keypair to sign files

USAGE:
    tauri signer generate [OPTIONS]

OPTIONS:
    -f, --force                      Overwrite private key even if it exists on the specified path
    -h, --help                       Print help information
    -p, --password <PASSWORD>        Set private key password when signing
    -V, --version                    Print version information
    -w, --write-keys <WRITE_KEYS>    Write private key to a file
```

---

Environment variables used to sign with the Tauri `bundler`:<br/>
If they are set, the bundler automatically generates and signs the updater artifacts.<br/>
`TAURI_PRIVATE_KEY` Path or String of your private key<br/>
`TAURI_KEY_PASSWORD` Your private key password (optional)

[200 ok]: http://tools.ietf.org/html/rfc2616#section-10.2.1
[204 no content]: http://tools.ietf.org/html/rfc2616#section-10.2.5
[date and time on the internet: timestamps]: https://datatracker.ietf.org/doc/html/rfc3339#section-5.8
[artifacts updater workflow]: https://github.com/tauri-apps/tauri/blob/5b6c7bb6ee3661f5a42917ce04a89d94f905c949/.github/workflows/artifacts-updater.yml#L44
[sample tauri.conf.json]: https://github.com/tauri-apps/tauri/blob/5b6c7bb6ee3661f5a42917ce04a89d94f905c949/examples/updater/src-tauri/tauri.conf.json#L52
