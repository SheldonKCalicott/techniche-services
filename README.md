# Tech-Niche Services Website

A professional static website showcasing operations automation and systems design expertise.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with clean, professional styling
- **Performance Optimized**: WebP image support, lazy loading, and optimized assets
- **SEO Ready**: Sitemap, meta tags, favicon, and search engine optimization
- **Modern Stack**: HTML5, CSS3, semantic markup

## 📁 Project Structure

```
techniche/
├── index.html          # Homepage with hero + featured projects
├── about.html          # Professional background and story
├── portfolio.html      # Complete project showcase
├── services.html       # Service offerings and process
├── contact.html        # Contact information
├── styles.css          # Complete styling system
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Search engine directives
├── favicon.ico         # Browser tab icon
└── images/             # Optimized image assets
    ├── logo.png        # Navigation logo
    ├── techniceLogo.png # Hero logo
    └── projects/       # Project screenshots
```

## 🎯 Image Optimization

### Current Status
- ✅ WebP support added with fallbacks
- ✅ Lazy loading implemented
- ✅ Picture elements for modern browsers
- 🔄 WebP conversion needed for large images

### To Create WebP Versions
Install ImageMagick and run:
```bash
# Convert large PNGs to WebP (saves 60-80% file size)
magick images/techniceLogo.png -quality 80 images/techniceLogo.webp
magick images/logo.png -quality 80 images/logo.webp
magick images/projects/faithful-steward.png -quality 80 images/projects/faithful-steward.webp
magick images/projects/team-hub.png -quality 80 images/projects/team-hub.webp

# Convert JPEG to WebP
magick images/headshot.jpg -quality 80 images/headshot.webp
```

### Performance Impact
- techniceLogo.png: 904KB → ~200KB (78% reduction)
- team-hub.png: 601KB → ~150KB (75% reduction)
- logo.png: 410KB → ~100KB (76% reduction)

## 🛠️ Development

### Local Development
```bash
npm run dev    # Serve locally at http://localhost:3000
```

### Deployment
Deployed automatically via Vercel on push to main branch.

## 📊 SEO & Performance

- ✅ Semantic HTML structure
- ✅ Meta descriptions and keywords
- ✅ OpenGraph and Twitter Card support via theme-color
- ✅ Sitemap and robots.txt
- ✅ Optimized images with WebP support
- ✅ Lazy loading for improved performance

## 🎨 Design System

- **Primary Color**: `#60a5fa` (Blue)
- **Background**: `#1a1a1a` (Dark)
- **Text**: `#e4e4e7` (Light gray)
- **Cards**: `#2a2a2a` (Medium dark)
- **Typography**: System fonts for optimal performance

---

**Tech-Niche Services** - Clear systems. Reliable automation.

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