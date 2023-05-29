import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# 기능

<DocCardList items={useCurrentSidebarCategory().items}/>
