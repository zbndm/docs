export default {
  projectLink : 'https://github.com/tgsnake', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/tgsnake/docs/tree/master/pages', // base URL for the docs repository
  titleSuffix: '',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © butthx.`,
  floatTOC : true,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <span className="font-extrabold text-lg">Tgsnake</span>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <meta name="robots" content="follow, index" /> 
      <meta name="description" content="Telegram MTProto Framework for Typescript/Javascript based on gramjs."/> 
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="tgsnake documentation"/>
      <meta property="og:description" content="Telegram MTProto Framework for Typescript/Javascript based on gramjs." /> 
      <meta property="og:image" content="https://tgsnake.js.org/images/tgsnake.jpg" key="https://tgsnake.js.org/images/tgsnake.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="tgsnake.js.org" /> 
      <meta name="twitter:description" content="Telegram MTProto Framework for Typescript/Javascript based on gramjs." />
      <meta name="twitter:image" content="https://tgsnake.js.org/images/tgsnake.jpg" />
      <meta name="article:author" content="tgsnake"/>
    </>
  ),
  i18n: [{
    locale : "en",
    text : "English"
  },{
    locale : "id",
    text : "Indonesia"
  }],
  unstable_staticImage: true,
  unstable_stork: false,
}