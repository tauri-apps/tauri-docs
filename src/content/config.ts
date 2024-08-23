import { defineCollection, z } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';
import { tableOfContentsSchema } from 'src/schemas/tableOfContentsSchema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: (context) =>
        z.intersection(
          blogSchema(context),
          z.object({
            tableOfContents: tableOfContentsSchema.optional(),
          })
        ),
    }),
  }),
  i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
};
