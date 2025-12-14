---
title: Window Menu
tableOfContents:
  maxHeadingLevel: 4
i18nReady: true
---

import { Tabs, TabItem } from '@astrojs/starlight/components';

Native application menus can be attached to both to a window or system tray. Available on desktop.

## Creating a base-level menu

To create a base-level native window menu, and attach to a window. You can create various types of menu items including basic items, check items, and separators:

<Tabs>
<TabItem label="JavaScript">

Use the [`Menu.new`] static function to create a window menu:

```javascript
import { Menu } from '@tauri-apps/api/menu';

const menu = await Menu.new({
  items: [
    {
      id: 'quit',
      text: 'Quit',
      action: () => {
        console.log('quit pressed');
      },
    },
    {
      id: 'check_item',
      text: 'Check Item',
      checked: true,
    },
    {
      type: 'Separator',
    },
    {
      id: 'disabled_item',
      text: 'Disabled Item',
      enabled: false,
    },
    {
      id: 'status',
      text: 'Status: Processing...',
    },
  ],
});

// If a window was not created with an explicit menu or had one set explicitly,
// this menu will be assigned to it.
menu.setAsAppMenu().then(async (res) => {
  console.log('menu set success', res);

  // Update individual menu item text
  const statusItem = await menu.get('status');
  if (statusItem) {
    await statusItem.setText('Status: Ready');
  }
});
```

</TabItem>

<TabItem label="Rust">

```rust
use tauri::menu::MenuBuilder;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let menu = MenuBuilder::new(app)
                .text("open", "Open")
                .text("close", "Close")
                .check("check_item", "Check Item")
                .separator()
                .text("disabled_item", "Disabled Item")
                .text("status", "Status: Processing...")
                .build()?;

            app.set_menu(menu.clone())?;

            // Update individual menu item text
            menu
                .get("status")
                .unwrap()
                .as_menuitem_unchecked()
                .set_text("Status: Ready")?;

            Ok(())
        })
        .run(tauri::generate_context!());
}
```

</TabItem>
</Tabs>

## Listening to events on custom menu items

Each custom menu item triggers an event when clicked. Use the `on_menu_event` API to handle them.

<Tabs>
<TabItem label="JavaScript">

```javascript
import { Menu } from '@tauri-apps/api/menu';

const menu = await Menu.new({
  items: [
    {
      id: 'Open',
      text: 'open',
      action: () => {
        console.log('open pressed');
      },
    },
    {
      id: 'Close',
      text: 'close',
      action: () => {
        console.log('close pressed');
      },
    },
  ],
});

await menu.setAsAppMenu();
```

</TabItem>

<TabItem label="Rust">

```rust
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::menu::{MenuBuilder};

fn main() {
  tauri::Builder::default()
        .setup(|app| {
            let menu = MenuBuilder::new(app)
                .text("open", "Open")
                .text("close", "Close")
                .build()?;

            app.set_menu(menu)?;

            app.on_menu_event(move |app_handle: &tauri::AppHandle, event| {

                println!("menu event: {:?}", event.id());

                match event.id().0.as_str() {
                    "open" => {
                        println!("open event");
                    }
                    "close" => {
                        println!("close event");
                    }
                    _ => {
                        println!("unexpected menu event");
                    }
                }
            });

            Ok(())
        })
}
```

</TabItem>
</Tabs>

## Creating a multi-level menu

Multi-level menus allow you to group menu items under categories like "File," "Edit," etc. These will appear as part of the application window for Windows or Linux, or in the menu bar on MacOS.

**Note:** When using submenus on MacOS, all items must be grouped under a submenu. Top-level items will be ignored. Additionally, the first submenu will be placed under the application's about menu by default, regardless of the `text` label. You should include a submenu as the first entry (say, an "About" submenu) to fill this space.

:::note
Icon support for submenus is available since Tauri 2.8.0.
:::

<Tabs>
<TabItem label="JavaScript">

```javascript
import { Menu, MenuItem, Submenu } from '@tauri-apps/api/menu';

// Will become the application submenu on MacOS
const aboutSubmenu = await Submenu.new({
  text: 'About',
  items: [
    await MenuItem.new({
      id: 'quit',
      text: 'Quit',
      action: () => {
        console.log('Quit pressed');
      },
    }),
  ],
});

const fileSubmenu = await Submenu.new({
  text: 'File',
  icon: 'folder', // Optional: Add an icon to the submenu
  items: [
    await MenuItem.new({
      id: 'new',
      text: 'New',
      action: () => {
        console.log('New clicked');
      },
    }),
    await MenuItem.new({
      id: 'open',
      text: 'Open',
      action: () => {
        console.log('Open clicked');
      },
    }),
    await MenuItem.new({
      id: 'save_as',
      text: 'Save As...',
      action: () => {
        console.log('Save As clicked');
      },
    }),
  ],
});

const editSubmenu = await Submenu.new({
  text: 'Edit',
  items: [
    await MenuItem.new({
      id: 'undo',
      text: 'Undo',
      action: () => {
        console.log('Undo clicked');
      },
    }),
    await MenuItem.new({
      id: 'redo',
      text: 'Redo',
      action: () => {
        console.log('Redo clicked');
      },
    }),
  ],
});

const menu = await Menu.new({
  items: [aboutSubmenu, fileSubmenu, editSubmenu],
});

menu.setAsAppMenu();

// You can also update the submenu icon dynamically
fileSubmenu.setIcon('document');
// Or set a native icon (only one type applies per platform)
fileSubmenu.setNativeIcon('NSFolder');
```

</TabItem>

<TabItem label="Rust">

```rust
use tauri::{
    image::Image,
    menu::{CheckMenuItemBuilder, IconMenuItemBuilder, MenuBuilder, SubmenuBuilder},
};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let menu_image = Image::from_bytes(include_bytes!("../icons/menu.png")).unwrap();
            let file_menu = SubmenuBuilder::new(app, "File")
                .submenu_icon(menu_image) // Optional: Add an icon to the submenu
                .text("open", "Open")
                .text("quit", "Quit")
                .build()?;

            let lang_str = "en";
            let check_sub_item_1 = CheckMenuItemBuilder::new("English")
                .id("en")
                .checked(lang_str == "en")
                .build(app)?;

            let check_sub_item_2 = CheckMenuItemBuilder::new("Chinese")
                .id("en")
                .checked(lang_str == "en")
                .enabled(false)
                .build(app)?;

            // Load icon from path
            let icon_image = Image::from_bytes(include_bytes!("../icons/icon.png")).unwrap();

            let icon_item = IconMenuItemBuilder::new("icon")
                .icon(icon_image)
                .build(app)?;

            let other_item = SubmenuBuilder::new(app, "language")
                .item(&check_sub_item_1)
                .item(&check_sub_item_2)
                .build()?;

            let menu = MenuBuilder::new(app)
                .items(&[&file_menu, &other_item, &icon_item])
                .build()?;

            app.set_menu(menu)?;

            let menu_image_update =
                Image::from_bytes(include_bytes!("../icons/menu_update.png")).unwrap();
            // You can also update the submenu icon dynamically
            file_menu.set_icon(Some(menu_image_update))?;
            // Or set a native icon (only one type applies per platform)
            file_menu.set_native_icon(Some(tauri::menu::NativeIcon::Folder))?;

            Ok(())
        })
        .run(tauri::generate_context!());
}
```

Note that you need to enable `image-ico` or `image-png` feature to use this API:

```toml title="src-tauri/Cargo.toml"
[dependencies]
tauri = { version = "...", features = ["...", "image-png"] }
```

</TabItem>
</Tabs>

## Creating predefined menu

To use built-in (native) menu items that has predefined behavior by the operating system or Tauri:

<Tabs>
<TabItem label="JavaScript">

```javascript
import { Menu, PredefinedMenuItem } from '@tauri-apps/api/menu';

const copy = await PredefinedMenuItem.new({
  text: 'copy-text',
  item: 'Copy',
});

const separator = await PredefinedMenuItem.new({
  text: 'separator-text',
  item: 'Separator',
});

const undo = await PredefinedMenuItem.new({
  text: 'undo-text',
  item: 'Undo',
});

const redo = await PredefinedMenuItem.new({
  text: 'redo-text',
  item: 'Redo',
});

const cut = await PredefinedMenuItem.new({
  text: 'cut-text',
  item: 'Cut',
});

const paste = await PredefinedMenuItem.new({
  text: 'paste-text',
  item: 'Paste',
});

const select_all = await PredefinedMenuItem.new({
  text: 'select_all-text',
  item: 'SelectAll',
});

const menu = await Menu.new({
  items: [copy, separator, undo, redo, cut, paste, select_all],
});

await menu.setAsAppMenu();
```

</TabItem>

<TabItem label="Rust">

```rust
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::menu::{MenuBuilder, PredefinedMenuItem};

fn main() {
  tauri::Builder::default()
        .setup(|app| {
      let menu = MenuBuilder::new(app)
                .copy()
                .separator()
                .undo()
                .redo()
                .cut()
                .paste()
                .select_all()
                .item(&PredefinedMenuItem::copy(app, Some("custom text"))?)
                .build()?;
            app.set_menu(menu)?;

            Ok(())
        })
}
```

For more preset capabilities, please refer to the documentation [`PredefinedMenuItem`].

:::tip
The menu builder has dedicated methods to add each predefined menu item so you can call `.copy()` instead of `.item(&PredefinedMenuItem::copy(app, None)?)`.
:::

</TabItem>
</Tabs>

## Change menu status

If you want to change the status of the menu, such as text, icon, or check status, you can `set_menu` again:

<Tabs>
<TabItem label="JavaScript">

```javascript
import {
  Menu,
  CheckMenuItem,
  IconMenuItem,
  MenuItem,
} from '@tauri-apps/api/menu';
import { Image } from '@tauri-apps/api/image';

let currentLanguage = 'en';

const check_sub_item_en = await CheckMenuItem.new({
  id: 'en',
  text: 'English',
  checked: currentLanguage === 'en',
  action: () => {
    currentLanguage = 'en';
    check_sub_item_en.setChecked(currentLanguage === 'en');
    check_sub_item_zh.setChecked(currentLanguage === 'cn');
    console.log('English pressed');
  },
});

const check_sub_item_zh = await CheckMenuItem.new({
  id: 'zh',
  text: 'Chinese',
  checked: currentLanguage === 'zh',
  action: () => {
    currentLanguage = 'zh';
    check_sub_item_en.setChecked(currentLanguage === 'en');
    check_sub_item_zh.setChecked(currentLanguage === 'zh');
    check_sub_item_zh.setAccelerator('Ctrl+L');
    console.log('Chinese pressed');
  },
});

// Load icon from path
const icon = await Image.fromPath('../src/icon.png');
const icon2 = await Image.fromPath('../src/icon-2.png');

const icon_item = await IconMenuItem.new({
  id: 'icon_item',
  text: 'Icon Item',
  icon: icon,
  action: () => {
    icon_item.setIcon(icon2);
    console.log('icon pressed');
  },
});

const text_item = await MenuItem.new({
  id: 'text_item',
  text: 'Text Item',
  action: () => {
    text_item.setText('Text Item Changed');
    console.log('text pressed');
  },
});

const menu = await Menu.new({
  items: [
    {
      id: 'change menu',
      text: 'change_menu',
      items: [text_item, check_sub_item_en, check_sub_item_zh, icon_item],
    },
  ],
});

await menu.setAsAppMenu();
```

</TabItem>

<TabItem label="Rust">

```rust
// change-menu-status
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{
    image::Image,
    menu::{CheckMenuItemBuilder, IconMenuItem, MenuBuilder, MenuItem, SubmenuBuilder},
};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let check_sub_item_en = CheckMenuItemBuilder::with_id("en", "EN")
                .checked(true)
                .build(app)?;

            let check_sub_item_zh = CheckMenuItemBuilder::with_id("zh", "ZH")
                .checked(false)
                .build(app)?;

            let text_menu = MenuItem::with_id(
                app,
                "change_text",
                &"Change menu".to_string(),
                true,
                Some("Ctrl+Z"),
            )
            .unwrap();

            let icon_menu = IconMenuItem::with_id(
                app,
                "change_icon",
                &"Change icon menu",
                true,
                Some(Image::from_bytes(include_bytes!("../icons/icon.png")).unwrap()),
                Some("Ctrl+F"),
            )
            .unwrap();

            let menu_item = SubmenuBuilder::new(app, "Change menu")
                .item(&text_menu)
                .item(&icon_menu)
                .items(&[&check_sub_item_en, &check_sub_item_zh])
                .build()?;
            let menu = MenuBuilder::new(app).items(&[&menu_item]).build()?;
            app.set_menu(menu)?;
            app.on_menu_event(move |_app_handle: &tauri::AppHandle, event| {
                match event.id().0.as_str() {
                    "change_text" => {
                        text_menu
                            .set_text("changed menu text")
                            .expect("Change text error");

                        text_menu
                            .set_text("changed menu text")
                            .expect("Change text error");
                    }
                    "change_icon" => {
                        icon_menu
                            .set_text("changed menu-icon text")
                            .expect("Change text error");
                        icon_menu
                            .set_icon(Some(
                                Image::from_bytes(include_bytes!("../icons/icon-2.png")).unwrap(),
                            ))
                            .expect("Change icon error");
                    }

                    "en" | "zh" => {
                        check_sub_item_en
                            .set_checked(event.id().0.as_str() == "en")
                            .expect("Change check error");
                        check_sub_item_zh
                            .set_checked(event.id().0.as_str() == "zh")
                            .expect("Change check error");
                        check_sub_item_zh.set_accelerator(Some("Ctrl+L"))
                        .expect("Change accelerator error");
                    }
                    _ => {
                        println!("unexpected menu event");
                    }
                }
            });

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

```

</TabItem>
</Tabs>

[`PredefinedMenuItem`]: https://docs.rs/tauri/latest/tauri/menu/struct.PredefinedMenuItem.html
[`Menu.new`]: https://v2.tauri.app/reference/javascript/api/namespacemenu/#new-2
