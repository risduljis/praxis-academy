@ECHO OFF

attrib /s /d D:\praxis-academy\*.java 

:choice
set /P c=aris.java ada, diganti namanya (y/t)?
if /I "%c%" EQU "y" goto :ganti
if /I "%c%" EQU "t" goto :tidak
goto :choice


:ganti

set /p id=Nama file : 
ren D:\praxis-academy\kemampuan-dasar\kemampuan-dasar-1\kasus\*.java %id%.java
echo "Nama file berhasil diubah menjadi %id%.java"
pause
exit

:tidak

echo "Ya, jangan diganti namanya!"
pause
exit