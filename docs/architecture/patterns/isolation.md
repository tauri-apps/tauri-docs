---
id: isolation
sidebar_label: Isolation
---

# Isolation Pattern

The Isolation pattern is a way to intercept and modify Tauri API messages sent by the frontend before they get to Tauri
Core, all with JavaScript. The secure JavaScript code that is injected by the Isolation pattern is referred to as the
Isolation application.

## Why

The Isolation pattern's purpose is to provide a mechanism for developers to help protect their application from unwanted
or malicious frontend calls to Tauri Core. The need for the Isolation pattern rose out of threats coming from
untrusted content running on the frontend, a common case for applications with many dependencies. See
[Security: Threat Models](../../development/security.md#threat-models) for a list of many sources of threats that an
application may see.

The largest threat model described above that the Isolation pattern was designed in mind with was Development Threats.
Not only do many frontend build-time tools consist of many dozen (or hundreds) of often deeply-nested dependencies, but
a complex application may also have a large amount of (also often deeply-nested) dependencies that are bundled into the
final output.

## When

Tauri highly recommends using the isolation patten whenever it can be used. Because the Isolation application intercepts
_**all**_ messages from the frontend, it can _always_ be used.

Tauri also believes that locking down your application whenever you use external Tauri APIs is highly suggested.
As the developer, you can utilize the secure Isolation application to try and verify IPC inputs to make sure they are
within some expected parameters. As an example, you may want to check that a call to read or write a file is not trying
to get to a path outside your application's expected locations. Another example is making sure that a Tauri API HTTP
fetch call is only setting the Origin header to what your application expects it to be.

That said, it intercepts _**all**_ messages from the frontend, so it will even work with always-on APIs such as
[Events](../../guides/events.md). Since some events may cause your own rust code to perform actions, the same sort of
validation techniques can be used with them.

## How

The Isolation pattern is all about injecting a secure application in between your frontend and Tauri Core to intercept
and modify incoming IPC messages. It does this by using the sandboxing feature of `<iframe>`s
to run the JavaScript securely alongside the main frontend application. Tauri enforces the Isolation pattern
while loading the page, forcing all IPC calls to Tauri Core to instead be routed through the sandboxed Isolation
application first. Once the message is ready to be passed to Tauri Core, it is encrypted using the browser's
[SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) implementation and passed back to the main
frontend application. Once there, it is directly passed to Tauri Core where it is then decrypted and read like normal.

To ensure that someone cannot read the keys manually for a specific version of your application and use that to modify
the messages after being encrypted, new keys are generated each time your application is run.

### Approximate Steps of an IPC Message

To make it easier to follow, here's an ordered list with the approximate steps an IPC message will go through when being
sent to Tauri Core with the Isolation pattern:

1. Tauri's IPC handler receives message
2. IPC handler -> Isolation application
3. `[sandbox]` Isolation application hook runs and potentially modifies the message
4. `[sandbox]` Message is encrypted with AES-GCM using a runtime-generated key
5. `[encrypted]` Isolation application -> IPC handler
6. `[encrypted]` IPC handler -> Tauri Core

_Note: Arrows (->) indicate message passing._

### Performance Implications

Because encryption of the message does occur, this does mean that there are additional overhead costs compared to the
[Brownfield pattern](./brownfield.md) even if the secure Isolation application doesn't do anything. Outside
performance-sensitive applications (who likely have a carefully kept small set of dependencies to keep the performance
adequate), most applications should not notice the runtime costs of encrypting/decrypting the IPC messages as they are
both relatively small and AES-GCM is relatively fast. If you are unfamiliar with AES-GCM, all that is relative in this
context is that it's the only authenticated mode algorithm included
in [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto)
and that you probably already use it every day under the hood with TLS.

There is also a cryptographically secure key generated once each time the Tauri application is started. It is not
generally noticeable if the system already has enough entropy to immediately return enough random numbers, which is
extremely common for desktop environments. If running in a headless environment to perform
some [integration testing with WebDriver](../../testing/webdriver/introduction.md)
then you may want to install some sort of entropy generating service such as `haveged` if your operating system does not
have one included. <sup>Linux 5.6 (March 2020) now includes entropy generation using speculative execution.</sup>

### Limitations

There are a few limitations in the Isolation pattern that rose out of platform inconsistencies. The largest limitation
is due to external files not loading correctly inside sandboxed `<iframes>` on Windows. Because of this, we have
implemented a simple script inlining step during build time that takes the content of scripts relative to the
Isolation application and injects them inline. This means that typical bundling or simple including of files like
`<script src="index.js"></script>` still works properly, but newer mechanisms such as ES Modules will *not* successfully
load.

## Recommendations

Because the point of the Isolation application is to protect against Development Threats, we highly recommend keeping
your Isolation application as simple as possible. Not only should you strive to keep dependencies minimal, but you
should also consider keeping required build steps minimal. This would allow you to
not need to worry about supply chain attacks against your Isolation application on top of your frontend application.

## Creating the Isolation Application

We will make a small hello-world style Isolation application and hook it up to an imaginary existing Tauri application.
It will do no verification of the messages passing through it, only print the contents to the WebView console.

For the purposes of this example, let's imagine we are in the same directory as `tauri.conf.json`. The existing Tauri
application has it's `distDir` set to `../dist`.

`../dist-isolation/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Isolation Secure Script</title>
</head>
<body>
<script src="index.js"></script>
</body>
</html>
```

`../dist-isolation/index.js`:

```js
window.__TAURI_ISOLATION_HOOK__ = (payload) => {
    // let's not verify or modify anything, just print the content from the hook
    console.log('hook', payload)
    return payload
}
```

Now, all we need to do is set up our `tauri.conf.json` [configuration](#configuration) to use the Isolation pattern, and
have just bootstrapped to the Isolation pattern from the [Brownfield pattern](./brownfield.md).

## Configuration

Let's assume that our main frontend `distDir` is set to `../dist`. We also output our Isolation application to
`../dist-isolation`.

```json
{
  "build": {
    "distDir": "../dist"
  },
  "tauri": {
    "pattern": {
      "use": "isolation",
      "options": {
        "dir": "../dist-isolation"
      }
    }
  }
}
```