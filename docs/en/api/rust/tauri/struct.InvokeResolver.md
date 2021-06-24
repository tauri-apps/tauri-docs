---
title: Struct tauri::InvokeResolver
sidebar_label: struct.InvokeResolver
---

# Struct tauri::InvokeResolver,\[−]\[src],\[−],−

```rs
pub struct InvokeResolver<P: Params = Args<String, String, String, String, EmbeddedAssets, Wry>> { /* fields omitted */ }
```

Resolver of a invoke message.

## Implementations

### `Params`

#### `respond_async`

Reply to the invoke promise with an async task.

```rs
pub fn respond_async<T, F>(self, task: F) 
where
    T: Serialize,
    F: Future<Output = Result<T, InvokeError>> + Send + 'static, 
```

Defined in: [hooks.rs:134-142](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L134-142)

#### `respond_async_serialized`

Reply to the invoke promise with an async task which is already serialized.

```rs
pub fn respond_async_serialized<F>(self, task: F) 
where
    F: Future<Output = Result<JsonValue, InvokeError>> + Send + 'static, 
```

Defined in: [hooks.rs:145-152](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L145-152)

#### `respond`

Reply to the invoke promise with a serializable value.

```rs
pub fn respond<T: Serialize>(self, value: Result<T, InvokeError>)
```

Defined in: [hooks.rs:155-157](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L155-157)

#### `respond_closure`

Reply to the invoke promise running the given closure.

```rs
pub fn respond_closure<T, F>(self, f: F) 
where
    T: Serialize,
    F: FnOnce() -> Result<T, InvokeError>, 
```

Defined in: [hooks.rs:160-166](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L160-166)

#### `resolve`

Resolve the invoke promise with a value.

```rs
pub fn resolve<T: Serialize>(self, value: T)
```

Defined in: [hooks.rs:169-171](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L169-171)

#### `reject`

Reject the invoke promise with a value.

```rs
pub fn reject<T: Serialize>(self, value: T)
```

Defined in: [hooks.rs:174-181](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L174-181)

#### `invoke_error`

Reject the invoke promise with an [`InvokeError`](/docs/api/rust/tauri/../tauri/struct.InvokeError "InvokeError").

```rs
pub fn invoke_error(self, error: InvokeError)
```

Defined in: [hooks.rs:184-186](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L184-186)

#### `return_task`

Asynchronously executes the given task and evaluates its Result to the JS promise described by the `success_callback` and `error_callback` function names.

If the Result `is_ok()`, the callback will be the `success_callback` function name and the argument will be the Ok value. If the Result `is_err()`, the callback will be the `error_callback` function name and the argument will be the Err value.

```rs
pub async fn return_task<T, F>(
    window: Window<P>,
    task: F,
    success_callback: String,
    error_callback: String) 
where
    T: Serialize,
    F: Future<Output = Result<T, InvokeError>> + Send + 'static, 
```

Defined in: [hooks.rs:193-204](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L193-204)

```rs
impl<P: Params> InvokeResolver<P>
```

Defined in: [hooks.rs:124-233](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L124-233)

## Auto Trait Implementations

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !RefUnwindSafe for InvokeResolver<P>`

### `impl<P> Send for InvokeResolver<P>`

### `impl<P> Sync for InvokeResolver<P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Sync, <<P as Params>::Runtime as Runtime>::Dispatcher: Sync, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Sync, <<P as Params>::Runtime as Runtime>::Handle: Sync,`

### `impl<P> Unpin for InvokeResolver<P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Unpin, <<P as Params>::Runtime as Runtime>::Dispatcher: Unpin, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Unpin, <<P as Params>::Runtime as Runtime>::Handle: Unpin, <P as Params>::Label: Unpin,`

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !UnwindSafe for InvokeResolver<P>`

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
