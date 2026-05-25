@echo off
REM Afly Consultancy - Website Startup Script for Windows

echo.
echo ====================================
echo   Afly Consultancy Website Starter
echo ====================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

REM Navigate to docs folder
cd /d "%~dp0docs" || (
    echo ERROR: Could not navigate to docs folder
    pause
    exit /b 1
)

REM Check if node_modules exists
if not exist node_modules (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo ERROR: npm install failed
        pause
        exit /b 1
    )
    echo.
)

REM Start development server
echo Starting development server...
echo.
echo ====================================
echo Website will be available at:
echo http://localhost:3000
echo ====================================
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
