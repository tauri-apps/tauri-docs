---
title: Linux Graphics Issues
---

On Linux, Tauri renders through WebKitGTK. On some setups, most often NVIDIA GPUs, WebKitGTK and the graphics driver disagree and you get anything from a blank window to subtle rendering problems. This page collects the known symptoms and workarounds. See [tauri-apps/tauri#9394](https://github.com/tauri-apps/tauri/issues/9394) for the original reports.

## Common symptoms

* The window opens but stays blank or white.
* The window flickers, especially while resizing.
* The app dies on resize with no useful error output.
* Console shows `AcceleratedSurfaceDMABuf was unable to construct a complete framebuffer`.
* Console shows `Gdk-Message: Error 71 (Protocol error) dispatching to Wayland display.`

Most of these come from the WebKitGTK DMABUF renderer requesting buffer formats the NVIDIA driver does not provide. See the [WebKitGTK bug tracker](https://bugs.webkit.org/show_bug.cgi?id=261874) and the [NVIDIA forums](https://forums.developer.nvidia.com/t/geforce-rtx-4070-flickering-issue-when-using-the-dmabuf-renderer-in-webkitgtk/274741) for upstream discussion.

## Workarounds

Try these in order. The earlier ones keep hardware acceleration.

1. Make sure kernel mode setting is on. NVIDIA drivers older than 545 often need `nvidia_drm.modeset=1` as a kernel parameter.
2. Set `__NV_DISABLE_EXPLICIT_SYNC=1`. This often fixes the Wayland `Error 71` crash without a performance cost.
3. Set `WEBKIT_DISABLE_DMABUF_RENDERER=1`. Fixes the DMABUF framebuffer error and the `Error 71` crash, at the cost of the faster rendering path.
4. Set `WEBKIT_DISABLE_COMPOSITING_MODE=1`. Last resort for the silent crash on resize. This disables accelerated compositing entirely.

You can set these in your shell to test, or set them in `main()` before the webview is created so users do not have to:

```rust
fn main() {
  // Workaround for WebKitGTK on NVIDIA, see tauri-apps/tauri#9394
  #[cfg(target_os = "linux")]
  std::env::set_var("WEBKIT_DISABLE_DMABUF_RENDERER", "1");

  tauri::Builder::default()
    // ...
}
```

Only ship an unconditional override like this if you have verified your app is affected. It disables a faster path for everyone, including users on working setups.

## Silent failures: WebGL and canvas

Not every problem crashes or shows an error. WebGL and canvas content can silently land on a slow path while the rest of the app looks fine. Two things make this hard to detect from inside your frontend:

* WebGL2 context creation succeeds even when the result is backed by a software rasterizer or a slow presentation path. There is no error to catch.
* WebKitGTK masks the WebGL renderer string for fingerprinting protection. `WEBGL_debug_renderer_info` reports `Apple GPU` on every Linux machine, so you cannot check what is actually behind the context.

In practice this shows up as high input latency or low frame rates in WebGL heavy views (terminal emulators, editors, maps, charts), while the same code is fast in a regular browser. If your app has a WebGL rendering path, give it a non WebGL fallback on Linux and consider exposing a setting so users can switch, instead of trusting the context to tell you.
