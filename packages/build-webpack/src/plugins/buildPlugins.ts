import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {Options} from '../types/config';

const buildPlugins = ({paths}: Options) => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin()
  ];
};

export default buildPlugins;