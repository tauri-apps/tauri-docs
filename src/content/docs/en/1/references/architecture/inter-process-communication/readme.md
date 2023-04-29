---
sidebar_position: 3
---

# Inter-Process Communication

Inter-Process Communication (IPC) allows isolated processes to communicate securely and is key to building more complex applications.

Tauri uses a particular style of Inter-Process Communication called [Asynchronous Message Passing], where processes exchange _requests_ and _responses_ serialized using some simple data representation. Message Passing should sound familiar to anyone with web development experience, as this paradigm is used for client-server communication on the internet.

Message passing is a safer technique than shared memory or direct function access because the recipient is free to reject or discard requests as it sees fit. For example, if the Tauri Core process determines a request to be malicious, it simply discards the requests and never executes the corresponding function.

In the following, we explain Tauri's two IPC primitives - `Events` and `Commands` - in more detail.

## Events

Events are fire-and-forget, one-way IPC messages that are best suited to communicate lifecycle events and state changes. Unlike [Commands](#commands), Events can be emitted by both the Frontend _and_ the Tauri Core.

<figure>

```mermaid
sequenceDiagram
    participant F as Frontend
    participant C as Tauri Core

    C-)F: Event
```

<figcaption>Figure 1-2: An event sent from the Core to the Frontend.</figcaption>
</figure>

## Commands

Tauri also provides a [foreign function interface]-like abstraction on top of IPC messages[^1]. The primary API, `invoke`, is similar to the browser's `fetch` API and allows the Frontend to invoke Rust functions, pass arguments, and receive data.

Because this mechanism uses a [JSON-RPC] like protocol under the hood to serialize requests and responses, all arguments and return data must be serializable to JSON.

<figure>

```mermaid
sequenceDiagram
    participant F as Frontend
    participant C as Tauri Core

    F-)+C: IPC request
    note over C: Perform computation, write to file system, etc.
    C-)-F: Response
```

<figcaption>Figure 1-3: IPC messages involved in a command invocation.</figcaption>
</figure>

<!-- prettier-ignore -->
[^1]: Because Commands still use message passing under the hood, they do not share the same security pitfalls as real FFI interfaces do.

[asynchronous message passing]: https://en.wikipedia.org/wiki/Message_passing#Asynchronous_message_passing
[json-rpc]: https://www.jsonrpc.org
[foreign function interface]: https://en.wikipedia.org/wiki/Foreign_function_interface
