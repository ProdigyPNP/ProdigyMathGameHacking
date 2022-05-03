"use strict";
// PHEx Build Script


// Directory Zipper
const zipdir = require("zip-dir");

// File System
const fs = require('fs');


// Prefix
const prefix = "[PHEx Builder] ";

console.log("\n");

// console.log with prefix
function log (message) {
    console.log(prefix + message);
}


// Tell the user that the extension is being zipped
log("Zipping extension...");


// Zip ./src to ./build.extension.zip
zipdir("./src", { saveTo: "./build/extension.zip" }, function (err, buffer) {

    // If this encounters an error, print the error and return.
	if (err) return console.error(err);

	// If the program has gotten to this step, then the program has not encountered any errors.
	// Tell the user that extension.zip has been built.
	log(".ZIP file built -> extension.zip");



    // Tell the user that the extension is being copied
	log("Copying extension.zip to extension.crx...");

    // Copy ./build/extension.zip to ./build/extension.crx
	fs.copyFile("./build/extension.zip", "./build/extension.crx", (err) => {

	    // If this encounters an error, print the error and return.
		if (err) return console.error(err);


	    // If the program has gotten to this step, then the program has not encountered any errors.
	    // Tell the user that extension.zip has been built.
		log(".CRX file built -> extension.crx\n");


		// When making .crx extensions, it needs to be signed with a private key file to work.
		// Tell the user that extension.crx needs to be signed if it's a production-used release.
		log("IMPORTANT: IF YOU ARE MAKING AN OFFICIAL PHEx RELEASE, THEN PLEASE REMEMBER TO SIGN THE .CRX WITH A PRIVATE KEY FILE.\n");
	});



    // Tell the user that the extension is being copied
	log("Copying extension.zip to extension.xpi...");

    // Copy ./build/extension.zip to ./build/extension.xpi
	fs.copyFile("./build/extension.zip", "./build/extension.xpi", (err) => {

	    // If this encounters an error, print the error and return.
		if (err) return console.error(err);


		// If the program has gotten to this step, then the program has not encountered any errors.
        // Tell the user that extension.zip has been built.
		log(".XPI file built -> extension.xpi");



        // Tell the user that we've build the extension successfully.
		log("Success!\n");


		// Tell the user that we're done.
		log("Done!");
	});

});
