const defaultConfig = require("../gatsby-theme-conferencer/config");
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = (themeOptions) => {
  const config = Object.assign(defaultConfig, themeOptions);

  return {
    siteMetadata: config,
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
          resolve: 'gatsby-plugin-manifest',
          options: {
            "icon": "content/images/favicon-32x32.png"
          }
        },
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-transformer-yaml",
            options: {
                resolve: `gatsby-source-filesystem`,
                options: {
                    path: `content`,
                },
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            "name": "images",
            "path": "./content/images/"
          },
          __key: "images"
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            "name": "pages",
            "path": "./content/pages/"
          },
          __key: "pages"
        },
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./content/`,
            },
        }]
  }
};