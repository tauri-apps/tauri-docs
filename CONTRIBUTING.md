# Contributing

Want to contribute to docs? Here's how you can get started:

1. Clone this repo
2. Run `pnpm i`
3. Run `pnpm dev` to start the local server
4. Visit `http://localhost:3000/contribute/` to get started 🥳

Reach out to us on [Discord](https://discord.com/invite/tauri) on the `#dev-documentation` channel if you have any questions!

## Previewing API References

If you'd like to view the API references locally then there are a few extra steps:

1. Initialize the submodules with `git submodule update --init`
2. Prepare the submodules by running `pnpm dev:setup`

Now you should have the `http://localhost:3000/2/reference/` routes available for preview.
