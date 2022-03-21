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
    // mf
    config.plugins.push(new options.webpack.container.ModuleFederationPlugin(mfConfig));

    // babel loader
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: { browsers: ['last 2 chrome versions'] },
              debug: true,
              // debug: isDevelopment,
            },
          ],
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        // env: {
        //   development: {
        //     plugins: [require.resolve('react-refresh/babel')],
        //   },
        // },
      },
      exclude: path.join(__dirname, 'node_modules'),
    });
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
