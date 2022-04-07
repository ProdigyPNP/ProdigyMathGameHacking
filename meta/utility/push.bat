@echo off
git add -A
echo Added files.
git commit -am "%*"
echo Committed.
git pull
echo Pulled.
git push
echo Pushed.
