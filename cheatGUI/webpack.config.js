const path = require("path");
const glob = require("glob");
const autoprefixer = require("autoprefixer");
module.exports = {
	mode: "production",
	//devtool: "inline-source-map",
	entry: ["./src/index.ts", ...glob.sync(path.join(__dirname, "src/@(hacks|utils)/**/*.ts"))],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ["babel-loader", "ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(txt|css)$/i,
				use: "raw-loader",
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					"postcss-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			/*{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
						},
					},
				],
			},*/
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};
