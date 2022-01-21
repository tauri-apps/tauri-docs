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
                src:url('/fonts/themify.eot?-fvbane');
                src:url('/fonts/themify.eot?#iefix-fvbane') format('embedded-opentype'),
                  url('/fonts/themify.woff?-fvbane') format('woff'),
                  url('/fonts/themify.ttf?-fvbane') format('truetype'),
                  url('/fonts/themify.svg?-fvbane#themify') format('svg');
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
