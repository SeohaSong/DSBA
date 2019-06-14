raise-e() {
    echo "[SHS] Error in '$1: $2'"
    case $3 in
    1) echo "[SHS] Main function error" ;;
    2) echo "[SHS] Unknown option '$4'" ;;
    3) echo "[SHS] Require argument to option '$4'" ;;
    4) echo "[SHS] Number of arguments mismatch (target: $4)" ;;
    esac
    exit 1
}
set-argument() {
    trap 'raise-e $BASH_SOURCE $LINENO' ERR
    opts=$( for opt in $1; do echo $opt; done ) n_arg=$2 args=( "$@" )
    args[0]='' args[1]=''
    args=( ${args[@]} )
    idx=0 max=${#args[@]} cmds=()
    while [ $idx -lt $max ]; do
        arg=${args[$idx]}
        case $arg in
        --*) args[$idx]="" arg=${arg#'--'} ;;
        *) break ;;
        esac
        opt=$( echo "$opts" | grep ^"$arg:" || : )
        opt=( ${opt//:/' '} )
        case "$opt" in
        "") raise-e $BASH_SOURCE $LINENO 2 $arg ;;
        *)
            case ${opt[1]} in
            0) cmds+=( $opt=$opt ) idx=$(( $idx+1 )) ;;
            1)
                val=${args[$(( $idx+1 ))]}
                ! [[ $val =~ ^--|^$ ]] || raise-e $BASH_SOURCE $LINENO 3 $opt
                args[$idx]="" cmds+=( $opt=$val )
                idx=$(( $idx+2 ))
            ;;
            esac
        ;;
        esac
    done
    n_main=$(( $max-$idx )) cmds=${cmds[@]} args=${args[@]}
    [ $n_arg == n -a $n_main -gt 0 -o $n_arg != n -a $n_main == $n_arg ] \
    || raise-e $BASH_SOURCE $LINENO 4 $n_arg
    echo "echo '[SHS]'"
    echo "echo 'Options   : $cmds ($opts)'"
    echo "echo 'Arguments : $args'"
    echo $cmds args="'$args'"
    [ $n_arg != 0 ] || { echo 'main'; return; }
    echo 'for arg in $args; do main $arg; done'
}
main() {
    dir_path=$1 arg=$2 args=$( echo $@ | cut -d ' ' -f 3- )
    modules=$( ls "$dir_path" | grep -v main.sh )
    case $( echo "$modules" | grep ^$arg$ ) in
    "")
        echo "[SHS]"
        echo "$modules" | grep -v ^_
    ;;
    *)    
        path="$dir_path/$arg/main.sh"
        . "$path" "$args"
        unset path
    ;;
    esac
    unset modules
    unset dir_path
    unset args
}
main "$( dirname $BASH_SOURCE )" $@
unset -f main
unset -f argument
unset -f raise-e
