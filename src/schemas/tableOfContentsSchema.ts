import { z } from 'astro:content';
import { TableOfContentsSchema as BaseTableOfContentsSchema } from 'node_modules/@astrojs/starlight/schemas/tableOfContents';

const tableOfContentsDefaults = {
  collapseLevel: 1,
  minHeadingLevel: 2,
  maxHeadingLevel: 3,
};

export const tableOfContentsSchema = z.intersection(
  BaseTableOfContentsSchema(),
  z.union([
    z.object({
      collapseLevel: z.number().min(0).default(1).optional(),
    }),
    z.boolean().transform((enabled) => (enabled ? tableOfContentsDefaults : false)),
  ])
);
