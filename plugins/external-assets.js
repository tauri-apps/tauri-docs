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
          tagName: 'meta',
          attributes: {
            property: 'og:type',
            content: 'website'
          },
        },
        {
          tagName: 'meta',
          attributes: {
            property: 'og:url',
            content: context.baseUrl
          },
        },
        {
          tagName: 'meta',
          attributes: {
            property: 'og:image',
            content: context.baseUrl + '/img/social.jpg'
          },
        },
        {
          tagName: 'meta',
          attributes: {
            property: 'twitter:card',
            content: 'summary_large_image'
          },
        },
        {
          tagName: 'meta',
          attributes: {
            property: 'twitter:image',
            content: context.baseUrl + '/img/social.jpg'
          },
        },
      ],
    }
  },
})
