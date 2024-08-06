// craco.config.js
module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.fallback = {
        querystring: require.resolve("querystring-es3"),
      };
      return config;
    },
  },
};
