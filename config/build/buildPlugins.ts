import { Configuration, DefinePlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"

export function buildPlugins({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const PLUGINS: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html}),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    }), 
  ]

  if(isProd){
      PLUGINS.push(new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:9].css',
      chunkFilename: 'styles/[name].[contenthash:9].css',
    }))
  }

  if(isDev){
    PLUGINS.push(new ForkTsCheckerWebpackPlugin())
    PLUGINS.push(new ReactRefreshWebpackPlugin())

  }

  if(analyzer){
    PLUGINS.push(new BundleAnalyzerPlugin())
  }

  return PLUGINS
}