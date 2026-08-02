import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { i18nSchema, docsSchema } from '@astrojs/starlight/schema';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { topicSchema } from 'starlight-sidebar-topics/schema';
import { blogSchema } from 'starlight-blog/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) => blogSchema(context).merge(topicSchema),
    }),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
  releases: defineCollection({
    loader: glob({ base: './src/content/releases', pattern: '**/*.{md,mdx}' }),
    // `slug` is ours: filenames like `v2.0.0.md` would mis-slugify on the dots
    schema: docsSchema({ extend: z.object({ slug: z.string() }) }),
  }),
};
