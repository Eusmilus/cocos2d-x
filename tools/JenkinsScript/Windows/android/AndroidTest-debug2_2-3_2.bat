::This script is used to finish a android automated compiler.
::You should make sure have finished the environment setting.
::You should add %ANDROID_HOME%\tools and %ANDROID_HOME%\platform-tools to Path

::Copy monkeyrunner python script to tools directory.
copy %cd%\Monkeyrunner_TestsCpp.py %ANDROID_HOME%\tools

cd ..\..\..\..
cd samples\TestCpp\proj.android\bin

::Copy test apk to tools directory.
copy %cd%\Tests-debug-8.apk %ANDROID_HOME%\tools
copy %cd%\Tests-debug-10.apk %ANDROID_HOME%\tools
copy %cd%\Tests-debug-11.apk %ANDROID_HOME%\tools
copy %cd%\Tests-debug-12.apk %ANDROID_HOME%\tools
copy %cd%\Tests-debug-13.apk %ANDROID_HOME%\tools

::Enter tools directory.
set ANDROID_ROOT=%ANDROID_HOME:~0,2%
%ANDROID_ROOT%
cd %ANDROID_HOME%\tools

::If monkeyrunner test failed,it automatically exit and make ERRORLEVEL nonzero.

::Running monkeyrunner test(debug,API level:8).
ren Tests-debug-8.apk Tests-debug.apk
monkeyrunner Monkeyrunner_TestsCpp.py
rm Tests-debug.apk

::Running monkeyrunner test(debug,API level:10).
ren Tests-debug-10.apk Tests-debug.apk
monkeyrunner Monkeyrunner_TestCpp.py
rm Tests-debug.apk

::Running monkeyrunner test(debug,API level:11).
ren Tests-debug-11.apk Tests-debug.apk
monkeyrunner Monkeyrunner_TestCpp.py
rm Tests-debug.apk

::Running monkeyrunner test(debug,API level:12).
ren Tests-debug-12.apk Tests-debug.apk
monkeyrunner Monkeyrunner_TestCpp.py
rm Tests-debug.apk

::Running monkeyrunner test(debug,API level:13).
ren Tests-debug-13.apk Tests-debug.apk
monkeyrunner Monkeyrunner_TestCpp.py
rm Tests-debug.apk

rm Monkeyrunner_TestCpp.py

::Monkeyrunner success!
echo Monkeyrunner Test Success!
git checkout -f
git clean -df -x
exit 0

::End