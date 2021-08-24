---
title: Constant tauri::http::header::CONTENT_LANGUAGE
sidebar_label: constant.CONTENT_LANGUAGE
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::CONTENT_LANGUAGE,

```rs
pub const CONTENT_LANGUAGE: HeaderName;
```

Expand description

Used to describe the languages intended for the audience.

This header allows a user to differentiate according to the users’ own preferred language. For example, if “Content-Language: de-DE” is set, it says that the document is intended for German language speakers (however, it doesn’t indicate the document is written in German. For example, it might be written in English as part of a language course for German speakers).

If no Content-Language is specified, the default is that the content is intended for all language audiences. Multiple language tags are also possible, as well as applying the Content-Language header to various media types and not only to textual documents.
  