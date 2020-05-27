import React from 'react'
import CodeBlock from './CodeBlock'
import classnames from 'classnames'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const storageCommandTabKey = 'docusaurus.storageCommandTabKey'

const types = [
  { tabName: 'Yarn', command: 'yarn' },
  { tabName: 'npm', command: 'npm run' },
  { tabName: 'Global', command: '' },
]

const handleClickTab = (index) =>
  localStorage.setItem(storageCommandTabKey, index)

export default ({ name }) => {
  const tabIndex =
    typeof window === 'undefined'
      ? 0
      : localStorage.getItem(storageCommandTabKey)

  // window.addEventListener('storage', (e) => {
  //   this.setState({ tabIndex: true })
  // })

  return (
    <Tabs
      className="tabs"
      onSelect={handleClickTab}
      defaultIndex={tabIndex}
      selectedTabClassName="tabs__item--active"
    >
      <TabList>
        {types.map((type, index) => (
          <Tab key={index} className={classnames('tabs__item')}>
            {type.tabName}
          </Tab>
        ))}
      </TabList>

      {types.map((type) => (
        <TabPanel>
          <CodeBlock className="language-sh">
            {type.command + (type.command ? ' ' : '') + 'tauri ' + name}
          </CodeBlock>
        </TabPanel>
      ))}
    </Tabs>
  )
}
