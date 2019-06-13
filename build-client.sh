(
    trap 'return 0' ERR
    [ -d ./client/dist/browser ] || (
        trap 'return 1' ERR
        cd ./client
        npm run build:ssr
        node dist/prerender
    )
    dir_path=$( dirname $BASH_SOURCE )
    www_path=$dir_path/dsba-koreauniv.github.io
    old_files=$( ls $www_path | grep -v CNAME || : )
    old_files=$( echo "$old_files" | grep -v ^google.*'\.'html$ || : )
    for name in $old_files; do
        rm -r $www_path/$name
    done
    client_path=$dir_path/client/dist/browser
    cp -r $client_path/* $www_path
    (
        trap 'return 1' ERR
        cd $dir_path
        git checkout master
        gitgit
    )
    gitgit
)
# "ng build --base-href /DSBA/ --prod && ng run client:server"
