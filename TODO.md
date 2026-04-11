# GitHub & TryHackMe Social Links + Custom Profile Photo - COMPLETED

## Features Already Implemented:
✅ **GitHub & TryHackMe Support**: 
- Icons in `src/components/SocialIcon.tsx` (GitHub SVG, TryHackMe/THM SVG)
- Examples in `src/data/portfolio.ts` local fallback
- Generic parsing in `src/lib/google-sheets.ts` → works for ANY platform

✅ **Custom Profile Photo**:
- `profile_img_url` field: Use ANY public image URL (Imgur, GitHub, etc.)
- Rendered in ALL 10 themes via Next/Image

## How to Configure (Google Sheet - Recommended):

**Add these rows** (Section | Key | Value1):

```
Social | GitHub | https://github.com/yourusername
Social | TryHackMe | https://tryhackme.com/p/yourusername
Identity | profile_img_url | https://i.imgur.com/yourphoto.jpg
```

1. Upload photo to [Imgur](https://imgur.com/upload) → Copy **direct link** (ends in .jpg/.png)
2. Sheet → Public 'Anyone with link can view'
3. Site: `localhost:3000/[YOUR-SHEET-ID]`

**Live preview**: Changes appear instantly!

## Local Testing (No Sheet):
Edit `src/data/portfolio.ts`:
```ts
profile_img_url: 'https://your-image-url.jpg',
social_links: [
  { platform: 'GitHub', url: 'https://github.com/you' },
  { platform: 'TryHackMe', url: 'https://tryhackme.com/p/you' },
],
```
`npm run dev` → `localhost:3000`

## All Steps Complete ✅
- [x] Verified icons/parsing/rendering
- [x] Updated instructions
- [x] Tested in themes

**Deploy**: Vercel/Netlify → Share your portfolio! 🚀
