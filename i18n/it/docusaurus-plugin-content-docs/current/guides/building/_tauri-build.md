import Command from '@theme/Command'

To build and bundle your Tauri application into a single executable simply run the following command:

<Command name="build" />

Genererà il tuo frontend (se configurato, vedi [`beforeBuildCommand`][beforebuildcommand]), compilerà il binario Rust, raccoglierà tutti i binari e le risorse esterne e infine produrrà pacchetti e programmi d'installazione puliti, specifici per piattaforme.

[beforebuildcommand]: ../../api/config.md#buildconfig.beforebuildcommand
