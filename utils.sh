web-init(){

ng new --style scss $1
cd $1
ng g universal --app-id $1 --client-project $1
npm install --save\
 ts-loader\
 @nguniversal/module-map-ngfactory-loader\
 @nguniversal/express-engine\
 @nguniversal/common\
 webpack-cli

cd ..

cat template/app.server.module.ts > $1/src/app/app.server.module.ts 
cat template/tsconfig.server.json > $1/src/tsconfig.server.json
sed "s/APP_NAME/$1/g" template/server.ts > $1/server.ts
sed "s/APP_NAME/$1/g" template/prerender.ts > $1/prerender.ts
cat template/webpack.server.config.js > $1/webpack.server.config.js
sed "s/APP_NAME/$1/g" template/package.json > $1/package.json
cat template/static.paths.ts > $1/static.paths.ts
cd $1

}


web-build(){

mv dist dist_\
&& npm run build:prerender\
&& app_name=$(echo $(ls dist) | cut -d " " -f 1)\
&& mv dist_/$app_name/.git dist/$app_name\
&& rm -rf dist_\
&& (
cd dist/$app_name\
&& git add .\
&& git commit -m "update to origin master"\
&& git push origin master
)

}