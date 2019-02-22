(
    if [ "$1" = "" ]
    then
        dir_path=$HOME_PATH/SEOHASONG/seohasong.github.io/DSBA
        npm_cmd='build:prerender-seohasong'
    elif [ "$1" = "production" ]
    then
        dir_path=$( cd $( dirname $BASH_SOURCE ) && pwd )/dsba-koreauniv.github.io
        npm_cmd='build:prerender'
    else
        exit
    fi

    cname=dsba.korea.ac.kr \
    && cd ./client \
    && npm run $npm_cmd \
    && rm -r $dir_path/* \
    && mv ./dist/client/* $dir_path \
    && rm -r ./dist \
    && cd $dir_path \
    && git checkout master \
    && echo $cname > CNAME \
    && gitgit
)
