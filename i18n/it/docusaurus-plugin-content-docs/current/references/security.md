---
sidebar_position: 2
description: Learn about the steps you can take to help your app be as secure as possible.
---

# Development Security

Che ti piaccia o no, le applicazioni di oggi vivono in sistemi operativi che possono essere (e regolarmente sono) compromessi da un numero qualsiasi di attacchi. Quando l'applicazione non è sicura è un gateway per tali movimenti nascosti nel sistema operativo, e stai quindi contribuendo agli strumenti che gli hacker professionisti hanno a loro disposizione. Non essere uno strumento.

This is why we have taken every opportunity to help you secure your application, prevent undesired access to system-level interfaces, and manufacture bullet-proof applications. I tuoi utenti presumono che stia seguendo le migliori pratiche. Lo rendiamo facile, ma si dovrebbe comunque essere a conoscenza delle informazioni qui sotto.

## La Sicurezza È Una Responsabilità Della Comunità

It is important to remember that the security of your Tauri application is the sum of the overall security of Tauri itself, all Rust and npm dependencies, your code, and the devices that run the final application. Il Team Tauri fa del loro meglio per fare la loro parte, la comunità sulla sicurezza fa la sua parte, e anche voi dovreste seguire alcune buone pratiche importanti.

### Mantieni La Tua Applicazione Aggiornata

Quando si rilascia l'app in natura, si sta anche rilasciando un pacchetto che ha Tauri dentro esso. Le vulnerabilità che colpiscono Tauri possono influire sulla sicurezza della tua applicazione. Aggiornando Tauri all'ultima versione, ti assicuri che le vulnerabilità critiche siano già risolte e non possano essere sfruttate nella tua applicazione. Assicurati anche di tenere aggiornato il tuo compilatore (rustc) e transpilatore (nodejs) perché ci sono spesso problemi di sicurezza che vengono risolti.

### Valuta Le Tue Dipendenze

While npm and Crates.io provide many convenient packages, it is your responsibility to choose trustworthy third-party libraries - or rewrite them in Rust. Se si utilizzano librerie obsolete che sono colpite da vulnerabilità note o non sono mantenute, la sicurezza dell'applicazione e il buon sonno potrebbero essere a rischio. Utilizza strumenti come npm audit e cargo audit per automatizzare questo processo, e appoggiarsi sull'importante lavoro della comunità sulla sicurezza.

### Adotta Pratiche Di Codifica Più Sicure

La prima linea di difesa per la tua applicazione è il tuo codice. Anche se Tauri può proteggerti dalle più comuni vulnerabilità web, come Remote Code Execution basata su Cross-Site Scripting, configurazioni improprie possono avere un impatto sulla sicurezza. Anche se così non fosse, si raccomanda vivamente di adottare buone pratiche di sviluppo software sicuro ed eseguire test di sicurezza. Dettagliamo ciò che questo significa nella prossima sezione.

### Educare I Tuoi Utenti

True security means that unexpected behaviour cannot happen. So in a sense, being more secure means having the peace of mind of knowing that ONLY those things that you want to happen can happen. Nel mondo reale, però, questo è un "sogno" utopico. However, by removing as many vectors as possible and building on a solid foundation, your choice of Tauri is a signal to your users that you care about them, their safety, and their devices.

## Modelli Di Minaccia

Le applicazioni Tauri sono composte da molti pezzi in diversi punti del ciclo di vita. Qui descriviamo le minacce classiche e quello che si DEVE fare per gestirle.

### Minacce Esterne

Tauri is a direct dependency on your project, and we maintain strict authorial control of commits, reviews, pull requests, and releases. Facciamo del nostro meglio per mantenere aggiornate le dipendenze e avere iniziativa per aggiornare o biforcare e correggere. Altri progetti potrebbero non essere così ben mantenuti, e potrebbero anche non essere mai stati oggetto di ispezioni. Please consider their health when integrating them, otherwise, you may have adopted architectural debt without even knowing it.

### Minacce Di Sviluppo

Supponiamo che tu lo sviluppatore, presti attenzione al tuo ambiente di sviluppo. È vostro compito assicurarsi che il sistema operativo, le catene di strumenti di generazione e le dipendenze associate siano mantenute aggiornate.

Un rischio reale che tutti noi affrontiamo è quello che è noto come "attacchi di supply chain", che di solito sono considerati attacchi sulle dipendenze dirette del vostro progetto. However, a growing class of attacks in the wild directly target development machines, and you would be well off to address this head-on.

Una pratica che raccomandiamo vivamente, è quello di consumare solo le dipendenze critiche da git utilizzando le revisioni di hash nel migliore dei casi o i tag nominati come secondo caso migliore. Questo vale sia per Rust che per l'ecosistema Node. Inoltre, considerare di richiedere a tutti i contributori di firmare i loro commit e proteggere i branch e le pipeline di Git.

### Minacce Buildtime

Le organizzazioni moderne utilizzano CI/CD per produrre artefatti binari. At Tauri, we even provide a GitHub Workflow for building on multiple platforms. Se crei il tuo CI/CD dipendente da strumenti di terze parti, diffidati delle azioni le quali versioni non sono state scelte esplicitamente da te.

You should sign your binaries for the platform you are shipping to, and while this can be complicated and somewhat costly to set up, end users expect that your app is verifiably from you.

### Minacce Runtime

Supponiamo che la webview sia insicura, il che ha portato Tauri ad implementare diverse protezioni riguardanti l'accesso alla webview alle API di sistema nel contesto del caricamento di contenuti userland non attendibili.

È possibile leggere più dettagliatamente qui sotto, ma utilizzando il CSP bloccherà i tipi di comunicazione che il Webview può intraprendere. Inoltre, [Isolamento del Contesto](#) impedisce ai contenuti non attendibili o agli script di accedere all'API all'interno del Webview.

E raccomandiamo, che qualsiasi cosa si stia facendo, di **NON FIDARSI** dei risultati di crittografia tramite chiavi private nella WebView. Rust è presente per una ragione.

### Minacce d'Aggiornamento

We have done our best to make shipping hot updates to the app as straightforward and secure as possible. Tuttavia, tutte le scommesse sono perse se si perde il controllo del server di manifesti, del server di compilazione o del servizio di hosting dei binari. Se si costruisce il proprio sistema, consultare un architetto professionista OPS e costruirlo correttamente.

## Caricamento Contenuto Sicuro

Tauri limita la [Politica di sicurezza dei contenuti][] (CSP) delle tue pagine HTML. Gli script locali sono hashati, gli stili e gli script esterni sono referenziati utilizzando una crittografia nonce, che impedisce il caricamento di contenuti non consentiti.

:::warning
Avoid loading remote content such as scripts served over a CDN as they introduce an attack vector. Ma qualsiasi file inaffidabile può introdurre nuovi e sottili vettori di attacco.
:::

La protezione CSP è abilitata solo se `[tauri > security > csp]` è impostata nel file configurazione di Tauri. Dovresti renderlo il più limitato possibile, consentendo solo alla WebView di caricare le risorse da host di cui ti fidi, e che preferibilmente possiedi. Al momento della compilazione, Tauri aggiunge automaticamente i suoi nonce e hash agli attributi CSP pertinenti, quindi devi solo preoccuparti di ciò che è unico per la tua applicazione.

Vedi [`script-src`][], [`style-src`][] e [CSP Sources][] per ulteriori informazioni su questa protezione.

[Politica di sicurezza dei contenuti]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
[`script-src`]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src
[`style-src`]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src
[CSP Sources]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources
