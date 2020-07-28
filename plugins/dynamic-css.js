module.exports = function (context, { language }) {
  return {
    name: 'dynamic-css',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'style',
            attributes: {
              id: 'dynamic-css',
            },
            innerHTML: `
              @font-face {
                font-family: 'themify';
                src:url('/${language}/fonts/themify.eot?-fvbane');
                src:url('/${language}/fonts/themify.eot?#iefix-fvbane') format('embedded-opentype'),
                  url('/${language}/fonts/themify.woff?-fvbane') format('woff'),
                  url('/${language}/fonts/themify.ttf?-fvbane') format('truetype'),
                  url('/${language}/fonts/themify.svg?-fvbane#themify') format('svg');
                font-weight: normal;
                font-style: normal;
              }
            `,
          },
        ],
      }
    },
  }
}
