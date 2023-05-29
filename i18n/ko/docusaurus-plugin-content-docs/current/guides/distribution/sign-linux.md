---
sidebar_label: Linux 코드 서명
sidebar_position: 3
---

# Linux 패키지 코드 서명

이 안내서에서는 Linux 패키지에 코드 서명 관련 정보를 제공합니다.

## 요구사항

- gpg 혹은 gpg2

서명을 위한 키는 미리 준비되어야 합니다. 아래와 같이 입력하면 새로 생성할 수 있습니다:

```shell
gpg2 --full-gen-key
```

추가적인 정보는 gpg 또는 gpg2 설명서를 참조하세요. You should take additional care to back up your private and public keys in a secure location.

## AppImages 서명하기

다음 환경 변수를 설정하여 AppImage에 서명을 포함할 수 있습니다:

- **SIGN**: AppImage에 서명하려면 `1`로 설정합니다.
- **SIGN_KEY**: 서명 시 특정 GPG Key ID를 사용하는 것은 선택적인 변수입니다.
- **APPIMAGETOOL_SIGN_PASSPHRASE**: 서명키 비밀번호. 설정하지 않으면 gpg는 비밀번호를 입력할 수 있도록 대화 상자를 표시합니다. 자동화 작업으로 실행할 때 이를 반드시 설정해야 합니다.

다음 명령을 실행하여 AppImage에 포함된 서명을 표시할 수 있습니다:

```shell
./src-tauri/target/release/bundle/appimage/$APPNAME_$VERSION_amd64.AppImage --appimage-signature
```

$APPNAME 및 $VERSION 값은 당신의 설정에 따라 올바른 값으로 변경해야 합니다.

:::주의 확인된 서명이 아닙니다.

AppImage는 서명의 유효성을 검사하지 않으므로, 이것으로 파일이 위변조 여부를 판단하면 안됩니다. 서명의 유효성을 검사하려면 사용자를 위한 외부 도구를 제공해야 합니다. 자세한 내용은 [공식 AppImage 문서][]에서 확인할 수 있습니다.

:::

[공식 AppImage 문서]: https://docs.appimage.org/packaging-guide/optional/signatures.html
