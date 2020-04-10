---
id: js
title: "JavaScript"
---

Here is the JS API, exposed by the `tauri` package in the "api" directory.


## Dialog

```ts
import { open, save } from 'tauri/api/dialog'
```

### Functions

```ts
open(options?: undefined | {}): Promise<string | string[]>
```

Open a file/directory selection dialog

- Arguments
    - options: undefined | {} = {}

- Returns `Promise<string | string[]>`

    promise resolving to the select path(s)

```ts
save(options?: undefined | {}): Promise<string>
```

Open a file/directory save dialog

- Arguments
    - options: undefined | {} = {}

- Returns `Promise<string>`

    promise resolving to the select path

## Event

```ts
import { emit, listen } from 'tauri/api/event'
```

### Functions

```ts
emit(event: string, payload: undefined | string): void
```

Emits an event to the backend

- Arguments
    - event: string

        the event name
    - payload: undefined | string

- Returns void

```ts
listen(event: string, handler: {}): void
```

Listen to an event from the backend

- Arguments
    -  event: string

        the event name

    - handler: {}

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
  writeFile
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
copyFile(source: string, destination: string, options?: undefined | {}): Promise<void>
```

- Arguments
    - source: string
    - destination: string
    - options: undefined | {} = {}

- Returns `Promise<void>`

```ts
createDir(dir: string, options?: undefined | {}): Promise<void>
```

Creates a directory if one of the path's parent components doesn't exist and the recursive option isn't set to true, it will be rejected

- Arguments
    - dir: string

        path to the directory to create
    - options: undefined | {} = {}

- Returns `Promise<void>`

```ts
readBinaryFile(filePath: string, options?: undefined | {}): Promise<any[]>
```

Reads a file as binary

- Arguments
    - filePath: string

        path to the file
    - options: undefined | {} = {}

- Returns Promise<any[]>

```ts
readDir(dir: string, options?: undefined | {}): Promise<{}[]>
```

List directory files

- Arguments
    - dir: string

        path to the directory to read

    - options: undefined | {} = {}

- Returns Promise<{}[]>

```ts
readTextFile(filePath: string, options?: undefined | {}): Promise<string>
```

Reads a file as text

- Arguments
    - filePath: string

        path to the file

    - options: undefined | {} = {}

- Returns `Promise<string>`

```ts
removeDir(dir: string, options?: undefined | {}): Promise<void>
```

Removes a directory if the directory is not empty and the recursive option isn't set to true, it will be rejected

- Arguments
    - dir: string

        path to the directory to remove

    - options: undefined | {} = {}

- Returns `Promise<void>`


```ts
removeFile(file: string, options?: undefined | {}): Promise<void>
```

Removes a file

- Arguments
    - file: string

        path to the file to remove

    - options: undefined | {} = {}

- Returns `Promise<void>`


```ts
renameFile(oldPath: string, newPath: string, options?: undefined | {}): Promise<void>
```

Renames a file

- Arguments
    - oldPath: string
    - newPath: string
    - options: undefined | {} = {}

- Returns `Promise<void>`

```ts
writeFile(file: {}, options?: undefined | {}): Promise<void>
```

writes a text file

- Arguments
    - file: {}
    - options: undefined | {} = {}

- Returns `Promise<void>`

## Process

```ts
import { execute } from 'tauri/api/process'
```

### Functions

```ts
execute(command: string, args: undefined | string | string[]): Promise<string>
```

Spawns a process
- Arguments
    - command: string

        the name of the cmd to execute e.g. 'mkdir' or 'node'
    - args: undefined | string | string[]

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
    - url: string

        the URL to open
    
- Returns void


```ts
setTitle(title: string): void
```

sets the window title

- Arguments
    - title: string

        the new title
    
- Returns void
