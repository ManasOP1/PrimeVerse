@echo off
echo ========================================
echo   Creative Agency Website
echo ========================================
echo.

cd frontend

if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting server...
echo Opening browser at http://localhost:3000
echo.

start http://localhost:3000
call npm run dev

