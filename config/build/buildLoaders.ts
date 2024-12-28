import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development'
  const scssLOADER = {
    test: /\.s[ac]ss$/i,
    use: [ 
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
      "css-loader", 
      "sass-loader"
    ]
  }

  const tsLOADER = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    scssLOADER,
    tsLOADER,
  ]
}