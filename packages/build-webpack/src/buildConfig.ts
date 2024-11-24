import webpack from 'webpack';

import buildLoaders from './loaders/buildLoaders';
import buildPlugins from './plugins/buildPlugins';
import buildResolvers from './resolvers/buildResolvers';
import buildDevServer from './devServer/buildDevServer';

import {Options} from './types/config';

const buildConfig = (options: Options): webpack.Configuration => {
  const {mode, paths, isDev, isPackage} = options;

  return {
    entry: {
        bundle: paths.entry
      },
    mode: mode || 'development',
    output: {
      filename: isPackage ? 'index.js' : '[name].[contenthash].js',
      path: paths.output,
      clean: true
    },
    module: {
      rules: buildLoaders(options)
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  };
};

export default buildConfig;