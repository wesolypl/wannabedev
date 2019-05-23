const path = require("path");
module.exports = {
  siteMetadata: {
    title: `Wanna be Dev`,
    description: ``,
    author: `@wesolypl`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        assets: path.join(__dirname, "src/asstes"),
        templates: path.join(__dirname, "src/templates"),
        components: path.join(__dirname, "src/components"),
        images: path.join(__dirname, "src/assets/images"),
        fonts: path.join(__dirname, "src/assets/fonts"),
        styles: path.join(__dirname, "src/assets/styles"),
        utils: path.join(__dirname, "src/utils")
      }
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: true
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\assets\images/ // See below to configure properly
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "wbd",
        // This is field under which it's accessible
        fieldName: "wbd",
        // Url to query from
        url:
          "https://api-euwest.graphcms.com/v1/cjv9muxkh0oev01ghjlldezsl/master"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
