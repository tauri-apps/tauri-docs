---
title: 行程模型
sidebar:
 order: 0
 i18nReady: true
---

Tauri 採用了類似於 Electron 或許多現代網頁瀏覽器的多行程架構。

本指南探討了這種設計選擇背後的原因以及為什麼它對編寫安全應用程式至關重要。

## 為什麼要使用多個行程？

在圖形使用者介面（GUI）應用程式的早期階段，通常使用單一行程來執行計算、繪製介面和回應使用者輸入。

正如你可能猜到的，這意味著長時間運行的昂貴計算會使使用者介面無響應，或者更糟的是，應用程式的一個元件發生故障會導致整個應用程式崩潰。

顯然，需要一種更具彈性的架構，應用程式開始在不同的行程中運行不同的元件。這更好地利用了現代多核心 CPU，並創造了更安全的應用程式。一個組件的崩潰不會再影響整個系統，因為組件在不同的行程中隔離開來。如果一個行程進入無效狀態，我們可以輕鬆重新啟動它。

我們也可以透過僅向每個行程分配最低限度的權限來限制潛在漏洞的影響範圍，給予它們完成工作的足夠權限。這種模式被稱為[最小權限原則]，在現實世界中你經常會看到。如果你邀請一個園丁修剪你的樹籬，你會給他們你的花園的鑰匙。你不會給他們你房子的鑰匙；他們為什麼需要訪問那個呢？同樣的概念適用於電腦程式。我們給他們的存取權越少，如果被攻破，他們造成的傷害就越小。

## 核心行程

每個 Tauri 應用程式都有一個核心行程，作為應用程式的入口點，並且是唯一一個擁有完全作業系統存取權限的元件。

核心的主要責任是利用該權限來建立和協調應用程式視窗、系統匣選單或通知。 

Tauri 實現了必要的跨平台抽象，使這一過程變得簡單。它還透過核心行程路由所有[行程間通訊]，允許你在一個中心位置攔截、過濾和操作 IPC 資訊。

核心行程也應負責管理全域狀態，例如設定或資料庫連線。這使你能夠輕鬆同步視窗之間的狀態，並保護你的商業敏感資料免受前端窺探。

我們選擇 Rust 來實現 Tauri，因為它的[所有權]概念在保證記憶體安全的同時保持了優異的效能。

<figure>

```d2 sketch pad=50
direction: right

Core: {
 shape: diamond
}

"事件與命令 1": {
 WebView1: WebView
}

"事件與命令 2": {
 WebView2: WebView
}

"事件與命令 3": {
 WebView3: WebView
}

Core -> "事件與指令 1"{style.animated: true}
Core -> "事件與指令 2"{style.animated: true}
Core -> "事件與指令 3"{style.animated: true}

"事件與指令 1" -> WebView1{style.animated: true}
"事件與指令 2" -> WebView2{style.animated: true}
"事件與指令 3" -> WebView3{style.animated: true}
```

<figcaption>Tauri 行程模型的簡化表示。一個核心行程管理一個或多個 WebView 行程。 </figcaption>
</figure>

## WebView 行程

核心行程並不會直接渲染實際的使用者介面（UI）；它啟動 WebView 行程，這些行程利用作業系統提供的 WebView 程式庫。 WebView 是一個類似瀏覽器的環境，可以執行你的 HTML、CSS 和 JavaScript。

這意味著你在傳統網頁開發中使用的大多數技術和工具都可以用來創建 Tauri 應用程式。例如，許多 Tauri 範例是使用 [Svelte] 前端框架和 [Vite] 打包工具編寫的。

安全最佳實踐同樣適用；例如，你必須始終清理使用者輸入，絕不會在前端處理機密資訊，並且理想情況下將盡可能多的業務邏輯推遲到核心行程，以保持你的攻擊面較小。

與其他類似解決方案不同，WebView 庫**不**包含在你的最終可執行檔中，而是在運行時動態連結[^1]。這使你的應用程式*顯著*更小，但也意味著你需要考慮平台差異，就像傳統網頁開發一樣。

[^1]: 目前，Tauri 在 Windows 上使用 [Microsoft Edge WebView2]，在 macOS 上使用 [WKWebView]，在 Linux 上使用 [webkitgtk]。

[最小權限原則]: https://zh.wikipedia.org/wiki/%E6%9C%80%E5%B0%8F%E6%9D%83%E9%99%90%E5%8E%9F%E5%88%99
[行程間通訊]: /zh-tw/concept/inter-process-communication/
[所有權]: https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html
[Microsoft Edge WebView2]: https://docs.microsoft.com/en-us/microsoft-edge/webview2/
[WKWebView]: https://developer.apple.com/documentation/webkit/wkwebview
[webkitgtk]: https://webkitgtk.org
[Svelte]: https://svelte.dev/
[Vite]: https://vitejs.dev/