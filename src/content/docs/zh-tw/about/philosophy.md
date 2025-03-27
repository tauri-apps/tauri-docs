---
title: Tauri 哲學
i18nReady: true
---

Tauri 是一個工具包，可以幫助開發人員為主要的桌面平台製作應用程式——幾乎可以使用任何現有的前端框架。核心是用 Rust 建構的，CLI 利用 Node.js 使 Tauri 成為一個真正的多語言方法來建立和維護偉大的應用程式。

<iframe
 style="width: 100%; aspect-ratio: 16/9;"
 src="https://www.youtube-nocookie.com/embed/UxTJeEbZX-0?si=mwQUzXb6mmCg7aom"
 title="YouTube video player"
 frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
 allowfullscreen
></iframe>

## 安全優先

在當今世界，每個真實的威脅模型都假設使用者的裝置已經被入侵。這讓應用程式開發人員陷入了一個複雜的境地，因為如果設備已經處於危險之中，如何能讓軟體可信呢？

我們採取的是縱深防禦。我們希望你能採取一切可能的預防措施來減少你面對攻擊者的表面積。 Tauri 允許你選擇要發佈的 API 端點，無論你是否希望在應用程式中內建本機主機伺服器，它甚至可以在執行時間隨機化功能句柄。這些技術和其他技術構成了增強您和您的使用者能力的安全基線。

透過使靜態攻擊變得極其困難並將系統彼此隔離來減慢攻擊者的速度是遊戲的名稱。如果您來自電子生態系統，請放心，預設情況下 Tauri 只提供二進制文件，而不是 ASAR 文件。

透過選擇以安全作為指導力量來建立 Tauri，我們為您提供了採取主動安全姿態的每一個機會。

## Polyglots, not Silos

大多數當代框架使用單一語言範式，因此被困在知識和慣用法的泡沫中。這可以很好地適用於某些利基應用程式，但它也培養了一種部落主義。

這可以從 React、Angular 和 Vue 開發社群擠在一起的方式中看出，最終很少產生交叉影響。

同樣的情況可以在 Rust、Node 和 c++ 的戰場上看到，強硬派立場鮮明，拒絕跨社群合作。

今天，Tauri 使用 Rust 作為後端，但在不久的將來，其他後端，如 Go、Nim、Python、Csharp 等將成為可能。這是因為我們正在維護官方的 Rust 綁定到 [webview](https://github.com/webview) 組織，並計劃讓你根據自己的需求切換後端。由於我們的 API 可以使用 C interop 以任何語言實現，因此完全符合規範只需要一個 PR。

## 真正的開源

如果沒有社區，這一切都沒有意義。今天的軟體社群是一個神奇的地方，人們在這裡互相幫助並做出很棒的東西——開源是其中非常重要的一部分。

開源對不同的人來說意味著不同的東西，但大多數人都會同意它是為了支持自由。當軟體不尊重你的權利時，它看起來是不公平的，並可能透過不道德的方式損害你的自由。

這就是為什麼我們為 FLOSS 倡導者可以使用 Tauri 建立「可認證的」開源應用程式而感到自豪，這些應用程式可以包含在 FSF 認可的 GNU/Linux 發行版中。

## 未來

Tauri 的未來取決於你的參與和貢獻。嘗試它，文件問題，加入一個工作組或捐款-每一個貢獻都是重要的。無論如何，請務必保持聯繫！ ！
