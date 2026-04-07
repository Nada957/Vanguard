@echo off
cd /d "c:\Users\Mega Store\Downloads\test\twst1"
echo 📈 Linking your Google Sheet to the Public Website...
echo --------------------------------------------------
echo 1M_KsxkG-fuqTk92pcNYKE0R-3VVJkTzNsiHjp01TxGo | cmd /c npx vercel env add NEXT_PUBLIC_SHEET_ID production
echo --------------------------------------------------
echo ✅ Your Sheet is now linked!
echo Now publishing the final version...
echo --------------------------------------------------
cmd /c npx vercel --prod
echo.
echo 🎉 CONGRATULATIONS! Your site is live!
pause
