#!/usr/bin/bash

rm -rf docs

pushd ../mozilla-unified
./mach storybook build

mv browser/components/storybook/storybook-static ../firefox-desktop-components/docs

popd

git add docs
python3 -m http.server -d docs
