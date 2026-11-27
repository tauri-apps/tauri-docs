---
title: Problèmes graphiques sous Linux
---

Sous Linux, Tauri effectue le rendu via WebKitGTK. Sur certaines configurations, le plus souvent avec des GPU NVIDIA, WebKitGTK et le pilote graphique ne s'accordent pas, ce qui peut aller d'une fenêtre vide à des problèmes de rendu subtils. Cette page rassemble les symptômes et contournements connus. Consultez [tauri-apps/tauri#9394](https://github.com/tauri-apps/tauri/issues/9394) pour les signalements d'origine.

## Symptômes courants

- La fenêtre s'ouvre mais reste vide ou blanche.
- La fenêtre scintille, surtout pendant le redimensionnement.
- L'app se ferme lors d'un redimensionnement sans sortie d'erreur utile.
- La console affiche `AcceleratedSurfaceDMABuf was unable to construct a complete framebuffer`.
- La console affiche `Gdk-Message: Error 71 (Protocol error) dispatching to Wayland display.`

La plupart de ces problèmes viennent du renderer DMABUF de WebKitGTK, qui demande des formats de buffer que le pilote NVIDIA ne fournit pas. Consultez le [bug tracker WebKitGTK](https://bugs.webkit.org/show_bug.cgi?id=261874) et les [forums NVIDIA](https://forums.developer.nvidia.com/t/geforce-rtx-4070-flickering-issue-when-using-the-dmabuf-renderer-in-webkitgtk/274741) pour la discussion upstream.

## Contournements

Essayez-les dans l'ordre. Les premiers conservent l'accélération matérielle.

1. Assurez-vous que le kernel mode setting est activé. Les pilotes NVIDIA antérieurs à 545 nécessitent souvent `nvidia_drm.modeset=1` comme paramètre du noyau.
2. Définissez `__NV_DISABLE_EXPLICIT_SYNC=1`. Cela corrige souvent le crash Wayland `Error 71` sans coût de performance.
3. Définissez `WEBKIT_DISABLE_DMABUF_RENDERER=1`. Cela corrige l'erreur de framebuffer DMABUF et le crash `Error 71`, au prix du chemin de rendu le plus rapide.
4. Définissez `WEBKIT_DISABLE_COMPOSITING_MODE=1`. Dernier recours pour le crash silencieux au redimensionnement. Cela désactive entièrement la composition accélérée.

Vous pouvez définir ces variables dans votre shell pour tester, ou les définir dans `main()` avant la création de la webview afin que les utilisateurs n'aient pas à le faire :

```rust
fn main() {
  // Workaround for WebKitGTK on NVIDIA, see tauri-apps/tauri#9394
  #[cfg(target_os = "linux")]
  std::env::set_var("WEBKIT_DISABLE_DMABUF_RENDERER", "1");

  tauri::Builder::default()
    // ...
}
```

N'expédiez un override inconditionnel de ce type que si vous avez vérifié que votre app est affectée. Il désactive un chemin plus rapide pour tout le monde, y compris les utilisateurs sur des configurations qui fonctionnent.

## Échecs silencieux : WebGL et canvas

Tous les problèmes ne provoquent pas de crash ou n'affichent pas une erreur. Le contenu WebGL et canvas peut basculer silencieusement vers un chemin lent pendant que le reste de l'app semble correct. Deux choses rendent cela difficile à détecter depuis votre frontend :

- La création d'un contexte WebGL2 réussit même lorsque le résultat s'appuie sur un rasterizer logiciel ou un chemin de présentation lent. Il n'y a aucune erreur à intercepter.
- WebKitGTK masque la chaîne du renderer WebGL pour protéger contre le fingerprinting. `WEBGL_debug_renderer_info` signale `Apple GPU` sur toutes les machines Linux, vous ne pouvez donc pas vérifier ce qui se trouve réellement derrière le contexte.

En pratique, cela se manifeste par une latence d'entrée élevée ou des fréquences d'images faibles dans les vues fortement basées sur WebGL (émulateurs de terminal, éditeurs, cartes, graphiques), alors que le même code est rapide dans un navigateur classique. Si votre app utilise un chemin de rendu WebGL, fournissez-lui une alternative non WebGL sous Linux et envisagez d'exposer un réglage permettant aux utilisateurs de basculer, au lieu de faire confiance au contexte pour vous dire quoi faire.
