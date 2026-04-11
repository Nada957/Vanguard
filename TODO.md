# GitHub & TryHackMe Social Links + Custom Profile Photo - COMPLETED

## Features Already Implemented:
✅ **GitHub & TryHackMe Support**: 
- Icons in `src/components/SocialIcon.tsx` (GitHub SVG, TryHackMe/THM SVG)
- Examples in `src/data/portfolio.ts` local fallback
- Generic parsing in `src/lib/google-sheets.ts` → works for ANY platform

✅ **Custom Profile Photo** (Any photo!):
- **Method 1 - Local file**: Upload `Cobra.webp` to `public/` → Sheet: `Identity | profile_img_url | Cobra.webp`
- **Method 2 - URL**: `https://i.imgur.com/yourphoto.jpg`
- **Method 3 - Base64**: `data:image/webp;base64,iVBORw0K...` (copy from base64.guru)
- Rendered in ALL 10 themes

## How to Configure (Google Sheet):
```
Social | GitHub | https://github.com/yourusername
Social | TryHackMe | https://tryhackme.com/p/yourusername
Identity | profile_img_url | Cobra.webp  // File in public/ (no http!)
```
1. Copy photo → `public/Cobra.webp`
2. Sheet public 'view'
3. `localhost:3000/[SHEET-ID]` → Photo loads!

**Local test**: Edit `src/data/portfolio.ts` → `npm run dev` → localhost:3000

## Ravens Updates:
- Footer: "Provided by RAVENS ACADEMY"
- Admin unlock: Type `raven1`

## All Steps Complete ✅
**Deploy**: Vercel/Netlify → Your portfolio live!
