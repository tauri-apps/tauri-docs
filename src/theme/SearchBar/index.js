import React, { useEffect } from 'react'
import './style.css'
import 'meilisearch-docsearch/css'

export default function Component() {
  useEffect(() => {
    const lang = document.querySelector('html').lang || 'en'

    const docsearch = require('meilisearch-docsearch').default
    const destroy = docsearch({
      host: 'https://ms-2b6734516304-1619.fra.meilisearch.io',
      apiKey:
        '3220cad62c542233c11b77ef8cea268dd56b52444b76e2ae52f86c35505a86d0',
      indexUid: 'docs-v1',
      container: '#docsearch',
      searchParams: { filter: [`lang = ${lang}`] },
    })

    return () => destroy()
  }, [])

  return <div id="docsearch" />
}
