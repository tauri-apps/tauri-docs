import type {
  Application,
  Comment,
  DeclarationReflection,
  Options,
  PageEvent,
  Reflection,
  SignatureReflection,
} from 'typedoc';
import {
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from 'typedoc-plugin-markdown';

export class TauriThemeContext extends MarkdownThemeRenderContext {
  #markdownThemeRenderContext: MarkdownThemeRenderContext;

  constructor(event: PageEvent<Reflection> | null, options: Options) {
    super(event, options);
    this.#markdownThemeRenderContext = new MarkdownThemeRenderContext(
      event,
      options
    );
  }
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

  override comment: (
    comment: Comment,
    headingLevel?: number | undefined
  ) => string = (comment, headingLevel) => {
    const filteredComment = { ...comment } as Comment;
    filteredComment.blockTags = [];

    const customTags = [];

    for (const blogTag of comment.blockTags) {
      if (blogTag.tag === '@since') {
        customTags.push(blogTag);
      } else {
        filteredComment.blockTags.push(blogTag);
      }
    }

    let markdown = this.#markdownThemeRenderContext.comment(
      filteredComment,
      headingLevel
    );

    for (const customCommentTag of customTags) {
      if (customCommentTag.content.length > 0) {
        markdown += `**Since**: ${customCommentTag.content
          .map((content) => content.text)
          .join(', ')}`;
      }
    }

    return markdown;
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
