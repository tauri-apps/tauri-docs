---
id: book
title: Obtenir le livre
---

import useBaseUrl from '@docusaurus/useBaseUrl'

<div style={{textAlign:'center'}}>
    <img src="{useBaseUrl('img/bookCover.png')}" alt="Tauri - De la théorie à la pratique" title="Mockup de couverture du livre" style={{maxWidth:'80%'}}/>
</div>

<div className="alert alert--info" role="alert">
  Tauri : De la théorie à la pratique (Livre anglais)<br/>
L'architecture des applications natives nouvelle génération pour toutes les plateformes [v1: Rust Edition]<br/>
Auteurs : [Daniel Thompson-Yvetot, Lucas Fernandes Gonçalves Nogueira]<br/>
Éditeur : TBD<br/>
Date de sortie : fin 2020
</div>

### tl;dr;

Visitez https://opencollective.com/tauri et précommandez votre exemplaire du livre dès aujourd'hui. Votre don soutiendra le développement continu de Tauri, et vous recevrez à l'avance des pdf numériques que vous pourrez consulter au fur et à mesure de l'achèvement des chapitres. Le livre final sera expédié en même temps que la sortie de la version 1.0.0 stable.

Si vous faites un don de 10 USD / mois à Tauri, vous recevrez les versions préliminaires en PDF dès qu'elles seront publiées. Si vous souhaitez faire un don unique : 15 USD pour le pdf et le e-book, 30 USD pour la version imprimée et le pdf, 40 USD pour les trois.

Tous les niveaux d'abonnement aux tutoriels reçoivent gratuitement le PDF évolutif.

### Introduction

En 2020, la fabrication d'applications natives est devenue plus facile et plus accessible que jamais. Néanmoins, les développeurs, qu'ils soient débutants ou expérimentés, sont confrontés à des choix difficiles dans un contexte de sécurité et de protection de la vie privée en constante évolution. Cela est particulièrement vrai dans l'environnement semi-fiable des appareils des utilisateurs.

Tauri élimine les approximations de l'équation, car il a été conçu à partir de zéro pour adopter de nouveaux paradigmes de développement sécurisé et de flexibilité créative qui tirent parti des caractéristiques du langage Rust et vous permettent de construire une application en utilisant le framework front-end de votre choix. Découvrez comment vous pouvez concevoir, développer, auditer et déployer des applications natives compactes, rapides, robustes et sécurisées pour les principales plateformes de bureau et mobiles, le tout à partir de la même base de code et en un temps record - sans même avoir besoin de connaître le langage de programmation Rust.

Les auteurs Daniel et Lucas, les architectes derrière Tauri, vous emmènent dans un voyage de la théorie à l'exécution, au cours duquel vous apprendrez pourquoi Tauri a été conçue et comment cela fonctionne sous le capot. Avec l'intervention de personnalités spécialisées dans l'OpenSource, le DevOps, la sécurité et l'architecture d'entreprise, ce livre présente également des discussions philosophiques fondées sur le discours et des points de vue sur la pérennité de l'Open Source dont vos applications nouvelle génération bénéficieront - et dont vos utilisateurs bénéficieront.

Dans ce livre, vous suivrez les auteurs dans l'évolution itérative d'un projet réel, de la conception à la distribution - le tout avec des commentaires, des ressources de code complètes, des applications natives développées et empaquetées comme référence, et des défis de Capture the Flag (CTF) mis en scène qui progressent en difficulté à mesure que votre compréhension du système augmente.

### À propos du sujet

Tauri est une toute nouvelle façon de créer des applications natives multi-plateformes pour le web, les ordinateurs et les smartphones. En ce moment même, la version pré-alpha de ce logiciel communautaire sous licence du MIT est en préparation pour une diffusion publique : https://github.com/tauri-apps/tauri

Tauri présente de nouvelles méthodes pour l'intégration de Webview et des modèles innovants pour une lutte efficace contre les menaces. La version 1.0 sera livrée avec un analyseur et un décompilateur pour tout type de binaire et un CLI intégré pour assimiler tout type de html; ce qui, une fois combiné, fournit aux développeurs et aux équipes de sécurité une plateforme holistique qui n'a jamais existé auparavant.

Tauri relie les communautés et ouvre de nouvelles opportunités pour tous, du développeur front-end jusqu'aux administrateurs de sécurité et de réseau de bas niveau. En raison de ce niveau de complexité et de robustesse, il est important de publier un guide de référence qui sera nécessairement mis à jour au fur et à mesure que les versions majeures sont publiées.

### Ce que vous allez apprendre

À la fin de ce livre, vous serez en mesure de comprendre :

- La méthodologie et le raisonnement qui ont guidé la conception de Tauri
- Les options qui sont à votre disposition lorsque vous compiler avec Tauri
- Il est possible d'avoir une conscience éthique dans le développement de logiciels
- Pourquoi le langage Rust a le plus de sens en tant qu'interface et couche d'application
- Pourquoi Electron, Cordova, React Native, Capacitor et les autres ne sont plus le meilleur choix
- Pourquoi un examen du binaire est important

Et vous serez en mesure de :

- Transformer un simple site web en une application native avec Tauri
- Créer une variété d'application Tauri en fonction des principaux modèles
- Décompiler et analyser votre application pour des questions de sécurité
- Publiez votre application dans une variété d'App Stores
- Lire et écrire du code Rust

### Ce que vous recevrez si vous commandez à l'avance

- Accès à une véritable application de démonstration conçue pour toutes les plateformes disponibles dans les magasins respectifs (qui inclut les flags CTF).
- Des Aide-mémoire exclusifs d'une page sont mis à disposition pour chaque section du livre, y compris les annexes.
- Accès anticipé aux vidéos / webémissions.
- Participation à prix réduit à l'événement "Capture the Flag" organisé lors du lancement du livre.

## Aperçu

Voici un premier aperçu du contenu que nous prévoyons de publier. Le contenu est susceptible de changer.

### Chapitre 1 - Théorie

(env. 50 pages - principalement conversationnel / technique, graphiques)

```
 1. La sécurité commence avec vous.
 2. La vie privée se termine par ${you}
 3. Langages, dialectes et modèles
 4. Chaînes d'outils et sucre syntactique
 5. Méthodologies de production
 6. Préparation à l'entreprise
 7. File d'attente des messages
 8. Embrasser le chaos
 9. Techniques de distribution
10. Stratégies de licence
```

### Chapitre 2 - Entraînement

(env. 130 pages avec graphiques, captures d'écran, échantillons de code)

```
 1. Prérequis pour l'environnement
    - Node, Npm, Yarn, Rustc, Rustup, Buildtools
 2. Détails sur les plateformes de développement
        - macOS
        - Windows
        - Linux
        - Docker
        - Machines virtuelles
        - CI / CD
 3. Introduction à Tauri
 4. L'anatomie de Tauri
 5. Configuration de Tauri
    - Fichiers & dossiers
    - Icônes
    - Écran de démarrage
    - Fenêtre
    - `src-tauri/tauri.conf.json`
 6. Préparer votre code
    - La transpilation dynamique des imports
    - Suppression des chunking webpack
    - Dossiers monolithiques
    - Stratégies de minification
 7. API Tauri
    - Considérations de design
    - Les modèles d'utilisation de l'API
    - Les fonctions API personnalisable
    - Les endpoints
        - All
        - Answer
        - Bridge
        - Event
        - Execute
        - List Files
        - Open
        - Read Binary File
        - Read Text File
        - Set Title
        - Window
        - Write File
 8. API Web
 9. Extensions de Tauri App
    - Anatomie
    - Flow
    - Registration
    - Publication
    - API
10. Intégration de la barre des tâches (Bureau seulement)
    - Anatomie
    - Intégrations
        - macOS
        - Windows
        - Linux
11. Fonctionnalités de sécurité
    - Fonctionnalités de référence avec Rust
    - Distribution aléatoire de l'espace d'adressage (fASLR)
    - Compilation anticipée (AoT)
    - Content Security Policy (CSP)
    - Masque jetable ou One Time Pads (OTP)
    - Embedded Server: False
    - Tree-Shaking API
    - Matryoschkasumming (avec Tauri-Frida)
12. Bridges et Brokers
    - Modèles de Bridge
    - Message hashing avec OTP
    - Modèles de Plugin
    - Kamikaze Function Injection (KFI) Closures
13. Tests
    - Tests unitaires
        - Rust
        - JS
    - Tests d'intégration
    - Tests e2e
14. Compilation
    - Débogage
    - Empaquetage
    - Minification
    - Détails sur les plateformes de distribution
        - macOS (.app / .dmg)
        - Win (.exe / .msi)
        - Linux Arm64 (.appImage / .deb)
        - Linux x64 (.appImage / .deb)
        - iOS (.ipa)
        - Android (.apk)
        - PWA Website (with wasm)
    - Signature de code
        - Clés
        - Certificats
        - Empreintes
    - Fournir une licence aux utilisateurs finaux
        - Fournisseurs
        - Fichiers de clés
    - Mise à jour automatique
        - Anatomie
        - Prestation de services
            - Github
            - AWS
            - Homegrown
    - Bundler multi-plateforme
15. Tauri-Frida
    - Introduction à la rétro-ingénierie
    - Boîte à outils
    - Utilisation
    - Déclenchement binaire à l'exécution
    - Évaluation des pointeurs
    - Pulvérisation, brouillage, usurpation d'identité
    - Génération de rapports
    - Recompilation
    - Analyse post-binaire
16. Distribution
    - Git
    - Mac Store
    - iOS Store
    - Play store
    - Windows Store
    - Snap Store
    - PureOS Store
    - canaux .deb
    - .tar.gz
    - homebrew
    - Fdroid
    - Cydia
    - ChromeOS
    - WASM
```

### Chapitre 3 - Discours philosophiques

(env. 40 pages d'essais, quelques graphiques)

```
1.  Droits et responsabilités (avec Robin van Boven (SFOSC))
    - Vos responsabilités
    - Être vendeur, c'est avoir des obligations
    - Les ressources omniprésentes sont toujours précieuses
    - Utiliser une stratégie de politique pour faire face aux responsabilités
    - Prêter le serment d'Hippocrate pour le développement
2.  Adopter une position plus sûre (avec Liran Tal (SNYK))
    - Avantages des frameworks en matière de sécurité
    - Chiffrez tout, en permanence
    - Contrôlez en permanence les dépendances
    - Endurcissez-vous, votre organisation et votre écosystème
    - “Do What You Can Until You Run Out of Time.” - [ROBERT C. SEACORD]
3.  Stratégies de production pour la pérennité (avec Rhys Parry (Indépendant))
    - Se développer dans un environnement "parfait"
    - Impact minimal pour les architectures d'entreprise existantes
    - Utiliser des outils à faible barrière pour garantir la sécurisation globale
    - Tester intelligemment
    - Analyse post-binaire et redistribution - La dernière ligne droite
```

### Chapitre 4 - Exécution

(env. 100 pages avec exemples de code, captures d'écran, graphiques)

```
1.  Évolution des modèles de référence
    - Hermit
    - Bridge
    - Cloudish
    - Cloudbridge
    - Lockdown
    - Multiwin
    - GLUI
2.  Modèles avancés
    - Enclave cryptographique
    - Gestion de l'identité
    - Combiner une application avec un daemon
    - IPC / RPC
    - Intégration avec DENO
3.  Compilation des sources UI
    - React
    - Vue
    - Angular
    - Svelte
    - Gatsby
4.  Développer une véritable application
    - Gestionnaire de mots de passe
        - Conception
        - Prototypes
        - Test
        - Débogage
        - Empaquetage
        - Somme de contrôle
5.  Tauri-Frida
    - Rétro-ingénierie
        - Analyser avec Frida
        - Expériences de chaos
            - Interface Jacking
            - Changement de disque
            - Latence
            - Tuer les processus
            - Accélérateur du CPU
        - Rapport d'analyse statique
    - Reconditionnement binaire
        - Injecter des clés de licence
        - Effacer les points de code morts
        - Recalculer la somme de contrôle intégrée
6.  Publier l'application
    - Git
    - Mac Store
    - iOS Store
    - Play store
    - Windows Store
    - Snap Store
    - PureOS Store
    - canaux .deb
    - .tar.gz
    - homebrew
    - Fdroid
    - Cydia
    - ChromeOS
    - WASM
7.  Publier une mise à jour
```

### Chapitre 5 - Annexes

(env. 120 pages)

```
 1. Options de configuration
 2. Fichiers et dépôts
 3. Références CLI Tauri
 4. Références API Tauri
 5. Références ES6
 6. Références Rust
 7. Graphiques de modèles d'application
 8. Référence Tauri-Frida
 9. Glossaire
10. Index
```

## Erratum

Vous avez quelque chose qui devrait figurer dans le livre ? Vous souhaitez devenir notre éditeur ? Contactez-nous et faites-le nous savoir !
