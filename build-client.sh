
prod_repo_path='~/SEOHSASONG/gitfree/seohasong.github.io'

cd DSBA.client\
&& npm run build:prerender\
&& mv ./dist/DSBA $prod_repo_path
&& cd $prod_repo_path
&& (git add .; git commit -m 'update origin master'; git push origin master)
