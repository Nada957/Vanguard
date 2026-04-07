# 🚀 Portfolio Google Sheets CMS | Setup Instructions

Welcome to your dynamic Portfolio Engine! Your entire website is controlled via a simple **Google Spreadsheet**, meaning you never have to touch a single line of code to edit your website!

---

## 📝 Step 1: Set Up Your Google Sheet

1. **Create your Spreadsheet:** Create a new Google Sheet (or duplicate the seller's template).
2. **Make it Public:** Click **Share** in the top right corner and change General Access to *"Anyone with the link can view"*.
3. **Get your Sheet ID:** Look at the URL of your spreadsheet at the top of your browser. 
   It will look like this: `https://docs.google.com/spreadsheets/d/YOUR-LONG-ID-HERE/edit`
   Copy the `YOUR-LONG-ID-HERE` part.

## 📝 Step 2: Connect the Website

1. Inside your project folder, create a new file and name it exactly: `.env.local`
2. Open `.env.local` and paste this line, replacing the text with your actual ID:
   ```env
   NEXT_PUBLIC_SHEET_ID=YOUR-LONG-ID-HERE
   ```
3. Restart your server. Your website will now instantly reflect everything you type into your Google Sheet!

*(Note: If you do not create the `.env.local` file, the website will just load some default placeholder data).*

---

## 🏗️ Step 3: Format Your Spreadsheet
You only need **ONE** tab in your Google Sheet! 
Setup your spreadsheet with 4 columns: `Section`, `Key`, `Value 1`, and `Value 2`.

Here is the exact layout you should use:

| Section | Key | Value 1 | Value 2 |
|---------|-----|---------|---------|
| **Config** | active_theme | 1 | |
| **Config** | accent_color | #FF0000 | |
| **Config** | spotlight_enabled | TRUE | |
| **Config** | license_key | PREMIUM_10X_UNLOCK | |
| **Identity** | user_name | Your Name | |
| **Identity** | bio | Your Bio Here | |
| **Identity** | email | your@email.com | |
| **Identity** | profile_img_url | https://...image.jpg | |
| **Social** | GitHub | https://github.com/yourname | |
| **Social** | LinkedIn | https://linkedin.com/in/yourname | |
| **Skill** | React | 90 | |
| **Skill** | Node.js | 80 | |
| **Project** | Cool App | https://...image.jpg | https://...link.com |

**Note**: *You can simply go to `File > Import > Upload` in Google Sheets and upload the `google-sheet-templates/PortfolioData.csv` file to do all this instantly!*

---

## 💎 How to Unlock The 10 Premium Themes

If you purchased the **Premium Version**, you have access to a suite of 10 different layout designs and a Theme Switcher. To unlock them:
1. Open your Google Sheet.
2. In the `Config` section, look for the `license_key` row.
3. Type your Premium code: `PREMIUM_10X_UNLOCK` in the `Value 1` column.
4. Refresh your website and watch the themes unlock!

*Powered by Cicada Academy*
