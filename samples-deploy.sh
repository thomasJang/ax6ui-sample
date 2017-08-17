#!/usr/bin/env bash

rm -rf dist
webpack && cd .. && echo "ax6ui.com" > dist/CNAME
git add -A
git commit -m "Update Site"
git push origin master
git subtree push --prefix  dist/ origin gh-pages