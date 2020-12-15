---
title: Détails techniques
---

## CLI

Le CLI est basé sur node.js, car il est le plus accessible pour la majorité de la communauté de développement du web. L'utilisation de Tauri nécessite le dernier LTS car nous suivons les patchs de sécurité. À l'avenir, nous vous permettrons d'utiliser Deno au lieu de Node.

## Interface utilisateur

<!-- TODO: Update for Zserge Webview bindings -->

L'interface utilisateur première génération de Tauri apps exploite Cocoa/WebKit sous MacOS, gtk-webkit2 sous Linux et MSHTML (IE10/11) ou Webkit via EdgeHTML / Chakra sous Windows. **Tauri** exploite le travail antérieur sous licence MIT connu sous le nom de [webview](https://github.com/zserge/webview) qui a été intégré dans [web-view](https://github.com/Boscop/web-view).

<div className="alert alert--warning" role="alert">
  Nous travaillons actuellement à la mise en place des API Web et il est possible que nombre d'entre elles ne soient pas disponibles sur votre plateforme.
</div>

## Le dossier `src-tauri`

Le dossier `src-tauri` contient à la fois la configuration de votre application Tauri ainsi que tout code Rust natif. Il est automatiquement créé et rempli de code boilerplate lorsque Tauri est initialisé. La configuration est stocké dans le fichier `src-tauri/tauri.conf.json`, et le dossier `src-tauri/src` contient le code Rust natif.

## Composants de Tauri

Le CLI Node lit votre fichier de configuration et prépare le tout pour le paquetage binaire, comme par exemple la configuration de l'injection de l'API Tauri. Il contient également quelques commandes utiles telles que la commande `tauri icon` pour la création d'icônes, `tauri init` pour créer une application et `tauri info` pour déboguer votre environnement.

La crate Rust de Tauri est le code natif actuel qui se combine avec la Webview, crée la fenêtre de votre application et fournit l'API native (lecture/écriture de fichiers, etc.).

Le bundler combine votre HTML/JS/CSS, le code natif de Rust et la crate Rust de Tauri en un binaire attrayant et facile à consommer pour votre OS cible.

## Pourquoi Rust

> Rust est extrêmement rapide et efficace en termes de mémoire : sans temps d'exécution, ni ramasse-miettes, il peut alimenter des services à performances critiques, fonctionner sur des appareils embarqués et s'intégrer facilement à d'autres langues. Le riche système de typage et le modèle de propriété de Rust garantissent la sécurité de la mémoire et des processus - et vous permettent d'éliminer de nombreuses catégories de bogues au moment de la compilation. Rust dispose d'une excellente documentation, d'un compilateur intuitif avec des messages d'erreur utiles, et d'un outillage de premier choix - un gestionnaire de paquets et un outil de compilation intégrés, un support multi-éditeurs intelligent avec auto-complétion et inspections de type, un auto-formatage, et plus encore. - [https://www.rust-lang.org/](https://www.rust-lang.org/)

Cette combinaison de puissance, de sécurité et d'utilisation est la raison pour laquelle nous avons choisi Rust comme interface par défaut pour Tauri. Nous avons l'intention de fournir l'expérience applicative la plus sûre et la plus performante (pour les développeurs et les utilisateurs d'applications), dès sa conception.

Si vous voulez en savoir plus sur Rust, consultez l'article de Tony Arcieri, [Rust in 2019. Security, maturity, stability](https://tonyarcieri.com/rust-in-2019-security-maturity-stability).

## Apprendre Rust 🦀❤️

Vous n'avez pas du tout besoin de connaître Rust pour utiliser (en majorité) Tauri - mais comme pour toute chose, il y a un début à tout. Si vous êtes novice avec Rust, nous vous recommandons de regarder d'abord cette incroyable playlist de tutoriels faite par le membre de l'équipe [@tensor](https://tensor-programming.com/) :

- [Introduction à Rust (Anglais)](https://www.youtube.com/playlist?list=PLJbE2Yu2zumDF6BX6_RdPisRVHgzV02NW)
- [Projets Rust (Anglais)](https://www.youtube.com/playlist?list=PLJbE2Yu2zumDD5vy2BuSHvFZU0a6RDmgb)

Mais si vous êtes comme nous, il ne faut pas seulement regarder des gens géniaux faire des choses. C'est pourquoi nous devons absolument vous recommander de immédiatement curlbash [Rustlings](https://github.com/rust-lang/rustlings) :

```bash
curl -L https://git.io/rustlings | bash
```

Pourquoi ? Parce que c'est un saut interactif dans le développement avec Rust qui vous oblige à résoudre les erreurs de compilation afin de progresser dans votre apprentissage. C'est addictif, alors réservez-vous quelques heures et faites-le !

À un moment donné, l'apprentissage de Rust nécessitera une visite du manuel. Consultez le site :

- [Rust 1.31.0+](https://doc.rust-lang.org/stable/book/) par Steve Klabnik & Carol Nichols

Et enfin, il existe quelques communautés Rust sur Discord, vers lesquelles vous pouvez toujours vous tourner si vous avez besoin d'un soutien supplémentaire :

- [Discord de la communauté Rust](https://bit.ly/rust-community)
- [Discord du développement de Rust](https://discord.gg/SG3m9pk)
