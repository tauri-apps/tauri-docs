---
title: Code Signing macOS Applications
sidebar_label: macOS Code Signing
---

import Alert from '@theme/Alert'

This guide provides information on code signing and notarization for macOS applications.

<Alert title="Note" icon="info-alt">
If you are not utilizing GitHub Actions to perform builds of OSX DMGs, you will need to ensure the environment variable <i>CI=true</i> exists. For more information refer to <a href="https://github.com/tauri-apps/tauri/issues/592">Issue #592</a>.
</Alert>

## Requirements

- Xcode 11 or above.
- An Apple Developer account enrolled to the [Apple Developer Program](https://developer.apple.com/programs/).

## tl;dr

The Tauri code signing and notarization process is configured through the following environment variables:

- `APPLE_SIGNING_IDENTITY`: the name of the keychain entry that contains the signing certificate.
- `APPLE_CERTIFICATE`: base64 string of the `.p12` certificate, exported from the keychain. Useful if you don't have the certificate on the keychain (e.g. CI machines).
- `APPLE_CERTIFICATE_PASSWORD`: the password for the `.p12` certificate.
- `APPLE_ID` and `APPLE_PASSWORD`: your Apple account email and an [app-specific password](https://support.apple.com/en-ca/HT204397). Only required to notarize the app.
- `APPLE_API_ISSUER` and `APPLE_API_KEY`: authentication with an App Store Connect API key instead of the Apple ID. Only required to notarize the app.

## Signing Tauri apps

The first step to sign a macOS application is getting a signing certificate from the Apple Developer Program.

### Creating a signing certificate

To create a new signing certificate you must generate a Certificate Signing Request (CSR) file from your Mac computer. [This guide](https://help.apple.com/developer-account/#/devbfa00fef7) describes the process to create a CSR.

On your Apple Developer account, navigate to the [Certificates, IDs & Profiles page](https://developer.apple.com/account/resources/certificates/list) and click on the `Add` button to open the interface to create a new certificate. Choose the appropriate certificate type (`Apple Distribution` to submit apps to the App Store, and `Developer ID Application` to ship apps outside of the App Store). Upload your CSR and the certificate will be created.

<Alert title="Note" icon="info-alt">
Only the Apple Developer `Account Holder` can create <i>Developer ID Application</i> certificates, but it can be associated to a different Apple ID by creating a CSR with a different user email address.
</Alert>

### Downloading a certificate

On [Certificates, IDs & Profiles page](https://developer.apple.com/account/resources/certificates/list), click on the certificate you want to use and then click on the `Download` button. It will save a `.cer` file that once opened, installs the certificate on the keychain. The name of the keychain entry represents the `signing identity`, which can also be found by executing `$ security find-identity -v -p codesigning`.

<Alert title="Note" icon="info-alt">
A signing certificate is only valid if associated with your Apple ID. An invalid certificate won't be listed on the <i>Keychain Access > My Certificates</i> tab or the <i>$ security find-identity -v -p codesigning</i> output.
</Alert>

### Signing the Tauri application

The signing configuration is provided to the Tauri bundler via environment variables. You will need to configure the certificate to use and an optional authentication configuration to notarize the application.

#### Certificate environment variables

- `APPLE_SIGNING_IDENTITY`: this is the `signing identity` we highlighted above. It must be defined to sign apps both locally and on CI machines.

Additionally, to simplify the process of code signing on CI, Tauri can install the certificate on the keychain for you if you define the `APPLE_CERTIFICATE` and `APPLE_CERTIFICATE_PASSWORD` environment variables.

1. Open the `Keychain Access` app and find your certificate's keychain entry.
2. Expand the entry, double click on the key item and select `Export "$KEYNAME"`.
3. Select the path to save the `.p12` file and define the exported certificate password.
4. Convert the `.p12` file to base64 running the following script on the terminal: `openssl base64 -in /path/to/certificate.p12 -out certificate-base64.txt`.
5. Set the contents of the `certificate-base64.txt` file to the `APPLE_CERTIFICATE` environment variable.
6. Set the certificate password to the `APPLE_CERTIFICATE_PASSWORD` environment variable.

#### Authentication environment variables

These variables are only required to notarize the application.

<Alert title="Note" icon="info-alt">
Notarization is required when using a <i>Developer ID Application</i> certificate.
</Alert>

- `APPLE_ID` and `APPLE_PASSWORD`: to authenticate with your Apple ID, set the `APPLE_ID` to your Apple account email (example: `export APPLE_ID=tauri@icloud.com`) and the `APPLE_PASSWORD` to an [app-specific password](https://support.apple.com/en-ca/HT204397) for the Apple account.
- `APPLE_API_ISSUER` and `APPLE_API_KEY`: alternatively, you can authenticate using an App Store Connect API key. Open the App Store Connect's [Users and Access page](https://appstoreconnect.apple.com/access/users), select the `Keys` tab and click on the `Add` button; select a name and the `Developer` access. The `APPLE_API_ISSUER` (`Issuer ID`) is presented above the keys table, and the `APPLE_API_KEY` is the value on the `Key ID` column on that table. You also need to download the private key, which can only be done once and is only visible after a page reload (the button is shown on the table row for the newly created key). The private key file must be saved on `./private_keys`, `~/private_keys`, `~/.private_keys` or `~/.appstoreconnect/private_keys`, as stated on the `$ xcrun altool --help` command.

### Building the application

With all these environment variables set, the Tauri bundler will automatically sign and notarize your application when you run the `tauri build` command.

### Example

The following example uses GitHub Actions to sign an application using the [Tauri action](https://github.com/tauri-apps/tauri-action).

On GitHub, we first define the environment variables we listed above as GitHub Secrets.

<Alert title="Note" icon="info-alt">
You can view <a href="https://docs.github.com/en/actions/reference/encrypted-secrets">this guide</a> to learn about GitHub secrets. 
</Alert>

Once we have established the GitHub Secrets we will create a GitHub publish workflow in `.github/workflows/main.yml`: 
 
```yml
name: "publish"
on:
  push:
    branches:
      - release

jobs:
  publish-tauri:
    strategy:
      fail-fast: false
      matrix:
        platform: [macos-latest]

    runs-on: ${{ matrix.platform }}
    steps:
    - uses: actions/checkout@v2
    - name: setup node
      uses: actions/setup-node@v2
      with:
        node-version: 12
    - name: install Rust stable
      uses: actions-rs/toolchain@v1
      with:
        toolchain: stable
    - name: install app dependencies and build it
      run: yarn && yarn build
    - uses: tauri-apps/tauri-action@v0
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        ENABLE_CODE_SIGNING: ${{ secrets.APPLE_CERTIFICATE }}
        APPLE_CERTIFICATE: ${{ secrets.APPLE_CERTIFICATE }}
        APPLE_CERTIFICATE_PASSWORD: ${{ secrets.APPLE_CERTIFICATE_PASSWORD }}
        APPLE_SIGNING_IDENTITY: ${{ secrets.APPLE_IDENTITY_ID }}
        APPLE_ID: ${{ secrets.APPLE_ID }}
        APPLE_PASSWORD: ${{ secrets.APPLE_PASSWORD }}
      with:
        tagName: app-v__VERSION__ # the action automatically replaces \_\_VERSION\_\_ with the app version
        releaseName: "App v__VERSION__"
        releaseBody: "See the assets to download this version and install."
        releaseDraft: true
        prerelease: false
```

The workflow pulls the secrets from GitHub and define them as environment variables before building the application using the Tauri action. The output is a GitHub release with the signed and notarized macOS application.
