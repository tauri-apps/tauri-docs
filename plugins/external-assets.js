module.exports = (context, options) => ({
  name: 'external-assets',
  injectHtmlTags() {
    return {
      headTags: [
        {
          tagName: 'script',
          attributes: {
            src: 'https://media.ethicalads.io/media/client/ethicalads.min.js',
            integrity:
              'sha384-aknaiHvFTHEWF+wCecfxpWFpZefI8TqBdbDlOojZF8UsVyuU8gb6bPTMNjAX6GPv',
            crossorigin: 'anonymous',
            async: 'async',
          },
        },
      ],
    }
  },
})
