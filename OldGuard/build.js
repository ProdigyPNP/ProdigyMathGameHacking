const esbuild = require("esbuild");
const cssModulesPlugin = require('esbuild-css-modules-plugin');

console.log("[OldGuard] Building OldGuard...");

esbuild.build({
            entryPoints: ["./src/app.jsx"],
            bundle: true,
            minifyWhitespace: true,
            target: "chrome90",
            outfile: "dist/bundle.js",
            plugins: [cssModulesPlugin({inject: true})]
        }).catch(err => console.error(err)); // lol error handling

console.log("[OldGuard] Built at " + Date.now() +  " (" + Date() + ")");
console.log("[OldGuard] Success!");
console.log("");
console.log("[OldGuard] Done!");