# 🚀 PrimeVerse Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features a working contact form with EmailJS integration, automatic GitHub deployments, and full SEO optimization.

![React](https://img.shields.io/badge/React-18-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8) ![Vite](https://img.shields.io/badge/Vite-5.0-646cff)

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Setup Contact Form (EmailJS)](#-setup-contact-form-emailjs)
- [GitHub + Netlify Deployment](#-github--netlify-deployment)
- [SEO Setup](#-seo-setup)
- [Troubleshooting](#-troubleshooting)
- [Customization](#-customization)

---

## ⚡ Quick Start

### Option 1: Windows (Easiest)

1. Double-click **`START.bat`**
2. Browser will open automatically at `http://localhost:3000`

### Option 2: Manual Start

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Open your browser at **`http://localhost:3000`** or **`http://localhost:3001`**

---

## ✨ Features

- ✅ **Modern UI/UX** - Clean, minimalistic design with smooth animations
- ✅ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ✅ **Interactive Sections** - Hero, Services, Portfolio, Testimonials, Contact
- ✅ **Working Contact Form** - Sends emails directly to your inbox
- ✅ **Fast & Optimized** - Built with Vite for lightning-fast performance
- ✅ **SEO Optimized** - Meta tags, structured data, sitemap, robots.txt
- ✅ **Automatic Deployments** - Push to GitHub → Netlify auto-deploys

---

## 📧 Setup Contact Form (EmailJS)

The contact form sends emails to **`infoprimeverse@gmail.com`** using EmailJS. Follow these steps to activate it:

### Step 1: Create EmailJS Account (2 minutes)

1. Go to **<https://www.emailjs.com/>**
2. Click **"Sign Up"** (free plan - 200 emails/month)
3. Verify your email

### Step 2: Add Email Service (2 minutes)

1. In EmailJS dashboard → **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Connect your Gmail account: `infoprimeverse@gmail.com`
5. Copy your **Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Email Template (3 minutes)

1. Click **"Email Templates"** → **"Create New Template"**
2. Set **Template Name**: "Contact Form"
3. Configure the template:

**Subject:**
```
New Contact: {{name}}
```

**Body:**
```
NEW CONTACT FORM SUBMISSION
===========================

Name: {{name}}
Email: {{email}}
Phone: {{phone}}

Message:
{{message}}

===========================
Reply directly to this email to contact the user.
```

**Settings:**
- **To Email**: `infoprimeverse@gmail.com`
- **From Name**: `{{name}}`
- **Reply To**: `{{email}}`

4. Click **"Save"** and copy your **Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Public Key (1 minute)

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. Copy your **Public Key** (looks like `abcXYZ123_xyz`)

### Step 5: Update Your Code (1 minute)

Open: `frontend/src/components/Contact.jsx`

Find lines 32-35 and replace with your IDs:

```javascript
const result = await emailjs.sendForm(
    'service_wpzakbu',        // Replace with YOUR Service ID
    'template_z7653ji',       // Replace with YOUR Template ID
    formRef.current,
    'MbwvwSM7c5Ex3_-S_'       // Replace with YOUR Public Key
);
```

### Step 6: Test It! ✅

1. Save the file
2. Go to your website contact form
3. Fill it out and submit
4. Check your email inbox!

---

## 🚀 GitHub + Netlify Deployment

### Automatic Deployments Setup

**Push code to GitHub → Netlify automatically rebuilds and updates your live site!**

### Step 1: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to **<https://app.netlify.com>**
2. Sign up with GitHub (free)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose GitHub → Select your repository
5. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
6. Click **"Deploy site"**

### Step 3: Update Your Website

After setup, whenever you make changes:

```bash
git add .
git commit -m "Your changes description"
git push
```

Netlify automatically rebuilds and deploys your site in 1-2 minutes! ✅

---

## 🔍 SEO Setup

Your website is already SEO-optimized with:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt

### Submit to Google Search Console

1. Go to **<https://search.google.com/search-console>**
2. Add property: `https://primeverse-ai.netlify.app`
3. Verify ownership (HTML tag method - tag is already in your code)
4. Submit sitemap: `https://primeverse-ai.netlify.app/sitemap.xml`
5. Wait 1-3 days for indexing

### Submit to Bing Webmaster Tools

1. Go to **<https://www.bing.com/webmasters>**
2. Add your site
3. Verify ownership
4. Submit sitemap

---

## 🔧 Troubleshooting

### Problem: Port Already in Use

**Error:** `Port 3000 is in use`

**Solution:**
```bash
# Vite will automatically try port 3001
# Or change port in frontend/vite.config.js
```

### Problem: Not Receiving Emails

**Check:**
1. EmailJS template has all variables: `{{name}}`, `{{email}}`, `{{phone}}`, `{{message}}`
2. Service ID, Template ID, and Public Key are correct
3. Check spam folder
4. Test in EmailJS dashboard first

### Problem: Sitemap Not Working in Google

**Solution:**
1. Verify site ownership in Google Search Console first
2. Use full URL: `https://primeverse-ai.netlify.app/sitemap.xml`
3. Wait 24-48 hours for Google to process

### Problem: Styles Not Loading

**Solution:**
```bash
# Stop server (Ctrl + C)
cd frontend
npm run dev
```

### Problem: PowerShell `&&` Error

**Solution:** Use semicolon instead:
```powershell
cd frontend; npm run dev
```

---

## 🎨 Customization

### Change Colors

Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  primary: '#6366f1',    // Your color
  secondary: '#ec4899',  // Your color
  accent: '#f97316',     // Your color
}
```

### Edit Content

All content is in `frontend/src/components/`:

| File | What to Edit |
|------|--------------|
| `Hero.jsx` | Main headline and tagline |
| `Services.jsx` | Your services/offerings |
| `Portfolio.jsx` | Projects and work samples |
| `Testimonials.jsx` | Client reviews |
| `Contact.jsx` | Contact info and form |
| `Footer.jsx` | Footer links and info |

### Change Contact Email

1. Update EmailJS template → **"To Email"**
2. Update in `Contact.jsx` → Line 65

---

## 📦 Build for Production

```bash
cd frontend
npm run build
```

Output folder: `frontend/dist/`

---

## 🌐 Deployment Options

### Netlify (Recommended - Already Configured)

- Automatic deployments from GitHub
- Free SSL certificate
- Fast CDN
- Already set up with `netlify.toml`

### Vercel

```bash
npm install -g vercel
cd frontend
vercel
```

### GitHub Pages

1. Push code to GitHub
2. Go to repo **Settings** → **Pages**
3. Select branch and `/dist` folder

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **Tailwind CSS 3** - Styling
- **Vite 5** - Build tool
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **EmailJS** - Contact form emails

---

## 📁 Project Structure

```
portfolio-site/
├── frontend/
│   ├── src/
│   │   ├── components/     # All website sections
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   │   ├── sitemap.xml     # SEO sitemap
│   │   ├── robots.txt      # SEO robots
│   │   └── _redirects      # Netlify redirects
│   ├── index.html
│   └── package.json
├── netlify.toml            # Netlify configuration
├── START.bat               # Quick start script
└── README.md               # This file
```

---

## 🔑 Current Configuration

- **Website**: <https://primeverse-ai.netlify.app>
- **Email**: infoprimeverse@gmail.com
- **Phone**: +91 7058615811
- **Location**: Shivam Greens, Mumbai, Maharashtra
- **LinkedIn**: <https://www.linkedin.com/in/manas-gadge/>
- **Instagram**: <https://www.instagram.com/manas_gadge_/>

---

## 💡 Tips

1. **EmailJS Free Plan** - 200 emails/month limit
2. **Check spam folder** - First emails might go to spam
3. **Test contact form** before going live
4. **Backup EmailJS IDs** in a safe place
5. **Update sitemap** when adding new pages

---

## 📞 Need Help?

- **EmailJS**: <https://dashboard.emailjs.com>
- **Netlify**: <https://app.netlify.com>
- **Google Search Console**: <https://search.google.com/search-console>
- **React Docs**: <https://react.dev>
- **Vite Docs**: <https://vitejs.dev>

---

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

---

**Built with ❤️ by PrimeVerse**

*Need a custom website? Contact us at infoprimeverse@gmail.com*
