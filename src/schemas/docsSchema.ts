import { z } from 'astro:content';
import { blogSchema } from 'starlight-blog/schema';
import { docsSchema as baseDocsSchema } from '@astrojs/starlight/schema';
import { tableOfContentsSchema } from './tableOfContentsSchema';

export const docsSchema = baseDocsSchema({
  extend: (context) =>
    z.intersection(
      blogSchema(context),
      z.object({
        tableOfContents: tableOfContentsSchema.optional(),
      })
    ),
});
