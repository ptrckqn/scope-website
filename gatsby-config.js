module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat:300,400,600,700"]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/page-data`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "SCOPE",
        short_name: "SCOPE",
        // icon: "static/images/icon.png",
        start_url: "/",
        background_color: "#7d8c8f",
        theme_color: "#3e4246",
        display: "standalone"
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === "production"
        },
        plugins: ["gatsby-tinacms-git", "gatsby-tinacms-remark"]
      }
    }
  ]
};
