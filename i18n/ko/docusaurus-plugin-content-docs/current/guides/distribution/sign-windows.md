---
sidebar_label: 윈도우 코드 서명
sidebar_position: 2
---

# Windows - 로컬 & GitHub Actions 코드 서명 안내서

## 소개

애플리케이션에 코드 서명을 하면 사용자로 하여금 앱으로 위장한 맬웨어가 아닌 정식 실행 파일을 다운로드했음을 알 수 있게 해줍니다. 필수는 아니지만, 이는 앱에 대한 사용자의 신뢰를 향상시켜줍니다.

## 사전 요구 사항

- Windows - 다른 플랫폼을 사용할 수 있지만, 이 자습서에서는 Powershell 기본 기능을 사용합니다.
- 동작하는 Tauri 애플리케이션
- 코드 서명 인증서 - [Microsoft's docs][]에 나열된 서비스 중 하나를 얻을 수 있습니다. 해당 목록에 포함된 것보다 비 EV 인증서에 대한 추가 권한이 있을 가능성이 있으므로, 직접 비교하고 위험을 감수하고 하나를 선택하세요.
  - SSL 인증서는 작동하지 않으므로, **코드 서명** 인증서를 받아야 합니다!

This guide assumes that you have a standard code signing certificate> If you have an EV certificate, which generally involves a hardware token, please follow your issuer's documentation instead.

:::note

If you sign the app with an EV Certificate, it'll receive an immediate reputation with Microsoft SmartScreen and won't show any warnings to users.

If you opt for an OV Certificate, which is generally cheaper and available to individuals, Microsoft SmartScreen will still show a warning to users when they download the app. It might take some time until your certificate builds enough reputation. You may opt for [submitting your app][] to Microsoft for manual review. Although not guaranteed, if the app does not contain any malicious code, Microsoft may grant additional reputation and potentially remove the warning for that specific uploaded file.

:::

## 시작하기

There are a few things we have to do to get Windows prepared for code signing. This includes converting our certificate to a specific format, installing this certificate, and decoding the required information from the certificate.

### A. `.cer` 파일을 `.pfx`로 전환하기

1. 다음 항목이 필요합니다:

   - 인증서 파일(`cert.cer`)
   - 비공개 키 파일(`private-key.key`)

2. 명령 프롬프트를 열고 `cd Documents/Certs`를 입력하여 현재 디렉토리로 바꾸어줍니다.

3. `openssl pkcs12 -export -in cert.cer -inkey private-key.key -out certificate.pfx`를 이용해 `.cer`을 `.pfx`로 변환합니다.

4. **잊지 마세요!** 내보내기 암호를 입력하라는 메시지가 표시되어야 합니다.

### B. 키스토어에 `.pfx`파일 불러오기

이제, `.pfx` 파일을 가져옵니다.

1. `$WINDOWS_PFX_PASSWORD = 'MYPASSWORD'`를 이용해 내보내기 암호를 변수에 할당해줍니다.

2. 이제, `Import-PfxCertificate -FilePath Certs/certificate.pfx -CertStoreLocation Cert:\CurrentUser\My -Password (ConvertTo-SecureString -String $env:WINDOWS_PFX_PASSWORD -Force -AsPlainText)`를 이용해 인증서를 가져옵니다.

### C. 변수 준비

1. We need the SHA-1 thumbprint of the certificate; you can get this using `openssl pkcs12 -info -in certificate.pfx` and look under for following

```
Bag Attributes
    localKeyID: A1 B1 A2 B2 A3 B3 A4 B4 A5 B5 A6 B6 A7 B7 A8 B8 A9 B9 A0 B0
```

2. You will capture the `localKeyID` but with no spaces, in this example, it would be `A1B1A2B2A3B3A4B4A5B5A6B6A7B7A8B8A9B9A0B0`. This is our `certificateThumbprint`.

3. We need the SHA digest algorithm used for your certificate (Hint: this is likely `sha256`

4. We also need a timestamp URL; this is a time server used to verify the time of the certificate signing. I'm using `http://timestamp.comodoca.com`, but whoever you got your certificate from likely has one as well.

## `tauri.conf.json`파일 준비

1. Now that we have our `certificateThumbprint`, `digestAlgorithm`, & `timestampUrl` we will open up the `tauri.conf.json`.

2. In the `tauri.conf.json` you will look for the `tauri` -> `bundle` -> `windows` section. You see, there are three variables for the information we have captured. Fill it out like below.

```json tauri.conf.json
"windows": {
        "certificateThumbprint": "A1B1A2B2A3B3A4B4A5B5A6B6A7B7A8B8A9B9A0B0",
        "digestAlgorithm": "sha256",
        "timestampUrl": "http://timestamp.comodoca.com"
}
```

3. 저정하고 `yarn | yarn build` 실행합니다

4. 콘솔 출력창에 아래와 같이 출력될 것입니다.

```
info: signing app
info: running signtool "C:\\Program Files (x86)\\Windows Kits\\10\\bin\\10.0.19041.0\\x64\\signtool.exe"
info: "Done Adding Additional Store\r\nSuccessfully signed: APPLICATION FILE PATH HERE
```

`.exe`에 성공적으로 서명했음을 보여줍니다.

이걸로 끝입니다! .exe 파일을 성공적으로 서명하였습니다.

## 보너스: GitHub Actions로 애플리케이션 서명

GitHub actions로 애플리케이션에 서명하는 워크플로를 만들 수도 있습니다.

### GitHub Secrets

GitHub Action의 적절한 구성을 위해 몇 가지 GitHub secrets를 추가해야 합니다. 이름은 원하는 대로 지정할 수 있습니다.

- [encrypted secrets][] 안내서를 통해 GitHub secrets를 추가하는 방법을 확인할 수 있습니다.

우리가 사용할 secrets는 다음과 같습니다

|         GitHub Secrets         |                                                                변수값                                                                |
|:------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------:|
|      WINDOWS_CERTIFICATE       | Base64 encoded version of your .pfx certificate, can be done using this command `certutil -encode certificate.pfx base64cert.txt` |
| WINDOWS_CERTIFICATE_PASSWORD |                                 Certificate export password used on creation of certificate .pfx                                  |

### 워크플로 수정

1. 인증서를 Windows 환경으로 가져오려면 워크플로에 단계를 추가해야 합니다. 이 워크플로는 다음을 수행합니다.

   1. 환경 변수에 GitHub secrets 할당
   2. 새로운 `certificate` 디렉토리 생성
   3. `WINDOWS_CERTIFICATE`를 tempCert.txt로 가져오기
   4. `certutil`을 사용하여 `.pfx` 파일에 base64를 tempCert.txt를 디코딩합니다.
   5. tempCert.txt 삭제
   6. 윈도우의 인증서 저장소에서 `.pfx`파일을 가져온 다음 `WINDOWS_CERTIFICATE_PASSWORD`를 가져오기 명령에 사용할 보안 문자열로 변환합니다.

2. 우리가 사용하게 될 [`tauri-action` 배포 템플릿][]은 다음과 같습니다.

```yml
name: 'publish'
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
          releaseName: 'App v__VERSION__'
          releaseBody: 'See the assets to download this version and install.'
          releaseDraft: true
          prerelease: false
```

3. `-name: install app dependencies and build it` 바로 위에 다음 단계를 추가할 수 있습니다

```yml
- name: import windows certificate
  if: matrix.platform == 'windows-latest'
  env:
    WINDOWS_CERTIFICATE: ${{ secrets.WINDOWS_CERTIFICATE }}
    WINDOWS_CERTIFICATE_PASSWORD: ${{ secrets.WINDOWS_CERTIFICATE_PASSWORD }}
  run: |
    New-Item -ItemType directory -Path certificate
    Set-Content -Path certificate/tempCert.txt -Value $env:WINDOWS_CERTIFICATE
    certutil -decode certificate/tempCert.txt certificate/certificate.pfx
    Remove-Item -path certificate -include tempCert.txt
    Import-PfxCertificate -FilePath certificate/certificate.pfx -CertStoreLocation Cert:\CurrentUser\My -Password (ConvertTo-SecureString -String $env:WINDOWS_CERTIFICATE_PASSWORD -Force -AsPlainText)
```

4. 저장 및 저장소에 푸시하기

5. Your workflow can now import your windows certificate and import it into the GitHub runner, allowing for automated code signing!

[Microsoft's docs]: https://learn.microsoft.com/en-us/windows-hardware/drivers/dashboard/code-signing-cert-manage
[submitting your app]: https://www.microsoft.com/en-us/wdsi/filesubmission/
[encrypted secrets]: https://docs.github.com/en/actions/reference/encrypted-secrets
[`tauri-action` 배포 템플릿]: https://github.com/tauri-apps/tauri-action
