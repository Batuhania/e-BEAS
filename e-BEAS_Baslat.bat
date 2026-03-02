@echo off
title e-BEAS Sinav Hazirlik Uygulamasi
color 0b
echo =======================================================
echo          e-BEAS Sınav Hazırlık Uygulaması
echo =======================================================
echo.
echo Sunucu baslatiliyor... Lutfen bu siyah pencereyi kapatmayin.
echo Saniyeler icinde tarayiciniz otomatik olarak acilacaktir.
echo.
cd /d "%~dp0"
call npm run dev -- --open
pause
