import { defineCollection } from 'astro:content';
import { i18nSchema, docsSchema } from '@astrojs/starlight/schema';
// TODO fix docsSchema usage
// import { docsSchema } from 'src/schemas/docsSchema';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { blogSchema } from 'starlight-blog/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) => blogSchema(context),
    }),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
