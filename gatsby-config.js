const defaultConfig = require("./config");
const path = require("path");

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = (themeOptions) => {
  const config = Object.assign(defaultConfig, themeOptions);

  return {
    siteMetadata: config,
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-remark",
        "gatsby-transformer-yaml",
        "gatsby-plugin-image",
        {
          resolve: 'gatsby-plugin-manifest',
          options: {
            "icon": "static/images/favicon.png"
          }
        },
        {
            resolve: "gatsby-transformer-yaml",
            options: {
                resolve: `gatsby-source-filesystem`,
                options: {
                    path: `content`,
                },
            },
        },
        {
            resolve: `gatsby-plugin-remote-images`,
            options: {
                nodeType: 'OrganizersYaml',
                imagePath: 'image',
                name: 'imageProcessed',
            },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            "name": "images",
            "path": `./static/images/`
          },
          __key: "images"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./content/speakers`,
                name: "speaker"
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./content/talks`,
                name: "talk"
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./content/pages`,
                name: "page"
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./content/`,
            },
        }]
  }
};