// PHEx Build Script


// Directory Zipper
const zipdir = require("zip-dir");

// File System
const fs = require('fs');

// Tell the user that the extension is being zipped
console.log("[PHEx] Zipping extension...");


// Zip ./src to ./build.extension.zip
zipdir("./src", { saveTo: "./build/extension.zip" }, function (err, buffer) {

    // If this encounters an error, print the error and return.
	if (err) return console.error(err);

	// If the program has gotten to this step, then the program has not encountered any errors.
	// Tell the user that extension.zip has been built.
	console.log("[PHEx] .ZIP file built -> extension.zip");



    // Tell the user that the extension is being copied
	console.log("[PHEx] Copying extension.zip to extension.crx...");

    // Copy ./build/extension.zip to ./build/extension.crx
	fs.copyFile('./build/extension.zip', './build/extension.crx', (err) => {

	    // If this encounters an error, print the error and return.
		if (err) return console.error(err);


	    // If the program has gotten to this step, then the program has not encountered any errors.
	    // Tell the user that extension.zip has been built.
		console.log("[PHEx] .CRX file built -> extension.crx");


		// When making .crx extensions, it needs to be signed with a private key file to work.
		// Tell the user that extension.crx needs to be signed if it's a production-used release.
		console.log("[PHEx] IMPORTANT: IF YOU ARE MAKING AN OFFICIAL PHEx RELEASE, THEN PLEASE REMEMBER TO SIGN THE .CRX WITH A PRIVATE KEY FILE.");
	});



    // Tell the user that the extension is being copied
	console.log("[PHEx] Copying extension.zip to extension.xpi...");

    // Copy ./build/extension.zip to ./build/extension.xpi
	fs.copyFile('./build/extension.zip', './build/extension.xpi', (err) => {

	    // If this encounters an error, print the error and return.
		if (err) return console.error(err);


		// If the program has gotten to this step, then the program has not encountered any errors.
        // Tell the user that extension.zip has been built.
		console.log("[PHEx] .XPI file built -> extension.xpi");



        // Tell the user that we've build the extension successfully.
		console.log("[PHEx] Success!");

		// New line, just to be clean.
		console.log("");


		// Tell the user that we're done.
		console.log("[PHEx] Done!");
	});

});
