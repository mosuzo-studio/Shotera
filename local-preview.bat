@echo off
chcp 65001 >nul
title Astro Local Preview - template
cd /d "%~dp0"

echo ============================================================
echo   Local live preview (Astro dev server, hot reload)
echo   URL:  http://localhost:4321/template
echo   Stop: close this window or press Ctrl+C
echo ============================================================
echo.

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm not found in PATH. Please install Node.js first.
  pause
  exit /b 1
)

REM --- Free port 4321 if a previous run left a server behind ---
for /f "tokens=5" %%P in ('netstat -ano ^| findstr /r /c:":4321 .*LISTENING"') do (
  echo Releasing port 4321 - stopping old server PID %%P ...
  taskkill /F /PID %%P >nul 2>nul
)

if not exist "node_modules" (
  echo node_modules not found. Installing dependencies, please wait...
  call npm ci
  if errorlevel 1 (
    echo [ERROR] npm ci failed.
    pause
    exit /b 1
  )
)

echo Opening browser shortly...
start "" /min cmd /c "ping -n 7 127.0.0.1 >nul && start http://localhost:4321/template"

echo Starting dev server...
echo.
call npm run dev

echo.
echo Dev server stopped.
pause
