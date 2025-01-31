---
title: Debug in Neovim
i18nReady: true
---

There are many different plugins that can be used to debug Rust code in Neovim. This guide will show you how to set up `nvim-dap` and some additional plugins to debug Tauri application.

### Prerequisites

`nvim-dap` extension requires `codelldb` binary. Download the version for your system from https://github.com/vadimcn/codelldb/releases and unzip it. We will point to it later in the `nvim-dap` configuration.

### Configuring nvim-dap

Install [`nvim-dap`](https://github.com/mfussenegger/nvim-dap) and [`nvim-dap-ui`](https://github.com/rcarriga/nvim-dap-ui) plugins. Follow the instructions provided on their github pages or simply use your favourite plugin manager.
Note that `nvim-dap-ui` requires `nvim-nio` plugin.

Next, setup the plugin in your Neovim configuration:

```lua title="init.lua"
local dap = require("dap")

dap.adapters.codelldb = {
  type = 'server',
  port = "${port}",
  executable = {
    -- Change this to your path!
    command = '/opt/codelldb/adapter/codelldb',
    args = {"--port", "${port}"},
  }
}

dap.configurations.rust= {
  {
    name = "Launch file",
    type = "codelldb",
    request = "launch",
    program = function()
      return vim.fn.input('Path to executable: ', vim.fn.getcwd() .. '/target/debug/', 'file')
    end,
    cwd = '${workspaceFolder}',
    stopOnEntry = false
  },
}
```

This setup will ask you to point to the Tauri App binary you want to debug each time you lanuch the debugger.

Optionally, you can setup `nvim-dap-ui` plugin to toggle debugger view automatically each time debugging session starts and stops:

```lua title="init.lua"
local dapui = require("dapui")
dapui.setup()

dap.listeners.before.attach.dapui_config = function()
  dapui.open()
end
dap.listeners.before.launch.dapui_config = function()
  dapui.open()
end
dap.listeners.before.event_terminated.dapui_config = function()
  dapui.close()
end
dap.listeners.before.event_exited.dapui_config = function()
  dapui.close()
end

```

Lastly, you can change the default way the breakpoints are displayed in the editor:

```lua title="init.lua"
vim.fn.sign_define('DapBreakpoint',{ text ='🟥', texthl ='', linehl ='', numhl =''})
vim.fn.sign_define('DapStopped',{ text ='▶️', texthl ='', linehl ='', numhl =''})
```

### Starting the dev server

Since we're not using Tauri CLI to launch the app the development server will not start automatically. To control the state of development server from Neovim you can use the [overseer](https://github.com/stevearc/overseer.nvim/tree/master) plugin.

Best way to control tasks running in background is to use [VS Code style task](https://github.com/stevearc/overseer.nvim/blob/master/doc/guides.md#vs-code-tasks) configuration. To do this create a `.vscode/tasks.json` file in the projects directory.

You can find example task configuration for project using `trunk` below.

```json title=".vscode/tasks.json"
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "process",
      "label": "dev server",
      "command": "trunk",
      "args": ["serve"],
      "isBackground": true,
      "presentation": {
        "revealProblems": "onProblem"
      },
      "problemMatcher": {
        "pattern": {
          "regexp": "^error:.*",
          "file": 1,
          "line": 2
        },
        "background": {
          "activeOnStart": false,
          "beginsPattern": ".*Rebuilding.*",
          "endsPattern": ".*server listening at:.*"
        }
      }
    }
  ]
}
```

### Example key bindings

Below you can find example key bindings to start and control debugging sessions.

```lua title="init.lua"
vim.keymap.set('n', '<F5>', function() dap.continue() end)
vim.keymap.set('n', '<F6>', function() dap.disconnect({ terminateDebuggee = true }) end)
vim.keymap.set('n', '<F10>', function() dap.step_over() end)
vim.keymap.set('n', '<F11>', function() dap.step_into() end)
vim.keymap.set('n', '<F12>', function() dap.step_out() end)
vim.keymap.set('n', '<Leader>b', function() dap.toggle_breakpoint() end)
vim.keymap.set('n', '<Leader>o', function() overseer.toggle() end)
vim.keymap.set('n', '<Leader>R', function() overseer.run_template() end)
```
