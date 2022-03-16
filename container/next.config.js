/**
 * @type {import('next').NextConfig}
 */
const path = require('path');

const mfConfig = {
  remoteType: 'var',
  remotes: {
    app1: 'app1',
    app2: 'app2',
  },
  shared: {
    react: {
      // Notice shared ARE eager here.
      eager: true,
      singleton: true,
      requiredVersion: false,
    },
  },
};

const nextConfig = {
  webpack(config, options) {
    config.plugins.push(new options.webpack.container.ModuleFederationPlugin(mfConfig));
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
