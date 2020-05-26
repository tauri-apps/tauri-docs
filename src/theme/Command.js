import React from 'react'
import CodeBlock from './CodeBlock'
import classnames from 'classnames'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const storageCommandTabKey = 'docusaurus.storageCommandTabKey'

const types = [
  { tabName: 'Yarn', command: 'yarn' },
  { tabName: 'npm', command: 'npx' },
  { tabName: 'Global', command: '' },
]

const handleClickTab = (index) => {
  console.log(index)

  localStorage.setItem(storageCommandTabKey, index)
}

export default ({ name }) => {
  const tabIndex = localStorage.getItem(storageCommandTabKey)

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
