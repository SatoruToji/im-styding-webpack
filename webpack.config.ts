import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

type MODE = 'production' | 'development'

interface EnvVariables {
  mode: MODE
  port: number
}

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development'
  const isProd = env.mode === 'production'

  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: [
      new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html')}),
      isProd && new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash:9].css',
        chunkFilename: 'styles/[name].[contenthash:9].css',
      })
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [ 
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
            "css-loader", 
            "sass-loader"
          ]
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? {
      port: env.port ?? 6969,
      open: true,
      hot: true,
    }: undefined,
  }
  return config
} 