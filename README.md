# 🚀 PrimeVerse Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features a working contact form with EmailJS integration.

![React](https://img.shields.io/badge/React-18-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8) ![Vite](https://img.shields.io/badge/Vite-5.0-646cff)

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Setup Contact Form (EmailJS)](#-setup-contact-form-emailjs)
- [Troubleshooting](#-troubleshooting)
- [Customization](#-customization)
- [Deployment](#-deployment)

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
- ✅ **Easy to Customize** - Simple component-based structure

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

#### Subject

```
New Contact: {{name}}
```

#### Body

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

#### Settings

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

## 🔧 Troubleshooting

### Problem: Port Already in Use

**Error:** `Port 3000 is in use`

**Solution:**

```bash
# Vite will automatically try port 3001
# Or manually change port in frontend/vite.config.js:

export default defineConfig({
  server: {
    port: 3002  // Change to any available port
  }
})
```

---

### Problem: Not Receiving Emails

**Check 1: Verify EmailJS Template Variables**

In EmailJS dashboard, make sure your template includes these variables:

- `{{name}}`
- `{{email}}`
- `{{phone}}`
- `{{message}}`

**Check 2: Test in EmailJS Dashboard**

1. Go to your template in EmailJS
2. Click **"Test It"** button
3. Fill in test values
4. Send test email
5. Check if you receive it

**Check 3: Browser Console Errors**

1. Open your website
2. Press **F12** (Developer Tools)
3. Go to **"Console"** tab
4. Submit the form
5. Look for red error messages

**Check 4: Verify IDs are Correct**

In `Contact.jsx`, double-check:

- Service ID
- Template ID
- Public Key

All should match exactly what's in your EmailJS dashboard.

**Check 5: Check Spam Folder**

Sometimes emails land in spam/junk folder initially.

---

### Problem: Styles Not Loading

**Solution:**

```bash
# Stop the server (Ctrl + C)
# Clear cache and restart
cd frontend
npm run dev
```

---

### Problem: `npm install` Fails

**Error:** `npm ERR!` or network timeout

**Solution 1:** Clear npm cache

```bash
npm cache clean --force
npm install
```

**Solution 2:** Use different registry

```bash
npm config set registry https://registry.npmjs.org/
npm install
```

**Solution 3:** Delete and reinstall

```bash
# In frontend folder
rmdir /s node_modules  # Windows
rm -rf node_modules    # Mac/Linux

npm install
```

---

### Problem: Black Screen / Blank Page

**Check 1:** Make sure you're in the right directory

```bash
# You should be in the frontend folder
cd frontend
npm run dev
```

**Check 2:** Check for JavaScript errors in console (F12)

**Check 3:** Reinstall dependencies

```bash
npm install
npm run dev
```

---

### Problem: PowerShell `&&` Error

**Error:** `The token '&&' is not a valid statement separator`

**Solution:** Use semicolon instead:

```powershell
cd frontend; npm run dev
```

---

## 🎨 Customization

### Change Colors

Edit `frontend/tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',    // Change to your color
        secondary: '#ec4899',  // Change to your color
        accent: '#f97316',     // Change to your color
      }
    }
  }
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
2. Update in `Contact.jsx` → Line 65:

```javascript
content: 'your-new-email@example.com',
```

---

## 📦 Build for Production

```bash
cd frontend
npm run build
```

Output folder: `frontend/dist/`

This creates optimized files ready for deployment.

---

## 🌐 Deployment

### Option 1: Netlify (Easiest)

1. Go to **<https://netlify.com>**
2. Drag & drop the `dist` folder
3. Done! Your site is live

### Option 2: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd frontend
vercel
```

### Option 3: GitHub Pages

1. Push code to GitHub
2. Go to repo **Settings** → **Pages**
3. Select branch and `/dist` folder
4. Save

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
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── START.bat
└── README.md
```

---

## 🔑 Current Configuration

- **Email:** <infoprimeverse@gmail.com>
- **Phone:** +91 7058615811
- **Location:** Shivam Greens, Mumbai, Maharashtra
- **Service ID:** service_wpzakbu
- **Template ID:** template_z7653ji
- **Public Key:** MbwvwSM7c5Ex3_-S_

---

## 💡 Tips

1. **Keep EmailJS free plan in mind** - 200 emails/month limit
2. **Check spam folder** - First emails might go to spam
3. **Test contact form** before going live
4. **Backup your EmailJS IDs** in a safe place
5. **Customize content** to match your brand

---

## 📞 Need Help?

### EmailJS Issues

- Dashboard: <https://dashboard.emailjs.com>
- Docs: <https://www.emailjs.com/docs/>
- Support: <https://www.emailjs.com/support/>

### React/Vite Issues

- React Docs: <https://react.dev>
- Vite Docs: <https://vitejs.dev>
- Tailwind Docs: <https://tailwindcss.com>

---

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

---

**Built with ❤️ by PrimeVerse**

*Need a custom website? Contact us at <infoprimeverse@gmail.com>*
