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
        {
          tagName: 'meta',
          attributes: {
            property: 'og:type',
            content: 'website',
          },
        },
        {
          tagName: 'meta',
          attributes: {
            property: 'og:url',
            content: context.siteConfig.url,
          },
        },
        {
          tagName: 'meta',
          attributes: {
            property: 'og:image',
            content: context.siteConfig.url + '/img/social.jpg',
          },
        },
        {
          tagName: 'meta',
          attributes: {
            property: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tagName: 'meta',
          attributes: {
            property: 'twitter:image',
            content: context.siteConfig.url + '/img/social.jpg',
          },
        },
      ],
    }
  },
})
