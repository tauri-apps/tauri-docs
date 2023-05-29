- - -
sidebar_position: 2
- - -

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'

# Selenium

:::info 示例应用程序
本 [Selenium][] 指南期望您已经完成了 [示例应用程序设置][] 以便一步一步跟进 。 一般性资料可能仍然会有帮助。
:::

此 WebDrive 测试示例将使用 [Selenium][] 和一个流行的 Node.js 测试套装。 您应该已经安装 node.js ， 并且一起安装了 `npm` 或 `yarn` ， [已完成的示例项目][] 使用了 `yarn`.

## 创建测试目录

让我们创建一个空目录用做测试项目。 在此示例项目中我们将使用嵌套目录，因为稍后还将使用其他框架，但通常您只需要使用一个框架。创建接下来我们需要使用的目录。 创建我们将要使用的目录 `mkdir -p webdriver/selenium` 。 指南接下来的部分我们假定您也在目录 `webdriver/selenium` 中完成。

## 初始化 Selenium 项目

我们将使用预设的 `package.j son` 来引导此测试套件，因为我们已经选择了特定的要使用的依赖项，并希望展示一个简单的工作解决方案。 此部分的底部有一个折叠起来的内容，其中有关如何从头开始设置的指南。

`package.json`:

```json
{
  "name": "selenium",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "test": "mocha"
  },
  "dependencies": {
    "chai": "^4.3.4",
    "mocha": "^9.0.3",
    "selenium-webdriver": "^4.0.0-beta.4"
  }
}
```

我们有一个脚本将 [Mocha][] 作为测试框架运行，暴露在 `test` 命令中。 我们还有将用于运行测试的各种依赖项。 [Mocha][] 作为测试框架， [Chai][] 作为断言库， 和 [`selenium-webdriver`][] （Node.js 中的 [Selenium][] 软件包）。

<details><summary>如果你想看到如何从头开始设置一个项目，请点击我</summary>

如果你想从头安装依赖关系，只需运行以下命令。

<Tabs groupId="package-manager"
defaultValue="yarn"
values={[
{label: 'npm', value: 'npm'}, {label: 'Yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```shell
npm install mocha chai selenium-webdriver
```

</TabItem>

<TabItem value="yarn">

```shell
yarn add mocha chai selenium-webdriver
```

</TabItem>
</Tabs>

我建议将 `"test": "mocha"` 命令添加到 `package.json` 的 `"scripts"` 中，这样运行 Mocha 只需要执行

<Tabs groupId="package-manager"
defaultValue="yarn"
values={[
{label: 'npm', value: 'npm'}, {label: 'Yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```shell
npm test
```

</TabItem>

<TabItem value="yarn">

```shell
yarn test
```

</TabItem>
</Tabs>

</details>

## 测试

与 [WebdriverIO 测试套件](webdriverio#config)不同，Selenium不是开箱即用的测试套件，需要开发人员来构建这些内容。 我们选择 [Mocha][], 它是相当中性的，与 WebDrivers 没有关系。 因此我们的脚本需要做一些工作才能以正确的顺序为我们设置所有内容。 [Mocha][] expects a testing file at `test/test.js` by default, so let's create that file now.

`test/test.js`:

```js
const os = require('os')
const path = require('path')
const { expect } = require('chai')
const { spawn, spawnSync } = require('child_process')
const { Builder, By, Capabilities } = require('selenium-webdriver')

// create the path to the expected application binary
const application = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  'target',
  'release',
  'hello-tauri-webdriver'
)

// keep track of the webdriver instance we create
let driver

// keep track of the tauri-driver process we start
let tauriDriver

before(async function () {
  // set timeout to 2 minutes to allow the program to build if it needs to
  this.timeout(120000)

  // ensure the program has been built
  spawnSync('cargo', ['build', '--release'])

  // start tauri-driver
  tauriDriver = spawn(
    path.resolve(os.homedir(), '.cargo', 'bin', 'tauri-driver'),
    [],
    { stdio: [null, process.stdout, process.stderr] }
  )

  const capabilities = new Capabilities()
  capabilities.set('tauri:options', { application })
  capabilities.setBrowserName('wry')

  // start the webdriver client
  driver = await new Builder()
    .withCapabilities(capabilities)
    .usingServer('http://localhost:4444/')
    .build()
})

after(async function () {
  // stop the webdriver session
  await driver.quit()

  // kill the tauri-driver process
  tauriDriver.kill()
})

describe('Hello Tauri', () => {
  it('should be cordial', async () => {
    const text = await driver.findElement(By.css('body > h1')).getText()
    expect(text).to.match(/^[hH]ello/)
  })

  it('should be excited', async () => {
    const text = await driver.findElement(By.css('body > h1')).getText()
    expect(text).to.match(/!$/)
  })

  it('should be easy on the eyes', async () => {
    // selenium returns color css values as rgb(r, g, b)
    const text = await driver
      .findElement(By.css('body'))
      .getCssValue('background-color')

    const rgb = text.match(/^rgb\((?<r>\d+), (?<g>\d+), (?<b>\d+)\)$/).groups
    expect(rgb).to.have.all.keys('r', 'g', 'b')

    const luma = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b
    expect(luma).to.be.lessThan(100)
  })
})
```

If you are familiar with JS testing frameworks, `describe`, `it`, and `expect` should look familiar. We also have semi-complex `before()` and `after()` callbacks to set up and teardown mocha. Lines that are not the tests themselves have comments explaining the setup and teardown code. If you were familiar with the Spec file from the [WebdriverIO example](webdriverio#spec), you notice a lot more code that isn't tests, as we have to set up a few more WebDriver related items.

## Running the Test Suite

Now that we are all set up with our dependencies and our test script, let's run it!

<Tabs groupId="package-manager"
defaultValue="yarn"
values={[
{label: 'npm', value: 'npm'}, {label: 'Yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```shell
npm test
```

</TabItem>

<TabItem value="yarn">

```shell
yarn test
```

</TabItem>
</Tabs>

We should see output the following output:

```text
➜  selenium git:(main) ✗ yarn test
yarn run v1.22.11
$ Mocha


  Hello Tauri
    ✔ should be cordial (120ms)
    ✔ should be excited
    ✔ should be easy on the eyes


  3 passing (588ms)

Done in 0.93s.
```

We can see that our `Hello Tauri` test suite we created with `describe` had all 3 items we created with `it` pass their tests!

With [Selenium][] and some hooking up to a test suite, we just enabled e2e testing without modifying our Tauri application at all!

[Selenium]: https://selenium.dev/
[已完成的示例项目]: https://github.com/chippers/hello_tauri
[示例应用程序设置]: ./setup.md
[Mocha]: https://mochajs.org/
[Chai]: https://www.chaijs.com/
[`selenium-webdriver`]: https://www.npmjs.com/package/selenium-webdriver
