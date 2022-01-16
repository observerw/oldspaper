module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    // 避免多次刷新
    `gatsby-plugin-catch-links`,
    // 配置图标
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatsby + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static`,
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // 目录
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {}
          },
          // header快速跳转
          `gatsby-remark-autolink-headers`,
          // {
          //   resolve: `gatsby-remark-highlight-code`,
          //   options: {
          //     theme: 'one-light',
          //   },
          // },
          // 代码高亮
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              showLineNumbers: false,
              
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
            },
          },
        ],
        "excerpt_separator": `<!-- end -->`,
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        // pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": "src",
        },
        extensions: []
      }
    },
    `gatsby-plugin-sass`,
  ],
};
