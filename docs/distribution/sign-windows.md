---
title: Windows - Code signing guide locally & with Github Actions
sidebar_label: Windows Code Signing
---

import Alert from '@theme/Alert'

# Intro

Code-signing will add a level of authenticity to your application, while it is not required it can often improve the user experience for your users.

# Prerequisites

- Windows - you can likely use other platforms, but this tutorial is using Powershell native features.
- Code signing certificate - you can aqquire one of these on services such as Digicert.com, Comodo.com, & Godaddy.com. In this guide we are using Comodo.com
- A working tauri application


# Getting Started

There are a few things we will have to do to get our windows installation prepared for code signing. This includes converting our certificate to a speific format, installing this certificate, & then decoding required information from certificate that is required by tauri.

## A. Convert your `.cer` to `.pfx`

1. You will need the following:
	- certificate file (mine is `cert.cer`)
	- private key file (mine is `private-key.key`)

2. Open up a command prompt and change to your current directory using `cd Documents/Certs`

3. Convert your `.cer` to a `.pfx` using `openssl pkcs12 -export -in cert.cer -inkey private-key.key -out certificate.pfx`

4. You will be prompted to enter an export password **DON'T FORGET IT!**

## B. Import your `.pfx` file into the keystore.

We will now need to import our `.pfx` file.

1. Assign your export password to a variable using `$WINDOWS_PFX_PASSWORD = 'MYPASSWORD'`

2. Now Import the certificate using `Import-PfxCertificate -FilePath Certs/certificate.pfx -CertStoreLocation Cert:\CurrentUser\My -Password (ConvertTo-SecureString -String $env:WINDOWS_PFX_PASSWORD -Force -AsPlainText)`

## C. Prepare Variables

1. We will need the SHA-1 thumbprint of the certificate, you can get this using `openssl pkcs12 -info -in certificate.pfx` and look under for following
```
Bag Attributes
    localKeyID: A1 B1 A2 B2 A3 B3 A4 B4 A5 B5 A6 B6 A7 B7 A8 B8 A9 B9 A0 B0
```

2. You will capture the `localKeyID` but with no spaces, in this example it would be `A1B1A2B2A3B3A4B4A5B5A6B6A7B7A8B8A9B9A0B0`. This is our `certificateThumbprint`.

3. We will need the SHA digest algorythm used for your certificate (Hint: this is likely `sha256`

4. We will also need a timestamp url, this is a time server used to verify the time of the certificate signing. Im using `http://timestamp.comodoca.com` but whoever you got your certificate from likely has one aswell.

# Prepare `tauri.conf.json` file

1. Now that we have our `certificateThumbprint`, `digestAlgorithm`, & `timestampUrl` we will open up the `tauri.conf.json`.

2. In the `tauri.conf.json` you will look for the `tauri` -> `bundle` -> `windows` section. You will see there are three variable for the information we have captured. Fill it out like below.
```
"windows": {
        "certificateThumbprint": "A1B1A2B2A3B3A4B4A5B5A6B6A7B7A8B8A9B9A0B0",
        "digestAlgorithm": "sha256",
        "timestampUrl": "http://timestamp.comodoca.com"
}
```
3. Save, and run `yarn | yarn build`

4. In the console output you will see the following output.

```
info: signing app
info: running signtool "C:\\Program Files (x86)\\Windows Kits\\10\\bin\\10.0.19041.0\\x64\\signtool.exe"
info: "Done Adding Additional Store\r\nSuccessfully signed: APPLICATION FILE PATH HERE
```

which shows you have successfully signed the `.exe`.

And thats it! You have successfully signed your .exe file.

# BONUS: Sign your application with GitHub Actions.

We can also create a workflow to sign the application with GitHub actions, this will help automate your Publish time.

## GitHub Secrets

We will need to add a few GitHub secrets for the proper configuration of the GitHub Action. These can be named however you would like.
- You can view [this](https://docs.github.com/en/actions/reference/encrypted-secrets) guide for how to add GitHub secrets.

The secrets we used are as follows

| GitHub Secrets | Value for Variable |
|     :---:      |        :---:            |
|WINDOWS_CERTIFICATE| Base64 encoded version of your .pfx certificate, can be done using this command `certutil -encode certificate.pfx base64cert.txt` |
|WINDOWS_CERTIFICATE_PASSWORD|Certificate export password used on creation of certificate .pfx|

## Workflow Modifications


1. We will need to add a step in the workflow to properly import the certificate into the windows environment. This work flow accomplishes the following
    1. Assign GitHub secrets to environment variables
    2. Create a new `certificate` directory
    3. Import `WINDOWS_CERTIFICATE` into tempCert.txt
    4. Use `certutil` to decode the tempCert.txt from base64 into a `.pfx` file.
    5. Remove tempCert.txt
    6. Import the `.pfx` file into the Cert store of Windows & convert the `WINDOWS_CERTIFICATE_PASSWORD` to a secure string to be used in the import command.

2. We will be using the tauri-action publish template available [here](https://github.com/tauri-apps/tauri-action)

```
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
        platform: [macos-latest, ubuntu-latest, windows-latest]

    runs-on: ${{ matrix.platform }}
    steps:
    - uses: actions/checkout@v2
    - name: setup node
      uses: actions/setup-node@v1
      with:
        node-version: 12
    - name: install Rust stable
      uses: actions-rs/toolchain@v1
      with:
        toolchain: stable
    - name: install webkit2gtk (ubuntu only)
      if: matrix.platform == 'ubuntu-latest'
      run: |
        sudo apt-get update
        sudo apt-get install -y webkit2gtk-4.0
    - name: install app dependencies and build it
      run: yarn && yarn build
    - uses: tauri-apps/tauri-action@v0
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      with:
        tagName: app-v__VERSION__ # the action automatically replaces \_\_VERSION\_\_ with the app version
        releaseName: "App v__VERSION__"
        releaseBody: "See the assets to download this version and install."
        releaseDraft: true
        prerelease: false
```

3. Right above `-name: install app dependencies and build it` you will want to add the following step

```
    - name: import windows certificate
      if: matrix.platform == 'windows-latest'
      env:
        WINDOWS_CERTIFICATE: ${{ secrets.WINDOWS_CERTIFICATE }}
        WINDOWS_CERTIFICATE_PASSWORD: ${{ secrets.WINDOWS_CERTIFICATE_PASSWORD }}
      run: |
        New-Item -ItemType directory -Path certificate
        Set-Content -Path certificate/tempCert.txt -Value $env:WINDOWS_PFX
        certutil -decode certificate/tempCert.txt certificate/certificate.pfx
        Remove-Item -path certificate -include tempCert.txt
        Import-PfxCertificate -FilePath certificate/certificate.pfx -CertStoreLocation Cert:\CurrentUser\My -Password (ConvertTo-SecureString -String $env:WINDOWS_PFX_PASSWORD -Force -AsPlainText)
```
4. Save, and push to your repo.

5. You workflow will now be able to import your windows certificate and import it into the github runner, allowing for automated code-signing!