module.exports = (context, options) => ({
  name: 'external-assets',
  injectHtmlTags() {
    return {
      headTags: [
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
            content: context.siteConfig.url + '/img/social.png',
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
            content: context.siteConfig.url + '/img/social.png',
          },
        },
      ],
    }
  },
})
