# Tutorial manifests

Each directory here is one verified tutorial, rendered on the docs pages by
`<Tutorial>` and `<TutorialStep>` (see `src/components/tutorial/`):

```
<id>/
  manifest.json        step order, tasks, commands, and assertion results
  base/<file>          content of each mutated file before its first mutation
  steps/<step>/<file>  full content of the file after that step
manifest.schema.json   the format contract, referenced by each manifest's `$schema`
```

The docs build derives the diff blocks you see on a page from these snapshots:
for each file mutation, the previous state is the latest snapshot of the same
file in an earlier step, or `base/<file>` for the first one. The build reads
only this directory; it never runs any external tool.

## Where the files come from

They are recorded by [tatu](https://github.com/vasfvitor/tauri-tutorial-runner),
a runner that executes every step against a clean `create-tauri-app` scaffold
(plus a `configure` seam in `lib.rs` that its checks build the app from)
and asserts the result over real IPC, capability ACLs, and frontend builds. The
runner's CI re-runs the tutorials weekly against the latest toolchain, compares
its output with what is committed here, and opens a PR when they diverge.

## Editing

The format contract is `manifest.schema.json`, not the runner. Snapshots are
plain source files: editors that support the `$schema` key validate
`manifest.json` as you type, and `pnpm check:tutorials` verifies that pages,
manifests, and snapshots agree.

Hand edits are welcome. A fix to a snapshot renders immediately, and the weekly
runner comparison will confirm it still passes, or open a PR where it doesn't.
To make a change stick long term, mirror it in the runner repo: a snapshot at
`<id>/steps/<step>/<file>` corresponds to the overlay with the same path under
`tutorials/<id>/steps/` there. Changes to step structure, commands, or
assertions belong in the runner's `tutorial.yaml`, which regenerates these
trees via `tatu run` followed by `tatu bless`.

Do not run Prettier over this directory (it is ignored in `.prettierignore`):
snapshots are byte-exact recordings, and reformatting them breaks the drift
comparison.
