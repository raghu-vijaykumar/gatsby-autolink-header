module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sample`,
        path: `./src/content/sample/docs/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        name: `sample`,
        path: `./src/content/sample/docs/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {},
          },
        ],
      },
    },
  ],
};
