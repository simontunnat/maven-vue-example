const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {VueLoaderPlugin} = require("vue-loader");
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
    new HtmlWebpackPlugin({
      template: './src/main/frontend/index.html'
    }),
    new MiniCssExtractPlugin(),
    // setting feature flags, "to get better tree-shaking in the production bundle."
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    }
  }
};
