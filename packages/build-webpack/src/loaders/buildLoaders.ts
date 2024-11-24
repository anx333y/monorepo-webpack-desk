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
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
      ],
      options: {
        modules: {
          mode: "local",
          auto: true,
          exportGlobals: true,
          localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:5]",
          localIdentHashSalt: "my-custom-hash",
          namedExport: true,
          exportLocalsConvention: "as-is",
          exportOnlyLocals: false
        },
      }
    },
  ];
};

export default buildLoaders;