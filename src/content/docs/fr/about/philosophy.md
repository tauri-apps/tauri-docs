---
title: Philosophie de Tauri
i18nReady: true
---

Tauri est une boîte à outils qui aide les développeurs à créer des applications pour les principales plateformes desktop, avec pratiquement n'importe quel framework frontend existant. Son noyau est construit avec Rust, et la CLI s'appuie sur Node.js, ce qui fait de Tauri une approche réellement polyglotte pour créer et maintenir d'excellentes apps.

<iframe
    style="width: 100%; aspect-ratio: 16/9;"
    src="https://www.youtube-nocookie.com/embed/UxTJeEbZX-0?si=mwQUzXb6mmCg7aom"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
></iframe>

## La sécurité d'abord

Dans le monde actuel, tout modèle de menace honnête part du principe que l'appareil de l'utilisateur a déjà été compromis. Cela place les développeurs d'apps dans une situation compliquée : si l'appareil est déjà à risque, comment faire confiance au logiciel ?

La défense en profondeur est l'approche que nous avons choisie. Nous voulons que vous puissiez prendre toutes les précautions possibles pour réduire la surface d'attaque que vous présentez aux attaquants. Tauri vous permet de choisir les points de terminaison d'API à livrer, de décider si vous voulez ou non intégrer un serveur localhost dans votre app, et il randomise même les identifiants fonctionnels au moment de l'exécution. Ces techniques, ainsi que d'autres, forment une base sécurisée qui renforce votre maîtrise et celle de vos utilisateurs.

Ralentir les attaquants en rendant les attaques statiques extrêmement difficiles et en isolant les systèmes les uns des autres est au cœur de cette approche. Et si vous venez de l'écosystème Electron, soyez rassuré : par défaut, Tauri ne distribue que des binaires, pas de fichiers ASAR.

En choisissant de construire Tauri avec la sécurité comme principe directeur, nous vous donnons toutes les occasions d'adopter une posture de sécurité proactive.

## Des polyglottes, pas des silos

La plupart des frameworks contemporains utilisent un paradigme centré sur un seul langage et restent donc enfermés dans une bulle de connaissances et d'idiomes. Cela peut bien fonctionner pour certaines applications de niche, mais favorise aussi une forme de tribalisme.

On le voit dans la manière dont les communautés React, Angular et Vue se regroupent autour de leurs piles respectives, ce qui finit par produire très peu de fertilisation croisée.

La même situation se retrouve sur les terrains d'opposition entre Rust, Node et C++, où les plus intransigeants campent sur leurs positions et refusent de collaborer entre communautés.

Aujourd'hui, Tauri utilise Rust pour le backend, mais dans un avenir pas si lointain, d'autres backends comme Go, Nim, Python, Csharp, etc. seront possibles. C'est parce que nous maintenons les bindings Rust officiels de l'organisation [webview](https://github.com/webview) et que nous prévoyons de vous permettre de remplacer le backend selon vos besoins. Comme notre API peut être implémentée dans n'importe quel langage avec interopérabilité C, la compatibilité complète n'est qu'à une PR.

## Un open source honnête

Rien de tout cela n'aurait de sens sans une communauté. Aujourd'hui, les communautés logicielles sont des lieux remarquables où les gens s'entraident et créent des choses formidables. L'open source en est une très grande partie.

L'open source signifie des choses différentes selon les personnes, mais la plupart s'accordent à dire qu'il sert la liberté. Lorsqu'un logiciel ne respecte pas vos droits, cela peut sembler injuste et potentiellement compromettre vos libertés en fonctionnant de manière contraire à l'éthique.

C'est pourquoi nous sommes fiers que les défenseurs du FLOSS puissent créer avec Tauri des applications qui sont « certifiables » comme open source et peuvent être incluses dans des distributions GNU/Linux approuvées par la FSF.

## L'avenir

L'avenir de Tauri dépend de votre implication et de vos contributions. Essayez-le, ouvrez des issues, rejoignez un working group ou faites un don : chaque contribution compte. Dans tous les cas, n'hésitez surtout pas à nous contacter !
