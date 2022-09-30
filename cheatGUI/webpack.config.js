const path = require("path");
const glob = require("glob");
module.exports = {
	mode: "production",
	entry: ["./src/index.ts", ...glob.sync(path.join(__dirname, "src/@(hacks|utils)/**/*.ts"))],
	module: {
		rules: [
			{
				test: /\.ts$/i,
				use: ["babel-loader", "ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.txt$/i,
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
