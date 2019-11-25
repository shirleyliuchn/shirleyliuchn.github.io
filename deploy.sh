#!/usr/bin/env sh

set -e

yarn build

cd docs/.vuepress/dist

echo 'shirleyliuchn.github.io' > README.md

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/shirleyliuchn/shirleyliuchn.github.io.git master

cd -