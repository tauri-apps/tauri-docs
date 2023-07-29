"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = exports.TauriThemeContext = void 0;
const typedoc_plugin_markdown_1 = require("typedoc-plugin-markdown");
class TauriThemeContext extends typedoc_plugin_markdown_1.MarkdownThemeRenderContext {
    constructor() {
        super(...arguments);
        this.sources = (reflection, _) => {
            if (!reflection.sources) {
                return '';
            }
            let label = reflection.sources.length > 1 ? '**Sources**: ' : '**Source**: ';
            const sources = reflection.sources.map((source) => `[${source.fileName}:${source.line}](${source.url})`);
            return label + sources.join(', ');
        };
    }
}
exports.TauriThemeContext = TauriThemeContext;
class TauriTheme extends typedoc_plugin_markdown_1.MarkdownTheme {
    getRenderContext(pageEvent) {
        return new TauriThemeContext(pageEvent, this.application.options);
    }
}
function load(app) {
    app.renderer.defineTheme('tauri-typedoc-theme', TauriTheme);
}
exports.load = load;
