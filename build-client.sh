
cd $(ls | grep .client)\
&& mv dist dist_\
&& npm run build:prerender\
&& app_name=\
&& mv dist_//.git dist/\
&& rm -rf dist_\
&& cd dist/\
&& (git add .; git commit -m 'update origin master'; git push origin master)

