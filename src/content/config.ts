import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
  schema: {
    date: z.date(),
    title: z.string(),
    summary: z.string().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).optional(),
  },
})

const apiCoreJs1 = defineCollection({
  // slug: ({ defaultSlug }) => {
  //   return `1/${defaultSlug}`
  // },
  schema: {},
})

export const collections = {
  blog,
  'api-core-js-1': apiCoreJs1,
}
