---
title: Constant tauri::http::header::CONTENT_DISPOSITION
sidebar_label: constant.CONTENT_DISPOSITION
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::CONTENT_DISPOSITION,

```rs
pub const CONTENT_DISPOSITION: HeaderName;
```

Expand description

Indicates if the content is expected to be displayed inline.

In a regular HTTP response, the Content-Disposition response header is a header indicating if the content is expected to be displayed inline in the browser, that is, as a Web page or as part of a Web page, or as an attachment, that is downloaded and saved locally.

In a multipart/form-data body, the HTTP Content-Disposition general header is a header that can be used on the subpart of a multipart body to give information about the field it applies to. The subpart is delimited by the boundary defined in the Content-Type header. Used on the body itself, Content-Disposition has no effect.

The Content-Disposition header is defined in the larger context of MIME messages for e-mail, but only a subset of the possible parameters apply to HTTP forms and POST requests. Only the value form-data, as well as the optional directive name and filename, can be used in the HTTP context.
  