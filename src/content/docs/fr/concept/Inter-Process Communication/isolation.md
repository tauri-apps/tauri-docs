---
title: Modèle Isolation
i18nReady: true
---

Le modèle Isolation est une manière d'intercepter et de modifier, avec JavaScript, les messages de l'API Tauri envoyés par le frontend avant qu'ils n'atteignent Tauri Core. Le code JavaScript sécurisé injecté par le modèle Isolation est appelé application Isolation.

## Pourquoi

Le but du modèle Isolation est de fournir aux développeurs un mécanisme qui aide à protéger leur application contre les appels frontend indésirables ou malveillants vers Tauri Core. Le besoin du modèle Isolation vient des menaces provenant de contenus non fiables exécutés dans le frontend, un cas courant pour les applications ayant de nombreuses dépendances. Consultez [Sécurité : modèles de menace] pour une liste de nombreuses sources de menaces qu'une application peut rencontrer.

Le principal modèle de menace décrit ci-dessus pour lequel le modèle Isolation a été conçu est celui des menaces de développement. Non seulement de nombreux outils frontend utilisés au moment du build comportent des dizaines, voire des centaines, de dépendances souvent profondément imbriquées, mais une application complexe peut aussi avoir de nombreuses dépendances, elles aussi souvent profondément imbriquées, qui sont incluses dans la sortie finale.

## Quand

Tauri recommande fortement d'utiliser le modèle Isolation chaque fois qu'il peut être utilisé. Comme l'application Isolation intercepte _**tous**_ les messages du frontend, elle peut _toujours_ être utilisée.

Tauri suggère aussi fortement de verrouiller votre application chaque fois que vous utilisez des API Tauri externes. En tant que développeur, vous pouvez utiliser l'application Isolation sécurisée pour essayer de vérifier les entrées IPC et vous assurer qu'elles restent dans les paramètres attendus. Par exemple, vous pouvez vérifier qu'un appel de lecture ou d'écriture de fichier n'essaie pas d'accéder à un chemin en dehors des emplacements attendus par votre application. Autre exemple : s'assurer qu'un appel HTTP fetch de l'API Tauri définit uniquement l'en-tête Origin sur la valeur attendue par votre application.

Cela dit, elle intercepte _**tous**_ les messages du frontend, elle fonctionne donc même avec les API toujours actives comme les [événements]. Comme certains événements peuvent amener votre propre code Rust à effectuer des actions, les mêmes techniques de validation peuvent être utilisées avec eux.

## Comment

Le modèle Isolation consiste à injecter une application sécurisée entre votre frontend et Tauri Core pour intercepter et modifier les messages IPC entrants. Il utilise pour cela la fonctionnalité de sandbox des `<iframe>` afin d'exécuter le JavaScript de manière sécurisée à côté de l'application frontend principale. Tauri applique le modèle Isolation au chargement de la page, en forçant tous les appels IPC vers Tauri Core à passer d'abord par l'application Isolation sandboxée. Une fois que le message est prêt à être transmis à Tauri Core, il est chiffré avec l'implémentation [SubtleCrypto] du navigateur et renvoyé à l'application frontend principale. Une fois là, il est transmis directement à Tauri Core, où il est ensuite déchiffré et lu normalement.

Pour éviter qu'une personne puisse lire manuellement les clés d'une version spécifique de votre application et s'en servir pour modifier les messages après chiffrement, de nouvelles clés sont générées à chaque exécution de votre application.

### Étapes approximatives d'un message IPC

Pour faciliter le suivi, voici une liste ordonnée des étapes approximatives qu'un message IPC traverse lorsqu'il est envoyé à Tauri Core avec le modèle Isolation :

1. Le handler IPC de Tauri reçoit un message
2. Handler IPC -> application Isolation
3. `[sandbox]` Le hook de l'application Isolation s'exécute et modifie potentiellement le message
4. `[sandbox]` Le message est chiffré avec AES-GCM au moyen d'une clé générée à l'exécution
5. `[encrypted]` Application Isolation -> handler IPC
6. `[encrypted]` Handler IPC -> Tauri Core

_Note : les flèches (->) indiquent le passage de messages._

### Implications sur les performances

Comme le message est chiffré, il existe des coûts supplémentaires par rapport au [modèle Brownfield], même si l'application Isolation sécurisée ne fait rien. En dehors des applications sensibles aux performances, qui ont probablement un ensemble de dépendances soigneusement maintenu et réduit afin de préserver des performances adéquates, la plupart des applications ne devraient pas remarquer le coût à l'exécution du chiffrement et du déchiffrement des messages IPC, car il est relativement faible et AES-GCM est relativement rapide. Si AES-GCM ne vous est pas familier, ce qu'il faut retenir ici est qu'il s'agit du seul algorithme en mode authentifié inclus dans [SubtleCrypto] et que vous l'utilisez probablement déjà tous les jours en interne avec [TLS][transport_layer_security].

Une clé cryptographiquement sûre est également générée une fois à chaque démarrage de l'application Tauri. Ce n'est généralement pas perceptible si le système dispose déjà d'assez d'entropie pour renvoyer immédiatement suffisamment de nombres aléatoires, ce qui est extrêmement courant dans les environnements desktop. Si vous exécutez l'app dans un environnement headless pour effectuer des [tests d'intégration avec WebDriver], vous pouvez installer un service de génération d'entropie comme `haveged` si votre système d'exploitation n'en inclut pas. <sup>Linux 5.6 (mars 2020) inclut maintenant une génération d'entropie utilisant l'exécution spéculative.</sup>

### Limitations

Le modèle Isolation comporte quelques limitations dues aux incohérences entre plateformes. La limitation la plus importante vient du fait que les fichiers externes ne se chargent pas correctement dans des `<iframes>` sandboxées sous Windows. Pour cette raison, nous avons implémenté au moment du build une étape simple d'inlining des scripts, qui prend le contenu des scripts relatifs à l'application Isolation et les injecte en ligne. Cela signifie que le bundling classique ou l'inclusion simple de fichiers comme `<script src="index.js"></script>` fonctionne toujours correctement, mais que les mécanismes plus récents comme les modules ES ne se chargeront _pas_ correctement.

## Recommandations

Comme le rôle de l'application Isolation est de protéger contre les menaces de développement, nous recommandons fortement de la garder aussi simple que possible. Vous devriez non seulement vous efforcer de minimiser les dépendances de votre application Isolation, mais aussi envisager de réduire au minimum ses étapes de build nécessaires. Cela vous évitera d'avoir à vous soucier d'attaques de chaîne d'approvisionnement contre votre application Isolation en plus de votre application frontend.

## Créer l'application Isolation

Dans cet exemple, nous allons créer une petite application Isolation de type hello world et la brancher sur une application Tauri existante imaginaire. Elle ne vérifiera pas les messages qui la traversent ; elle se contentera d'en afficher le contenu dans la console de la WebView.

Pour les besoins de cet exemple, imaginons que nous nous trouvons dans le même répertoire que `tauri.conf.json`. L'application Tauri existante a son `frontendDist` défini sur `../dist`.

`../dist-isolation/index.html` :

```html
<!doctype html>
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

`../dist-isolation/index.js` :

```javascript
window.__TAURI_ISOLATION_HOOK__ = (payload) => {
  // let's not verify or modify anything, just print the content from the hook
  console.log('hook', payload);
  return payload;
};
```

Il ne nous reste plus qu'à configurer notre `tauri.conf.json` [configuration](#configuration) pour utiliser le modèle Isolation. Nous venons ainsi de passer du [modèle Brownfield] au modèle Isolation.

## Configuration

Supposons que le `frontendDist` de notre frontend principal soit défini sur `../dist`. Nous générons aussi notre application Isolation dans `../dist-isolation`.

```json
{
  "build": {
    "frontendDist": "../dist"
  },
  "app": {
    "security": {
      "pattern": {
        "use": "isolation",
        "options": {
          "dir": "../dist-isolation"
        }
      }
    }
  }
}
```

[transport_layer_security]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[sécurité : modèles de menace]: /fr/security/lifecycle/
[événements]: /reference/javascript/api/namespaceevent/
[subtlecrypto]: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto
[modèle brownfield]: /fr/concept/inter-process-communication/brownfield/
[tests d'intégration avec webdriver]: /fr/develop/tests/webdriver/
