---
sidebar_position: 2
---

# Sécurité

Ce guide vise à expliquer les concepts de haut niveau et les fonctionnalités de sécurité au cœur de la conception de Tauri qui vous rendent, ainsi que vos applications et vos utilisateurs, plus sûrs par défaut.

:::info Note
Bien que nous profitions de chaque occasion pour vous aider à renforcer votre application, il existe toujours des menaces sous-jacentes telles que les attaques du BIOS, le martelage de la mémoire et d'autres vulnérabilités du système d'exploitation qui sont constamment découvertes et (dans le meilleur des cas) divulguées de manière responsable.

En outre, les équipes de développement disposent de nombreuses façons de prendre des raccourcis et de divulguer des informations sensibles ou de laisser les portes grandes ouvertes à toute une gamme d'attaques. La sécurité est une quête sans fin, et vos utilisateurs comptent sur vous pour assurer leur sécurité.

Par conséquent, nous vous recommandons vivement de prendre le temps d'examiner les ramifications de sécurité de tout ce que fait votre application, en particulier dans le contexte de l'exécution sur la plate-forme semi-hostile des appareils des utilisateurs finaux.

Si vous avez besoin d'aide ou voulez une révision, vous pouvez contacter l'équipe Tauri pour une consultation sur la sécurité.
:::

## Chercheurs en sécurité

Si vous pensez qu'il y a un problème de sécurité ou un problème avec quoi que ce soit à Tauri, veuillez ne pas commenter publiquement vos conclusions. Au lieu de cela, contactez directement notre équipe de sécurité : security@tauri.app

Bien que nous n'ayons pas actuellement de budget pour les primes de sécurité, dans certains cas, nous envisagerons de récompenser la divulgation responsable avec nos ressources limitées.

## Aucun serveur requis

Tauri vous permet de construire une application qui utilise les technologies web pour l'interface utilisateur sans vous obliger à utiliser un serveur pour communiquer avec le backend. Même si vous avez utilisé des techniques avancées d'importations dynamiques et de déchargement du travail vers le backend, aucun trafic ne peut être reniflé sur les ports TCP ou les processus externes - car ils n'y sont pas. Cela réduit non seulement l'empreinte physique et virtuelle de votre binaire final dans une bonne mesure, mais cela réduit aussi la surface des facteurs d'attaque potentiels en les enlevant de l'équation.

## Language Features of Rust

By turning to the programming language renowned for its memory safety and speed, Tauri simply erases whole classes of conventional attacks. "Use after free" just isn't something that can happen with Tauri.

## Dynamic Ahead of Time Compilation (AOT)

This compilation process happens several times during the bootstrapping phase of a Tauri app. Using our default dynamic Ahead of Time compiler, you can generate code references that are unique for every session and are still technically static code units.

## Function Hardening

### Functional ASLR

Functional address Space Layout Randomization techniques randomize function names at runtime and can implement OTP hashing, so no two sessions are ever the same. We propose a novel type of function naming at boot time and optionally after every execution. Using a UID for each function pointer prevents static attacks.

### Kamikaze Function Injection

This advanced type of fASLR using the `EVENT` API endpoint is a promise wrapped in a closure (with randomized handle) that Rust inserts at runtime into the WebView, where its interface is locked within the promise resolution handler and is nulled after execution.

### Bridge, don't serve

Instead of passing potentially unsafe functions, an event bridge can be used to pass messages and commands to named brokers at each respective side of the application.

### One Time Pad Tokenization and Hashing

Hashing important messages with an OTP salt, you are able to encrypt messages between the user interface and the Rust backend. We are currently investigating the use of additional sources of entropy, such as the amazing [Infinite Noise TRNG](https://13-37.org/en/shop/infinite-noise-trng/).

## System Features

### Allowing API

Vous avez la possibilité de choisir quelles fonctions de l'API sont disponibles pour l'interface utilisateur et à Rust. If they are not enabled, the code will not be shipped with your app, which reduces binary size and attack surface. They are opt-in, so you have to consciously choose to progressively enhance your application.

### Content Security Policy Management

Preventing unauthorized code execution for websites has long since been "resolved" by using CSPs. Tauri can inject CSPs into the `index.html` of the user interface, and when using a localhost server, it will also send these headers to the UI or any other clients that connect with it.

### La décompilation est difficile

Cela signifie que vos applications ne peuvent pas êtres facilement décompilées, comme c'est la cas avec les fichiers ASAR d'Electron, qui rend le processus de reverse engineering de votre projet beaucoup plus long et nécessite un spécialiste.

## Écosystème

### Build Pipelines and Artifact Authenticity

The process of releasing our source-code artifacts is highly automated yet mandates kickoff and review from real humans. Our current release strategy uses a combination of GitHub Actions and IOTA Tangle publication

### Resilient PR and Approval Processes

Notre WG-TECH examine les modifications de code, marque les PR avec une portée et s'assure que tout reste à jour. And when its time to publish a new version, one of the maintainers tags a new release on dev, which:

- Valide le noyau
- Exécute des tests de fumée
- Audits de sécurité pour crates et npm
- Generates changelogs
- Creates artifacts
- Publishes checksums to IOTA
- Creates a draft release

Ensuite, le responsable examine les notes de version, les modifie si nécessaire, et une nouvelle version est falsifiée.

## Travail futur

### Binaires signés

Étant donné que l'ensemble du projet est livré dans un binaire monolithique, le code peut être signé pour tous les distribuables. (Nous utilisons actuellement des outils externes, mais nous travaillons activement à faire du bundler un guichet unique.) Cela rend pratiquement impossible pour les pirates de modifier une application installée sans que le système d'exploitation ne s'en aperçoive. [Référence](https://github.com/electron/asar/issues/123)

### Analyse post-binaire

Utilisez des outils pentester de qualité industrielle (via notre prochaine interface graphique Tauri-Frida) pour découvrir et corriger les faiblesses de sécurité dans vos fichiers binaires finaux.

### Amélioration post-binaire

Après la construction, c'est avant la livraison et Tauri vous fournira des outils jamais vus auparavant. Restez à l'écoute!

### Audits

Nous sommes actuellement dans le processus de notre premier audit externe. Une fois terminé, nous publierons les résultats ici.
