#!/bin/bash
# deploys contents of the dist dir to Github Pages

git checkout -B gh-pages
git add -f dist
git mv img/ dist/img/

echo "crashmapper.org" > dist/CNAME
git add dist/CNAME

git commit -am "Rebuild website"
git push origin :gh-pages
git subtree push --prefix dist origin gh-pages
git checkout -
