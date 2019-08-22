git stash
git reset --hard origin/master
git pull
git reset --hard origin/master
yarn install
yarn tsc
yarn lint
yarn build
pm2 restart $1