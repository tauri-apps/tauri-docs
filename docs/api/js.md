---
id: js
title: 'JavaScript'
---

import Alert from '@theme/Alert'

Here is the JS API, exposed by the <a href="https://www.npmjs.com/package/tauri" target="_blank">Tauri package</a> in the "api" directory.

Note that you can either enable or disable these APIs in your [tauri.conf.json](/docs/api/config). Please refer to the "whitelist" section.

If you haven't done it so far, add the package _locally_ to your project:

```sh
yarn add tauri
# OR
npm install tauri --save
```

<Alert title="Warning" icon="alert" type="warning">
  If you're working with Vanilla JavaScript for your project, you should access this API with `window.__TAURI__`.
  Example:
  ```js
    window.__TAURI__.dialog.open()
  ```
</Alert>

## Tauri

```ts
import { invoke, promisified } from 'tauri/api/tauri'
invoke({ cmd: 'myCommandName', param1: 'something', param2: { value: 5 } })
promisified({ cmd: 'myAsyncCommandName' }).then(() => { ... })
// alternatively:
import * as tauri from 'tauri/api/tauri'
tauri.invoke({ cmd: 'myCommandName', param1: 'something', param2: { value: 5 } })
tauri.promisified({ cmd: 'myAsyncCommandName' }).then(() => { ... })
```

### Functions

```ts
/**
 * @param {any} args the command definition object/string
 */
function invoke(args: any): void
```

Invokes a command to the backend layer. It can be read with the `invoke_handler` callback on Rust.

```ts
/**
 * @param {any} args the command definition object/string
 */
function promisified(args: any): Promise<any>
```

Invokes an async command to the backend layer. It can be read with the `invoke_handler` callback on Rust.
Also, Tauri automatically adds two properties: `callback` and `error`, which are the function names of the Promise resolve and reject functions.
It's meant to be used along with `tauri::execute_promise`.

## Dialog

```ts
import { open, save } from 'tauri/api/dialog'
open(...); save(...);
// alternatively:
import * as dialog from 'tauri/api/dialog'
dialog.open(...); dialog.save(...)
```

### Functions

```ts
/**
 * @param {Object} [options]
 * @param {String} [options.filter]
 * @param {String} [options.defaultPath]
 * @param {Boolean} [options.multiple=false]
 * @param {Boolean} [options.directory=false]
 */
open(options = {}): Promise<string | string[]>
```

Open a file/directory selection dialog

- Arguments

  - options: `{}`

- Returns `Promise<string | string[]>`

  promise resolving to the select path(s)

```ts
/**
 * @param {Object} [options]
 * @param {String} [options.filter]
 * @param {String} [options.defaultPath]
 */
save(options = {}): Promise<string>
```

Open a file/directory save dialog

- Arguments

  - options: `{}`

- Returns `Promise<string>`

  promise resolving to the select path

## Event

```ts
import { emit, listen } from 'tauri/api/event'
emit('event name', 'payload'); listen('event name', payload => { ... })
// alternatively:
import * as event from 'tauri/api/event'
event.emit('event name', 'payload'); event.listen('event name', payload => { ... })
```

### Functions

```ts
/**
 * @param {String} event the event name
 * @param {String} [payload] the event payload
 */
emit(event: string, payload: string): void
```

Emits an event to the backend

- Arguments

  - event: `string`

    the event name

  - payload: `string`

- Returns void

```ts
/**
 * @param {String} event the event name
 * @param {EventCallback} handler the event handler callback
 */
listen(event: string, handler: EventCallback): void
```

Listen to an event from the backend

- Arguments

  - event: `string`

    the event name

  - handler: EventCallback

    the event handler callback

- Returns void

## File system

```ts
import {
  Dir,
  copyFile,
  createDir,
  readBinaryFile,
  readDir,
  readTextFile,
  removeDir,
  removeFile,
  renameFile,
  writeFile,
} from 'tauri/api/fs'
readDir('/path/to/dir/')
// alternatively:
import * as fs from 'tauri/api/fs'
fs.readDir('/path/to/dir/')
```

### Members

`Dir`

```ts
{
  Audio: 1,
  Cache: 2,
  Config: 3,
  Data: 4,
  LocalData: 5,
  Desktop: 6,
  Document: 7,
  Download: 8,
  Executable: 9,
  Font: 10,
  Home: 11,
  Picture: 12,
  Public: 13,
  Runtime: 14,
  Template: 15,
  Video: 16,
  Resource: 17,
  App: 18
}
```

### Functions

```ts
/**
 * @param {object} [options] configuration object
 * @param {BaseDirectory} [options.dir] base directory
 */
copyFile(source: string, destination: string, options = {}): Promise<void>
```

- Arguments

  - source: `string`
  - destination: `string`
  - options: `{}`

- Returns `Promise<void>`

```ts
/**
 * @param {Object} [options] configuration object
 * @param {Boolean} [options.recursive] whether to create the directory's parent components or not
 * @param {BaseDirectory} [options.dir] base directory
 */
createDir(dir: string, options = {}): Promise<void>
```

Creates a directory if one of the path's parent components doesn't exist and the recursive option isn't set to true, it will be rejected

- Arguments

  - dir: `string`

    path to the directory to create

  - options: `{}`

- Returns `Promise<void>`

```ts
/**
 * @param {Object} [options] configuration object
 * @param {BaseDirectory} [options.dir] base directory
 */
readBinaryFile(filePath: string, options = {}): Promise<any[]>
```

Reads a file as binary

- Arguments

  - filePath: `string`

    path to the file

  - options: `{}`

- Returns `Promise<any[]>`

```ts
/**
 * @param {Object} [options] configuration object
 * @param {Boolean} [options.recursive] whether to list dirs recursively or not
 * @param {BaseDirectory} [options.dir] base directory
 */
readDir(dir: string, options = {}): Promise<{}[]>
```

List directory files

- Arguments

  - dir: `string`

    path to the directory to read

  - options: `{}`

- Returns `Promise<{}[]>`

```ts
/**
 * @param {Object} [options] configuration object
 * @param {BaseDirectory} [options.dir] base directory
 */
readTextFile(filePath: string, options = {}): Promise<string>
```

Reads a file as text

- Arguments

  - filePath: `string`

    path to the file

  - options: `{}`

- Returns `Promise<string>`

```ts
/**
 * @param {Object} [options] configuration object
 * @param {Boolean} [options.recursive] whether to remove all of the directory's content or not
 * @param {BaseDirectory} [options.dir] base directory
 */
removeDir(dir: string, options = {}): Promise<void>
```

Removes a directory if the directory is not empty and the recursive option isn't set to true, it will be rejected

- Arguments

  - dir: `string`

    path to the directory to remove

  - options: `{}`

- Returns `Promise<void>`

```ts
/**
 * @param {String} file path to the file to remove
 * @param {Object} [options] configuration object
 * @param {BaseDirectory} [options.dir] base directory
 */
removeFile(file: string, options = {}): Promise<void>
```

Removes a file

- Arguments

  - file: `string`

    path to the file to remove

  - options: `{}`

- Returns `Promise<void>`

```ts
/**
 * @param {String} oldPath
 * @param {String} newPath
 * @param {Object} [options] configuration object
 * @param {BaseDirectory} [options.dir] base directory
 */
renameFile(oldPath: string, newPath: string, options = {}): Promise<void>
```

Renames a file

- Arguments

  - oldPath: `string`
  - newPath: `string`
  - options: `{}`

- Returns `Promise<void>`

```ts
/*
 * @param {Object} file
 * @param {String} file.path path of the file
 * @param {String} file.contents contents of the file
 * @param {Object} [options] configuration object
 * @param {BaseDirectory} [options.dir] base directory
 */
writeFile(file: {}, options = {}): Promise<void>
```

writes a text file

- Arguments

  - file: `{}`
  - options: `{}`

- Returns `Promise<void>`

```ts
/*
 * @param {Object} file
 * @param {String} file.path path of the file
 * @param {String} file.contents contents of the file
 * @param {Object} [options] configuration object
 * @param {BaseDirectory} [options.dir] base directory
 */
writeBinaryFile(file: {}, options = {}): Promise<void>
```

writes a binary file

- Arguments

  - file: `{}`
  - options: `{}`

- Returns `Promise<void>`

## HTTP

```ts
import http from 'tauri/api/http'
http.get('https://some.url')
```

### Members

`BodyType`

```ts
{
  Form: 1,
  File: 2,
  Auto: 3
}
```

`ResponseType`

```ts
{
  JSON: 1,
  Text: 2,
  Binary: 3
}
```

### Functions

```ts
/**
 * @typedef {Object} HttpOptions
 * @property {String} options.method GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, CONNECT or TRACE
 * @property {String} options.url the request URL
 * @property {Object} [options.headers] the request headers
 * @property {Object} [options.propertys] the request query propertys
 * @property {Object|String|Binary} [options.body] the request body
 * @property {Boolean} followRedirects whether to follow redirects or not
 * @property {Number} maxRedirections max number of redirections
 * @property {Number} connectTimeout request connect timeout
 * @property {Number} readTimeout request read timeout
 * @property {Number} timeout request timeout
 * @property {Boolean} allowCompression
 * @property {ResponseType} [responseType=1] response type
 * @property {BodyType} [bodyType=3] body type
*/

/**
 * @param {HttpOptions}  options request options
 */
request(options: HttpOptions): Promise<any>
```

Makes an HTTP request

- Arguments

  - options: `HttpOptions`

    The request options

- Returns `Promise<string>`

  promise resolving to the response

```ts
/**
 * @param {String}  url request URL
 * @param {String|Object|Binary}  body request body
 * @param {HttpOptions}  options request options
 */
get(url: string, options?: HttpOptions): Promise<any>
```

Makes a GET HTTP request

- Arguments

  - url: `string`
    The request URL

  - options: `HttpOptions`

    The request options

- Returns `Promise<string>`

  promise resolving to the response

```ts
/**
 * @param {String}  url request URL
 * @param {String|Object|Binary}  body request body
 * @param {HttpOptions}  options request options
 */
post(url: string, body?: string | object | Binary, options?: HttpOptions): Promise<any>
```

Makes a POST HTTP request

- Arguments

  - url: `string`

    The request URL

  - body: `string | object | Binary`

    The request body

  - options: `HttpOptions`

    The request options

- Returns `Promise<string>`

  promise resolving to the response

```ts
/**
 * @param {String}  url request URL
 * @param {String|Object|Binary}  body request body
 * @param {HttpOptions}  options request options
 */
put(url: string, body?: string | object | Binary, options?: HttpOptions): Promise<any>
```

Makes a PUT HTTP request

- Arguments

  - url: `string`

    The request URL

  - body: `string | object | Binary`

    The request body

  - options: `HttpOptions`

    The request options

- Returns `Promise<string>`

  promise resolving to the response

```ts
/**
 * @param {String}  url request URL
 * @param {HttpOptions}  options request options
 */
patch(url: string, options?: HttpOptions): Promise<any>
```

Makes a PATCH HTTP request

- Arguments

  - url: `string`
    The request URL

  - options: `HttpOptions`

    The request options

- Returns `Promise<string>`

  promise resolving to the response

```ts
/**
 * @param {String}  url request URL
 * @param {HttpOptions}  options request options
 */
deleteRequest(url: string, options?: HttpOptions): Promise<any>
```

Makes a DELETE HTTP request

- Arguments

  - url: `string`
    The request URL

  - options: `HttpOptions`

    The request options

- Returns `Promise<string>`

  promise resolving to the response

## Notification

<Alert icon="info-alt" title="Note">

Tauri patches the <a href="https://developer.mozilla.org/en-US/docs/Web/API/notification" target="_blank">Notification API</a> but not all methods and properties are available.

Since we're patching the browser API, you don't need to import anything as it lives in the global scope.
</Alert>

### Types

```ts
interface NotificationOptions {
  dir?: 'auto' | 'ltr' | 'rtl'
  lang?: string // The notification's language, as specified using a DOMString representing a BCP 47 language tag. See the Sitepoint ISO 2 letter language codes page for a simple reference.
  badge?: string // A USVString containing the URL of the image used to represent the notification when there isn't enough space to display the notification itself.
  body?: string // A DOMString representing the body text of the notification, which is displayed below the title.
  tag?: string // A DOMString representing an identifying tag for the notification.
  icon?: string // A USVString containing the URL of an icon to be displayed in the notification.
  image?: string // A USVString containing the URL of an image to be displayed in the notification.
  data?: any // Arbitrary data that you want associated with the notification. This can be of any data type.
  vibrate?: any // A vibration pattern for the device's vibration hardware to emit with the notification.
  renotify?: boolean // A Boolean specifying whether the user should be notified after a new notification replaces an old one. The default is false, which means they won't be notified.
  requireInteraction?: boolean // Indicates that a notification should remain active until the user clicks or dismisses it, rather than closing automatically. The default value is false.
  actions?: NotificationAction[] // An array of NotificationActions representing the actions available to the user when the notification is presented. These are options the user can choose among in order to act on the action within the context of the notification itself. The action's name is sent to the service worker notification handler to let it know the action was selected by the user.
  silent?: boolean // A Boolean specifying whether the notification is silent  (no sounds or vibrations  issued), regardless of the device settings. The default is false, which means it won't be silent.
}
```

### Classes

```ts
class Notification {
  static permission: string

  construct(title: string, options?: NotificationOptions)

  static requestPermission(): Promise<'granted' | 'denied' | 'default'>
}
```

## Process

```ts
import { execute } from 'tauri/api/process'
execute('script-name', ['--some', 'args'])
// alternatively:
import * as process from 'tauri/api/process'
process.execute('script-name', ['--some', 'args'])
```

### Functions

```ts
/**
 * @param {String} command the name of the cmd to execute e.g. 'mkdir' or 'node'
 * @param {(String[]|String)} [args] command args
 */
execute(command: string, args?: string | string[]): Promise<string>
```

Spawns a process

- Arguments

  - command: `string`

    the name of the cmd to execute e.g. 'mkdir' or 'node'

  - args: `string | string[]`

- Returns `Promise<string>`

  promise resolving to the stdout text

## Window

```ts
import { open, setTitle } from 'tauri/api/window'
open('https://some.url')
// alternatively:
import * as window from 'tauri/api/window'
window.open('https://some.url')
```

### Functions

```ts
/**
 * @param {String} url the URL to open
 */
open(url: string): void
```

opens an URL on the user default browser

- Arguments

  - url: `string`

    the URL to open

- Returns `void`

```ts
/**
 * @param {String} title the new title
 */
setTitle(title: string): void
```

sets the window title

- Arguments

  - title: `string`

    the new title

- Returns `void`
