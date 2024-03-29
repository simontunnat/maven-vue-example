const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {VueLoaderPlugin} = require("vue-loader");
const FileManagerPlugin = require('filemanager-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: {
    main: './src/main/frontend/main.ts'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          // setting transpileOnly to "true" prevents the Vue / ts compiler issues being shown in production mode
          // for checking the typescript code in the Vue components we now use vue-tsc
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new ESLintPlugin({extensions: ['js', 'ts', 'vue']}),
    // enabling the ForkTsCheckerWebpackPlugin prevents the Vue / ts compiler issues being shown in production mode
    // for checking the typescript code in the Vue components we now use vue-tsc
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/main/frontend/index.html'
    }),
    new MiniCssExtractPlugin(),
    // setting feature flags, "to get better tree-shaking in the production bundle."
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin(),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            // copy packaged frontend css / js into the backend after every webpack build
            { source: 'dist/*.{css,js}', destination: '../backend/target/classes/static/frontend' }
          ]
        }
      }
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    }
  }
};
