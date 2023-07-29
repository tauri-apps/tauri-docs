import type {
  Application,
  Comment,
  DeclarationReflection,
  PageEvent,
  Reflection,
  SignatureReflection,
} from 'typedoc';
import {
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from 'typedoc-plugin-markdown';

export class TauriThemeContext extends MarkdownThemeRenderContext {
  override sources: (
    reflection: DeclarationReflection | SignatureReflection,
    headingLevel: number
  ) => string = (reflection, _) => {
    if (!reflection.sources) {
      return '';
    }
    let label =
      reflection.sources.length > 1 ? '**Sources**: ' : '**Source**: ';
    const sources = reflection.sources.map(
      (source) => `[${source.fileName}:${source.line}](${source.url})`
    );

    return label + sources.join(', ');
  };
}

class TauriTheme extends MarkdownTheme {
  override getRenderContext(
    pageEvent: PageEvent<Reflection> | null
  ): MarkdownThemeRenderContext {
    return new TauriThemeContext(pageEvent, this.application.options);
  }
}

export function load(app: Application) {
  app.renderer.defineTheme('tauri-typedoc-theme', TauriTheme);
}
