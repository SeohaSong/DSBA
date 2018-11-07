(
    if [ "$1" = "" ]
    then
        dir_path_part='SEOHASONG/seohasong.github.io/DSBA'
        npm_cmd='build:prerender-seohasong'
    elif [ "$1" = "production" ]
    then
        dir_path_part=$(
            echo $PWD | sed -e 's/SEOHASONG/\nSEOHASONG/g' | grep SEOHASONG
        )/dsba-koreauniv.github.io
        npm_cmd='build:prerender'
    else
        exit
    fi

    if [[ "$PATH" =~ /mnt/c/Windows/System32 ]]
    then
        dir_path="/mnt/c/Users/"$(whoami)/$dir_path_part
    else
        dir_path=~/$dir_path_part
    fi

    cname=$(cat $dir_path/CNAME)

    cd ./client \
    && npm run $npm_cmd \
    && rm -r $dir_path/* \
    && mv ./dist/DSBA/* $dir_path \
    && rm -r ./dist \
    && cd $dir_path \
    && echo $cname > CNAME

    gitgit
)
