# Modèle d'isolement

Le modèle d'isolation est un moyen d'intercepter et de modifier les messages de l'API Tauri envoyés par le frontend avant qu'ils n'arrivent à Tauri Core, le tout avec JavaScript. Le code JavaScript sécurisé qui est injecté par le modèle d'isolement est appelé l'application d'isolement.

## Pourquoi

Le but du modèle d'isolement est de fournir un mécanisme aux développeurs pour aider à protéger leur application contre les appels non désirés ou malveillants vers Tauri Core. Le besoin de modèle d'isolement est apparu à partir de menaces provenant de contenus non fiables qui était utilisé sur le frontend, un cas commun pour les applications avec de nombreuses dépendances. Voir [Sécurité : Types de menace][] pour une liste de nombreuses sources de menaces qu'une application peut avoir.

Le plus grand modèle de menace décrit ci-dessus auquel le modèle d'isolement a été conçu était pour éviter ses menaces dû au développement. Non seulement beaucoup d'outils en frontend sont constitués de plusieurs dizaines (ou centaines) de dépendances souvent imbriquées en profondeur, mais une application complexe peut également avoir une grande quantité de dépendances (aussi souvent profondément imbriquées) qui sont regroupées dans l'exécutable final.

## Quand

Tauri recommande fortement d'utiliser le modèle d'isolement chaque fois qu'il peut être utilisé. Puisque l'application d'Isolation intercepte _**tous**_ les messages du frontend, elle peut _toujours_ être utilisée.

Tauri suggère également fortement de verrouiller votre application chaque fois que vous utilisez des API Tauri externes. En tant que développeur, vous pouvez utiliser l'application d'isolation sécurisée pour essayer de vérifier les entrées IPC, pour vous assurer qu'elles sont dans certains paramètres attendus. Par exemple, vous pouvez vérifier qu'un appel pour lire ou écrire un fichier n'essaye pas d'accéder un chemin dehors des emplacements attendus de votre application. Un autre exemple consiste à s'assurer qu'un appel API Tauri HTTP fetch définit uniquement l'en-tête Origin sur ce que votre application attend qu'il soit.

Cela dit, il intercepte _**tous**_ les messages du frontend, il fonctionnera donc même avec des API toujours actives comme les [Événements][]. Puisque certains événements peuvent communiquer avec votre code Rust pour exécuter des actions, le même type de techniques de validation peut être utilisé avec eux.

## Comment

Le modèle d'isolement consiste à injecter une application sécurisée entre votre frontend et votre cœur Tauri pour intercepter et modifier les messages IPC entrants. Pour ce faire, il utilise la fonctionnalité de sandboxing de `<iframe>` pour exécuter le JavaScript en toute sécurité avec l'application frontend principale. Tauri applique le modèle d'isolation lors du chargement de la page, forçant tous les appels IPC vers Tauri Core à être acheminés via l'application d'isolation en sandbox en premier. Une fois que le message est prêt à être transmis à Tauri Core, il est chiffré à l'aide de l'implémentation [SubtleCrypto][] du navigateur et est passé à l'application frontend principale. Une fois là-bas, il est directement transmis à Tauri Core, où il est ensuite décrypté et lu comme d'habitude.

Pour vous assurer que quelqu'un ne peut pas lire manuellement les clés d'une version spécifique de votre application et l'utiliser pour modifier les messages après avoir été chiffrés, de nouvelles clés sont générées à chaque exécution de votre application.

### Étapes approximatives d'un message IPC

Pour faciliter le suivi, voici une liste ordonnée avec les étapes approximatives qu'un message IPC suivra lorsqu'il sera envoyé à Tauri Core avec le modèle d'isolation :

1. Le gestionnaire IPC de Tauri reçoit un message
2. Gestionnaire IPC -> Demande d'isolement
3. `[sandbox]` Le hook d'application d'isolation s'exécute et modifie potentiellement le message
4. `[sandbox]` Le message est chiffré avec AES-GCM à l'aide d'une clé générée à l'exécution
5. `[encrypted]` Demande d'isolement -> Gestionnaire IPC
6. `[encrypted]` Gestionnaire IPC -> Noyau de Tauri

_Remarque : les flèches (->) indiquent la transmission du message._

### Implications sur les performances

Étant donné que le chiffrement du message se produit, il y a des frais généraux supplémentaires par rapport au [Modèle Brownfield][], même si l'application d'isolation sécurisée ne fait rien. En dehors des applications sensibles aux performances (qui ont probablement un petit ensemble de dépendances soigneusement entretenues, pour maintenir des performances adéquates), la plupart des applications ne devraient pas remarquer les coûts d'exécution du chiffrement/déchiffrement des messages IPC, car ils sont relativement petit et AES-GCM est relativement rapide. Si vous n'êtes pas familier avec AES-GCM, tout ce qui est pertinent dans ceux contexte est que c'est le seul algorithme de mode authentifié inclus dans [SubtleCrypto][] et que vous l'utilisez probablement déjà tous les jours sous le capot avec [TLS][transport_layer_security].

Il existe également une clé cryptographiquement sécurisée générée une fois à chaque démarrage de l'application Tauri. Ce n'est pas généralement perceptible si le système a déjà suffisamment d'entropie pour renvoyer immédiatement suffisamment de nombres aléatoires, ce qui est extrêmement courant pour les environnements de bureau. Si vous exécutez dans un environnement de type headless pour effectuer quelques [tests d'intégration avec WebDriver][] alors vous voudrez peut-être installer une sorte de service générateur d'entropie tel que `haveged` si votre système d'exploitation ne l'inclue pas. <sup>Linux 5.6 (mars 2020) inclut désormais la génération d'entropie à l'aide d'une exécution spéculative.</sup>

### Limitation

Il existe quelques limitations dans le modèle d'isolation qui résultent d'incohérences de plate-forme. La limite la plus importante est dû au fait que les fichiers externes ne se chargent pas correctement dans le bac à sable `<iframes>` sous Windows. Pour cette raison, nous avons implémenté une simple étape d'intégration de scripts au moment de la construction qui prend le contenu des scripts relatifs à l'application d'isolation et les injecte en ligne. Cela signifie que le regroupement typique ou la simple inclusion de fichiers tels que `<script src="index.js"></script>` fonctionne toujours correctement, mais les nouveaux mécanismes tels que les modules ES ne se chargeront _pas_ sans erreur.

## Recommandations

Parce que le but de l'application d'isolation est de se protéger contre les menaces de développement, nous vous recommandons fortement de garder votre application d'isolement aussi simple que possible. Non seulement vous devez vous efforcer de minimiser les dépendances, mais vous devrait également envisager de réduire au minimum les étapes de construction requises. Cela vous permettrait de ne pas vous soucier des attaques liées à la chaîne logistique contre votre application d'isolation en plus de votre application frontend.

## Création de l'application d'isolement

Dans cet exemple, nous allons créer une petite application d'isolation du style hello-world et la connecter à une application Tauri existante imaginaire. Il ne fera aucune vérification des messages qui le traversent et n'imprimera que le contenu de la console WebView.

Pour les besoins de cet exemple, imaginons que nous sommes dans le même répertoire que `tauri.conf.json`. L'application Tauri existante a son `distDir` à `../dist`.

`../dist-isolation/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Isolation Secure Script</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

`../dist-isolation/index.js`:

```js
window.__TAURI_ISOLATION_HOOK__ = (payload) => {
  // let's not verify or modify anything, just print the content from the hook
  console.log('hook', payload)
  return payload
}
```

Maintenant, tout ce que nous avons à faire est de mettre en place notre `tauri.conf.json` [configuration](#configuration) pour utiliser le modèle d'isolement, et on a juste démarré le modèle d'isolement à partir du [modèle de Brownfield][].

## Configuration

Supposons que notre interface principale `distDir` est définie sur `../dist`. Nous produisons également notre application d'isolation dans `../dist-isolation`.

```json
{
  "build": {
    "distDir": "../dist"
  },
  "tauri": {
    "pattern": {
      "use": "isolation",
      "options": {
        "dir": "../dist-isolation"
      }
    }
  }
}
```

[transport_layer_security]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[Sécurité : Types de menace]: ../../security.md#threat-models
[Événements]: ../../../guides/features/events.md
[SubtleCrypto]: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto
[Modèle Brownfield]: ./brownfield.md
[modèle de Brownfield]: ./brownfield.md
[tests d'intégration avec WebDriver]: ../../../guides/testing/webdriver/introduction.md
