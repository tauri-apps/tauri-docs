import React, {useEffect} from 'react'
import 'docs-searchbar.js/dist/cdn/docs-searchbar.min.css'

const SearchBar = () => {
  useEffect(() => {
    const docsSearchBar = require('docs-searchbar.js').default
    docsSearchBar({
      hostUrl: 'https://demos.meilisearch.com',
      apiKey:
        'dc3fedaf922de8937fdea01f0a7d59557f1fd31832cb8440ce94231cfdde7f25',
      indexUid: 'steam-video-games',
      inputSelector: '#search-bar-input',
      debug: process.env.NODE_ENV === 'development', // Set debug to true if you want to inspect the dropdown
      transformData: function (values) {
        return values.map((value) => ({ lvl0: value.name, lvl1: '' }))
      },
    })
  }, [])
  return (
    <div>
      <input type="search" id="search-bar-input" />
    </div>
  )
}

export default SearchBar
