---
title: Frequently Asked Questions
---

## How can I use unpublished Tauri changes?

To use Tauri from Git (bleeding edge version) you need to change your `Cargo.toml` file and update your CLI and API.

### Pulling the Rust crate as a git dependency

Append this to your `Cargo.toml` file:

```toml
[patch.crates-io]
tauri = { git = "https://github.com/tauri-apps/tauri", branch = "dev" }
tauri-build = { git = "https://github.com/tauri-apps/tauri" branch = "dev" }
```

This will force all your dependencies to use `tauri` and `tauri-build` from Git instead of crates.io.

### Using the CLI from source

- If you are using the Cargo CLI, you can install it directly from Git:

```sh
cargo install --git https://github.com/tauri-apps/tauri tauri-cli
```

And keep using it as normal with `cargo tauri dev` and `cargo tauri build`.

- If you are using the `@tauri-apps/cli` package, you will need to clone the repo and build it:

```sh
git clone https://github.com/tauri-apps/tauri
cd tauri/tooling/cli/node
yarn
yarn build
```

To use it, run directly with node:

```sh
node /path/to/tauri/tooling/cli/node/tauri.js dev
node /path/to/tauri/tooling/cli/node/tauri.js build
```

- Alternatively, you can run your app with Cargo directly:

```sh
cd src-tauri

cargo run --no-default-features # instead of tauri dev
cargo build # instead of tauri build - won't bundle your app though
```

### Using the Tauri API package from source

It is recommended to also use the Tauri API package from source when using the Tauri crate from Git (though it might not be needed).
To build it from source, run the following script:

```sh
git clone https://github.com/tauri-apps/tauri
cd tauri/tooling/api
yarn
yarn build
```

Now you can link it using yarn:

```sh
cd dist
yarn link
cd /path/to/your/project
yarn link @tauri-apps/api
```

Or you can change your package.json to point to the dist folder directly:

```json
{
  "dependencies": {
    "@tauri-apps/api": "/path/to/tauri/tooling/api/dist"
  }
}
```
