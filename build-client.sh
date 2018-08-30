(

    if [ "$1" = "seohasong" ]
    then
        prod_repo_path_part='/SEOHASONG/seohasong.github.io/DSBA'
        npm_cmd='build:prerender-seohasong'
    elif [ "$1" = "" ]
    then
        prod_repo_path_part='/SEOHASONG/gitfree/dsba-koreauniv.github.io'
        npm_cmd='build:prerender'
    else
        exit
    fi

    if [[ "$PATH" =~ /mnt/c/Windows/System32 ]]
    then
        prod_repo_path="/mnt/c/Users/"$(whoami)$prod_repo_path_part
    else
        prod_repo_path=~$prod_repo_path_part
    fi

    cd ./client\
    && npm run $npm_cmd\
    && rm -rf $prod_repo_path'/*'\
    && mv ./dist/DSBA/* $prod_repo_path\
    && cd $prod_repo_path\
    && (
        git add .
        git commit -m 'update origin master'
        git push origin master
    )
)
