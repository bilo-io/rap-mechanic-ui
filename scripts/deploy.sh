#!/bin/bash

echo "deploy (commit) message"
read commitMessage
yarn build
yarn build:docs
git add docs
git add -A
git commit -m "$commitMessage"
git push origin master
echo "
updated: run yarn release to deploy to http://npmjs.org
"