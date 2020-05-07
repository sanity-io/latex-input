// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      copy({
        targets: [{ src: 'sanity.json', dest: 'dist' }],
      })
    );
    return config;
  },
};
