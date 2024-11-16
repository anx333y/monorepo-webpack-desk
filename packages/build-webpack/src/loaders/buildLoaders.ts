import {RuleSetRule} from 'webpack';

const buildLoaders = (): RuleSetRule[] => {
  return [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
  ];
};

export default buildLoaders;