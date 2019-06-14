(
    trap 'raise-e $BASH_SOURCE $LINENO' ERR
    main() {
        trap 'raise-e $BASH_SOURCE $LINENO 1' ERR
        if [ "$1" == seohasong ]; then
            www_path=$HOME_PATH/SEOHASONG/SEOHASONG.GITHUB.IO/${PWD##*/}
            old_files=$( ls $www_path | grep -v ^google.*'\.'html$ || : )
        elif [ -d "$1" ]; then
            www_path=${1%'/'}
            old_files=$( ls $www_path | grep -v ^google.*'\.'html$ || : )
            old_files=$( echo "$old_files" | grep -v ^CNAME$ || : )
        fi
        [ -d "$www_path" ]
        cd client
        npm run build:ssr
        node dist/prerender
        # ng build --base-href /DSBA/ --prod && ng run client:server
        # vals="scope start_url"
        # filepath="$app_name/manifest.webmanifest"
        # for val in $vals
        # do
        #     sed -i s~'"'$val'": "/"'~'"'$val'": "/'$app_name'/"'~g $filepath
        # done
        cd ..
        for name in $old_files; do
            rm -r $www_path/$name
        done
        dist_path=client/dist
        cp -r $dist_path/browser/* $www_path
        rm -r $dist_path
        (
            cd $www_path
            git checkout master
            git add .
            git commit -m "continue" || :
            git push origin master
        )
        git add .
        git commit -m "continue" || :
        git push origin master
    }
    opts="" n_arg=1
    cmd=$( set-argument "$opts" $n_arg $@ ) || { echo "$cmd"; return; }
    eval "$cmd"
)
