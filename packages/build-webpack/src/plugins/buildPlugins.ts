import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {Options} from '../types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const buildPlugins = ({
  paths,
  isPackage,
  isDev
}: Options): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new webpack.ProgressPlugin()
  ];

  const htmlPlugin = new HtmlWebpackPlugin({
    template: paths.html
  });

  const miniCssExtract = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  });

  if (!isPackage) {
    plugins.push(htmlPlugin);
  }

  if (!isDev) {
    plugins.push(miniCssExtract);
  }

  return plugins;
};

export default buildPlugins;