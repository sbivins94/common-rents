const path = require('path');

module.exports = function override(config, env) {
  config.entry = path.resolve(__dirname, 'index.tsx');
  return config;
};