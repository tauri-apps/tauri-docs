---
id: intro
title: Qu'est-ce que Tauri ?
---

Tauri est une boîte à outils permettant aux développeurs de créer des applications pour les principales plateformes de bureau - en utilisant n'importe quel framework frontend existant. Le noyau est conçu avec Rust et le CLI exploite Node.js, faisant de Tauri une approche polyglotte pour créer et maintenir de superbes applications.

Si vous souhaitez en savoir plus sur les détails techniques, veuillez consulter [Pour commencer](/docs/getting-started/intro). Si vous voulez en savoir plus sur la philosophie de ce projet - alors poursuivez votre lecture.

<div className="videowrapper">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UxTJeEbZX-0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## La sécurité avant tout

Dans le monde d'aujourd'hui, tout modèle de menace suppose que l'appareil de l'utilisateur a déjà été compromis. Cela met les développeurs d'applications dans une situation compliquée, car si l'appareil est déjà à risque, comment peut-on faire confiance au logiciel ?

La protection en profondeur est l'approche que nous avons adoptée. Nous voulons que vous puissiez prendre toutes les précautions possibles pour réduire au minimum la surface qui se présente aux agresseurs. Tauri vous permet de choisir les points cibles de l'API à utiliser, que vous souhaitiez ou non intégrer un serveur local dans votre application. Que vous voulez rendre aléatoire les gestionnaires fonctionnels au moment de l'exécution de l'application. Ces techniques, ainsi que d'autres, forment une base de référence sécurisée qui vous permet, à vous et à vos utilisateurs, d'être autonomes.

Ralentir les attaquants en rendant les attaques statiques très difficiles et en isolant les systèmes les uns des autres, tel est le but du jeu. Et si vous venez de l'écosystème Electron - rassurez-vous - par défaut, Tauri n'envoie que des binaires, pas des fichiers ASAR.

En choisissant de développer Tauri avec la sécurité comme fil conducteur, nous vous donnons toutes les chances d'adopter une posture de sécurité proactive.

## Des polyglottes, et non des silos

La plupart des frameworks contemporains utilisent un paradigme linguistique unique et sont donc piégés dans une bulle de connaissances et d'idiomes. Cela peut bien fonctionner pour certaines applications de niche, mais cela favorise également une sorte de tribalisme.

Cela se voit à la façon dont les communautés de développement React, Angular et Vue se serrent les unes contre les autres, n'engendrant finalement que très peu de pollinisation croisée.

Cette même situation se retrouve sur les champs de bataille Rust vs Node vs C++, où chaque partisans prennent leurs positions et refusent de collaborer entre les communautés.

Aujourd'hui, Tauri utilise Rust pour le back-end - mais dans un avenir pas trop lointain, d'autres back-ends comme Go, Nim, Python, Csharp etc. seront possibles. En effet, nous conservons les interfaces officielles de Rust pour l'organisation [webview](https://github.com/webview) et nous prévoyons de vous permettre de changer de back-end selon vos besoins. Comme notre API peut être implémentée dans n'importe quel langage avec C interop, la conformité totale n'est plus qu'une question de Pull Request.

## Open Source honnête

Rien de tout cela n'aurait de sens sans une communauté. Aujourd'hui, les communautés de logiciels sont des lieux incroyables où les gens s'entraident et font des choses géniales - l'open source en est une très grande partie.

Le terme "Open Source" a des significations différentes selon les personnes, mais la plupart s'accorderont à dire qu'il sert à soutenir la liberté. Lorsqu'un logiciel ne respecte pas vos droits, cela peut sembler injuste et il peut potentiellement compromettre vos libertés en se comportant de manière contraire à l'éthique.

C'est pourquoi nous sommes fiers que les défenseurs des FLOSS puissent concevoir des applications avec Tauri qui sont "certifiées" open source et peuvent être intégrées dans les distributions GNU/Linux approuvées par la FSF.

## Le futur

L'avenir de Tauri dépend de votre implication et de vos contributions. Essayez-le, posez des questions, rejoignez un groupe de travail ou faites un don - chaque contribution est importante. En tout cas, n'hésitez pas à nous contacter !!!
