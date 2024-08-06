// config-overrides.js
const path = require("path");

module.exports = {
  webpack: (config, env) => {
    config.resolve.fallback = {
      querystring: require.resolve("querystring-es3"),
    };
    return config;
  },
};
