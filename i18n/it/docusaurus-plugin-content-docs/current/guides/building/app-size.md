---
sidebar_position: 6
---

# Ridurre La Dimensione Dell'App

Con Tauri, stiamo lavorando per ridurre l'impronta ambientale delle applicazioni utilizzando meno risorse di sistema laddove disponibili, fornendo sistemi compilati che non necessitano di valutazione di "runtime", e offrendo guide in modo che gli ingegneri possano rendere le loro applicazioni ancora più piccole, senza sacrificare prestazioni o sicurezza. Risparmiando risorse stiamo facendo la nostra parte per aiutare te ad aiutare noi a salvare il pianeta - che è l'unica linea di fondo di cui le aziende nel XXI secolo dovrebbero preoccuparsi.

Quindi, se sei interessato a imparare come migliorare le dimensioni e le prestazioni dell'app, continua a leggere!

### Non puoi migliorare ciò che non puoi misurare

Prima di poter ottimizzare la tua app, devi capire cosa occupa spazio nella tua app! Ecco un paio di strumenti che possono aiutarti con questo:

- **[`cargo-bloat`][]** - A Rust utility to determine what takes the most space in your app. Ti dà una panoramica eccellente e ordinata delle funzioni Rust più significative.

- **[`cargo-expand`][]** - [Macros][] make your rust code more concise and easier to read, but they are also hidden size traps! Use `cargo-expand` to see what those macros generate under the hood.

- **[`rollup-plugin-visualizer`][]** - A tool that generates beautiful (and insightful) graphs from your rollup bundle. Molto conveniente per capire quali dipendenze JavaScript contribuiscono di più alla dimensione finale del pacchetto.

- **[`rollup-plugin-graph`][]** - You noticed a dependency included in your final frontend bundle, but you are unsure why? `rollup-plugin-graph` generates Graphviz-compatible visualizations of your entire dependency graph.

Questi sono solo un paio di strumenti che potresti utilizzare. Assicurati di controllare l'elenco dei plugin dei pacchetti frontend per ulteriori informazioni!

## Checklist

1. [Minimizza Javascript](#minify-javascript)
2. [Ottimizza Dipendenze](#optimize-dependencies)
3. [Ottimizza Le Immagini](#optimize-images)
4. [Rimuovi Font Personalizzate Non Necessarie](#remove-unnecessary-custom-fonts)
5. [Configura La Allowlist](#allowlist-config)
6. [Ottimizzazioni Rust Build-time](#rust-build-time-optimizations)
7. [Stripping](#stripping)
8. [UPX](#upx)

### Minimizza Javascript

JavaScript costituisce una grande porzione di una tipica app Tauri, quindi è importante rendere il JavaScript il più leggero possibile.

Puoi scegliere tra una pletora di pacchetti JavaScript; le scelte popolari sono [Vite][], [webpack][] e [rollup][]. Tutti possono produrre JavaScript minimizzato se configurati correttamente, quindi consulta la documentazione del tuo bundler per opzioni specifiche. In generale, dovresti assicurarti di:

#### Abilita tree shaking

Questa opzione rimuove JavaScript inutilizzato dal tuo pacchetto. Tutti i pacchetti popolari lo abilitano per impostazione predefinita.

#### Abilita minimizzazione

La minimizzazione rimuove gli spazi bianchi inutili, accorcia i nomi delle variabili e applica altre ottimizzazioni. La maggior parte dei pacchetti lo abilita per impostazione predefinita; una notevole eccezione è il rollup [][], dove hai bisogno di plugin come [rollup-plugin-terser][] o [rollup-plugin-uglify][].

Nota: Puoi usare i minimizzatori come [terser][] e [esbuild][] come strumenti indipendenti.

#### Disabilita mappe sorgenti

Le mappe sorgente forniscono una piacevole esperienza di sviluppo quando si lavora con i linguaggi che compilano in JavaScript, come ad esempio [TypeScript][]. Poiché le mappe di origine tendono a essere abbastanza grandi, è necessario disattivarle durante la costruzione dell' app destinata alla produzione. Non hanno alcun beneficio per il vostro utente finale, quindi è effettivamente peso morto.

### Ottimizza Dipendenze

Molte librerie popolari hanno alternative più piccole e più veloci tra cui si può scegliere.

La maggior parte delle librerie che usi dipendono loro stesse da molte librerie esterne, in modo che una libreria che sembra piccola e innocente a prima vista, potrebbe aggiungere **diversi megabyte** di codice alla tua app.

È possibile utilizzare [Bundlephobia][] per trovare il costo delle dipendenze JavaScript. Ispezionare il costo delle dipendenze Rust è generalmente più difficile dal momento che il compilatore fa molte ottimizzazioni.

Se trovi una biblioteca che sembra eccessivamente grande, cerca online, ci sono alte probabilità che qualcun' altro aveva lo stesso pensiero e abbia creato un'alternativa. A good example is [Moment.js][] and its [many alternatives][you-dont-need-momentjs].

Ma tenete a mente: **La migliore dipendenza è nessuna dipendenza**, il che significa che dovreste sempre preferire le biblioteche integrate nella lingua ai pacchetti di terze parti.

### Ottimizza Le Immagini

Secondo il [Http Archive][], le immagini sono il [più grande contributore al peso di un sito web][http archive report, image bytes]. Quindi, se la tua app include immagini o icone, assicurati di ottimizzarle!

È possibile scegliere tra diverse opzioni manuali ([GIMP][], [Photoshop][], [Squoosh][]) o plugin per i tuoi strumenti di generazione di frontend preferiti ([vite-imagetools][], [vite-plugin-imagemin][], [image-minimizer-webpack-plugin][]).

Da notare che la biblioteca `imagemin` che la maggior parte dei plugin utilizza, è [ufficialmente non mantenuta][imagemin is unmaintained].

#### Usa I Formati D'Immagine Moderni

Formati come `webp` o `avif` offrono riduzioni di dimensione **fino a 95%** rispetto a jpeg, mantenendo un'eccellente precisione visiva. Puoi usare strumenti come [Squoosh][] per provare diversi formati per le tue immagini.

#### Dimensiona Immagini Adeguatamente

Nessuno apprezza la spedizione di un immagine grezza in 6K con la tua app, quindi assicurati di dimensionare l'immagine di conseguenza. Le immagini che appaiono grandi sullo schermo dovrebbero essere di dimensioni maggiori delle immagini che occupano meno spazio sullo schermo.

#### Non Utilizzare Immagini Reattive

In un ambiente Web, dovresti usare [Immagini Responsive][] per caricare dinamicamente la dimensione dell'immagine corretta per ogni utente. Dal momento che non stai distribuendo dinamicamente le immagini sul web, utilizzando le immagini reattive gonfiano inutilmente la tua app con copie ridondanti.

#### Rimuovi Metadati

Le immagini che sono state scattate direttamente da una fotocamera o che provengono da un sito di foto stock, spesso includono metadati circa la fotocamera e modello della lente o fotografo. Non solo sono byte sprecati, ma i metadati possono contenere informazioni potenzialmente sensibili come il tempo, giorno e posizione della foto.

### Rimuovi Font Personalizzate Non Necessarie

Cerca di evitare di spedire font personalizzate con la tua app e invece di affidarti a font di sistema. Se devi spedire font personalizzate, assicurati che siano in formati moderni e ottimizzati come `woff2`.

Le font possono essere piuttosto grandi, quindi utilizzando le font già incluse nel sistema operativo riduce l'impronta della tua app. Inoltre evita FOUT (Flash of Unstyled Text) e fa sentire la tua app più "nativa" in quanto utilizza lo stesso font di tutte le altre applicazioni.

Se è necessario includere font personalizzate, assicurati d'includerle in formati moderni come `woff2`, che tendono a essere molto più piccole dei formati legacy.

Usa le cosiddette **"System Font Stacks"** nel tuo CSS. Ci sono un paio di variazioni, ma qui ci sono tre di base per iniziare:

**Sans-Serif**

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
  sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
```

**Serif**

```css
font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid
    Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe
    UI Symbol;
```

**Monospace**

```css
font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation
    Mono, monospace;
```

### Configura La Allowlist

Puoi ridurre la dimensione della tua app abilitando solo le funzionalità API Tauri di cui hai bisogno nella configurazione `allowlist`.

La configurazione `allowlist` determina quali funzioni dell' API verranno abilitate; le funzioni disabilitate **non saranno compilate nella tua app**. Questo è un modo facile per far perdere un po 'di peso all' app.

Un esempio da un tipico `tauri.conf.json`:

```json
{
  "tauri": {
    "allowlist": {
      "all": false,
      "fs": {
        "writeFile": true
      },
      "shell": {
        "execute": true
      },
      "dialog": {
        "save": true
      }
    }
  }
}
```

### Ottimizzazioni Rust Build-time

Configura il tuo progetto cargo per sfruttare le funzionalità di ottimizzazione delle dimensioni di Rust. [Why is a rust executable large ?][] fornisce un'eccellente spiegazione del motivo per cui questo è importante e spiega come fare in modo approfondito. Allo stesso tempo, [Minimizing Rust Binary Size][] è più aggiornato e ha un paio di raccomandazioni in più. Entrambe le guide sono in lingua inglese.

Rust è noto per la produzione di grandi binari, ma è possibile istruire il compilatore per ottimizzare le dimensioni dell'eseguibile finale.

Cargo espone diverse opzioni che determinano come il compilatore genera il tuo binario. Le opzioni "consigliate" per le app Tauri sono queste:

```toml
[profile.release]
panic = "abort" # Toglie la logica di "panic clean-up"
codegen-units = 1 # Compila i crate dir Rust uno alla volta, per ottimizzarli meglio
lto = true # Attiva l' ottimizzazione di link
opt-level = "s" # Ottimizza la grandezza dei binari
strip = true # Rimuovi simboli di debug
```

:::note
C'è anche `opt-level = "z"` disponibile per ridurre la dimensione binaria risultante. `"s"` e `"z"` possono a volte essere più piccoli dell'altro, quindi provalo con la tua applicazione!

Abbiamo visto dimensioni binarie più piccole da `"s"` usando le applicazioni che usiamo come esempio, ma le applicazioni del mondo reale possono sempre differire.
:::

Per una spiegazione dettagliata di queste e altre opzioni, fare riferimento alla sezione ["Profiles section" del libro di Cargo][cargo profiles].

#### Disabilita La Compressione Degli Asset Di Tauri

Per impostazione predefinita, Tauri utilizza Brotli per comprimere gli asset nel binario finale. Brotli incorpora una grande tabella di ricerca (~170KiB) per ottenere ottimi risultati, ma se le risorse che hai incorporato sono più piccole di questo o comprimono male, il binario risultante può essere più grande di qualsiasi risparmio.

La compressione può essere disabilitata impostando `default-features` a `false` e specificando tutto tranne la funzione di `compressione`:

```toml
[dependencies]
tauri = { version = "...", features = ["objc-exception", "wry"], default-features = false }
```

#### Funzioni Di Compressione Rust Instabili

:::cautela
I seguenti suggerimenti sono tutte caratteristiche instabili e richiedono una "nightly toolchain". Leggi la documentazione [Caratteristiche instabili][cargo unstable features] per maggiori informazioni su ciò che questo comporta.
:::

I seguenti metodi comportano l'utilizzo di caratteristiche del compilatore instabile e richiedono la "nightly toolchain" di Rust invece della normale. Se non hai aggiunto il "nightly toolchain" + il componente necessario `rust-src`, prova quanto segue:

```shell
rustup toolchain install nightly
rustup component add rust-src --toolchain nightly
```

Per dire a Cargo che il progetto attuale utilizza la nightly toolchain, creeremo un [Override File][] alla radice del nostro progetto chiamato `rust-toolchain.toml`. Questo file conterrà quanto segue:

```toml title=rust-toolchain.toml
[toolchain]
channel = "nightly-2023-01-03" # La release notturna da usare, puoi usare la più recente, o specificare un' altra
profile = "minimal"
```

La Rust Standard Library viene precompilata. Ciò significa che Rust è più veloce da installare, ma anche che il compilatore non può ottimizzare la Libreria Standard. È possibile applicare le opzioni di ottimizzazione per il resto del binario + dipendenze al std con un flag instabile. Questo contrassegno richiede di specificare la destinazione, quindi devi conoscere la destinazione a cui stai mirando.

```shell
cargo tauri build --target <Target triple to build for> -- -Z build-std
```

Se stai usando `panic = "abort"` nelle ottimizzazioni del profilo di rilascio, è necessario assicurarsi che il crate `panic_abort` sia compilato con std. Inoltre, una ulteriore funzione di std può ridurre ulteriormente la dimensione binaria. Le seguenti disposizioni applicano a entrambi:

```shell
cargo tauri build --target <Target triple to build for> -- -Z build-std=std,panic_abort -Z build-std-features=panic_immediate_abort
```

Leggi la documentazione unstable per maggiori dettagli su [`-Z build-std`][cargo build-std] e [`-Z build-std-features`][cargo build-std-features].

### Stripping

Usa le utility strip per rimuovere i simboli di debug dalla tua app compilata.

La tua app compilata include i cosiddetti "Simboli di debug" che includono la funzione e i nomi delle variabili. I tuoi utenti finali probabilmente non si preoccuperanno dei Simboli di debug, quindi questo è un modo abbastanza sicuro per salvare alcuni bytes!

Il modo più semplice è usare la famosa utility `strip` per rimuovere queste informazioni di debug.

```shell
strip target/release/my_application
```

Leggi la tua manpage locale del commando `strip` per maggiori informazioni e flag che possono essere utilizzati per specificare quali informazioni vengono tolte dal binario.

:::info

Rust 1.59 ora ha una versione integrata di `strip`! Può essere abilitato aggiungendo quanto segue al tuo `Cargo.toml`:

```toml
[profile.release]
strip = true  # Esegui lo strip in automatico.
```

:::

### UPX

UPX, **Ultimate Packer for eXecutables**, è un dinosauro tra i pacchetti binari. This 23-year-old, well-maintained piece of kit is GPL-v2 licensed with a pretty liberal usage declaration. La nostra comprensione della licenza è che è possibile utilizzarla per qualsiasi scopo (commerciale o altro) senza dover modificare la licenza a meno che non si modifichi il codice sorgente di UPX.

Forse il pubblico di destinazione ha una connessione internet molto lenta, o la tua app deve aver spazio su una piccola chiavetta USB, e tutti i passaggi sopra indicati non hanno portato al risparmio di cui hai bisogno. Non temere, abbiamo ancora un ultimo asso nella manica:

[UPX][] comprime il tuo binario e crea un eseguibile autoestraente che si decomprime durante l' esecuzione.

:::caution
You should know that this technique might flag your binary as a virus on Windows and macOS - so use it at your own discretion, and as always, validate with [Frida][] and do real distribution testing!
:::

#### Utilizzo su macOS

<!-- Add additional platforms -->

```
brew install upx
yarn tauri build
upx --ultra-brute src-tauri/target/release/bundle/macos/app.app/Contents/macOS/app

                        Ultimate Packer for eXecutables
                            Copyright (C) 1996 - 2018
UPX 3.95        Markus Oberhumer, Laszlo Molnar & John Reiser   Aug 26th 2018

        File size         Ratio      Format      Name
    --------------------   ------   -----------   -----------
    963140 ->    274448   28.50%   macho/amd64   app
```

[`cargo-bloat`]: https://github.com/RazrFalcon/cargo-bloat
[Macros]: https://doc.rust-lang.org/book/ch19-06-macros.html
[`cargo-expand`]: https://github.com/dtolnay/cargo-expand
[`rollup-plugin-visualizer`]: https://github.com/btd/rollup-plugin-visualizer
[`rollup-plugin-graph`]: https://github.com/ondras/rollup-plugin-graph
[Vite]: https://vitejs.dev
[webpack]: https://webpack.js.org
[rollup]: https://rollupjs.org/guide/en/
[9]: https://rollupjs.org/guide/en/
[10]: https://rollupjs.org/guide/en/
[rollup-plugin-terser]: https://github.com/TrySound/rollup-plugin-terser
[rollup-plugin-uglify]: https://github.com/TrySound/rollup-plugin-uglify
[terser]: https://terser.org
[esbuild]: https://esbuild.github.io
[TypeScript]: https://www.typescriptlang.org
[Moment.js]: https://momentjs.com
[you-dont-need-momentjs]: https://github.com/you-dont-need/You-Dont-Need-Momentjs
[Http Archive]: https://httparchive.org
[http archive report, image bytes]: https://httparchive.org/reports/page-weight#bytesImg
[imagemin is unmaintained]: https://github.com/imagemin/imagemin/issues/385
[GIMP]: https://www.gimp.org
[Photoshop]: https://www.adobe.com/de/products/photoshop.html
[vite-imagetools]: https://github.com/JonasKruckenberg/imagetools
[vite-plugin-imagemin]: https://github.com/vbenjs/vite-plugin-imagemin
[image-minimizer-webpack-plugin]: https://github.com/webpack-contrib/image-minimizer-webpack-plugin
[Squoosh]: https://squoosh.app
[Immagini Responsive]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
[Why is a rust executable large ?]: https://lifthrasiir.github.io/rustlog/why-is-a-rust-executable-large.html
[Minimizing Rust Binary Size]: https://github.com/johnthagen/min-sized-rust
[cargo unstable features]: https://doc.rust-lang.org/cargo/reference/unstable.html#unstable-features
[Override File]: https://rust-lang.github.io/rustup/overrides.html#the-toolchain-file
[cargo profiles]: https://doc.rust-lang.org/cargo/reference/profiles.html
[cargo build-std]: https://doc.rust-lang.org/cargo/reference/unstable.html#build-std
[cargo build-std-features]: https://doc.rust-lang.org/cargo/reference/unstable.html#build-std-features
[Bundlephobia]: https://bundlephobia.com
[Frida]: https://frida.re/docs/home/
[UPX]: https://github.com/upx/upx
