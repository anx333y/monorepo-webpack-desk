export type Mode = 'development' | 'production';

export interface Paths {
  entry: string;
  output: string;
  html: string;
};

export interface Options {
  mode: Mode,
  paths: Paths
}