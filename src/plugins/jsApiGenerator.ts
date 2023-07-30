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
  load as loadMarkdownPlugin,
} from 'typedoc-plugin-markdown';
import path from 'node:path';
import { slug } from 'github-slugger';
import { existsSync } from 'node:fs';

const typeDocConfigBaseOptions: Partial<TypeDocOptions> = {
  // Structure
  outputFileStrategy: 'modules',
  skipIndexPage: false,
  entryFileName: '../index.md',
  // TODO: Pending https://github.com/tgreyuk/typedoc-plugin-markdown/pull/455 being released so that the patch can be removed
  indexFileName: 'index.md',
  githubPages: false,
  readme: undefined,
  // Plugins
  plugin: ['typedoc-plugin-mdn-links'],
  // Being removed in typedoc-plugin-markdown future release
  // typedoc-plugin-markdown
  flattenOutputFiles: true,
  hideGenerator: true,
  identifiersAsCodeBlocks: true,
  enumMembersFormat: 'table',
  propertiesFormat: 'table',
  typeDeclarationFormat: 'table',
  hideBreadcrumbs: true,
  hideInPageTOC: true,
  // hideKindPrefix: true,
  hidePageHeader: true,
  hidePageTitle: true,
  theme: 'tauri-theme',
};

// Adapted from https://github.com/HiDeoo/starlight-typedoc
export default async function generator() {
  if (existsSync('packages/tauri/tooling/api/node_modules')) {
    const coreJsOptions: Partial<TypeDocOptions> = {
      entryPoints: ['packages/tauri/tooling/api/src/index.ts'],
      tsconfig: 'packages/tauri/tooling/api/tsconfig.json',
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

  if (existsSync('packages/plugins-workspace/node_modules')) {
    plugins.forEach(async (plugin) => {
      const pluginJsOptions: Partial<TypeDocOptions> = {
        entryPoints: [
          `packages/plugins-workspace/plugins/${plugin}/guest-js/index.ts`,
        ],
        tsconfig: `packages/plugins-workspace/plugins/${plugin}/tsconfig.json`,
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

async function generateDocs(options: Partial<TypeDocOptions>) {
  const outputDir = `src/content/docs${options.baseUrl}`;

  const app = new Application();
  app.options.addReader(new TSConfigReader());
  loadTauriThemePlugin(app);

  await app.bootstrapWithPlugins(options);

  const project = app.convert();

  if (project) {
    await app.generateDocs(project, outputDir);
  }
}

function loadTauriThemePlugin(app: Application) {
  app.renderer.defineTheme('tauri-theme', TauriTheme);
  loadMarkdownPlugin(app);

  // Add frontmatter
  app.renderer.on(PageEvent.END, (event: PageEvent<DeclarationReflection>) => {
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
  });
}

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
