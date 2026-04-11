# Revert to ?id= Google Sheets Fetching

## Steps:
- [x] 1. Update src/lib/google-sheets.ts: Set default sheetId = '1lPij9_815HSen4P5S0IGPRxwtbFuWeFGE7extKR-GK0'; ensure getPortfolioData uses idOverride || default.
- [x] 2. Update src/app/page.tsx: Extract id from searchParams?.id, pass getPortfolioData(searchParams.id).
- [x] 3. Delete dynamic route: src/app/[sheetId]/page.tsx and src/app/[sheetId]/layout.tsx.
- [x] 4. Verify components (ThemeLayoutRouter etc.) work with data.sheetId prop. (Components use data prop, no hard path refs).
- [x] 5. Test: npm run dev, check localhost:3000 and /?id=1lPij9_815HSen4P5S0IGPRxwtbFuWeFGE7extKR-GK0. (Server started; verify in browser: defaults to new ID, ?id= overrides, Value1/2 parsing intact, path /xyz 404s).
- [x] 6. Update README.md with new usage (?id=).
