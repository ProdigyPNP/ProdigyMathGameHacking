# PHEx Build Script

# Prefix
PREFIX="[PHEx Builder] "

echo ""

# echo with prefix
xlog () {
   echo "$PREFIX$1"
}

# exit with message
ext () {
   echo "$1"
   exit 0
}




# Delete build/extension.zip
xlog "Deleting extension.zip..."
rm build/extension.zip && xlog "Deleted extension.zip" || xlog "No extension.zip found"


# Delete build/extension.xpi
xlog "Deleting extension.xpi..."
rm build/extension.xpi && xlog "Deleted extension.xpi" || xlog "No extension.xpi found"





# Tell the user that the chromium extension is being zipped
xlog "Zipping chromium extension..."

# Go into ./src/
cd ./src/

# Zip ./src/ to ./build.extension.zip
zip -r ../build/extension.zip ./ && xlog ".ZIP chromium extension built -> extension.zip"

# Tell the user that we've build the chromium extension successfully.
xlog "Chromium extension Success!" && echo ""






# Go out of ./src/ and into ./firefox/
cd ../firefox/

# Zip ./firefox/ to ./build.extension.xpi
zip -r ../build/extension.xpi ./ && xlog ".XPI file built -> extension.xpi"


# Tell the user that we've build the firefox extension successfully.
xlog "Firefox extension Success!" && echo ""




# When making .crx extensions, it needs to be signed with a private key file to work.
# Tell the user that extension.crx needs to be signed if it's a production-used release.
echo "\033[0;31m" && xlog "IMPORTANT: IF YOU ARE MAKING AN OFFICIAL PHEx RELEASE, THEN PLEASE REMEMBER TO SIGN THE .CRX WITH A PRIVATE KEY FILE." && echo ""

# Tell the user that we're done.
echo "\033[0m" + xlog "Done!"