---
id: sécurité
title: Sécurité
---

Ce guide cherche à expliquer les concepts de haut niveau et les dispositifs de sécurité au cœur de la conception de Tauri qui vous rendent, ainsi que vos applications et vos utilisateurs, plus sûrs par défaut.

<div className="alert alert--info" role="alert">
  À noter : <br/>
  Bien que nous saisissions toutes les occasions pour vous aider à renforcer votre application - il y a toujours des menaces sous-jacentes comme les attaques BIOS, le brouillage de la mémoire et d'autres vulnérabilités du système d'exploitation qui sont constamment découvertes et (dans le meilleur des cas) divulguées de manière responsable.<br/>
En outre, les équipes de développement peuvent prendre de nombreuses mesures pour réduire les coûts et laisse échapper des informations sensibles ou laisse les portes grandes ouvertes à toute une série d'attaques. La sécurité est une quête sans fin, et vos utilisateurs comptent sur vous pour assurer leur sécurité.<br/>
Par conséquent, nous vous recommandons vivement de prendre le temps d'examiner les implications en matière de sécurité de tout ce que fait votre application, en particulier dans le contexte d'exécution sur une plateforme semi-hostile d'appareils d'utilisateurs finaux.<br/>
Si vous avez besoin d'aide ou si vous souhaitez un examen, vous pouvez contacter l'équipe Tauri pour une consultation en matière de sécurité.
</div>

### Spécialistes de la sécurité

Si vous pensez qu'il y a un problème de sécurité ou un problème lié à quoi que ce soit sur Tauri, veuillez ne pas commenter publiquement vos conclusions. Prenez plutôt contact directement avec notre équipe de sécurité :

> <center>
>   security@tauri.studio
> </center>

Bien que nous ne disposions pas actuellement d'un budget pour les primes de sécurité, dans certains cas nous envisagerons de récompenser la divulgation responsable avec nos ressources limitées.

## Aucun serveur requis

Tauri vous permet de développer une application qui utilise la technologie web pour l'interface utilisateur sans avoir à utiliser un serveur pour communiquer avec le back-end. Même si vous utilisez des techniques avancées d'importation dynamique et de déchargement du travail vers le back-end, aucun trafic ne peut être détecté sur les ports TCP ou les processus externes, car ils n'existent tout simplement pas. Cela permet non seulement de réduire considérablement l'empreinte physique et virtuelle de votre binaire final, mais aussi de réduire la surface des vecteurs d'attaque potentiels en les retirant de l'équation.

## Les particularités du langage Rust

En se tournant vers le langage de programmation réputé pour sa sécurité mémorielle et sa rapidité, Tauri efface tout simplement des catégories entières d'attaques conventionnelles. `Use after free` n'est pas quelque chose qui peut arriver avec Tauri.

## Compilation dynamique anticipée (AOT)

Ce processus de compilation se produit plusieurs fois pendant la phase de démarrage d'une application Tauri. En utilisant notre compilateur dynamique anticipée par défaut, vous pouvez générer des références de code qui sont uniques pour chaque session et qui restent des unités de code techniquement statiques.

## Renforcement des fonctions

### ASLR fonctionnel

Les techniques de distribution aléatoire de l'espace d'adressage fonctionnel rendent les noms de fonctions aléatoires au moment de l'exécution et peuvent mettre en œuvre le hachage OTP afin que deux sessions ne soient jamais identiques. Nous proposons un nouveau type de dénomination des fonctions au moment du démarrage et, éventuellement, après chaque exécution. L'utilisation d'un UID pour chaque pointeur de fonction permet d'éviter les attaques statiques.

### Injection de fonction kamikaze

Ce type avancé de fASLR utilisant l'accès API `EVENT`, est une promesse enveloppée dans une fermeture (avec gestion aléatoire) que Rust insère au moment de l'exécution dans Webview, où son interface est verrouillée dans le gestionnaire de résolution de promesse et est annulée après exécution.

### Un pont, au lieu de servir

Au lieu de transmettre des fonctions potentiellement dangereuses, un pont d'événements peut être utilisé pour transmettre des messages et des commandes à des intermédiaires nommés de chaque côté de l'application.

### Jetons et hachage à usage unique

En hachant les messages importants avec un grain OTP, vous pouvez chiffrer les messages entre l'interface utilisateur et le back-end Rust. Nous étudions actuellement l'utilisation de sources d'entropie supplémentaires telles que le formidable [Bruit Infini TRNG](https://13-37.org/en/shop/infinite-noise-trng/).

## Fonctionnalités du système

### Autorisations de l'API

Vous avez la possibilité de choisir les fonctions API qui sont disponibles pour l'interface utilisateur et pour Rust. Si elles ne sont pas activées, le code ne sera pas embarqué avec votre application, ce qui réduit la taille binaire et la surface d'attaque. Vous devez donc choisir consciemment l'amélioration progressive de votre application.

### Gestion de la politique de sécurité du contenu

La prévention de l'exécution de codes non autorisés pour les sites web est depuis longtemps "résolue" par l'utilisation des CSP. Tauri peut injecter des CSP dans le fichier index.html de l'interface utilisateur, et lorsqu'il utilise un serveur localhost, il enverra également ces en-têtes à l'interface utilisateur ou à tout autre client qui s'y connecte.

### La décompilation est difficile

Cela signifie que vos applications ne peuvent pas être facilement décompilées comme c'est le cas avec les fichiers ASAR d'Electron, ce qui rend le processus de rétro-ingénierie de votre projet beaucoup plus long et nécessite une formation spécialisée.

## Écosystème

### Récupération des dépendances

Parfois, l'équipe Tauri trouve dans la nature des paquets qui fonctionnent techniquement et sont très précieux, mais qui sont obsolètes et comportent des vulnérabilités. Un excellent exemple de ceci est [tauri-inliner](https://github.com/tauri-apps/tauri-inliner). Le simple fait d'inclure ce module aurait introduit plus de 30 vulnérabilités dans notre noyau. Nous avons donc forké la bibliothèque originale, mis à jour les modules vulnérables aux dernières versions et modifié les signatures des fonctions modifiées. Une fois adoptée, nous continuerons à maintenir ces bibliothèques.

### Pipelines de compilation et authenticité des artefacts

Le système de diffusion de nos artefacts de code source est extrêmement automatisé, mais il doit être lancé et examiné par de vrais humains. Notre stratégie de diffusion actuelle utilise une combinaison de Github Actions et de la publication IOTO Tangle

### PR flexible et processus d'approbation

Notre WG-TECH examine les changements de code, donne une périmètre aux PR et s'assure que tout reste à jour. Et lorsqu'il est temps de publier une nouvelle version, l'un des responsables étiquette une nouvelle version sur master, qui :

- valide le noyau
- exécute les smoke tests
- audits de sécurité pour les crates et npm
- génère les notes de mise à jour
- crée les artefacts
- publie les sommes de contrôle à l'IOTA
- crée un brouillon de publication Ensuite, le mainteneur examine les notes de version, les modifie si nécessaire - et une nouvelle version est créée.

## Travaux futurs

### Binaires signés

Comme l'ensemble du projet est embarqué dans un binaire monolithique, le code peut être signé pour toutes les distributions. (Nous utilisons actuellement un outillage externe, mais nous travaillons activement à rendre le bundler un outil unique.) Il est donc pratiquement impossible pour les pirates de modifier une application installée sans que le système d'exploitation ne s'en aperçoive. [Références](https://github.com/electron/asar/issues/123)

### Analyse post-binaire

Utilisation d'un outil pédagogique de qualité industrielle (via notre interface graphique Tauri-Frida à venir) pour découvrir et corriger les faiblesses de sécurité de vos binaires finaux.

### Amélioration post-binaire

Après que la compilation soit faite avant la distribution, Tauri vous fournira des outils jamais vus auparavant. Tenez-vous informé !

### Audits

Nous n'avons pas encore entrepris d'audit, mais il est prévu de le réaliser avant la version stable 1.0.
