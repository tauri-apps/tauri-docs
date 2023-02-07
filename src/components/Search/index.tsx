import { DocSearch } from 'meilisearch-docsearch/solid'
import type { Component } from 'solid-js'

const Search: Component<{ lang: string }> = ({ lang }) => {
  return (
    <DocSearch
      host="https://ms-a1a1d899778e-1619.fra.meilisearch.io"
      apiKey="2cd51aecd5cbb326d9abaf5b95393e92009ac8a795bb928a21be0550449b797c"
      indexUid="docs-dev"
      searchParams={{ filter: [`lang = ${lang}`] }}
    />
  )
}

export default Search
