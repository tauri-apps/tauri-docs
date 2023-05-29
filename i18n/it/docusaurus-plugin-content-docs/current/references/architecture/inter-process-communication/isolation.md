# Modello di Isolamento

Il modello di isolamento è un modo per intercettare e modificare i messaggi API Tauri inviati dal frontend prima di arrivare al Nucleo Tauri, tutto con JavaScript. Al codice JavaScript sicuro che viene iniettato dal modello di Isolamento ci si riferisce come l'applicazione in Isolamento.

## Perché

Lo scopo del modello di isolamento è quello di fornire un meccanismo per gli sviluppatori per aiutare a proteggere la loro applicazione da chiamate frontend indesiderate o dannose al Nucleo Tauri. La necessità del modello di Isolamento è aumentata dalle minacce provenienti da contenuti non attendibili in esecuzione sul frontend, un caso comune per applicazioni con molte dipendenze. See [Security: Threat Models][] for a list of many sources of threats that an application may see.

The largest threat model described above that the Isolation pattern was designed in mind was Development Threats. Non solo molti strumenti di costruzione frontend consistono di molte dozzine (o centinaia) di dipendenze spesso profondamente nidificate, ma anche un'applicazione complessa può avere una grande quantità di dipendenze (spesso pure profondamente annidate) che sono raggruppate nell'output finale.

## Quando

Tauri highly recommends using the isolation pattern whenever it can be used. Poiché l'applicazione in Isolamento intercetta _**tutti**_ i messaggi dal frontend, può _sempre_ essere utilizzato.

Tauri suggerisce inoltre fortemente di bloccare l'applicazione ogni volta che si utilizza API Tauri esterne. Come sviluppatore, è possibile utilizzare l'applicazione in Isolamento sicura per provare e verificare gli input IPC, per assicurarsi che siano entro alcuni parametri previsti. Ad esempio, si consiglia di controllare che una chiamata per leggere o scrivere un file non stia tentando di accedere a un percorso al di fuori delle posizioni previste dall'applicazione. Un altro esempio è quello di assicurarsi che una chiamata HTTP fetch tramite Tauri API stia impostando l'header Origin con quello che l'applicazione si aspetti che sia.

That said, it intercepts _**all**_ messages from the frontend, so it will even work with always-on APIs such as [Events][]. Dal momento che alcuni eventi possono eseguire il tuo codice Rust per eseguire azioni, lo stesso tipo di tecniche di convalida può essere utilizzato anche con essi.

## Come

Il modello di isolamento consiste nel iniettare un'applicazione sicura tra il frontend e il Nucleo Tauri per intercettare e modificare i messaggi IPC in arrivo. Lo fa utilizzando la funzione sandboxing degli `<iframe>`s per eseguire il JavaScript in modo sicuro accanto all'applicazione frontend principale. Tauri forza il modello di Isolamento durante il caricamento della pagina, forzando tutte le chiamate IPC al Nucleo Tauri verso l'applicazione in Isolamento sandboxed. Una volta che il messaggio è pronto per essere passato al Nucleo Tauri, è crittografato utilizzando l'implementazione [SubtleCrypto][] del browser e passato indietro all'applicazione frontend principale. Una volta lì, viene direttamente passato al Nucleo Tauri, dove viene poi decriptato e letto normalmente.

Per garantire che qualcuno non possa leggere manualmente le chiavi per una versione specifica della tua applicazione e usarle per modificare i messaggi dopo essere stati crittografati, le nuove chiavi vengono generate ogni volta che la tua applicazione viene eseguita.

### Passi approssimativi di un messaggio IPC

Per rendere più facile seguire, ecco una lista ordinata con i passaggi approssimativi che un messaggio IPC effetturà quando viene inviato al Nucleo Tauri con il modello di Isolamento:

1. Tauri's IPC handler receives a message
2. Gestore IPC -> Applicazione in isolamento
3. `[sandbox]` L'hook dell'applicazione in Isolamento viene eseguito e potenzialmente modifica il messaggio
4. `[sandbox]` Il messaggio è crittografato con AES-GCM utilizzando una chiave generata in runtime
5. `[encrypted]` Applicazione in isolamento -> Gestore IPC
6. `[encrypted]` Gestore IPC -> Nucleo Tauri

_Nota: Frecce (->) indicano il passaggio del messaggio._

### Implicazioni sulle Prestazioni

Poiché il messaggio viene crittografato, ci sono costi aggiuntivi rispetto al modello [Brownfield][], anche se l'applicazione in Isolamento non fa nulla. Oltre alle applicazioni sensibili alle prestazioni (che probabilmente hanno una serie di dipendenze mantenute con attenzione e di piccole dimensioni, per mantenere le prestazioni adeguate), la maggior parte delle applicazioni non dovrebbe notare i costi di esecuzione della crittografia/decrittografia dei messaggi IPC, in quanto sono relativamente piccoli e AES-GCM è relativamente veloce. Se non hai familiarità con AES-GCM, tutto ciò che è rilevante in questo contesto è che è l'unico algoritmo di modalità autenticata incluso in [SubtleCrypto][] e che probabilmente lo usi già ogni giorno dietro le quinte con [TLS][transport_layer_security].

C'è anche una chiave crittograficamente sicura generata una volta ogni volta che l'applicazione Tauri viene avviata. Non è generalmente evidente se il sistema ha già abbastanza entropia per restituire immediatamente abbastanza numeri casuali, che è estremamente comune per gli ambienti desktop. If running in a headless environment to perform some [integration testing with WebDriver][] then you may want to install some sort of entropy-generating service such as `haveged` if your operating system does not have one included. <sup>Linux 5.6 (Marzo 2020) ora include la generazione di entropia utilizzando l'esecuzione speculativa.</sup>

### Limiti

Ci sono alcune limitazioni nel modello di Isolamento che sono sorte dalle incongruenze della piattaforma. La limitazione più significativa è dovuta a file esterni che non caricano correttamente all'interno di `<iframes>` sandboxed su Windows. A causa di questo, abbiamo implementato un semplice passo di inlining durante il tempo di compilazione che prende il contenuto degli script rispetto all'applicazione in Isolamento e li inietta inline. Ciò significa che il bundling tipico o semplice incluso di file come `<script src="index.js"></script>` funziona ancora correttamente, ma meccanismi più recenti come ES Modules _non saranno_ caricati con successo.

## Raccomandazioni

Poiché il punto dell'applicazione Isolation è quello di proteggere contro le minacce di sviluppo, si consiglia vivamente di mantenere l'applicazione in Isolamento il più semplice possibile. Non solo dovresti sforzarti di mantenere le dipendenze minime, ma dovresti anche considerare di mantenere i passaggi di compilazione richiesti minimi. Questo ti permetterebbe di non preoccuparti degli attacchi della supply chain contro la tua applicazione Isolation in cima alla tua applicazione frontend.

## Creare l'applicazione in Isolamento

In questo esempio, faremo una piccola applicazione di Isolamento in stile hello-world e la collegheremo a un'applicazione Tauri esistente immaginaria. Non eseguirà alcuna verifica dei messaggi che lo attraversano, stamperà solo i contenuti sulla console WebView.

Ai fini di questo esempio, immaginiamo di essere nella stessa directory di `tauri.conf.json`. L'applicazione Tauri esistente ha `distDir` impostata su `../dist`.

`../dist-isolation/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Isolation Secure Script</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

`../dist-isolation/index.js`:

```js
window.__TAURI_ISOLATION_HOOK__ = (payload) => {
  // let's not verify or modify anything, just print the content from the hook
  console.log('hook', payload)
  return payload
}
```

Ora, tutto quello che dobbiamo fare è impostare la nostra [configurazione](#configuration) `tauri.conf. son` per utilizzare il Modello d'Isolamento, e avere appena avviato il modello Isolamento dal modello [Brownfield][].

## Configurazione

Supponiamo che il nostro frontend principale `distDir` sia impostato su `../dist`. Rilasciamo quindi la nostra applicazione Isolata in `../dist-isolation`.

```json
{
  "build": {
    "distDir": "../dist"
  },
  "tauri": {
    "pattern": {
      "use": "isolation",
      "options": {
        "dir": "../dist-isolation"
      }
    }
  }
}
```

[transport_layer_security]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[Security: Threat Models]: ../../security.md#threat-models
[Events]: ../../../guides/features/events.md
[SubtleCrypto]: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto
[Brownfield]: ./brownfield.md
[integration testing with WebDriver]: ../../../guides/testing/webdriver/introduction.md
