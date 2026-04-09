# 🚀 Portfolio Google Sheets CMS | Setup Instructions

Welcome to your dynamic Portfolio Engine! Your entire website is controlled via a simple **Google Spreadsheet**, meaning you never have to touch a single line of code to edit your website!

---

## ✨ Multiple Portfolios & Theme Sharing

### Creating Different Portfolios for Different Audiences

1. **Create Multiple Google Sheets**: Each portfolio gets its own spreadsheet
2. **Set Different Themes**: Use `Config > active_theme` to set the default theme (1-10)
3. **Customize Content**: Tailor the content for each specific audience

**Example Setup:**
- **Creative Portfolio**: Sheet ID `1abc123...` with Theme 1 (Neon Genesis)
- **Corporate Portfolio**: Sheet ID `2def456...` with Theme 5 (Crimson Red Team)

### Sharing the Same Portfolio with Different Themes

Add `?theme=X` to any portfolio URL to override the theme:

```
your-site.com/SHEET_ID?theme=1  ← Neon Genesis
your-site.com/SHEET_ID?theme=5  ← Crimson Red Team  
your-site.com/SHEET_ID?theme=8  ← Luxury Gold
```

**Quick Sharing Tool:**
- Open any portfolio and type `C-I-C-A-D-A` to open the admin portal
- Click any theme in "Share Portfolio with Different Themes" 
- The themed URL is automatically copied to your clipboard!

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
| **Config** | emailjs_service_id | your_service_id | |
| **Config** | emailjs_template_id | your_template_id | |
| **Config** | emailjs_public_key | your_public_key | |
| **Config** | recipient_email | your@email.com | |
| **Config** | recipient_email | your@email.com | |
| **Identity** | user_name | Your Name | |
| **Identity** | bio | Your short tagline | |
| **Identity** | about | A longer story about what you build and why | |
| **Identity** | email | your@email.com | |
| **Identity** | profile_img_url | https://...image.jpg | |
| **Social** | GitHub | https://github.com/yourname | |
| **Social** | LinkedIn | https://linkedin.com/in/yourname | |
| **Skill** | React | 90 | ⚛️ |
| **Skill** | TypeScript | 85 | 🔷 |
| **Skill** | Node.js | 80 | 🟢 |
| **Skill** | Next.js | 85 | ⚫️ |
| **Skill** | Tailwind CSS | 95 | 🌬️ |
| **Skill** | Git | 80 | 🐙 |
| **Skill** | Figma | 75 | 🎨 |
| **Project** | Cool App | https://...image.jpg | https://...link.com |
| **Experience** | Senior Developer | Tech Corp | 2020-Present | Led team of 5 developers |
| **Service** | Web Development | Custom websites and apps | 💻 |
| **Testimonial** | John Doe | CEO, Company | "Amazing work!" | |
| **Blog** | My First Post | This is the content of my blog post | 2024-01-01 | |

**Note**: *You can simply go to `File > Import > Upload` in Google Sheets and upload the `google-sheet-templates/PortfolioData.csv` file to do all this instantly!*

---

## 💎 How to Unlock The 10 Premium Themes

If you purchased the **Premium Version**, you have access to a suite of 10 different layout designs and a Theme Switcher. To unlock them:
1. Open your Google Sheet.
2. In the `Config` section, look for the `license_key` row.
3. Type your Premium code: `PREMIUM_10X_UNLOCK` in the `Value 1` column.
4. Refresh your website and watch the themes unlock!

*Powered by Cicada Academy*

---

## 📧 Setting Up Direct Email Sending (EmailJS)

By default, the contact form uses `mailto:` links which open the visitor's email client. To send emails directly from your website without opening email clients:

1. **Create an EmailJS Account**: Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account.

2. **Set Up Email Service**:
   - In your EmailJS dashboard, go to "Email Services" and add a new service (Gmail, Outlook, etc.)
   - Follow the setup instructions to connect your email account

3. **Create an Email Template**:
   - Go to "Email Templates" and create a new template
   - Set the "To Email" field to: `{{to_email}}`
   - Set the "Reply To" field to: `{{reply_to}}`
   - Use this template structure:
     ```
     Subject: New Contact Form Message from {{from_name}}

     You have received a new message from your portfolio website:

     Name: {{from_name}}
     Email: {{from_email}}

     Message:
     {{message}}

     ---
     This message was sent from your portfolio contact form.
     ```

4. **Get Your IDs**:
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates  
   - Public Key: Found in Account settings

5. **Configure Your Google Sheet**:
   - Add these rows to your Config section:
     ```
     | Config | emailjs_service_id | YOUR_SERVICE_ID | |
     | Config | emailjs_template_id | YOUR_TEMPLATE_ID | |
     | Config | emailjs_public_key | YOUR_PUBLIC_KEY | |
     | Config | recipient_email | your@email.com | |
     ```
   - The `recipient_email` is the email address where contact form submissions will be sent. This can be different from your identity email.

6. **Test It**: Submit the contact form on your website - emails should now send directly!

*Note: Free EmailJS accounts have a monthly sending limit. Upgrade for higher limits if needed.*
