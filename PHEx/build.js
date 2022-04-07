const zipdir = require("zip-dir");
const fs = require('fs');

console.log("Building...");

zipdir("./src", { saveTo: "./build/extension.zip" }, function (err, buffer) {
	if (err) return console.error(err);
	console.log(".ZIP file built");
	
	console.log("Building .CRX");

	fs.copyFile('./build/extension.zip', './build/extension.crx', (err) => {
		if (err) console.error(err);
		console.log('.CRX file built');
	});

	fs.copyFile('./build/extension.zip', './build/extension.xpi', (err) => {
		if (err) console.error(err);
		console.log('.XPI file built');
		console.log('Build finished successfully');
	});
});
