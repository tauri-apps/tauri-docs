module.exports = (context, options) => ({
  name: 'external-assets',
  injectHtmlTags() {
    return {
      headTags: [
        // {
        //   tagName: 'script',
        //   attributes: {
        //     src: context.baseUrl + 'js/ethicalads.min.js',
        //   },
        // },
        {
          tagName: 'script',
          attributes: {
            src: context.baseUrl + 'js/lottie-player.js',
          },
        },
      ],
    }
  },
})
