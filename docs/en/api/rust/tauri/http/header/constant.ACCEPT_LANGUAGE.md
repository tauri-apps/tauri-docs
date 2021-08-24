---
title: Constant tauri::http::header::ACCEPT_LANGUAGE
sidebar_label: constant.ACCEPT_LANGUAGE
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::ACCEPT_LANGUAGE,

```rs
pub const ACCEPT_LANGUAGE: HeaderName;
```

Expand description

Advertises which languages the client is able to understand.

The Accept-Language request HTTP header advertises which languages the client is able to understand, and which locale variant is preferred. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the Content-Language response header. Browsers set adequate values for this header according their user interface language and even if a user can change it, this happens rarely (and is frown upon as it leads to fingerprinting).

This header is a hint to be used when the server has no way of determining the language via another way, like a specific URL, that is controlled by an explicit user decision. It is recommended that the server never overrides an explicit decision. The content of the Accept-Language is often out of the control of the user (like when traveling and using an Internet Cafe in a different country); the user may also want to visit a page in another language than the locale of their user interface.

If the server cannot serve any matching language, it can theoretically send back a 406 (Not Acceptable) error code. But, for a better user experience, this is rarely done and more common way is to ignore the Accept-Language header in this case.
  