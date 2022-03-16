const { withFederatedSidecar } = require('@module-federation/nextjs-mf');

const nextConfig = {
  future: { webpack5: true },
  images: {
    domains: ['upload.wikimedia.org'],
  },
};

const mfConfig = {
  name: 'app2',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './luigi': './components/luigi',
  },
  shared: {
    react: {
      // Notice shared are NOT eager here.
      requiredVersion: false,
      singleton: true,
    },
  },
};

module.exports = withFederatedSidecar(mfConfig)(nextConfig);
