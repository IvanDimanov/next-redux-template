const withSass = require('@zeit/next-sass')

module.exports = withSass({
  pageExtensions: ['page.js', 'page.jsx'],
  cssModules: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
