import path from 'path';
import webpack from 'webpack';
import buildConfig from '@packages/build-webpack';

const baseConfig = buildConfig({
  mode: 'development',
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }
});

const config: webpack.Configuration = {
  ...baseConfig,
};

export default config;