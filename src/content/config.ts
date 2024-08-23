import { defineCollection, z } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';
import { TableOfContentsSchema as BaseTableOfContentsSchema } from 'node_modules/@astrojs/starlight/schemas/tableOfContents';

const tableOfContentsDefaults = {
  collapseLevel: 1,
  minHeadingLevel: 2,
  maxHeadingLevel: 3,
};

const tableOfContentsSchema = z.intersection(
  BaseTableOfContentsSchema(),
  z.union([
    z.object({
      collapseLevel: z.number().min(0).default(1).optional(),
    }),
    z.boolean().transform((enabled) => (enabled ? tableOfContentsDefaults : false)),
  ])
);

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
