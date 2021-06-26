---
title: Struct tauri::Builder
sidebar_label: struct.Builder
custom_edit_url: null
---

# Struct tauri::Builder,\[−]\[src],\[−],−

```rs
pub struct Builder<E, L, MID, TID, A, R> where
    E: Tag,
    L: Tag,
    MID: MenuId,
    TID: MenuId,
    A: Assets,
    R: Runtime,  { /* fields omitted */ }
```

Builds a Tauri application.

## Implementations

### `Builder`

#### `new`

Creates a new App builder.

```rs
pub fn new() -> Self
```

Defined in: [app.rs:425-444](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L425-444)

#### `invoke_handler`

Defines the JS message handler callback.

```rs
pub fn invoke_handler<F>(self, invoke_handler: F) -> Self 
where
    F: Fn(Invoke<Args<E, L, MID, TID, A, R>>) + Send + Sync + 'static, 
```

Defined in: [app.rs:447-453](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L447-453)

#### `setup`

Defines the setup hook.

```rs
pub fn setup<F>(self, setup: F) -> Self 
where
    F: Fn(&mut App<Args<E, L, MID, TID, A, R>>) -> Result<(), Box<dyn Error + Send>> + Send + 'static, 
```

Defined in: [app.rs:456-464](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L456-464)

#### `on_page_load`

Defines the page load hook.

```rs
pub fn on_page_load<F>(self, on_page_load: F) -> Self 
where
    F: Fn(Window<Args<E, L, MID, TID, A, R>>, PageLoadPayload) + Send + Sync + 'static, 
```

Defined in: [app.rs:467-473](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L467-473)

#### `plugin`

Adds a plugin to the runtime.

```rs
pub fn plugin<P: Plugin<Args<E, L, MID, TID, A, R>> + 'static>(
    self,
    plugin: P
) -> Self
```

Defined in: [app.rs:476-479](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L476-479)

#### `manage`

Add `state` to the state managed by the application.

This method can be called any number of times as long as each call refers to a different `T`.

Managed state can be retrieved by any request handler via the [`State`](/docs/api/rust/tauri/../tauri/struct.State) request guard. In particular, if a value of type `T` is managed by Tauri, adding `State<T>` to the list of arguments in a request handler instructs Tauri to retrieve the managed value.

# [Panics](/docs/api/rust/tauri/about:blank#panics)

Panics if state of type `T` is already being managed.

# [Mutability](/docs/api/rust/tauri/about:blank#mutability)

Since the managed state is global and must be [`Send`](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "Send") + [`Sync`](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "Sync"), mutations can only happen through interior mutability:

ⓘ

```rs
use std::{collections::HashMap, sync::Mutex};
use tauri::State;
// here we use Mutex to achieve interior mutability
struct Storage(Mutex<HashMap<u64, String>>);
struct Connection;
struct DbConnection(Mutex<Option<Connection>>);

#[tauri::command]
fn connect(connection: State<DbConnection>) {
  // initialize the connection, mutating the state with interior mutability
  *connection.0.lock().unwrap() = Some(Connection {});
}

#[tauri::command]
fn storage_insert(key: u64, value: String, storage: State<Storage>) {
  // mutate the storage behind the Mutex
  storage.0.lock().unwrap().insert(key, value);
}

fn main() {
  Builder::default()
    .manage(Storage(Default::default()))
    .manage(DbConnection(Default::default()))
    .invoke_handler(tauri::generate_handler&#33;[connect, storage_insert])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

# [Example](/docs/api/rust/tauri/about:blank#example)

ⓘ

```rs
use tauri::State;

struct MyInt(isize);
struct MyString(String);

#[tauri::command]
fn int_command(state: State<MyInt>) -> String {
    format!("The stateful int is: {}", state.0)
}

#[tauri::command]
fn string_command<'r>(state: State<'r, MyString>) {
    println!("state: {}", state.inner().0);
}

fn main() {
    tauri::Builder::default()
        .manage(MyInt(10))
        .manage(MyString("Hello, managed state!".to_string()))
        .invoke_handler(tauri::generate_handler&#33;[int_command, string_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

```rs
pub fn manage<T>(self, state: T) -> Self 
where
    T: Send + Sync + 'static, 
```

Defined in: [app.rs:556-566](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L556-566)

#### `create_window`

Creates a new webview window.

```rs
pub fn create_window<F>(self, label: L, url: WindowUrl, setup: F) -> Self 
where
    F: FnOnce(<R::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes) -> (<R::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes), 
```

Defined in: [app.rs:569-589](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L569-589)

#### `on_window_event`

Registers a window event handler for all windows.

```rs
pub fn on_window_event<F: Fn(GlobalWindowEvent<Args<E, L, MID, TID, A, R>>) + Send + Sync + 'static>(
    self,
    handler: F
) -> Self
```

Defined in: [app.rs:621-629](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L621-629)

#### `register_global_uri_scheme_protocol`

Registers a URI scheme protocol available to all webviews. Leverages [setURLSchemeHandler](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/2875766-seturlschemehandler) on macOS, [AddWebResourceRequestedFilter](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.774.44) on Windows and [webkit-web-context-register-uri-scheme](https://webkitgtk.org/reference/webkit2gtk/stable/WebKitWebContext.html#webkit-web-context-register-uri-scheme) on Linux.

# [Arguments](/docs/api/rust/tauri/about:blank#arguments)

-   `uri_scheme` The URI scheme to register, such as `example`.
-   `protocol` the protocol associated with the given URI scheme. It’s a function that takes an URL such as `example://localhost/asset.css`.


```rs
pub fn register_global_uri_scheme_protocol<N: Into<String>, H: Fn(&str
) -> Result<Vec<u8>, Box<dyn Error>> + Send + Sync + 'static>(
    self,
    uri_scheme: N,
    protocol: H) -> Self
```

Defined in: [app.rs:653-668](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L653-668)

#### `build`

Builds the application.

```rs
pub fn build(
    self,
    context: Context<A>
) -> Result<App<Args<E, L, MID, TID, A, R>>>
```

Defined in: [app.rs:672-854](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L672-854)

#### `run`

Runs the configured Tauri application.

```rs
pub fn run(self, context: Context<A>) -> Result<()>
```

Defined in: [app.rs:857-876](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L857-876)

```rs
impl<E, L, MID, TID, A, R> Builder<E, L, MID, TID, A, R> 
where
    E: Tag,
    L: Tag,
    MID: MenuId,
    TID: MenuId,
    A: Assets,
    R: Runtime, 
```

Defined in: [app.rs:415-877](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L415-877)

## Trait Implementations

### `Assets`

Make `Wry` the default `Runtime` for `Builder`

```rs
impl<A: Assets> Default for Builder<String, String, String, String, A, Wry>
```

Defined in: [app.rs:887-891](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L887-891)

#### `default`

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

```rs
fn default() -> Self
```

Defined in: [app.rs:888-890](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L888-890)

## Auto Trait Implementations

### `impl<E, L, MID, TID, A, R> !RefUnwindSafe for Builder<E, L, MID, TID, A, R>`

### `impl<E, L, MID, TID, A, R> Send for Builder<E, L, MID, TID, A, R> where <<R as Runtime>::Dispatcher as Dispatch>::WindowBuilder: Send,`

### `impl<E, L, MID, TID, A, R> !Sync for Builder<E, L, MID, TID, A, R>`

### `impl<E, L, MID, TID, A, R> Unpin for Builder<E, L, MID, TID, A, R> where L: Unpin, <<R as Runtime>::Dispatcher as Dispatch>::WindowBuilder: Unpin,`

### `impl<E, L, MID, TID, A, R> !UnwindSafe for Builder<E, L, MID, TID, A, R>`

## Blanket Implementations

### `Any`

#### `type_id`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

```rs
pub fn type_id(&self) -> TypeId
```

Defined in: [any.rs:132](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)

```rs
impl<T> Any for T 
where
    T: 'static + ?Sized, 
```

Defined in: [any.rs:131-135](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)

### `Borrow`

#### `borrow`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

```rs
pub fn borrow(&self) -> &T
```

Defined in: [borrow.rs:210](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)

```rs
impl<T> Borrow<T> for T 
where
    T: ?Sized, 
```

Defined in: [borrow.rs:208-213](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)

### `BorrowMut`

#### `borrow_mut`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Defined in: [borrow.rs:217](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)

```rs
impl<T> BorrowMut<T> for T 
where
    T: ?Sized, 
```

Defined in: [borrow.rs:216-220](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)

### `From`

#### `from`

Performs the conversion.

```rs
pub fn from(t: T) -> T
```

Defined in: [mod.rs:545](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)

```rs
impl<T> From<T> for T
```

Defined in: [mod.rs:544-548](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)

### `Into`

#### `into`

Performs the conversion.

```rs
pub fn into(self) -> U
```

Defined in: [mod.rs:537](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)

```rs
impl<T, U> Into<U> for T 
where
    U: From<T>, 
```

Defined in: [mod.rs:533-540](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)

### `TryFrom`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

Performs the conversion.

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Defined in: [mod.rs:587](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)

```rs
impl<T, U> TryFrom<U> for T 
where
    U: Into<T>, 
```

Defined in: [mod.rs:581-590](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)

### `TryInto`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

Performs the conversion.

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Defined in: [mod.rs:573](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)

```rs
impl<T, U> TryInto<U> for T 
where
    U: TryFrom<T>, 
```

Defined in: [mod.rs:567-576](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
