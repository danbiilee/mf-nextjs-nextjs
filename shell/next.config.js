/**
 * @type {import('next').NextConfig}
 */

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
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org'],
  },
  webpack(config, options) {
    config.plugins.push(new options.webpack.container.ModuleFederationPlugin(mfConfig));
    return config;
  },
};

module.exports = nextConfig;
