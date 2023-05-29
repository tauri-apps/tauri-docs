---
sidebar_label: Linux Code Signing
sidebar_position: 3
---

# Code Signing Linux packages

This guide provides information on code signing for Linux packages.

## Requirements

- gpg or gpg2

A key for signing must be prepared. A new one can be generated using:

```shell
gpg2 --full-gen-key
```

Please refer to the gpg or gpg2 documentation for additional information. You should take additional care to back up your private and public keys in a secure location.

## Signing for AppImages

You can embed a signature in the AppImage by setting the following environment variables:

- **SIGN**: set to `1` to sign the AppImage.
- **SIGN_KEY**: optional variable to use a specific GPG Key ID for signing.
- **APPIMAGETOOL_SIGN_PASSPHRASE**: the signing key password. If unset, gpg shows a dialog so you can input it. You must set this when running automated tasks.

You can display the signature embedded in the AppImage by running the following command:

```shell
./src-tauri/target/release/bundle/appimage/$APPNAME_$VERSION_amd64.AppImage --appimage-signature
```

Note that you need to change the $APPNAME and $VERSION values with the correct ones based on your configuration.

:::caution The signature is not verified

AppImage does not validate the signature, so you can't rely on it to check whether the file has been tampered with or not. To validate the signature, you must provide an external tool for your users. See [the official AppImage documentation][] for additional information.

:::

[the official AppImage documentation]: https://docs.appimage.org/packaging-guide/optional/signatures.html
