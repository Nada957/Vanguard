# 🚀 Portfolio Website Normal Guide - How to Use & Google Sheets Setup (Free Version)

## 🎯 Quick Start (5 Minutes)

1. **Duplicate Template**: Copy `google-sheet-templates/PortfolioData.xlsx` or `PortfolioData.csv`
2. **Fill Your Data**: Edit content (name, bio, skills, projects etc.)
3. **Make Public**: Share → Anyone with link can **view**
4. **Get Sheet ID**: From URL: `https://docs.google.com/spreadsheets/d/[SHEET-ID]/edit` → copy [SHEET-ID]
5. **Run Website**: `npm run dev` → open `localhost:3000/[SHEET-ID]`

**Your site instantly reflects sheet changes! No code needed.**

## 📊 Google Sheet Format (One Tab Only)

**Columns**: Section | Key | Value 1 | Value 2

**Example Rows** (copy-paste):

```
Section | Key | Value 1 | Value 2
Config | active_theme | 1 |
Config | accent_color | #00ffff |
Config | contact_email | your@email.com |
Identity | user_name | John Doe |
Identity | bio | Full Stack Developer |
Identity | email | john@example.com |
Identity | profile_img_url | https://i.imgur.com/yourphoto.jpg |
Identity | hire_me_text | Hire Me |
Identity | hire_me_url | https://calendly.com/john/30min |
Social | GitHub | https://github.com/john | 
Social | LinkedIn | https://linkedin.com/in/john |
Skill | React | 95 | ⚛️ 
Skill | Node.js | 90 | 🟢
Project | My App | https://i.imgur.com/project1.jpg | https://myapp.com
Experience | Senior Developer | Tech Corp | 2022-Present
Service | Web Development | Custom sites & apps | 💻
Testimonial | Jane Smith | CEO | \"Outstanding work!\" |
Blog | My First Post | Content here... | 2024-01-15
```

**Pro Tip**: Import CSV template: File → Import → Upload `PortfolioData.csv`

## ⚙️ Key Config Options (Free)

| Key | Example | Effect |
|-----|---------|--------|
| active_theme | 1 | Default theme |
| accent_color | #FF0000 | Primary color |
| contact_email | your@email.com | Enables EmailJS form |

## 🔗 Using the Website

**URLs**:
- `your-site.com/[SHEET-ID]` → Portfolio
- `your-site.com/[SHEET-ID]?theme=1` → Theme override

**Admin Portal**:
- Type `C-I-C-A-D-A` → Theme previewer

**Multiple Portfolios**: Different sheet ID per audience.

## 🛠️ Local Development

```
npm install
echo NEXT_PUBLIC_SHEET_ID=your-sheet-id > .env.local
npm run dev
```

## 📧 Contact Form

Add `Config | contact_email | your@email.com` → Form sends to you.

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| Blank page | Sheet not public |
| No data | Check format |
| Wrong theme | active_theme row |

**Print to PDF (Ctrl+P → Save as PDF). Free version - no premium themes.**

