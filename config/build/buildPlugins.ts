import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/types";

export function buildPlugins({mode, paths}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const PLUGINS: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html}),
  ]

  if(isProd){
      PLUGINS.push(new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:9].css',
      chunkFilename: 'styles/[name].[contenthash:9].css',
    })  )
  }

  return PLUGINS
}