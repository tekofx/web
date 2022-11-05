#!/bin/bash
# Script to deploy webpage to Github pages

mv package.json package.tmp
jq '.homepage="https://tekofx.github.io/web"' package.tmp> var.tmp
mv var.tmp package.json
npm run deploy
mv package.tmp package.json