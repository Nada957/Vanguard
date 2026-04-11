# 🚀 Portfolio Website Owner Guide - How to Use & Google Sheets Setup

## 🎯 Quick Start (5 Minutes)

1. **Duplicate Template**: Copy `google-sheet-templates/PortfolioData.xlsx` or `PortfolioData.csv`
2. **Fill Your Data**: Edit content (name, bio, skills, projects etc.)
3. **Make Public**: Share → Anyone with link can **view**
4. **Get Sheet ID**: From URL: `https://docs.google.com/spreadsheets/d/[SHEET-ID]/edit` → copy [SHEET-ID]
5. **Run Website**: `npm run dev` → open `localhost:3000/?id=[SHEET-ID]` (or `localhost:3000` for default)

**Your site instantly reflects sheet changes! No code needed.**

## 📊 Google Sheet Format (One Tab Only)

**Columns**: Section | Key | Value 1 | Value 2

**Example Rows** (copy-paste to your sheet):

```
Section | Key | Value 1 | Value 2
Config | active_theme | 1 |
Config | accent_color | #FF0000 |
Config | contact_email | your@email.com |
Config | license_key | PREMIUM_10X_UNLOCK |  // Unlocks 10 themes
Identity | user_name | John Doe |
Identity | bio | Full Stack Developer |
Identity | email | john@example.com |
Identity | profile_img_url | Cobra.webp  // File in public/ OR URL OR base64 data:image/...
Identity | hire_me_text | Hire Me |
Identity | hire_me_url | https://calendly.com/john/30min |
Social | GitHub | https://github.com/yourusername |  // Works with GitHub icon
Social | TryHackMe | https://tryhackme.com/p/yourusername  // Works with THM icon
Social | LinkedIn | https://linkedin.com/in/john |
Skill | React | 95 | ⚛️ 
Skill | Node.js | 90 | 🟢
Project | My App | https://i.imgur.com/project1.jpg | https://myapp.com
Experience | Senior Developer | Tech Corp | 2022-Present
Service | Web Development | Custom sites & apps | 💻
Testimonial | Jane Smith | CEO | \"Outstanding work!\" |
Blog | My First Post | Content here... | 2024-01-15
```

**Pro Tip**: Import CSV template instantly: File → Import → Upload `PortfolioData.csv`

## ⚙️ Key Config Options

| Key | Example | Effect |
|-----|---------|--------|
| active_theme | 1-10 | Default theme (1=Neon, 5=Crimson etc.) |
| accent_color | #FF0000 | Primary color |
| contact_email | your@email.com | Enables EmailJS form |
| license_key | PREMIUM_10X_UNLOCK | Unlocks all themes |

## 🔗 Using the Website

**URLs**:
- `your-site.com/?id=[SHEET-ID]` → Your portfolio (defaults to ID 1lPij9_815HSen4P5S0IGPRxwtbFuWeFGE7extKR-GK0 if no id)
- `your-site.com/?id=[SHEET-ID]&theme=5` → Theme 5 override
- `your-site.com` → Default sheet

**Admin Portal**:
- Type `r-a-v-e-n-1` on site → Theme previewer & share links

**Multiple Portfolios**:
- Different sheet ID per audience (creative/corporate)
- Same sheet, different ?theme= param

## 🛠️ Local Development

```
npm install
npm run dev
``` (Default ID hardcoded; override with ?id=)

**Production**: Deploy to Vercel/Netlify → Custom domain + multiple sheets.

## 📧 Contact Form

Add `Config | contact_email | your@email.com` → Form sends to you (EmailJS fallback mailto).

## 🎨 Themes (1-10)

1. Neon Genesis (Terminal)
2. Crimson Red Team
3. Corporate Blue
4. Minimal White
5. Luxury Gold
6. Dark Matrix
7. Retro Pixel
8. Glassmorphism
9. Cyberpunk Neon
10. Portfolio Classic

**Override**: `?theme=X`

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| Blank page | Sheet not public ('view' access) |
| No data | Check sheet format (Section/Key/Value1) |
| Wrong theme | Config active_theme row |
| No contact | Add contact_email row |

**Data from sheet**: Fetches every visit, real-time updates!

*Template powered by google-sheet-templates/PortfolioData.xlsx*

For support: Check INSTRUCTIONS.md or google-sheets.ts source.

