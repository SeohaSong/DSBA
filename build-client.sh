(
    trap 'return 0' ERR
    dir_path=$( cd $( dirname $BASH_SOURCE ) && pwd )/dsba-koreauniv.github.io
    cd ./client
    npm run build:prerender
    [ -d $dir_path ] && {
        rm -r $dir_path/*
        mv ./dist/client/* $dir_path
        echo dsba.korea.ac.kr > $dir_path/CNAME
    }
    rm -r ./dist
    (
        cd $dir_path
        git checkout master
        gitgit
    )
)

# "build:client-and-server-bundles-seohasong": "ng build --base-href /DSBA/ --prod && ng run client:server"
