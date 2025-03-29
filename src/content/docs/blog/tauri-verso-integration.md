---
title: Experimental Tauri Verso Integration
date: 2025-03-17
authors: [tony]
excerpt: The first look at integrating Verso, a browser based on Servo, into Tauri
---

## Introduction

As the landscape of webview technologies evolves, Tauri continues to explore innovative integrations to enhance developer experience and application performance. Building upon our roadmap mention in [The Future of Wry](https://github.com/tauri-apps/wry/discussions/1014), we're excited to present the experimental integration of **Verso**, a browser engine based on **Servo**, into the Tauri framework. This integration aims to provide a more efficient, flexible, and Rust-centric webview solution for Tauri applications.

## What is Servo?

[**Servo**](https://servo.org/) is an experimental browser engine developed in Rust, initially spearheaded by Mozilla. Designed with parallelism and safety in mind, Servo aims to leverage Rust's concurrency features to enhance rendering performance and security. Unlike traditional browser engines written in C++, Servo's Rust foundations offer several advantages:

- **Memory Safety:** Rust's ownership model ensures memory safety at compile time, reducing common vulnerabilities like buffer overflows.
- **Concurrency:** Servo is built to take full advantage of multi-core processors, allowing for more efficient rendering and processing.
- **Modern Architecture:** Designed from the ground up with modern web standards and practices, Servo facilitates easier maintenance and extension.

By integrating Servo through **Verso**, Tauri seeks to harness these benefits while providing a more accessible and user-friendly API for developers.

## Why using Verso instead of Servo directly?

I believe there're quite a lot of people having thought about using Servo but got intimidated by the complex APIs and just gave up, which frankly I was one of them, so this is where **Verso** comes into play.

[**Verso**](https://github.com/versotile-org/verso) is a browser built on top of Servo, designed to simplify the interaction with the Servo engine. By providing a more ergonomic and higher-level API, Verso lowers the barrier to entry, enabling developers to integrate Servo's capabilities without delving into Servo's intricate details.

Our hope is that by making it easy enough to understand and use, people can and will actually start to experiment and use Servo

### Comparing APIs

Servo itself is made to be relatively easy to embed compared to other browsers, but the APIs are still way too low level and it's quite daunting to use, you can take a look at the minimal example for running Servo with `Winit` at (note this is not even a fully functional example):

> https://github.com/servo/servo/blob/8d39d7706aee50971e848a5e31fc6bfd7ef552c1/components/servo/examples/winit_minimal.rs

In contrast, Verso offers a streamlined and intuitive API so you can just focus on your app:

```rust
use std::time::Duration;
use verso::VersoBuilder;
use url::Url;
use std::env::current_exe;
use std::thread::sleep;

fn main() {
    let versoview_path = current_exe().unwrap().parent().unwrap().join("versoview");
    let controller = VersoBuilder::new()
        .with_panel(true)
        .maximized(true)
        .build(
            versoview_path,
            Url::parse("https://example.com").unwrap(),
        );
    loop {
        sleep(Duration::MAX);
    }
}
```

> https://github.com/versotile-org/verso/blob/2e853d4f3f4cb88274daa211b7a2eb3bd1517115/verso/src/main.rs

The simplified API in Verso makes it more approachable for developers to embed and utilize Servo within their applications.

## `tauri-runtime-verso`

So let's talk about the integration with Tauri!

We choose to integrate Verso and Tauri through a new custom runtime [`tauri-runtime-verso`](https://github.com/versotile-org/tauri-runtime-verso) for this time, this is similar to our default runtime `tauri-runtime-wry`.

With this approach, you can easily swap out the runtime and use Tauri like what you'll normally do:

```rust
use tauri_runtime_verso::{
    INVOKE_SYSTEM_SCRIPTS, VersoRuntime, set_verso_path, set_verso_resource_directory,
};

fn main() {
    // You need to set this to the path of the versoview executable
    // before creating any of the webview windows
    set_verso_path("../verso/target/debug/versoview");
    // Set this to verso/servo's resources directory before creating any of the webview windows
    // this is optional but recommended, this directory will include very important things
    // like user agent stylesheet
    set_verso_resource_directory("../verso/resources");
    tauri::Builder::<VersoRuntime>::new()
        // Make sure to do this or some of the commands will not work
        .invoke_system(INVOKE_SYSTEM_SCRIPTS.to_owned())
        .run(tauri::generate_context!())
        .unwrap();
}
```

`tauri-runtime-verso` is currently in an experimental phase, with active development focused on ensuring compatibility and stability. Here are some of the features and functionalities you can expect:

- **Tauri CLI Integration:**
  Full support for Tauri's command-line interface, enabling seamless project setup and management.
- **Modern Frontend Framework Support:**
  Compatible with popular frontend frameworks like [React](https://react.dev/), allowing developers to build dynamic and responsive user interfaces.
- **Official Plugins Support:**
  Integration with Tauri's official plugins, such as logging and window management, ensuring consistent behavior across different runtimes.
- **Window Management:**
  Comprehensive windowing functions, including resizing, repositioning, maximizing, minimizing, and closing windows.
- **Hot Module Replacement (HMR):**
  Support for tools like [Vite](https://vitejs.dev/), enabling CSS and JavaScript hot-reloading for a smoother development experience.
- **User Interface Enhancements:**
  Features like the `data-tauri-drag-region` attribute facilitate intuitive UI designs.

### Showcase Example

To demonstrate the capabilities of `tauri-runtime-verso`, we've developed an example project showcasing its integration:

<video controls src="/assets/blog/verso-integration/dev-show-case.mp4" title="Verso integration show case"></video>

> Check out the source code at [**Verso Integration Example**](https://github.com/versotile-org/tauri-runtime-verso/tree/main/examples/api) to learn more about how it feels to use this runtime and what it has to offer

##### Video Highlights:

- **Full Tauri CLI Functionality:** All standard commands and features are operational.
- **Modern Framework Usage:** Demonstrates integration with React for building the frontend.
- **Plugin Compatibility:** Utilizes official Tauri plugins seamlessly.
- **Comprehensive Window Controls:** Showcases window manipulation capabilities.
- **Efficient Development Workflow:** Highlights Vite's CSS hot-reload functionality.
- **Enhanced UI Features:** Demonstrates the use of `data-tauri-drag-region` for draggable UI elements.

## Future works

While `tauri-runtime-verso` lays a strong foundation for integrating Verso into Tauri, several areas are earmarked for future development to enhance stability, performance, and feature completeness.

### More windowing and webview features support

We currently only support a small subset of features in Tauri, and we would like to expand this to include more things, currently we have planned to support window decorations, window titles and transparency

### Initialization scripts without temporary files

To align with Tauri's use cases, we aim to enable programmatic initialization of user scripts without relying on temporary files. This enhancement will:

- **Eliminate Temporary Files:** Prevent the creation of leftover temporary files, ensuring cleaner application states.
- **Improve Performance:** Streamline the initialization process for faster startup times.
- **Enhance Security:** Reduce potential vulnerabilities associated with temporary file handling.

A draft [PR](https://github.com/servo/servo/pull/35388) is already underway to explore this capability, and further developments will follow.

### Customization unique to the Verso runtime

Tauri is largely made with the assumption of the underlying webview libraries, so there're very little ways to use many Verso specific futures right now, for example, setting the verso executable path and resources directory are being done through global variables, which is not really applicable to window specific features (for example setting rounded corners), so we would like to add support for that next

### Pre-built Verso executable

To streamline the developer experience, we're working on releasing an easy-to-use pre-built Verso executable. This initiative aims to eliminate the need for manual compilation, allowing developers to get started with Verso integration quickly and effortlessly.

Additionally, we envision an evergreen shared Verso runtime as a long term goal, akin to WebView2 on Windows.
This shared library would:

- **Automated Updates:** Ensure that developers and end-users always have the latest version without manual interventions.
- **Reduced Application Size:** By sharing the runtime across multiple applications, developers can significantly reduce their application's bundle size.

## Community Collaboration

The success of `tauri-runtime-verso` hinges on active community engagement. We invite developers, contributors, and enthusiasts to participate in its evolution by:

- **Providing Feedback:** Share your experiences, challenges, and suggestions to help shape the runtime's development.
- **Contributing Code:** Whether it's bug fixes, new features, or documentation improvements, your contributions are invaluable.
- **Testing and Reporting:** Help us identify and resolve issues by testing the runtime in diverse environments and reporting any anomalies.

Together, we can build a robust and versatile webview solution that empowers developers to create exceptional Tauri applications.

## Acknowledgments

We extend our heartfelt gratitude to [NLNet](https://nlnet.nl/) for financially supporting this project through grants. Their support is instrumental in driving the development and integration of `tauri-runtime-verso`.

**Special Thanks To:**

- **[NLNet](https://nlnet.nl/):** For their unwavering support and financial contributions.
- **The Servo and Verso Communities:** For their continuous efforts and invaluable resources.
- **All Contributors:** Every individual who has contributed code, feedback, or encouragement to this project.

## Conclusion

Integrating Verso into Tauri represents a significant stride towards enhancing the framework's webview capabilities. By leveraging Servo's modern architecture and Rust’s safety guarantees, `tauri-runtime-verso` aims to deliver a high-performance, secure, and developer-friendly webview solution. As we continue to develop and refine this integration, we remain committed to fostering an open, collaborative, and innovative ecosystem for all Tauri developers.

Stay tuned for more updates and join us in shaping the future of Tauri's webview technology!

---

_Feel free to reach out or join our [GitHub Discussions](https://github.com/tauri-apps/wry/discussions/1014) to contribute or ask questions about `tauri-runtime-verso`._
