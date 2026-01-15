# Tech-Niche Services Website

Professional website for Tech-Niche Services - specializing in automation, systems design, and operational excellence.

## 🚀 Deployment Setup

This site is optimized for **Vercel** deployment with **GoDaddy** domain management.

### Local Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev
```

Visit `http://localhost:3000` to view locally.

### Vercel Deployment

1. **Connect to GitHub**
   - Push this repository to GitHub
   - Connect your GitHub account to Vercel

2. **Deploy to Vercel**
   - Import project from GitHub in Vercel dashboard
   - Vercel will auto-detect static site configuration
   - Deploy automatically on every push to main branch

3. **Custom Domain Setup (GoDaddy + Vercel)**
   - In Vercel dashboard: Settings → Domains
   - Add your custom domain (e.g., `technicheservices.com`)
   - Copy the DNS records provided by Vercel
   - In GoDaddy DNS management, update:
     - **A Record**: `@` → Vercel's IP address
     - **CNAME Record**: `www` → your-project.vercel.app

### Project Structure

```
techniche/
├── index.html          # Main website
├── styles.css          # Styling and responsive design
├── package.json        # Project configuration
├── vercel.json         # Vercel deployment settings
└── README.md          # This file
```

## 🛠 Tech Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with Grid/Flexbox
- **Vercel**: Static site hosting and CDN
- **GoDaddy**: Domain registration and DNS

## 📱 Features

- ✅ Mobile-responsive design
- ✅ Professional typography
- ✅ Fast loading with Vercel CDN
- ✅ SEO-optimized structure
- ✅ Clean, maintainable code
- ✅ Easy to extend and scale

## 🎯 Brand Positioning

Communicates precision, reliability, and systems-focused thinking through:
- Clean, minimal design
- Professional color palette
- Technical credibility
- Systematic content organization

---

**Tech-Niche Services** - Clear systems. Reliable automation. Built for real work.