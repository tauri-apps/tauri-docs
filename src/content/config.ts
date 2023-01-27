import { z, defineCollection } from 'astro:content'

const api = defineCollection({})

const blog = defineCollection({
  slug: ({ defaultSlug, data }) => {
    const year = data.date.getFullYear()
    const month = String(data.date.getMonth() + 1).padStart(2, '0')
    const day = String(data.date.getDate() + 1).padStart(2, '0')

    return `${year}/${month}/${day}/${defaultSlug}`
  },
  schema: z.object({
    date: z.date(),
    title: z.string(),
    summary: z.string().optional(),
    imageSrc: z.string().optional(),
    imageDarkSrc: z.string().optional(),
    author: z.union([z.array(z.string()), z.string()]).optional(),
  }),
})

const docs = defineCollection({})

export const collections = {
  blog,
  docs,
  api,
}
