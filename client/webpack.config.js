const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// Added and configured workbox plugins for a service worker and manifest file

module.exports = () => {
  return {
    mode: 'development',

    // Entry point for our files

    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
    },

    // Output for our bundles

    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
      // Generates our HTML file and injects our bundles

      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE',
      }),

      // Injects our service worker

      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),

      // Creates a manifest.json file

      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'Never lose your notes again!',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    // Added CSS loaders and babel to webpack

    module: {
      rules: [],
    },
  };
};
