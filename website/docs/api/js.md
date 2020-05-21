---
id: js
title: 'JavaScript'
---

Here is the JS API, exposed by the <a href="https://www.npmjs.com/package/tauri" target="_blank">Tauri package</a> in the "api" directory.

If you haven't done it so far, add the package _locally_ to your project:

```sh
npm install tauri --save
# OR
yarn add tauri
```

<div className="alert alert--warning" role="alert">
  Note: if you're working with Vanilla JavaScript for your project, you won't be able to benefit this API (for now).
</div>

## Dialog

```ts
import { open, save } from 'tauri/api/dialog'
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
```

### Types

<div className="alert alert--info" style={{ marginBottom: 20 }} role="alert">
Note: This type only lives in the docs for now.
</div>

```ts
type EventCallback = (response: string) => void
```

### Functions

```ts
emit(event: string, payload: string): void
```

Emits an event to the backend

- Arguments

  - event: `string`

    the event name

  - payload: `string`

- Returns void

```ts
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

- Returns Promise<any[]>

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

- Returns Promise<{}[]>

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
removeFile(file: string, options = {}): Promise<void>
```

Removes a file

- Arguments

  - file: `string`

    path to the file to remove

  - options: `{}`

- Returns `Promise<void>`

```ts
renameFile(oldPath: string, newPath: string, options = {}): Promise<void>
```

Renames a file

- Arguments

  - oldPath: `string`
  - newPath: `string`
  - options: `{}`

- Returns `Promise<void>`

```ts
writeFile(file: {}, options = {}): Promise<void>
```

writes a text file

- Arguments

  - file: `{}`
  - options: `{}`

- Returns `Promise<void>`

## HTTP

```ts
import {
  request,
  deleteRequest,
  get,
  post,
  put,
  patch,
  ResponseType,
  BodyType,
} from 'tauri/api/http'
```

### Types

<div className="alert alert--info" style={{ marginBottom: 20 }} role="alert">
Note: This type only lives in the docs for now.
</div>

```ts
type HttpOptions = {
  options: {
    method: string
    url: string
    headers?: object
    properties?: object
    body?: string | object | Binary
  }
  followRedirects: boolean // whether to follow redirects or not
  maxRedirections: number // max number of redirections
  connectTimeout: number // request connect timeout
  readTimeout: number // request read timeout
  timeout: number // request timeout
  allowCompression: boolean
  responseType?: ResponseType
  bodyType?: BodyType
}
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
request(options: HttpOptions): Promise<any>
```

Makes an HTTP request

- Arguments

  - options: `HttpOptions`

    The request options

- Returns `Promise<string>`

  promise resolving to the response

```ts
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

## Process

```ts
import { execute } from 'tauri/api/process'
```

### Functions

```ts
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
```

### Functions

```ts
open(url: string): void
```

opens an URL on the user default browser

- Arguments

  - url: `string`

    the URL to open

- Returns `void`

```ts
setTitle(title: string): void
```

sets the window title

- Arguments

  - title: `string`

    the new title

- Returns `void`
