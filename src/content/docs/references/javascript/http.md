---
title: '@tauri-apps/plugin-http'
editUrl: false
sidebar:
  label: 'http'
---

Make HTTP requests with the Rust backend.

## Security

This API has a scope configuration that forces you to restrict the URLs and paths that can be accessed using glob patterns.

For instance, this scope configuration only allows making HTTP requests to the GitHub API for the `tauri-apps` organization:

```json
{
  "plugins": {
    "http": {
      "scope": ["https://api.github.com/repos/tauri-apps/*"]
    }
  }
}
```

Trying to execute any API with a URL not configured on the scope results in a promise rejection due to denied access.

## Interfaces

### ClientOptions

Options to configure the Rust client used to make fetch requests

#### Since

2.0.0

#### Properties

| Property                                                               | Type                                          | Description                                                                                                        |
| :--------------------------------------------------------------------- | :-------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| <a id="connecttimeout" name="connecttimeout"></a> `connectTimeout`?    | `number`                                      | Timeout in milliseconds                                                                                            |
| <a id="maxredirections" name="maxredirections"></a> `maxRedirections`? | `number`                                      | Defines the maximum number of redirects the client should follow.<br />If set to 0, no redirects will be followed. |
| <a id="proxy" name="proxy"></a> `proxy`?                               | [`Proxy`](/references/javascript/http/#proxy) | Configuration of a proxy that a Client should pass requests to.                                                    |

---

### ProxyConfig

#### Properties

| Property                                                   | Type     | Description                                                                                                                                                   |
| :--------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <a id="basicauth" name="basicauth"></a> `basicAuth`?       | `object` | Set the `Proxy-Authorization` header using Basic auth.                                                                                                        |
| <a id="password" name="password"></a> `basicAuth.password` | `string` | -                                                                                                                                                             |
| <a id="username" name="username"></a> `basicAuth.username` | `string` | -                                                                                                                                                             |
| <a id="noproxy" name="noproxy"></a> `noProxy`?             | `string` | A configuration for filtering out requests that shouldn’t be proxied.<br />Entries are expected to be comma-separated (whitespace between entries is ignored) |
| <a id="url" name="url"></a> `url`                          | `string` | The URL of the proxy server.                                                                                                                                  |

## Type Aliases

### Proxy

```ts
Proxy: object;
```

Configuration of a proxy that a Client should pass requests to.

#### Since

2.0.0

#### Type declaration

| Member                                   | Type                                                                  | Description                                |
| :--------------------------------------- | :-------------------------------------------------------------------- | :----------------------------------------- |
| <a id="all" name="all"></a> `all`?       | `string` \| [`ProxyConfig`](/references/javascript/http/#proxyconfig) | Proxy all traffic to the passed URL.       |
| <a id="http" name="http"></a> `http`?    | `string` \| [`ProxyConfig`](/references/javascript/http/#proxyconfig) | Proxy all HTTP traffic to the passed URL.  |
| <a id="https" name="https"></a> `https`? | `string` \| [`ProxyConfig`](/references/javascript/http/#proxyconfig) | Proxy all HTTPS traffic to the passed URL. |

**Source**: [index.ts:34](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/http/guest-js/index.ts#L34)

## Functions

### fetch()

```ts
fetch(input, init?): Promise< Response >
```

Fetch a resource from the network. It returns a `Promise` that resolves to the
`Response` to that `Request`, whether it is successful or not.

#### Example

```typescript
const response = await fetch('http://my.json.host/data.json');
console.log(response.status); // e.g. 200
console.log(response.statusText); // e.g. "OK"
const jsonData = await response.json();
```

#### Since

2.0.0

#### Parameters

| Parameter | Type                                                                                                                                   |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `input`   | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) \| [`Request`](https://developer.mozilla.org/docs/Web/API/Request) |
| `init`?   | `RequestInit` & [`ClientOptions`](/references/javascript/http/#clientoptions)                                                          |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Response`](https://developer.mozilla.org/docs/Web/API/Response) \>

**Source**: [index.ts:101](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/http/guest-js/index.ts#L101)
