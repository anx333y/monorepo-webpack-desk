import {RuleSetRule} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {Options} from '../types/config';

const buildLoaders = ({isDev}: Options): RuleSetRule[] => {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader
        },
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: isDev ? "[folder]__[name]_[local]" : "[hash:base64:8]",
              namedExport: false
            },
            sourceMap: isDev
          }
        },
        {
          loader: "sass-loader"
        }
      ]
    },
  ];
};

export default buildLoaders;