import type { MarkdownHeading } from 'astro'

export type Heading = MarkdownHeading

export type BlogMetadata = {}

export type Page = {
  title: string
  description?: string
  image?: string
  darkImage?: string
  href: string
}
