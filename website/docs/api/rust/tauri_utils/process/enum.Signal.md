---
title: "enum.Signal"
---

# Enum [tauri\\\_utils](/docs/api/rust/tauri\_utils/../index.html)::​[process](/docs/api/rust/tauri\_utils/index.html)::​[Signal](/docs/api/rust/tauri\_utils/)

    #[repr(C)]
    pub enum Signal {
        Hangup,
        Interrupt,
        Quit,
        Illegal,
        Trap,
        Abort,
        Bus,
        FloatingPointException,
        Kill,
        User1,
        Segv,
        User2,
        Pipe,
        Alarm,
        Term,
        Stklft,
        Child,
        Continue,
        Stop,
        TSTP,
        TTIN,
        TTOU,
        Urgent,
        XCPU,
        XFSZ,
        VirtualAlarm,
        Profiling,
        Winch,
        IO,
        Power,
        Sys,
    }

An enum representing signal on UNIX-like systems.

## Variants

`Hangup`

Hangup detected on controlling terminal or death of controlling process.

`Interrupt`

Interrupt from keyboard.

`Quit`

Quit from keyboard.

`Illegal`

Illegal instruction.

`Trap`

Trace/breakpoint trap.

`Abort`

Abort signal from C abort function.

`Bus`

Bus error (bad memory access).

`FloatingPointException`

Floating point exception.

`Kill`

Kill signal.

`User1`

User-defined signal 1.

`Segv`

Invalid memory reference.

`User2`

User-defined signal 2.

`Pipe`

Broken pipe: write to pipe with no readers.

`Alarm`

Timer signal from C alarm function.

`Term`

Termination signal.

`Stklft`

Stack fault on coprocessor (unused).

`Child`

Child stopped or terminated.

`Continue`

Continue if stopped.

`Stop`

Stop process.

`TSTP`

Stop typed at terminal.

`TTIN`

Terminal input for background process.

`TTOU`

Terminal output for background process.

`Urgent`

Urgent condition on socket.

`XCPU`

CPU time limit exceeded.

`XFSZ`

File size limit exceeded.

`VirtualAlarm`

Virtual alarm clock.

`Profiling`

Profiling time expired.

`Winch`

Windows resize signal.

`IO`

I/O now possible.

`Power`

Power failure (System V).

`Sys`

Bad argument to routine (SVr4).

## Trait Implementations

### `impl Clone for Signal`

#### `fn clone(&self) -> Signal`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `fn clone\_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone\_from)

### `impl Copy for Signal`

### `impl Debug for Signal`

#### `fn fmt(&self, f: &mut Formatter) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl PartialEq<Signal> for Signal`

#### `fn eq(&self, other: &Signal) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `#[must\_use]fn ne(&self, other: &Rhs) -> bool`1.0.0

This method tests for `!=`.

### `impl PartialOrd<Signal> for Signal`

#### `fn partial\_cmp(&self, other: &Signal) -> Option<Ordering>`

This method returns an ordering between `self` and `other` values if one exists. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial\_cmp)

#### `#[must\_use]fn lt(&self, other: &Rhs) -> bool`1.0.0

This method tests less than (for `self` and `other`) and is used by the `<` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt)

#### `#[must\_use]fn le(&self, other: &Rhs) -> bool`1.0.0

This method tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le)

#### `#[must\_use]fn gt(&self, other: &Rhs) -> bool`1.0.0

This method tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt)

#### `#[must\_use]fn ge(&self, other: &Rhs) -> bool`1.0.0

This method tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge)

### `impl StructuralPartialEq for Signal`

## Auto Trait Implementations

### `impl RefUnwindSafe for Signal`

### `impl Send for Signal`

### `impl Sync for Signal`

### `impl Unpin for Signal`

### `impl UnwindSafe for Signal`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `fn type\_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type\_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `fn borrow\_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow\_mut)

### `impl<T> From<T> for T`

#### `fn from(t: T) -> T`

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `fn into(self) -> U`

Performs the conversion.

### `impl<T> ToOwned for T where T: Clone,`

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `fn to\_owned(&self) -> T`

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to\_owned)

#### `fn clone\_into(&self, target: &mutT)`

🔬 This is a nightly-only experimental API. (`toowned\_clone\_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone\_into)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `fn try\_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `fn try\_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

      