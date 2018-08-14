(
    prod_repo_path=~/SEOHASONG/seohasong.github.io

    cd ./DSBA.client\
    && npm run build:prerender\
    && rm -rf $prod_repo_path'/DSBA'\
    && mv ./dist/DSBA $prod_repo_path\
    && cd $prod_repo_path\
    && (git add .; git commit -m 'update origin master'; git push origin master)
)
