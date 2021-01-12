#!/bin/sh

yarn build-typescript
wget https://github.com/twbs/icons/archive/$npm_package_bootstrapIconsVersion.zip -O icons.zip
unzip -o icons.zip -d lib/
rm icons.zip

cd lib
folder_name=$(ls | grep 'icons-')
cd ..

ICONS_FOLDER=$folder_name node lib/build.js
rm -rf lib/$folder_name