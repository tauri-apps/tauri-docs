---
title: Process Model
sidebar:
  order: 0
---

Tauri employs a multi-process architecture similar to Electron or many modern web browsers. This guide explores the reasons behind the design choice and why it is key to writing secure applications.

## Why Multiple Processes?

In the early days of GUI applications, it was common to use a single process to perform computation, draw the interface and react to user input. As you can probably guess, this meant that a long-running, expensive computation would leave the user interface unresponsive, or worse, a failure in one app component would bring the whole app crashing down.

It became clear that a more resilient architecture was needed, and applications began running different components in different processes. This makes much better use of modern multi-core CPUs and creates far safer applications. A crash in one component doesn't affect the whole system anymore, as components are isolated on different processes. If a process gets into an invalid state, we can easily restart it.

We can also limit the blast radius of potential exploits by handing out only the minimum amount of permissions to each process, just enough so they can get their job done. This pattern is known as the [Principle of Least Privilege], and you see it in the real world all the time. If you have a gardener coming over to trim your hedge, you give them the key to your garden. You would **not** give them the keys to your house; why would they need access to that? The same concept applies to computer programs. The less access we give them, the less harm they can do if they get compromised.

## The Core Process

Each Tauri application has a core process, which acts as the application's entry point and which is the only component with full access to the operating system.

The Core's primary responsibility is to use that access to create and orchestrate application windows, system-tray menus, or notifications. Tauri implements the necessary cross-platform abstractions to make this easy. It also routes all [Inter-Process Communication] through the Core process, allowing you to intercept, filter, and manipulate IPC messages in one central place.

The Core process should also be responsible for managing global state, such as settings or database connections. This allows you to easily synchronize state between windows and protect your business-sensitive data from prying eyes in the Frontend.

We chose Rust to implement Tauri because of its concept of [Ownership]
guarantees memory safety while retaining excellent performance.

<figure>

```d2 sketch pad=50
direction: right

Core: {
  shape: diamond
}

"Events & Commands 1": {
  WebView1: WebView
}

"Events & Commands 2": {
  WebView2: WebView
}

"Events & Commands 3": {
  WebView3: WebView
}

Core -> "Events & Commands 1"{style.animated: true}
Core -> "Events & Commands 2"{style.animated: true}
Core -> "Events & Commands 3"{style.animated: true}

"Events & Commands 1" -> WebView1{style.animated: true}
"Events & Commands 2" -> WebView2{style.animated: true}
"Events & Commands 3" -> WebView3{style.animated: true}
```

<figcaption>Simplified representation of the Tauri process model. A single Core process manages one or more WebView processes.</figcaption>
</figure>

## The WebView Process

The Core process doesn't render the actual user interface (UI) itself; it spins up WebView processes that leverage WebView libraries provided by the operating system. A WebView is a browser-like environment that executes your HTML, CSS, and JavaScript.

This means that most of your techniques and tools used in traditional web development can be used to create Tauri applications. For example, many Tauri examples are written using the [Svelte] frontend framework and the [Vite] bundler.

Security best practices apply as well; for example, you must always sanitize user input, never handle secrets in the Frontend, and ideally defer as much business logic as possible to the Core process to keep your attack surface small.

Unlike other similar solutions, the WebView libraries are **not** included in your final executable but dynamically linked at runtime[^1]. This makes your application _significantly_ smaller, but it also means that you need to keep platform differences in mind, just like traditional web development.

[^1]:
    Currently, Tauri uses [Microsoft Edge WebView2] on Windows, [WKWebView] on
    macOS and [webkitgtk] on Linux.

[principle of least privilege]: https://en.wikipedia.org/wiki/Principle_of_least_privilege
[inter-process communication]: /concept/inter-process-communication/
[ownership]: https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html
[microsoft edge webview2]: https://docs.microsoft.com/en-us/microsoft-edge/webview2/
[wkwebview]: https://developer.apple.com/documentation/webkit/wkwebview
[webkitgtk]: https://webkitgtk.org
[svelte]: https://svelte.dev/
[vite]: https://vitejs.dev/
