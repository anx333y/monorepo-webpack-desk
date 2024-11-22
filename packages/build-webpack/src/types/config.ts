export type Mode = 'development' | 'production';

export interface Paths {
  entry: string;
  output: string;
  html?: string;
};

export interface Env {
  port: number;
  mode: Mode;
}

export interface Options {
  mode: Mode;
  paths: Paths;
  port: number;
  isDev?: boolean;
  isPackage?: boolean;
}