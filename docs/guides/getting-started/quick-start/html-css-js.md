import TauriInit from './\_tauri-init.mdx';
import Commands from './\_commands.mdx';

# HTML/CSS/JS

This guide will walk you through creating your first Tauri app using just HTML, CSS, and JavaScript. This is probably the best place to start if you are new to web development.

<TauriInit
  webAssets="For the sake of this tutorial we will answer this with '../ui'."
  devServer="Because we don't use a frontend bundler with Hot Module Reloading (HMR) for this tutorial we will answer with the same path as the previous question: '../ui'."
/>

## Create the Frontend

Now we will create a very minimal UI using HTML.

To get started, create the folder relative to the tauri-src folder you specified when prompted by `tauri init` (we assume for this tutorial you answered with `../ui`).

Next, create an `index.html` file inside of that folder with the following contents:

```html title=index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Welcome from Tauri!</h1>
  </body>
</html>
```

It will serve as the entrypoint to our frontend.

And that's it! Now you can run the following command in your terminal to start a development build of your app:

```shell
tauri dev
```

<!-- TODO: SCREENSHOT -->

## Invoke Commands

<Commands />

You can now modify your `index.html` file to call your Command:

```html title=index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Welcome from Tauri!</h1>
    // highlight-start
    <script>
      // access the pre-bundled global API functions
      const invoke = window.__TAURI__.invoke

      // now we can call our Command!
      var command = invoke('greet', { name: 'World' })

      // Right-click the application background and open the developer tools.
      // You will see "Hello, World!" printed in the console!
      console.log(commend)
    </script>
    // highlight-end
  </body>
</html>
```

[cargo]: https://doc.rust-lang.org/cargo/
[prerequisites]: ../prerequisites.md
[tauri-cli]: ../tauri-cli.md
