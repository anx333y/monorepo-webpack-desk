import {RuleSetRule} from 'webpack';

const buildLoaders = (): RuleSetRule[] => {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    },
  ];
};

export default buildLoaders;