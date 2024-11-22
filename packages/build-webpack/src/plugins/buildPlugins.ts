import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {Options} from '../types/config';

const buildPlugins = ({paths, isPackage}: Options): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new webpack.ProgressPlugin()
  ];

  const htmlPlugin = new HtmlWebpackPlugin({
    template: paths.html
  });

  if (!isPackage) {
    plugins.push(htmlPlugin);
  }

  return plugins;
};

export default buildPlugins;