import path from 'path';
import webpack from 'webpack';

import buildLoaders from './loaders/buildLoaders';
import buildPlugins from './plugins/buildPlugins';
import buildResolvers from './resolvers/buildResolvers';
import {Options} from './types/config';

const buildConfig = (options: Options): webpack.Configuration => {
  const {mode, paths} = options;

  return {
    entry: {
        bundle: paths.entry
      },
    mode: mode || 'development',
    devtool: 'inline-source-map',
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true
    },
    module: {
      rules: buildLoaders()
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers()
  };
};

export default buildConfig;