// Importing a CSS file with @font-face rule was crashing the app
// See https://github.com/webpack-contrib/css-loader/issues/38
module.exports = () => ({
  name: 'fonts-loader',
  configureWebpack() {
    return {
      module: {
        rules: [
          { test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, loader: 'url-loader?limit=100000' },
        ],
      },
    };
  }
})