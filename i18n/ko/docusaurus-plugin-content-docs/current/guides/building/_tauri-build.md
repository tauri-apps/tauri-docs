import Command from '@theme/Command'

Tauri 애플리케이션을 빌드하고 단일 실행 파일로 묶으려면 간단하게 다음 명령을 실행하면 됩니다:

<Command name="build" />

이는, 프론트엔드를 빌드([`beforeBuildCommand`][beforebuildcommand]이 설정되었다면) 하고, Rust 바이너리를 컴파일하며, 외부 바이너리들과 리소스들을 모아 최종적인 플랫폼에 맞는 번들과 설치 프로그램을 생성합니다.

[beforebuildcommand]: ../../api/config.md#buildconfig.beforebuildcommand
