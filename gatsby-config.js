module.exports = {
  siteMetadata: {
    title: `MadeFIX`,
    description: `Ремонт ПК и Ноутбуков в Невинномысске. Лучшая цена. Высокое качество. Индивидуальный подход к каждому клиенту`,
    author: `@madefix`,
     siteUrl: `https://madefix.netlify.com/`,
  },
  plugins: [
    {
  resolve: `gatsby-plugin-sitemap`,
  options: {
    output: `/sitemap.xml`,
    sitemapSize: 5000,
    // Exclude specific pages or groups of pages using glob parameters
    // See: https://github.com/isaacs/minimatch
    // The example below will exclude the single `path/to/page` and all routes beginning with `category`
    exclude: ["/category/*", `/path/to/page`],
    query: `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }

        allSitePage {
          edges {
            node {
              path
            }
          }
        }
    }`,
    serialize: ({ site, allSitePage }) =>
      allSitePage.edges.map(edge => {
        return {
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: `daily`,
          priority: 0.7,
        }
      })
  }
},
{
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: null,
        sitemap: 'https://madefix.netlify.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // spaceId: process.env.CONTENTFUL_SPACE_ID,
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: `14k0g2xx4l2z`,
        accessToken: `4zNr8PRicZTiTkOFmxXI6tabwf9vE1zZ32nJsCb0P70`,
         downloadLocal: true,
      }
    },
    {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /assets/ // See below to configure properly
      }
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      // CommonMark mode (default: true)
      commonmark: true,
      // Footnotes mode (default: true)
      footnotes: true,
      // Pedantic mode (default: true)
      pedantic: true,
      // GitHub Flavored Markdown mode (default: true)
      gfm: true,
      // Plugins configs
      plugins: [],
    },
  },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
