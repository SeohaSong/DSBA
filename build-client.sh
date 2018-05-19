
cd DSBA.client\
&& mv dist dist_\
&& npm run build:prerender\
&& mv dist_/DSBA/.git dist/DSBA\
&& rm -rf dist_\
&& cd dist/DSBA\
&& (git add .; git commit -m 'update origin master'; git push origin master)

