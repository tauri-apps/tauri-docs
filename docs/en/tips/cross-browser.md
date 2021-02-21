

Keep in mind that developing Tauri apps still requires to think in a cross-browser way:

### Icons & HTML entities

> maybe we could be generic about it (HTML entities) and remind people that rendering rules across platforms that they know from web design are still applicable

> i like to convert my fonts and svg to base64 representations
that guarantees its availability and proper rendering in the WebView

### JavaScript support

> Perhaps someone could create a Union of the browsers that are represented by WebView? Something like: https://caniuse.com/#compare=ie+10,ie+11,edge+80,firefox+74,chrome+80