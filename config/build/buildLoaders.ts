import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development'

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
    },
  }

  const scssLOADER = {
    test: /\.s[ac]ss$/i,
    use: [ 
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
      "css-loader", 
      "sass-loader"
    ]
  }

  // const tsLOADER = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // }
  const tsLOADER = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => {
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
          }
        }
      }
    ]
  }

  const assetLOADER = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  return [
    assetLOADER,
    scssLOADER,
    tsLOADER,
  ]
}