---
title: 브라운필드 패턴(Brownfield Pattern)
i18nReady: true
---

_**기본 IPC 패턴입니다**_

이 패턴은 Tauri를 사용하는 데 있어 가장 명확하고 이해하기 쉬운 것입니다. 기존 프론트엔드 프로젝트와 최대한 호환되도록 하려고 하기 때문입니다. 간단히 말해, 기존 웹 프론트엔드가 브라우저 내에서 사용하는 것 외에는 다른 것이 필요하지 않도록 되어 있다는 것입니다.
단, 이것은 기존 브라우저 애플리케이션에서 작동하는 ***모든 것***이 그대로 작동한다는 의미는 아닙니다.

일반적인 "브라운필드"형 소프트웨어 개발에 익숙하지 않은 경우, Wikipedia의 [Brownfield Wikipedia article](<https://en.wikipedia.org/wiki/Brownfield_(software_development)>)(한국어판 없음)에 알기 쉬운 개설이 있습니다.
Tauri의 경우, (브라운필드형 개발의 대상이 되는) 기존 소프트웨어란 레거시 시스템이 아니라 현재 브라우저의 지원과 동작입니다.

## 설정

브라운필드형 개발은 기본 패턴이므로 설정 옵션을 지정할 필요가 없습니다.
명시적으로 설정하려면 `tauri.conf.json` 구성 파일 내의 `tauri > pattern` 객체를 사용합니다.

```json
{
  "tauri": {
    "pattern": {
      "use": "brownfield"
    }
  }
}
```

_**브라운필드형에서는 추가 설정 옵션이 없습니다.**_

[brownfield wikipedia article]: https://en.wikipedia.org/wiki/Brownfield_(software_development)
