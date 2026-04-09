# 🚀 Portfolio Google Sheets CMS

Your entire website is controlled via a simple **Google Spreadsheet**. No code required!

## ✨ Features

- **Multiple Portfolios**: Create different portfolios for different audiences
- **Theme Overrides**: Share the same portfolio with different themes via URL parameters
- **Dynamic Content Management**: Edit your portfolio directly in Google Sheets
- **10 Beautiful Themes**: Choose from various theme layouts
- **SEO Optimized**: Dynamic meta tags for better search visibility
- **Contact Form**: Built-in contact form with direct email sending via EmailJS (configurable recipient email)
- **Testimonials Slider**: Interactive carousel showcasing client feedback
- **Blog Section**: Share your thoughts and insights
- **PDF Export**: Generate professional resume downloads
- **Admin Portal**: Preview themes and manage your content
- **Responsive Design**: Looks great on all devices
- **Social Integration**: Connect your GitHub, LinkedIn, and more

### 📝 1. Creating Multiple Portfolios

**For Each Portfolio:**
1. Create a new Google Sheet (or duplicate an existing one)
2. Set it to **"Anyone with the link can view"** via the Share button
3. Upload the `google-sheet-templates/PortfolioData.csv` file
4. Customize the content for that specific audience
5. Set the `Config,active_theme` row to your preferred theme (1-10)

**Example Portfolios:**
- **Portfolio A**: Sheet ID `1abc123...` with Theme 1 (Neon Genesis) for creative clients
- **Portfolio B**: Sheet ID `2def456...` with Theme 5 (Crimson Red Team) for corporate clients

### 🔗 2. Sharing Portfolios with Different Themes

You can share the **same portfolio** with **different themes** by adding `?theme=X` to the URL:

```
https://your-site.com/YOUR_SHEET_ID?theme=1  ← Neon Genesis
https://your-site.com/YOUR_SHEET_ID?theme=5  ← Crimson Red Team
https://your-site.com/YOUR_SHEET_ID?theme=8  ← Luxury Gold
```

**Quick Sharing:**
- Open your portfolio and press `C-I-C-A-D-A` to open the admin portal
- Click any theme in the "Share Portfolio with Different Themes" section
- The unique URL is automatically copied to your clipboard!

### 📤 3. Portfolio URLs

* **Default Portfolio**: `your-site.com` (uses `.env.local` sheet)
* **Custom Portfolio**: `your-site.com/SHEET_ID`
* **Themed Portfolio**: `your-site.com/SHEET_ID?theme=5`

### 🚀 4. Getting Started (The "Local" Way)
1. Create a new Google Sheet (or use the template).
2. Set it to **"Anyone with the link can view"** via the Share button.
3. Put your Sheet ID in your `.env.local` file.
4. Run the site! Your content will appear instantly.

> Tip: Use the new `Identity,about` row for a longer personal description, and put skill icons in the fourth column so the tech grid looks polished by default.

### 🔗 2. The "Dynamic" Way (No Config Needed!)
You can view **ANY** compatible Google Sheet instantly by adding its ID to the URL:
`localhost:3000/YOUR_SHEET_ID_HERE`

### 📤 3. Sharing Your Portfolio
*   **Share Button**: Click the floating share icon on your site to instantly copy your public link.
*   **Vercel Deployment**: Deploy your project to Vercel, and your public link will be `your-site.vercel.app/YOUR_SHEET_ID`.

---
*Powered by Cicada Academy*
