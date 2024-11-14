import path from 'path';
import webpack from 'webpack';
import {buildWebpack, BuildMode, BuildPaths, BuildPlatform, BuildOptions} from '../../packages/build-config/';

interface EnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
    platform?: BuildPlatform;
    SHOP_REMOTE_URL?: string
    ADMIN_REMOTE_URL?: string
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'main.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        // public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })

    return config;
}