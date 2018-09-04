(

    if [ "$1" = "seohasong" ]
    then
        repo_path_part='SEOHASONG/seohasong.github.io/DSBA'
        npm_cmd='build:prerender-seohasong'
    elif [ "$1" = "" ]
    then
        repo_path_part='SEOHASONG/gitfree/dsba-koreauniv.github.io'
        npm_cmd='build:prerender'
    else
        exit
    fi

    if [[ "$PATH" =~ /mnt/c/Windows/System32 ]]
    then
        repo_path="/mnt/c/Users/"$(whoami)/$repo_path_part
    else
        repo_path=~/$repo_path_part
    fi

    cd ./client\
    && npm run $npm_cmd\
    && rm -rf $repo_path/*\
    && mv ./dist/DSBA/* $repo_path\
    && rm -rf ./dist\
    && cd $repo_path
    git add .
    git commit -m 'update origin master'
    git push origin master
)
