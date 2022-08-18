"use strict";
// PHEx Build Script


/** Directory Zipper */ 
const zipdir = require("zip-dir");

/** File System */
const fs = require("fs");


/** console.log prefix */
const prefix = "[PHEx Builder] ";

// newline cuz it looks nicer in the terminal when i do.
console.log("\n");

/** old console.log function */
var backup = console.log;

// console.log plus prefix
console.log = ((message) => {
	// im so smart lol
    backup(prefix + message);
})


// Tell the user that the chromium extension is being zipped
console.log("Zipping chromium extension...");


// Zip ./src to ./build.extension.zip
zipdir("./src/", { saveTo: "./build/extension.zip" }, function (err, buffer) {

    // If this encounters an error, print the error and return.
	if (err) return console.error(err);

	// If the program has gotten to this step, then the program has not encountered any errors.
	// Tell the user that extension.zip has been built.
	console.log(".ZIP chromium extension built -> extension.zip");

	// Tell the user that we've build the chromium extension successfully.
	console.log("Chromium extension Success!\n");





	// Tell the user that the firefox extension is being zipped
	console.log("Zipping firefox extension...");

	// Zip ./firefox to ./build.extension.zip
	zipdir("./firefox/", { saveTo: "./build/extension.xpi" }, function (err, _buffer) {

		// If this encounters an error, print the error and return.
		if (err) return console.error(err);

		// If the program has gotten to this step, then the program has not encountered any errors.
        // Tell the user that extension.xpi has been built.
		console.log(".XPI file built -> extension.xpi");

		// Tell the user that we've build the firefox extension successfully.
		console.log("Firefox extension Success!\n");


		// When making .crx extensions, it needs to be signed with a private key file to work.
		// Tell the user that extension.crx needs to be signed if it's a production-used release.
		console.warn("IMPORTANT: IF YOU ARE MAKING AN OFFICIAL PHEx RELEASE, THEN PLEASE REMEMBER TO SIGN THE .CRX WITH A PRIVATE KEY FILE.\n");


		// Tell the user that we're done.
		console.log("Done!");
		
	});


});
