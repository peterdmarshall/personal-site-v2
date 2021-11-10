module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Personal Site V2",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-K3HPT5C2ZY",
      },
    },
    'gatsby-plugin-postcss'
  ],
};
