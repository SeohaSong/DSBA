(
    trap 'raise-e $BASH_SOURCE $LINENO' ERR
    main() {
        trap 'raise-e $BASH_SOURCE $LINENO 1' ERR
        npm --version
        [ -d "$1" -a -d client ]
        www_path=${1%'/'}
        old_files=$( ls $www_path | grep -v -E '^google.*\.html$|^CNAME$' || : )
        cd client
        npm run build:prerender
        cd ..
        for name in $old_files; do
            rm -r $www_path/$name
        done
        dist_path=client/dist
        cp -r $dist_path/browser/* $www_path
        rm -r $dist_path
    }
    opts="" n_arg=1
    cmd=$( set-argument "$opts" $n_arg $@ ) || { echo "$cmd"; return; }
    eval "$cmd"
)
