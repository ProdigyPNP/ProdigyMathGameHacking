const readline = require("readline");

const fs = require("fs");

const esbuild = require("esbuild");
const cssModulesPlugin = require('esbuild-css-modules-plugin');

const express = require("express");
const app = express();
const port = 1005;


const dashboard = (`


[OldGuard]

The old machine hums along... listen to the vibrations of the ancient one on :${port}

OldGuard Dashboard!
    [B] - Rebuild the bundle
    [X] - Shut down OldGuard
    [J] - Dump the JavaScript bundle
    [C] - Dump the CSS bundle
`);


app.use(express.static("dist"));
app.get("/", (req, res) => {
    res.redirect("bundle.js");
});

app.listen(port, () => {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    console.log(dashboard);
});



process.stdin.on("keypress", (str, key) => {
    const { name, ctrl } = key;
    
    // exit
    if (name === "x" || (name === "c" && ctrl)) {
        console.log("[OldGuard] Exiting OldGuard...");
        process.exit();
    }
    
    // build
    if (name === "b") {
        esbuild.build({
            entryPoints: ["./src/app.jsx"],
            bundle: true,
            minifyWhitespace: true,
            target: "chrome90",
            outfile: "dist/bundle.js",
            plugins: [cssModulesPlugin({inject: true})]
        }).catch(err => console.error(err)); // lol error handling

        console.log(`[OldGuard] Built OldGuard at ${Date.now()} (${Date()})`);
        return;
    }

    if (name === "j") {
        console.log(`[OldGuard] Dumping JavaScript bundle...`);
        console.log(fs.readFileSync("dist/bundle.js", "utf8"));
        return;
    }

    if (name === "c") {
            console.log(`[OldGuard] Dumping CSS bundle...`);
            console.log(fs.readFileSync("dist/bundle.css", "utf8"));
            return;
        }

});

