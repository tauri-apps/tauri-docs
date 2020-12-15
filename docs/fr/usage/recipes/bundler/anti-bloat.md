---
title: Anti surcharge
---

import Alert from '@theme/Alert'

Les liens suivants proposent des tutoriels sur la réduction de la taille de vos installateurs :

- https://github.com/RazrFalcon/cargo-bloat
- https://lifthrasiir.github.io/rustlog/why-is-a-rust-executable-large.html
- https://doc.rust-lang.org/cargo/reference/manifest.html#the-profile-sections

### Fonctionnalités de compression Rust

Ajoutez ceci à votre fichier `src-tauri/Cargo.toml`

    [profile.release]
    panic = "abort"
    codegen-units = 1
    lto = true
    incremental = false
    opt-level = "z"

### UPX

UPX, **Ultimate Packer for eXecutables**, est un dinosaure parmi les empaqueteurs binaires. Ce kit de 23 ans, bien entretenu, est sous licence GPL-v2 avec une déclaration d'utilisation assez libérale. Selon notre interprétation de la licence, vous pouvez l'utiliser à n'importe quelle fin (commerciale ou autre) sans avoir besoin de modifier votre licence, sauf si vous modifiez le code source d'UPX.

Fondamentalement, il compresse le binaire et le décompresse au moment de l'exécution. Cela devrait fonctionner pour pratiquement tous les types binaires. En savoir plus : https://github.com/upx/upx

<Alert type="warning" title="Avertissement" icon="alert">
Vous devez savoir que cette technique pourrait faire signaler votre binaire comme un virus sur Windows et macOS - à utiliser donc à votre discrétion, et comme toujours à valider avec Frida et à faire de vrais tests de distribution !
</Alert>

#### Utilisation sur macOS

    $ brew install upx
    $ yarn tauri build
    $ upx --ultra-brute src-tauri/target/release/bundle/osx/app.app/Contents/macOS/app
                           Ultimate Packer for eXecutables
                              Copyright (C) 1996 - 2018
    UPX 3.95        Markus Oberhumer, Laszlo Molnar & John Reiser   Aug 26th 2018
    
            File size         Ratio      Format      Name
       --------------------   ------   -----------   -----------
        963140 ->    274448   28.50%   macho/amd64   app
