@echo off
title e-BEAS Sinav Hazirlik Uygulamasi
color 0b
echo =======================================================
echo          e-BEAS - Sinav Hazirlik Uygulamasi
echo =======================================================
echo.
echo  Tarayici secin:
echo.
echo    [1] Chrome
echo    [2] Edge
echo    [3] Firefox
echo    [4] Varsayilan tarayici
echo.
set /p choice="Seciminiz (1-4): "

cd /d "%~dp0"

echo.
echo Sunucu baslatiliyor...
echo Bu pencereyi kapatmayin. Kapatirsan uygulama durur.
echo.

if "%choice%"=="1" (
    start "" "chrome" "http://localhost:5173/e-BEAS/"
) else if "%choice%"=="2" (
    start "" "msedge" "http://localhost:5173/e-BEAS/"
) else if "%choice%"=="3" (
    start "" "firefox" "http://localhost:5173/e-BEAS/"
) else (
    start "" "http://localhost:5173/e-BEAS/"
)

call npm run dev
pause
