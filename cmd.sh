filepath=tools/shell/main.sh
! [ -f $filepath ] || { . $filepath $@; return; }
echo "[SHS] This command should be run under the project directory."
