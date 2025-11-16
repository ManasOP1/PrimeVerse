@echo off
echo ========================================
echo   Quick GitHub Push Script
echo ========================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo Initializing Git repository...
    git init
    git branch -M main
    echo.
)

REM Add all changes
echo Adding all changes...
git add .
echo.

REM Ask for commit message
set /p message="Enter commit message: "
if "%message%"=="" set message="Updated website"

REM Commit changes
echo Committing changes...
git commit -m "%message%"
echo.

REM Push to GitHub
echo Pushing to GitHub...
git push
echo.

if %errorlevel% equ 0 (
    echo ========================================
    echo   SUCCESS! 
    echo ========================================
    echo.
    echo Your changes are pushed to GitHub!
    echo Netlify will rebuild your site automatically.
    echo Check: https://app.netlify.com for progress
    echo.
) else (
    echo ========================================
    echo   ERROR!
    echo ========================================
    echo.
    echo If this is your first push, you need to:
    echo 1. Create a repo on GitHub
    echo 2. Run: git remote add origin YOUR_REPO_URL
    echo 3. Run: git push -u origin main
    echo.
    echo See GITHUB_NETLIFY_SETUP.md for details
    echo.
)

pause

