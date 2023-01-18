function initTabs(tabList: HTMLElement) {
  let tabs: HTMLElement[] = Array.from(tabList.querySelectorAll('[role=tab]'))
  let selectTab = (selected: HTMLElement) => {
    for (let tab of tabs) {
      let panel = document.getElementById(tab.getAttribute('aria-controls')!)!
      if (tab === selected) {
        tab.setAttribute('aria-selected', 'true')
        tab.removeAttribute('tabindex')
        panel.removeAttribute('hidden')
      } else {
        tab.setAttribute('aria-selected', 'false')
        tab.tabIndex = -1
        panel.hidden = true
      }
    }
  }

  let onKeydown = (event: KeyboardEvent) => {
    let tab = event.currentTarget as HTMLElement
    let index = Number(tab.dataset.index)
    let next_index: number | undefined = undefined

    switch (event.key) {
      case 'ArrowLeft':
        next_index = index - 1 < 0 ? tabs.length - 1 : index - 1
        break
      case 'ArrowRight':
        next_index = index + 1 > tabs.length - 1 ? 0 : index + 1
        break
      case 'Home':
        next_index = 0
        break
      case 'End':
        next_index = tabs.length - 1
        break
      default:
        break
    }

    if (next_index !== undefined) {
      tabs[next_index].focus()
      event.stopPropagation()
      event.preventDefault()
    }
  }

  let firstTab: HTMLElement | undefined = undefined
  for (let index in tabs) {
    let tab = tabs[index]
    if (!firstTab) {
      firstTab = tab
    }

    tab.tabIndex = -1
    tab.setAttribute('aria-selected', 'false')
    tab.setAttribute('data-index', index)

    // TODO: implement roving tabindex that handles keyboard focus change properly
    tab.addEventListener('keydown', onKeydown)
    tab.addEventListener('click', (event: MouseEvent) => {
      selectTab(event.currentTarget as HTMLElement)
    })
  }

  selectTab(firstTab!)
}

for (let tabList of document.querySelectorAll(
  '[role=tablist][data-docs-tablist]'
)) {
  initTabs(tabList as HTMLElement)
}

// Without this Typescript complains about not being able to compile this under --isolatedModules
export {};
