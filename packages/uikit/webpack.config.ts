import path from 'path';
import webpack from 'webpack';
import buildConfig, {BuildEnv} from '@packages/build-webpack';

const baseConfig = (env: BuildEnv) => buildConfig({
  mode: 'production',
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'dist')
  },
  port: env.port || 3000,
  isPackage: true
});

export default (env: BuildEnv): webpack.Configuration => {
  return {
    ...baseConfig(env),
    externals: {
      react: 'react'
    }
  };
};