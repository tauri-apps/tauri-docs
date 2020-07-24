module.exports = (context, options) => ({
  name: 'external-assets',
  injectHtmlTags() {
    return {
      headTags: [
        {
          tagName: 'script',
          attributes: {
            src: '/js/ethicalads.min.js'
          },
        },
      ],
    }
  },
})
