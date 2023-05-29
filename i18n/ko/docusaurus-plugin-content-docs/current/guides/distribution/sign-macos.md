---
sidebar_label: macOS 코드 서명하기
sidebar_position: 4
---

# macOS 애플리케이션 코드 서명

이 안내서는 macOS 애플리케이션의 코드 서명 및 인증에 대한 정보를 제공합니다.

:::note

If you are not utilizing GitHub Actions to perform builds of OSX DMGs, you will need to ensure the environment variable <i>CI=true</i> exists. For more information refer to [tauri-apps/tauri#592][].

:::

## 요구사항

- macOS 10.13.6 or later
- Xcode 10 or later
- [Apple 개발자 프로그램][]에 등록된 Apple 개발자 계정

For more details please read the developer article on [notarizing macOS software before distribution][].

## 요약

The Tauri code signing and notarization process is configured through the following environment variables:

- `APPLE_SIGNING_IDENTITY`: the name of the keychain entry that contains the signing certificate.
- `APPLE_CERTIFICATE`: base64 string of the `.p12` certificate, exported from the keychain. Useful if you don't have the certificate on the keychain (e.g., CI machines).
- `APPLE_CERTIFICATE_PASSWORD`: the password for the `.p12` certificate.
- `APPLE_ID` and `APPLE_PASSWORD`: your Apple account email and an [app-specific password][]. Only required to notarize the app.
- `APPLE_API_ISSUER` and `APPLE_API_KEY`: authentication with an App Store Connect API key instead of the Apple ID. Only required if you notarize the app.
- `APPLE_PROVIDER_SHORT_NAME`: Team provider short name. If your Apple ID is connected to multiple teams, you have to specify the provider short name of the team you want to use to notarize your app. You can list your account providers using `xcrun altool --list-providers -u "AC_USERNAME" -p "AC_PASSWORD"` as explained in the notarization [workflow](https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution/customizing_the_notarization_workflow).

## Tauri 앱 서명하기

The first step to signing a macOS application is getting a signing certificate from the Apple Developer Program.

### 서명 인증서 만들기

To create a new signing certificate, you must generate a Certificate Signing Request (CSR) file from your Mac computer. [Create a certificate signing request][] describes creating a CSR.

On your Apple Developer account, navigate to the [Certificates, IDs & Profiles page][] and click on the `Create a certificate` button to open the interface to create a new certificate. Choose the appropriate certificate type (`Apple Distribution` to submit apps to the App Store, and `Developer ID Application` to ship apps outside the App Store). Upload your CSR, and the certificate will be created.

:::note

Only the Apple Developer `Account Holder` can create _Developer ID Application_ certificates. But it can be associated with a different Apple ID by creating a CSR with a different user email address.

:::

### 인증서 다운로드하기

On the [Certificates, IDs & Profiles page][], click on the certificate you want to use and click on the `Download` button. It saves a `.cer` file that installs the certificate on the keychain once opened. The name of the keychain entry represents the `signing identity`, which can also be found by executing `security find-identity -v -p codesigning`.

:::note

A signing certificate is only valid if associated with your Apple ID. An invalid certificate won't be listed on the <i>Keychain Access > My Certificates</i> tab or the <i>security find-identity -v -p codesigning</i> output. If the certificate does not download to the correct location, make sure the "login" option is selected in <i>Keychain Access</i> under "Default Keychains" when downloading the .cer file.

:::

### Tauri 애플리케이션 서명하기

The signing configuration is provided to the Tauri bundler via environment variables. You need to configure the certificate to use and an optional authentication configuration to notarize the application.

#### 인증서 환경변수

- `APPLE_SIGNING_IDENTITY`: this is the `signing identity` we highlighted above. It must be defined to sign apps both locally and on CI machines.

Additionally, to simplify the code signing process on CI, Tauri can install the certificate on the keychain for you if you define the `APPLE_CERTIFICATE` and `APPLE_CERTIFICATE_PASSWORD` environment variables.

1. Open the `Keychain Access` app to <i>login > My Certificates</i> and find your certificate's keychain entry.
2. Expand the entry, double-click on the key item, and select `Export "$KEYNAME"`.
3. Select the path to save the `.p12` file and define the exported certificate password.
4. Convert the `.p12` file to base64 running the following script on the terminal: `openssl base64 -in /path/to/certificate.p12 -out certificate-base64.txt`.
5. Set the contents of the `certificate-base64.txt` file to the `APPLE_CERTIFICATE` environment variable.
6. Set the certificate password to the `APPLE_CERTIFICATE_PASSWORD` environment variable.

#### 인증 환경변수

These variables are only required to notarize the application.

:::note

Notarization is required when using a <i>Developer ID Application</i> certificate.

:::

- `APPLE_ID` and `APPLE_PASSWORD`: to authenticate with your Apple ID, set the `APPLE_ID` to your Apple account email (example: `export APPLE_ID=tauri@icloud.com`) and the `APPLE_PASSWORD` to an [app-specific password][] for the Apple account.
- `APPLE_API_ISSUER` and `APPLE_API_KEY`: alternatively, you can authenticate using an App Store Connect API key. Open the App Store Connect's [Users and Access page][], select the `Keys` tab, click on the `Add` button and select a name and the `Developer` access. The `APPLE_API_ISSUER` (`Issuer ID`) is presented above the keys table, and the `APPLE_API_KEY` is the value on the `Key ID` column on that table. You also need to download the private key, which can only be done once and is only visible after a page reload (the button is shown on the table row for the newly created key). The private key file must be saved on `./private_keys`, `~/private_keys`, `~/.private_keys` or `~/.appstoreconnect/private_keys`, as stated on the `xcrun altool --help` command.

### 애플리케이션 만들기

The Tauri bundler automatically signs and notarizes your application with all these environment variables set when running the `tauri build` command.

### 예제

The following example uses GitHub Actions to sign an application using the [Tauri action][].

We first define the environment variables we listed above as Secrets on GitHub.

:::note

You can view <a href="https://docs.github.com/en/actions/reference/encrypted-secrets">this guide</a> to learn about GitHub secrets.

:::

Once we have established the GitHub Secrets, we create a GitHub publish workflow in `.github/workflows/main.yml`:

```yml
name: 'publish'
on:
  push:
    branches:
      - release

jobs:
  publish-tauri:
    permissions:
      contents: write
    strategy:
      fail-fast: false
      matrix:
        platform: [macos-latest]
    runs-on: ${{ matrix.platform }}

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Rust setup
        uses: dtolnay/rust-toolchain@stable

      - name: Rust cache
        uses: swatinem/rust-cache@v2
        with:
          workspaces: './src-tauri -> target'

      - name: Sync node version and setup cache
        uses: actions/setup-node@v3
        with:
          node-version: 'lts/*'
          cache: 'yarn' # Set this to npm, yarn or pnpm.

      - name: Install frontend dependencies
        # If you don't have `beforeBuildCommand` configured you may want to build your frontend here too.
        run: yarn install # Change this to npm, yarn or pnpm.

      - name: Build the app
        uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          ENABLE_CODE_SIGNING: ${{ secrets.APPLE_CERTIFICATE }}
          APPLE_CERTIFICATE: ${{ secrets.APPLE_CERTIFICATE }}
          APPLE_CERTIFICATE_PASSWORD: ${{ secrets.APPLE_CERTIFICATE_PASSWORD }}
          APPLE_SIGNING_IDENTITY: ${{ secrets.APPLE_SIGNING_IDENTITY }}
          APPLE_ID: ${{ secrets.APPLE_ID }}
          APPLE_PASSWORD: ${{ secrets.APPLE_PASSWORD }}
        with:
          tagName: app-v__VERSION__ # the action automatically replaces \_\_VERSION\_\_ with the app version
          releaseName: 'App v__VERSION__'
          releaseBody: 'See the assets to download this version and install.'
          releaseDraft: true
          prerelease: false
```

The workflow pulls the secrets from GitHub and defines them as environment variables before building the application using the Tauri action. The output is a GitHub release with the signed and notarized macOS application.

[tauri-apps/tauri#592]: https://github.com/tauri-apps/tauri/issues/592
[Apple 개발자 프로그램]: https://developer.apple.com/programs/
[notarizing macOS software before distribution]: https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution
[app-specific password]: https://support.apple.com/en-ca/HT204397
[Create a certificate signing request]: https://developer.apple.com/help/account/create-certificates/create-a-certificate-signing-request
[Certificates, IDs & Profiles page]: https://developer.apple.com/account/resources/certificates/list
[Users and Access page]: https://appstoreconnect.apple.com/access/users
[Tauri action]: https://github.com/tauri-apps/tauri-action
