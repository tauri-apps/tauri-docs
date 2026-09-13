---
title: Modèle de processus
sidebar:
  order: 0
i18nReady: true
---

Tauri utilise une architecture multiprocessus similaire à Electron ou à de nombreux navigateurs web modernes. Ce guide explore les raisons de ce choix de conception et explique pourquoi il est essentiel pour écrire des applications sécurisées.

## Pourquoi plusieurs processus ?

Aux débuts des applications avec interface graphique, il était courant d'utiliser un seul processus pour effectuer les calculs, dessiner l'interface et réagir aux entrées utilisateur. Comme vous pouvez probablement l'imaginer, cela signifiait qu'un calcul long et coûteux rendait l'interface utilisateur non réactive, ou pire, qu'une panne dans un composant de l'app faisait planter toute l'app.

Il est devenu clair qu'une architecture plus résiliente était nécessaire, et les applications ont commencé à exécuter différents composants dans différents processus. Cela exploite bien mieux les CPU multicœurs modernes et crée des applications beaucoup plus sûres. Un plantage dans un composant n'affecte plus tout le système, car les composants sont isolés dans des processus distincts. Si un processus arrive dans un état invalide, nous pouvons facilement le redémarrer.

Nous pouvons aussi limiter l'impact potentiel des exploits en accordant uniquement le minimum de permissions à chaque processus, juste assez pour qu'il puisse faire son travail. Ce modèle est connu sous le nom de [principe du moindre privilège], et on l'observe constamment dans le monde réel. Si un jardinier vient tailler votre haie, vous lui donnez la clé de votre jardin. Vous ne lui donneriez **pas** les clés de votre maison : pourquoi aurait-il besoin d'y accéder ? Le même concept s'applique aux programmes informatiques. Moins nous leur donnons d'accès, moins ils peuvent causer de dommages s'ils sont compromis.

## Le processus Core

Chaque application Tauri possède un processus Core, qui sert de point d'entrée de l'application et qui est le seul composant disposant d'un accès complet au système d'exploitation.

La responsabilité principale du Core est d'utiliser cet accès pour créer et orchestrer les fenêtres de l'application, les menus de zone de notification ou les notifications. Tauri implémente les abstractions multiplateformes nécessaires pour faciliter cela. Il route aussi toute la [communication inter-processus] via le processus Core, ce qui vous permet d'intercepter, de filtrer et de manipuler les messages IPC depuis un emplacement central.

Le processus Core devrait aussi être responsable de la gestion de l'état global, comme les paramètres ou les connexions à une base de données. Cela vous permet de synchroniser facilement l'état entre les fenêtres et de protéger vos données métier sensibles des regards indiscrets dans le frontend.

Nous avons choisi Rust pour implémenter Tauri parce que son concept d'[Ownership] garantit la sécurité mémoire tout en conservant d'excellentes performances.

<figure>

```d2 sketch pad=50
direction: right

Core: {
  shape: diamond
}

"Events & Commands 1": {
  WebView1: WebView
}

"Events & Commands 2": {
  WebView2: WebView
}

"Events & Commands 3": {
  WebView3: WebView
}

Core -> "Events & Commands 1"{style.animated: true}
Core -> "Events & Commands 2"{style.animated: true}
Core -> "Events & Commands 3"{style.animated: true}

"Events & Commands 1" -> WebView1{style.animated: true}
"Events & Commands 2" -> WebView2{style.animated: true}
"Events & Commands 3" -> WebView3{style.animated: true}
```

<figcaption>Représentation simplifiée du modèle de processus de Tauri. Un seul processus Core gère un ou plusieurs processus WebView.</figcaption>
</figure>

## Le processus WebView

Le processus Core ne rend pas lui-même l'interface utilisateur réelle ; il démarre des processus WebView qui s'appuient sur les bibliothèques WebView fournies par le système d'exploitation. Une WebView est un environnement semblable à un navigateur qui exécute votre HTML, CSS et JavaScript.

Cela signifie que la plupart des techniques et outils utilisés dans le développement web traditionnel peuvent être employés pour créer des applications Tauri. Par exemple, de nombreux exemples Tauri sont écrits avec le framework frontend [Svelte] et le bundler [Vite].

Les bonnes pratiques de sécurité s'appliquent aussi : par exemple, vous devez toujours nettoyer les entrées utilisateur, ne jamais manipuler de secrets dans le frontend et, idéalement, déléguer autant de logique métier que possible au processus Core pour garder une surface d'attaque réduite.

Contrairement à d'autres solutions similaires, les bibliothèques WebView ne sont **pas** incluses dans votre exécutable final, mais liées dynamiquement à l'exécution[^1]. Cela rend votre application _considérablement_ plus petite, mais signifie aussi que vous devez tenir compte des différences entre plateformes, comme dans le développement web traditionnel.

[^1]:
    Actuellement, Tauri utilise [Microsoft Edge WebView2] sur Windows,
    [WKWebView] sur macOS et [webkitgtk] sur Linux.

[principe du moindre privilège]: https://en.wikipedia.org/wiki/Principle_of_least_privilege
[communication inter-processus]: /fr/concept/inter-process-communication/
[ownership]: https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html
[microsoft edge webview2]: https://docs.microsoft.com/en-us/microsoft-edge/webview2/
[wkwebview]: https://developer.apple.com/documentation/webkit/wkwebview
[webkitgtk]: https://webkitgtk.org
[svelte]: https://svelte.dev/
[vite]: https://vitejs.dev/
