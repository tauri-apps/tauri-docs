# Modello Brownfield

_**Questo è il modello predefinito.**_

Questo è il modello più semplice e più intuitivo da usare con Tauri, perché cerca di essere il più compatibile possibile con progetti frontend esistenti. In breve, cerca di non richiedere nulla di più di quello che un frontend web esistente potrebbe utilizzare all'interno di un browser. Non _**tutto**_ che funziona all'interno di un browser funzionerà immediatamente; vedi la sezione [Incompatibilità](#incompatibilities) per maggiori dettagli.

Se non hai familiarità con lo sviluppo software Brownfield in generale, l'articolo [Wikipedia Brownfield][] fornisce un bel riepilogo. Per Tauri, il software esistente è il supporto e il comportamento corrente del browser, invece di sistemi legacy.

## Incompatibilità

La prima categoria di incompatibilità è semplice: qualsiasi API specifica per browser non funzionerà correttamente all'interno di Tauri (anche quando si utilizza il modello Brownfield). Se l'API non è ampiamente supportata attraverso i browser, probabilmente non sarà supportata su tutte le piattaforme durante l'utilizzo di Tauri.

La seconda categoria di incompatibilità sono caratteristiche che sono pianificate per Tauri, ma che attualmente non sono implementate completamente. Qui un elenco di esempi:

- [Supporto WebRTC su Linux](https://github.com/tauri-apps/wry/issues/85)
- [Alcune API di permessi](https://github.com/tauri-apps/wry/issues/81)
- [Scarica Collegamenti/Blob come URL](https://github.com/tauri-apps/wry/issues/349)
- [Miglior i18n](https://github.com/tauri-apps/wry/issues/442)

## Configurazione

Dato che il modello Brownfield è il modello default, non necessita che sia impostata un opzione di configurazione. Per impostarlo esplicitamente, puoi utilizzare l'oggetto `tauri > pattern` nel file di configurazione `tauri.conf.json`.

```json
{
  "tauri": {
    "pattern": {
      "use": "brownfield"
    }
  }
}
```

_**Non ci sono opzioni di configurazione aggiuntive per il modello brownfield.**_

[Wikipedia Brownfield]: https://en.wikipedia.org/wiki/Brownfield_(software_development)
