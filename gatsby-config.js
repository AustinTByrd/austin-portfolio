module.exports = {
  siteMetadata: {
    title: `Austin Byrd's Portfolio`,
    name: `Austin`,
    siteUrl: `https://novela.narative.co`,
    description: `Austin Byrd is a product designer based in Seattle, Washington.`,
    hero: {
      heading: `Hi there! I'm a product designer currently based in Seattle. Check out my public work below.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/austintbyrd`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/austintbyrd`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
