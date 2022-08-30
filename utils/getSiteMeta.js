import global from './global'

export default (meta) => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.siteDescription) || global.siteDescription,
    },
    { hid: 'og:site_name', property: 'og:site_name', content: global.siteName },
    { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
    { hid: 'og:image:height', property: 'og:image:height', content: '675' },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.pageType) || global.pageType,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.sitePath) || global.siteUrl,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.pageTitle) || global.siteName,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.siteDescription) || global.siteDescription,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: (meta && meta.siteOg) || global.siteOg,
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: (meta && meta.sitePath) || global.siteUrl,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.pageTitle) || global.siteName,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.siteDescription) || global.siteDescription,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: (meta && meta.siteOg) || global.siteOg,
    },
  ]
}
