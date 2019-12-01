module.exports = {
  siteMetadata: {
    title: `Legal Informatics`,
    description: `Łączymy prawo i IT. Przygotowujemy analizy i opinie prawne, wdrażamy systemy teleinformatyczne dla wymiaru sprawiedliwości, samorządów zawodowych i biznesu.`,
    author: `milecki`,
    siteUrl: `https://legalinformatics.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Legal Informatics`,
        short_name: `LI`,
        start_url: `/`,
        background_color: `#0D3C71`,
        theme_color: `#0D3C71`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
