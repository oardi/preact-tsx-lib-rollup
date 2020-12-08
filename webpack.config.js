const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {

	return {
		context: path.resolve(__dirname, './src'),

		entry: { app: './index.tsx' },

		output: {
			filename: '[name].[fullhash].bundle.js',
			chunkFilename: '[name].[fullhash].bundle.js',
			path: path.resolve(__dirname, 'dist')
		},

		devServer: {
			open: true,
			hot: true
		},

		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx'],
			preact: path.resolve(__dirname, 'node_modules', 'preact'),
			'preact/hooks': path.resolve(__dirname, 'node_modules', 'preact', 'hooks'),
		},

		module: {
			rules: [
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					loader: 'ts-loader'
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader"
					]
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'assets/img',
								publicPath: 'assets/img'
							}
						}
					]
				}
			],
		},

		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: "./index.html",
				title: 'Preact TSX',
				filename: "index.html",
				chunksSortMode: "manual",
				chunks: ['vendors', 'app'],
				favicon: 'favicon.ico'
			}),
			new MiniCssExtractPlugin({
				filename: "style.css",
				chunkFilename: "style.css"
			})
		],

		optimization: {
			minimize: true,
			minimizer: [new TerserPlugin()],
			splitChunks: {
				cacheGroups: {
					commons: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all' }
				}
			}
		}
	}
}
