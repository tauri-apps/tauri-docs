---
sidebar_position: 2
description: En savoir plus sur les étapes que vous pouvez prendre pour aider votre application à être le plus sécurisée que possible.
---

# Sécurité du développement

Que vous le vouliez ou non, les applications d'aujourd'hui vivent dans des systèmes d'exploitation qui peuvent être (et sont régulièrement) compromis par n'importe quel nombre d'attaques. Lorsque votre application non sécurisée est une passerelle pour un tel déplacement latéral vers le système d'exploitation, vous contribuez aux outils que les pirates professionnels ont à leur disposition. Ne soyez pas un outil.

C'est pourquoi nous avons profité de chaque occasion pour vous aider à sécuriser votre application, empêcher l'accès indésirable aux interfaces du système et fabriquer des applications à l'épreuve des balles. Vos utilisateurs supposent que vous suivez les meilleures pratiques. Nous vous facilitons la tâche, mais vous devez toujours être au courant des informations ci-dessous.

## La sécurité est une responsabilité communautaire

Il est important de se rappeler que la sécurité de votre application Tauri dépend de la sécurité globale de Tauri elle-même, toutes les dépendances Rust et npm, votre code et les périphériques qui exécutent l'application finale. L'équipe Tauri fait de son mieux pour faire sa part, la communauté de sécurité fait sa part et vous aussi devriez suivre quelques bonnes pratiques importantes.

### Garder votre application à jour

Lorsque vous relâchez votre application dans la nature, vous expédiez également un paquet qui contient Tauri. Les vulnérabilités affectant Tauri peuvent affecter la sécurité de votre application. En mettant à jour Tauri vers la dernière version, vous vous assurez que les vulnérabilités critiques sont déjà corrigées et ne peuvent pas être exploitées dans votre application. Assurez-vous également de garder votre compilateur (rustc) et transpilers (nodejs) à jour, car il y a souvent des problèmes de sécurité qui sont résolus.

### Évaluer vos dépendances

Alors que npm et Crates.io fournissent de nombreux paquets pratiques, il est de votre responsabilité de choisir des bibliothèques tierces dignes de confiance ou de les réécrire à Rust. Si vous utilisez des bibliothèques obsolètes affectées par des vulnérabilités connues ou non maintenues, la sécurité de votre application et une bonne nuit de sommeil pourrait être compromise. Utilisez des outils comme l'audit npm et l'audit de cargo pour automatiser ce processus, et reposez-vous sur le travail important de la communauté de sécurité.

### Adopter des pratiques de codage plus sûres

La première ligne de défense pour votre application est votre propre code. Bien que Tauri puisse vous protéger contre les vulnérabilités Web courantes, telles que l'exécution de code distant basée sur des scripts intersites, des configurations inappropriées peuvent avoir un impact sur la sécurité. Même si ce n'était pas le cas, il est fortement recommandé d'adopter les meilleures pratiques de développement de logiciels sécurisés et d'effectuer des tests de sécurité. Nous détaillons ce que cela signifie dans la section suivante.

### Éduquer vos utilisateurs

Une vraie sécurité signifie que des comportements inattendus ne peuvent pas se produire. Donc, en un sens, être plus sûr signifie avoir la tranquillité d'esprit de savoir que SEULEMENT les choses que vous voulez arriver peuvent se produire. Dans le monde réel, cependant, c'est un utopique "rêve". Cependant, en supprimant autant de vecteurs que possible et en se basant sur une base solide, votre choix de Tauri est un signal pour vos utilisateurs que vous vous souciez vraiment d'eux, de leur sécurité et de leurs appareils.

## Modèles de menace

Les applications Tauri sont composées de nombreux éléments à différents stades du cycle de vie. Nous décrivons ici les menaces classiques et ce que vous DEVEZ faire à leur sujet.

### Menaces en amont

Tauri est une dépendance directe de votre projet, et nous maintenons un contrôle d'auteur strict des commits, des révisions, des demandes d'extraction et des versions. Nous faisons de notre mieux pour maintenir les dépendances à jour et prendre des mesures pour mettre à jour ou bifurquer et corriger. D'autres projets peuvent ne pas être aussi bien entretenus et n'ont peut-être même jamais été vérifiés. Veuillez tenir compte de leur santé lors de leur intégration, sinon, vous pourriez avoir adopté une dette architecturale sans même le savoir.

### Menaces de développement

Nous supposons que vous, le développeur, vous souciez de votre environnement de développement. C'est à vous de vous assurer que votre système d'exploitation, les chaînes de compilation et les dépendances associées sont mises à jour.

Un véritable risque auquel nous sommes tous confrontés est ce qu'on appelle les "attaques de la chaîne d'approvisionnement", qui sont généralement considérées comme des attaques sur des dépendances directes de votre projet. Cependant, une classe croissante d'attaques dans la nature cible directement les machines de développement, et vous seriez bien placé pour y faire face.

Une pratique que nous recommandons vivement, est de ne consommer que les dépendances critiques de git en utilisant au mieux des révisions de hachage ou des balises nommées. Cela vaut aussi bien pour Rust que pour l'écosystème Node. Pensez également à obliger tous les contributeurs à signer leurs commits et à protéger les branches et pipelines de Git.

### Menaces de construction

Les organisations modernes utilisent CI/CD pour fabriquer des artefacts binaires. Chez Tauri, nous fournissons même un Workflow Github pour construire votre application sur plusieurs plates-formes. Si vous créez votre propre CI/CD et que vous dépendez des outils tiers, méfiez-vous des actions dont vous n'avez pas explicitement épinglé les versions.

You should sign your binaries for the platform you are shipping to, and while this can be complicated and somewhat costly to set up, end users expect that your app is verifiably from you.

### Menaces d'exécution

Nous supposons que le webview n'est pas sécurisé, qui a conduit Tauri à implémenter plusieurs protections en ce qui concerne l'accès de webview aux API système dans le contexte du chargement du contenu non digne de confiance.

Vous pouvez lire plus en détail ci-dessous, mais l'utilisation du CSP verrouillera les types de communication que Webview peut entreprendre. De plus, l'[isolation de contexte](#) empêche le contenu ou les scripts non fiables d'accéder à l'API dans la Webview.

Et s'il vous plaît, quoi que vous fassiez, **NE PAS** faire confiance aux résultats de la cryptographie à l'aide de clés privées dans la Webview. Rust est là pour une raison.

### Menaces de mise à jour

Nous avons fait de notre mieux pour rendre l'expédition des mises à jour de l'application aussi simple et sécurisée que possible. Cependant, tous les paris sont ouverts si vous perdez le contrôle du serveur de manifeste, du serveur de génération ou du service d'hébergement binaire. Si vous construisez votre propre système, consultez un architecte professionnel de l'OPS et construisez-le correctement.

## Chargement sécurisé du contenu

Tauri restreint la [Politique de sécurité du contenu][] (CSP) de vos pages HTML. Les scripts locaux sont hachés, les styles et les scripts externes sont référencés en utilisant une nonce cryptographique, ce qui empêche le chargement de contenu non autorisé.

:::warning
Évitez de charger du contenu distant tel que des scripts servis sur un CDN lorsqu'ils introduisent un vecteur d'attaque. Mais tout fichier non fiable peut introduire de nouveaux vecteurs d'attaque subtiles.
:::

La protection CSP n'est activée que si `[tauri > security > csp]` est configuré sur le fichier de configuration Tauri. Vous devriez le rendre aussi restreint que possible, en permettant uniquement à la webview de charger les actifs des hôtes de confiance et de préférence ceux que vous posséder. Lors de la compilation, Tauri ajoute automatiquement ses nonces et hachages aux attributs CSP pertinents, pour que vous ayez seulement à vous soucier de ce qui est unique à votre application.

Voir [`script-src`][], [`style-src`][] et [CSP Sources][] pour plus de d'informations sur cette protection.

[Politique de sécurité du contenu]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
[`script-src`]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src
[`style-src`]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src
[CSP Sources]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources
