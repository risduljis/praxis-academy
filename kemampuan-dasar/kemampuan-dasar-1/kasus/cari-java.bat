@ECHO OFF
DIR D:\praxis-academy /B /S
if Exist D:\praxis-academy\kemampuan-dasar\kemampuan-dasar-1\kasus\*.java (Start D:\praxis-academy\kemampuan-dasar\kemampuan-dasar-1\kasus\file-ren.bat) else (echo Tidak ada file .java!)


