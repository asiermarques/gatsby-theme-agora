const defaultConfig = require("./config");
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
            "icon": "static/images/favicon.png"
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
            resolve: `gatsby-plugin-remote-images`,
            options: {
                nodeType: 'OrganizersYaml',
                imagePath: 'image',
                // OPTIONAL: Name you want to give new image field on the node.
                name: 'imageProcessed',
            },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            "name": "images",
            "path": `${__dirname}/static/images/`
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