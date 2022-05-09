# PHEx Build Script

# Prefix
PREFIX="[PHEx Builder] "

echo ""

# echo with prefix
log () {
   echo "$PREFIX$1"
}

# exit with message
ext () {
   echo "$1"
   exit 0
}


# Delete build/extension.zip
log "Deleting extension.zip..."
rm build/extension.zip && log "Deleted extension.zip" || log "No extension.zip found"


# Delete build/extension.xpi
log "Deleting extension.xpi..."
rm build/extension.xpi && log "Deleted extension.xpi" || log "No extension.xpi found"


# Delete build/extension.crx
log "Deleting extension.crx..."
rm build/extension.crx && log "Deleted extension.crx" || log "No extension.crx found"


# Tell the user that the extension is being zipped
log "Zipping extension..."


# Zip ./src to ./build.extension.zip
# If this encounters an error, exit with the message.
zip -r ./build/extension.zip ./src/ && log ".ZIP file built -> extension.zip" || ext "Failed to zip the extension"



# Tell the user that the extension is being copied
log "Copying extension.zip to extension.crx..."


# Copy ./build/extension.zip to ./build/extension.crx
# If this encounters an error, exit with the message.
cp build/extension.zip build/extension.crx && log ".CRX file built -> extension.crx" || ext "Failed to copy extension.zip to extension.crx"

# newline
echo ""

# When making .crx extensions, it needs to be signed with a private key file to work.
# Tell the user that extension.crx needs to be signed if it's a production-used release.
log "IMPORTANT: IF YOU ARE MAKING AN OFFICIAL PHEx RELEASE, THEN PLEASE REMEMBER TO SIGN THE .CRX WITH A PRIVATE KEY FILE."

# newline
echo ""


# Tell the user that the extension is being copied
log "Copying extension.zip to extension.xpi..."

# Copy ./build/extension.zip to ./build/extension.xpi
# If this encounters an error, exit with the message.
cp build/extension.zip build/extension.xpi && log ".XPI file built -> extension.xpi" || ext "Failed to copy extension.zip to extension.xpi"

# Tell the user that we've build the extension successfully.
log "Success!"
echo ""

log "Done!"