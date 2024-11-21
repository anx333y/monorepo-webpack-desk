import path from 'path';
import webpack from 'webpack';
import buildConfig, {BuildEnv} from '@packages/build-webpack';

const baseConfig = (env: BuildEnv) => buildConfig({
  mode: env.mode || 'development',
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  },
  port: env.port || 3000,
  isDev: env.mode === 'development'
});

export default (env: BuildEnv): webpack.Configuration => {
  return {
    ...baseConfig(env),
  };
};