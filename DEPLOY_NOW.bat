@echo off
echo ========================================
echo   Building Your Website for Deployment
echo ========================================
echo.

cd frontend

echo Building website...
call npm run build

echo.
echo ========================================
echo   BUILD COMPLETE!
echo ========================================
echo.
echo Your website is ready in: frontend\dist
echo.
echo NEXT STEPS:
echo.
echo Option 1 - EASIEST (Drag & Drop):
echo   1. Open: https://app.netlify.com/drop
echo   2. Drag the 'frontend\dist' folder onto the page
echo   3. Done! You get a live URL instantly
echo.
echo Option 2 - Using Netlify CLI:
echo   1. Run: npm install -g netlify-cli
echo   2. Run: netlify deploy --prod
echo   3. Follow the prompts
echo.
echo Option 3 - Using Vercel:
echo   1. Run: npm install -g vercel
echo   2. Run: cd frontend
echo   3. Run: vercel --prod
echo.
echo Your website files are in: frontend\dist
echo ========================================
pause

