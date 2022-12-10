import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList'
import { useCurrentSidebarCategory } from '@docusaurus/theme-common'

# Prerequisites

The first step is to install [Rust](https://www.rust-lang.org) and system dependencies. Keep in mind that this setup is only needed for _developing Tauri apps_. Your end-users are not required to do any of this.

Select the operating system on which you are installing Tauri:

<DocCardList items={useCurrentSidebarCategory().items.map(i => {const label = i.label.replace('Setting Up ', ''); return {...i, label, customProps: { doc_card_image: `/img/guides/getting-started/setup/${label}.svg` }}})} />
