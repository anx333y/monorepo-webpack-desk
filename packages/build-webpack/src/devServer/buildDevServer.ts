import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {Options} from '../types/config';

const buildDevServer = ({port}: Options): DevServerConfiguration => {
  return {
    port,
    open: true
  }
};

export default buildDevServer;