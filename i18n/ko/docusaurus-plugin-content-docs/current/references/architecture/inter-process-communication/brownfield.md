# 브라운필드 패턴

_**기본 패턴입니다.**_

기존 프론트엔드 프로젝트와의 호환성을 최대한 확보하려 시도하는 것 덕분에, Tauri를 사용하기 위해 쓸 수 있는 아주 간단하고 직관적인 패턴입니다. 간단히 말하면, 기존 웹 프론트엔드에서 브라우저에 요구하던 것 외에는 추가로 그 무엇도 요구하지 않는 것입니다. 기존 브라우저 앱에서 작동하던 _**모든 것**_ 이 곧바로 작동하지는 않습니다. [비호환성](#incompatibilities) 구획에서 더 많은 정보를 알아볼 수 있습니다.

만약 브라운필드 소프트웨어 개발에 친숙하지 않다면, [Brownfield 위키피디아 문서][]가 괜찮은 설명을 제공해줍니다. Tauri에서 기존 소프트웨어라는 것은, 레거시 시스템 대신 현재 브라우저 지원과 그 동작을 말합니다.

## 비호환성

첫번째 비호환성 분류는 아주 간단합니다. 특정 브라우저에서만 쓸 수 있는 API는 (브라운필드 패턴을 쓰더라도) Tauri 안에서 올바르게 작동하지 않습니다. 만약 API가 여러 브라우저 사이에서 널리 지원되는 게 아니라면, Tauri를 사용할 때에도 모든 곳에서 지원되지는 않을 것입니다.

두번째 비호환성 분류는 계획 속에는 있으나 현재 완전히 구현되지는 않은 기능들입니다. 예시 목록입니다:

- [Linux에서의 WebRTC 지원](https://github.com/tauri-apps/wry/issues/85)
- [일부 권한 API](https://github.com/tauri-apps/wry/issues/81)
- [내려받기 링크/URL로써의 블롭](https://github.com/tauri-apps/wry/issues/349)
- [더 나은 국제화](https://github.com/tauri-apps/wry/issues/442)

## 설정

브라운필드 패턴이 기본 패턴이기에, 추가적인 설정 값이 필요하지는 않습니다. 명시하고 싶다면, `tauri.conf.json` 설정 파일에서 `tauri > pattern` 오브젝트를 설정할 수 있습니다.

```json
{
  "tauri": {
    "pattern": {
      "use": "brownfield"
    }
  }
}
```

_**그 외 추가적으로 필요한 설정 값은 없습니다.**_

[Brownfield 위키피디아 문서]: https://en.wikipedia.org/wiki/Brownfield_(software_development)
