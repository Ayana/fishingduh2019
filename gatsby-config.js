module.exports = {
  siteMetadata: {
    title: `Fishingduh`,
    description: `Fishingduh`,
    author: `@fishingduh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
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
        // icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TBKKX9R",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      // Plugin: gatsby-source-instagram - Insta.js
      resolve: `gatsby-source-instagram`,
      options: {
        username: `fishingduh`,
        // access_token: "2073134132.d1bad15.faf29b1f4d204935a64b22416267da36",
        // instagram_id: "misawayanohanashi",
      },
    },  
    // {
    //   // Plugin: gatsby-source-instagram-all - Insta.js
    //   resolve: `gatsby-source-instagram-all`,
    //   options: {
    //     access_token: "2073134132.d1bad15.faf29b1f4d204935a64b22416267da36"
    //   }
    // }
    `gatsby-plugin-sass`,
   // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
