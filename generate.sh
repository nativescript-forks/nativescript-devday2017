#!/bin/bash

rm -rf out && \
rm -rf temp/* && \

echo '\nInput jar file name then Press [Enter]' && \
read lib && \

java -jar dts-generator.jar \
-input android25.jar \
-input android-support-v4.jar \
-input android-support-v7-appcompat.jar \
-input $lib \
-generate-multiple && \

read -p "Copy files to temp then Press [Enter]" && \

cat temp/* > generated.d.ts
