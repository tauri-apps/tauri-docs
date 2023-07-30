"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TauriThemeContext_markdownThemeRenderContext;
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = exports.TauriThemeContext = void 0;
const typedoc_plugin_markdown_1 = require("typedoc-plugin-markdown");
class TauriThemeContext extends typedoc_plugin_markdown_1.MarkdownThemeRenderContext {
    constructor(event, options) {
        super(event, options);
        _TauriThemeContext_markdownThemeRenderContext.set(this, void 0);
        this.sources = (reflection, _) => {
            if (!reflection.sources) {
                return '';
            }
            let label = reflection.sources.length > 1 ? '**Sources**: ' : '**Source**: ';
            const sources = reflection.sources.map((source) => `[${source.fileName}:${source.line}](${source.url})`);
            return label + sources.join(', ');
        };
        this.comment = (comment, headingLevel) => {
            const filteredComment = Object.assign({}, comment);
            filteredComment.blockTags = [];
            const customTags = [];
            for (const blogTag of comment.blockTags) {
                if (blogTag.tag === '@since') {
                    customTags.push(blogTag);
                }
                else {
                    filteredComment.blockTags.push(blogTag);
                }
            }
            let markdown = __classPrivateFieldGet(this, _TauriThemeContext_markdownThemeRenderContext, "f").comment(filteredComment, headingLevel);
            for (const customCommentTag of customTags) {
                if (customCommentTag.content.length > 0) {
                    markdown += `**Since**: ${customCommentTag.content
                        .map((content) => content.text)
                        .join(', ')}`;
                }
            }
            return markdown;
        };
        __classPrivateFieldSet(this, _TauriThemeContext_markdownThemeRenderContext, new typedoc_plugin_markdown_1.MarkdownThemeRenderContext(event, options), "f");
    }
}
exports.TauriThemeContext = TauriThemeContext;
_TauriThemeContext_markdownThemeRenderContext = new WeakMap();
class TauriTheme extends typedoc_plugin_markdown_1.MarkdownTheme {
    getRenderContext(pageEvent) {
        return new TauriThemeContext(pageEvent, this.application.options);
    }
}
function load(app) {
    app.renderer.defineTheme('tauri-typedoc-theme', TauriTheme);
}
exports.load = load;
