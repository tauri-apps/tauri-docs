import Command from '@theme/Command'

要将 Tauri 应用程序编译并捆绑到一个可执行文件中，只需运行以下命令即可：

<Command name="build" />

它将构建你的前端（如果已配置，请参阅 [`beforeBuildCommand`][beforebuildcommand]），编译 Rust 二进制文件，收集所有外部二进制文件和资源，最后生成整齐的特定平台捆绑包和安装包。

[beforebuildcommand]: ../../api/config.md#buildconfig.beforebuildcommand
