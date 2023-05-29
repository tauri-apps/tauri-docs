import Command from '@theme/Command'

Pour compiler et construire votre application Tauri en un seul exécutable, exécutez simplement la commande suivante :

<Command name="build" />

Il construira votre frontend (si configuré, voir [`beforeBuildCommand`][beforebuildcommand]), compilera le binaire Rust, collectera tous les binaires et ressources externes et enfin, produira des paquets et des installateurs spécifiques à la plateforme.

[beforebuildcommand]: ../../api/config.md#buildconfig.beforebuildcommand
