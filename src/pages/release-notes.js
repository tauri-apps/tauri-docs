import React from 'react'
import Layout from '@theme/Layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ReactMarkdown from 'react-markdown'
import debounce from '../utils/debounce'

import 'react-tabs/style/react-tabs.css'
import styles from './styles.module.css'

const packagesData = [{
  label: 'Bundler',
  changelogUrl: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/cli/tauri-bundler/CHANGELOG.md'
}, {
  label: 'Node.js CLI',
  changelogUrl: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/cli/tauri.js/CHANGELOG.md'
}, {
  label: 'Rust core',
  changelogUrl: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tauri/CHANGELOG.md'
}, {
  label: 'Rust API',
  changelogUrl: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tauri-api/CHANGELOG.md'
}]

function fetchChangelog(url) {
  return fetch(url).then(response => response.text()).then(changelog => {
    const [_, ...versionsChangelog] = changelog.split('## ')
    return versionsChangelog.map(versionChangelog => {
      const [version, ...contents] = versionChangelog.split("\n")
      return {
        version: version.replace('[', '').replace(']', ''),
        notes: contents.filter(line => !!line).join("\n")
      }
    })
  })
}

function Changelog(changelogs) {
  return (
    <Tabs className={styles.verticalTabs}>
      <TabList className={styles.verticalTabList}>
        {
          changelogs.map(({ version }) => (
            <Tab key={version}>{version}</Tab>
          ))
        }
      </TabList>

      {
        changelogs.map(({ version, notes }) => (
          <TabPanel key={version}>
            <ReactMarkdown source={notes} />
          </TabPanel>
        ))
      }
    </Tabs>
  )
}

function ReleaseNotes() {
  const [packages, setPackages] = React.useState(packagesData)
  const [searchedPackages, setSearchedPackages] = React.useState([...packagesData])
  const [searchTerm, setSearchTerm] = React.useState('')

  function mutatePackage(packageData, index, mutation) {
    setSearchTerm('')

    const cb = prevPackages => {
      const newPackages = [...prevPackages]
      newPackages[index] = {
        ...packageData,
        ...mutation
      }
      return newPackages
    }

    setPackages(cb)
    setSearchedPackages(cb)
  }

  function loadPackageChangelog(index) {
    const data = packages[index]

    if (data.changelog) {
      return
    }

    fetchChangelog(data.changelogUrl).then(changelog => {
      mutatePackage(data, index, { changelog })
    })
  }

  React.useEffect(() => {
    packages.forEach((_, index) => loadPackageChangelog(index))
  }, [])

  const onSearch = React.useCallback(debounce(value => {
    if (value) {
      const resultPackages = [...packages].map(data => {
        return {
          ...data,
          changelog: data.changelog ? data.changelog.filter(
            changelog => changelog.version.includes(value) || changelog.notes.toLowerCase().includes(value.toLowerCase())
          ) : []
        }
      }).filter(data => data.changelog.length > 0)
      setSearchedPackages(resultPackages)
    } else {
      setSearchedPackages(packages)
    }
  }, 300), [packages])

  function onSearchInput (e) {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <Layout title="Release notes" id="release-notes">
      <div className="container margin-vert--lg">
        <h1 className="text--center margin-bottom--xl">Release notes</h1>
        <div className={styles.changelogSearchContainer}>
          <input className={styles.changelogSearchInput} placeholder="Search..." value={searchTerm} onChange={onSearchInput}/>
        </div>
        {
          searchedPackages.length ? <Tabs>
            <TabList>
              {
                searchedPackages.map(({ label }) => (
                  <Tab key={label}>{label}</Tab>
                ))
              }
            </TabList>

            {
              searchedPackages.map(({ label, changelog }) => (
                <TabPanel key={label}>
                  {
                    changelog ? Changelog(changelog) : <div>Loading...</div>
                  }
                </TabPanel>
              ))
            }
          </Tabs> : <div>Search term doesn't match any release notes</div>
        }
      </div>
    </Layout>
  )
}

export default ReleaseNotes
