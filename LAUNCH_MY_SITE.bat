@echo off
cd /d "c:\Users\Mega Store\Downloads\test\twst1"
echo 🚀 Launching the Cicada Portfolio Deployment...
echo --------------------------------------------------
echo Step 1: Login to Vercel (It will open your browser)
echo Step 2: Answer 'Y' to any setup questions.
echo Step 3: Just press ENTER for everything else.
echo --------------------------------------------------
cmd /c npx vercel
echo.
echo --------------------------------------------------
echo ✅ Deployment step finished! 
echo Now run the the SET_MY_SHEET_ID script to link your data.
echo --------------------------------------------------
pause
