import React, { useEffect } from 'react'
import classNames from 'classnames'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import 'docs-searchbar.js/dist/cdn/docs-searchbar.min.css'
import styles from './searchbar.module.css'
import Icon from '@theme/Icon'

const SearchBar = ({className}) => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  useEffect(() => {
    const docsSearchBar = require('docs-searchbar.js').default
    docsSearchBar({
      hostUrl: 'https://search2.tauri.studio',
      apiKey:
        'XZEH8BS90ee09c45215a8421c06857bcbde5c1a6797bdf4859a57a3ac1228a2b81df0994',
      indexUid: 'consolidated',
      inputSelector: '#search-bar-input',
      debug: process.env.NODE_ENV === 'development',
      /* transformData(hits) {
        return hits.map((hit) => ({ ...hit, url: '/docs/' + hit.url }))
      }, */
    })
  }, [])
  return (
    <div className={classNames(className, 'SearchBar', 'meilisearch-search-wrapper', styles.searchWrapper)}>
      <Icon title="search" className={classNames(styles.searchIcon)}/>
      <input
        placeholder="Search..."
        type="text"
        className={classNames(styles.search)}
        id="search-bar-input"
      />
    </div>
  )
}

export default SearchBar
