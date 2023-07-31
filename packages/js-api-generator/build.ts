import {
  Application,
  Comment,
  DeclarationReflection,
  Options,
  PageEvent,
  Reflection,
  SignatureReflection,
  TSConfigReader,
  type TypeDocOptions,
} from 'typedoc';
import {
  MarkdownTheme,
  MarkdownThemeRenderContext,
  type PluginOptions,
  load as loadMarkdownPlugin,
} from 'typedoc-plugin-markdown';
import path from 'node:path';
import { slug } from 'github-slugger';
import { existsSync } from 'node:fs';

const typeDocConfigBaseOptions: Partial<TypeDocOptions | PluginOptions> = {
  // TypeDoc options
  // https://typedoc.org/options/
  githubPages: false,
  hideGenerator: true,
  theme: 'tauri-theme',
  plugin: ['typedoc-plugin-mdn-links'],
  // typedoc-plugin-markdown options
  // https://github.com/tgreyuk/typedoc-plugin-markdown/blob/next/packages/typedoc-plugin-markdown/docs/usage/options.md
  outputFileStrategy: 'modules',
  flattenOutputFiles: true,
  entryFileName: '../index.md',
  // TODO: Pending https://github.com/tgreyuk/typedoc-plugin-markdown/pull/455 being released so that the patch can be removed
  indexFileName: 'index.md',
  hidePageHeader: true,
  hidePageTitle: true,
  hideBreadcrumbs: true,
  hideInPageTOC: true,
  identifiersAsCodeBlocks: true,
  propertiesFormat: 'table',
  enumMembersFormat: 'table',
  typeDeclarationFormat: 'table',
};

async function generator() {
  if (existsSync('../tauri/tooling/api/node_modules')) {
    const coreJsOptions: Partial<TypeDocOptions> = {
      entryPoints: ['../tauri/tooling/api/src/index.ts'],
      tsconfig: '../tauri/tooling/api/tsconfig.json',
      gitRevision: 'dev',
      baseUrl: '/2/reference/core/js/',
      ...typeDocConfigBaseOptions,
    };

    await generateDocs(coreJsOptions);
  } else {
    console.log(
      'Tauri submodule is not initialized, respective API routes will not be rendered.'
    );
  }

  // TODO: the following plugins don't have a JS API:
  // 'localhost',
  // 'persisted-scope',
  // 'single-instance',

  const plugins = [
    'app',
    'authenticator',
    'autostart',
    'cli',
    'clipboard-manager',
    'dialog',
    'fs',
    'global-shortcut',
    'http',
    'log',
    'notification',
    'os',
    'positioner',
    'process',
    'shell',
    'sql',
    'store',
    'stronghold',
    'updater',
    'upload',
    'websocket',
    'window',
    'window-state',
  ];

  if (existsSync('../plugins-workspace/node_modules')) {
    plugins.forEach(async (plugin) => {
      const pluginJsOptions: Partial<TypeDocOptions> = {
        entryPoints: [
          `../plugins-workspace/plugins/${plugin}/guest-js/index.ts`,
        ],
        tsconfig: `../plugins-workspace/plugins/${plugin}/tsconfig.json`,
        gitRevision: 'v2',
        baseUrl: `/2/reference/plugin/${plugin}/js`,
        ...typeDocConfigBaseOptions,
      };

      await generateDocs(pluginJsOptions);
    });
  } else {
    console.log(
      'Plugins workspace submodule is not initialized, respective API routes will not be rendered.'
    );
  }
}

// Adapted from https://github.com/HiDeoo/starlight-typedoc
async function generateDocs(options: Partial<TypeDocOptions>) {
  const outputDir = `../../src/content/docs${options.baseUrl}`;

  const app = new Application();
  app.options.addReader(new TSConfigReader());
  app.renderer.defineTheme('tauri-theme', TauriTheme);
  loadMarkdownPlugin(app);

  app.renderer.on(PageEvent.END, (event: PageEvent<DeclarationReflection>) => {
    pageEventEnd(event);
  });

  await app.bootstrapWithPlugins(options);
  const project = app.convert();

  if (project) {
    await app.generateDocs(project, outputDir);
  }
}

// Adds frontmatter to the top of the file
// Adapted from https://github.com/HiDeoo/starlight-typedoc
function pageEventEnd(event: PageEvent<DeclarationReflection>) {
  if (!event.contents) {
    return;
  }
  const frontmatter = [
    '---',
    `title: "${event.model.name}"`,
    'editUrl: false',
    'prev: false',
    'next: false',
    '---',
    '',
    event.contents,
  ];
  event.contents = frontmatter.join('\n');
}

// Overrides and extensions based on https://github.com/tgreyuk/typedoc-plugin-markdown/blob/next/packages/typedoc-plugin-markdown/docs/usage/customizing.md
class TauriTheme extends MarkdownTheme {
  override getRenderContext(
    pageEvent: PageEvent<Reflection>
  ): MarkdownThemeRenderContext {
    return new TauriThemeRenderContext(pageEvent, this.application.options);
  }
}

class TauriThemeRenderContext extends MarkdownThemeRenderContext {
  #markdownThemeRenderContext: MarkdownThemeRenderContext;

  constructor(event: PageEvent<Reflection>, options: Options) {
    super(event, options);
    this.#markdownThemeRenderContext = new MarkdownThemeRenderContext(
      event,
      options
    );
  }

  // Formats `@since` to be a single line
  override comment: (
    comment: Comment,
    headingLevel?: number | undefined
  ) => string = (comment, headingLevel) => {
    const filteredComment = { ...comment } as Comment;
    filteredComment.blockTags = [];

    const customBlockTags = [];

    for (const blockTag of comment.blockTags) {
      if (blockTag.tag === '@since') {
        customBlockTags.push(blockTag);
      } else {
        filteredComment.blockTags.push(blockTag);
      }
    }

    let markdown = this.#markdownThemeRenderContext.comment(
      filteredComment,
      headingLevel
    );

    for (const customCommentTag of customBlockTags) {
      markdown += `\n**Since**: ${customCommentTag.content
        .map((content) => content.text)
        .join(', ')}\n\n`;
    }

    return markdown;
  };

  // Formats `@source` to be a single line
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

  // Adapted from https://github.com/HiDeoo/starlight-typedoc/blob/d95072e218004276942a5132ec8a4e3561425903/packages/starlight-typedoc/src/libs/theme.ts#L28
  override relativeURL = (url: string | undefined) => {
    if (!url) {
      return null;
    }

    const filePath = path.parse(url);
    const [, anchor] = filePath.base.split('#');
    const segments = filePath.dir
      .split('/')
      .map((segment) => slug(segment))
      .filter((segment) => segment !== '');

    let baseUrl = this.options.getValue('baseUrl');

    if (!baseUrl.startsWith('/')) {
      baseUrl = `/${baseUrl}`;
    }

    if (!baseUrl.endsWith('/')) {
      baseUrl = `${baseUrl}/`;
    }

    let constructedUrl = typeof baseUrl === 'string' ? baseUrl : '';
    constructedUrl += segments.length > 0 ? `${segments.join('/')}/` : '';
    constructedUrl += slug(filePath.name);
    constructedUrl += '/';
    constructedUrl += anchor && anchor.length > 0 ? `#${anchor}` : '';

    return constructedUrl;
  };
}

generator()