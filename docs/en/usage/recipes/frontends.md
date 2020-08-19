---
title: UI / Frontends
---

import useBaseUrl from '@docusaurus/useBaseUrl'

Let's walk through starting a new application from scratch with Tauri.

This sequence of commands will lead you through a series of interactive prompts to set up your tauri project. We'll go through them one by one, and we're assuming you're using `yarn` for these steps.

## Step 1: Initialize a project
`yarn` will set up your initial `package.json` project file and add tauri as a dependency.
```sh
yarn init
yarn add tauri
```

Now you should have access to Tauri's command line tools, which we will use to initialize a new tauri project with a UI framework initialized for you. The Tauri command we will use is `create`. See the help for `create`:

```sh
> yarn tauri create --help
yarn run v1.22.4
$ /home/user/example/node_modules/.bin/tauri create --help
[tauri]: running create

  Description
    Inits the Tauri template. If Tauri cannot find the tauri.conf.json
    it will create one.
  Usage
    $ tauri create
  Options
    --help, -h           Displays this message
    --ci                 Skip prompts
    --force, -f          Force init to overwrite [conf|template|all]
    --log, -l            Logging [boolean]
    --directory, -d      Set target directory for init
    --tauri-path, -t     Path of the Tauri project to use (relative to the cwd)
    --app-name, -A       Name of your Tauri application
    --window-title, -W   Window title of your Tauri application
    --dist-dir, -D       Web assets location, relative to <project-dir>/src-tauri
    --dev-path, -P       Url of your dev server
    --recipe, -r         Add UI framework recipe. None by default. 
                         Supported recipes: [none|reactjs|reactts]    
Done in 0.28s
```

## Step 2: Apply a Tauri recipe to create your initial project
We'll create a project now using the React with typescript recipe. You may do this in one of two ways:

Using interactive mode:

```sh
> yarn tauri create

yarn run v1.22.4
$ /home/user/react-ex/node_modules/.bin/tauri create
[tauri]: running create
? What is your app name? react-example
? What should the window title be? Example
? Would you like to add a UI recipe? 
  No recipe 
  React.js 
❯ React with Typescript 

```

These selections are equivalent to the following using the command-line arguments:

```sh
> yarn tauri create -r reactts -A react-example -W Example
```

This command will do a lot of work for you, initializing a basic directory structure, installing some NPM dependencies, and creating a react app with configuration necessary for Tauri to connect to it. It may take a couple minutes to complete.

## Step 3: Run your project

```sh
yarn tauri dev
```

You will now see your app launched as a desktop application:

<img src={useBaseUrl('img/recipes/react/react-starter-page.png')} alt="The initial view of a desktop application that you will see at the first run of your recipe. It consists of the Tauri logo and the react logo, with links to the documentation for each project." />

Now you're ready to start making edits to your application UI in the `app-ui` base directory, which will be hot-reloaded as you work.

## Troubleshooting

### Browser launch
Running `yarn tauri dev` will start a development server in your default web browser, in addition to launching the desktop app. For the `react` recipes, you may add the environment variable `BROWSER=none` to stop this behavior. For example in unix/linux systems:

```sh
> BROWSER=none yarn tauri dev
```

will not launch the browser.

### Port conflicts
The react recipe expects the development server to be run on port 3000. If you have something else running on this port, you will see a message after `yarn tauri dev`: 

```
Something is already running on port 3000.
```

If you require a different port, you will have to edit two files:

* `app-ui/package.json`:
The `PORT` environment variable must be set to your preferred port number, for example on unix/linux systems:
```
  "scripts": {
    "start": "PORT=<your-port-number> react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

```

* `src-tauri/tauri.conf.json`:
And the port number must match in this configuration:
```
  "build": {
    "distDir": "../app-ui/build",
    "devPath": "http://localhost:<your-port-number>",
    "beforeDevCommand": "yarn --cwd app-ui start",
    "beforeBuildCommand": "yarn --cwd app-ui build"
  }
```

