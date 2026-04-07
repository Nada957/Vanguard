@echo off
echo 🚀 Portfolio Google Sheets CMS - Multiple Portfolio Creator
echo.
echo This tool helps you create multiple portfolios with different themes.
echo.
echo Steps to create a new portfolio:
echo 1. Go to https://sheets.google.com and create a new spreadsheet
echo 2. Click Share → "Anyone with the link can view"
echo 3. Upload the template: google-sheet-templates\PortfolioData.csv
echo 4. Customize the content for your target audience
echo 5. Set Config→active_theme to your preferred theme (1-10)
echo 6. Copy the Sheet ID from the URL
echo.
echo Your portfolio URLs will be:
echo - Default theme: https://your-site.com/SHEET_ID
echo - Custom theme:  https://your-site.com/SHEET_ID?theme=X
echo.
echo Available Themes:
echo 1. Neon Genesis    2. Violet Storm    3. Noir Minimal
echo 4. Azure Modern    5. Crimson Red Team 6. Matrix Digital
echo 7. Executive Pro   8. Luxury Gold     9. Soft Pastel
echo 10. Blue Horizon
echo.
echo Press any key to open Google Sheets...
pause >nul
start https://sheets.google.com
echo.
echo Template file location: %~dp0google-sheet-templates\PortfolioData.csv
echo.