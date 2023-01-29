import Command from '@theme/Command'

# Temp heading to fix render

<!-- The above heading is here because fragments aren't really supported in the context of Astro Content Collections -->

To build and bundle your Tauri application into a single executable simply run the following command:

<Command name="build" />

It will build your frontend (if configured, see [`beforeBuildCommand`][beforebuildcommand]), compile the Rust binary, collect all external binaries and resources and finally produce neat platform-specific bundles and installers.

[beforebuildcommand]: ../../api/config.md#buildconfig.beforebuildcommand
