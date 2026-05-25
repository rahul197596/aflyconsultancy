# Afly Consultancy - Overseas Education Services

## 🚀 Quick Start

### Option 1: One-Click Start (Windows)
Double-click the `start-website.bat` file in the root folder. It will:
- Check for Node.js installation
- Install dependencies automatically
- Start the development server
- Open the website at `http://localhost:3000`

### Option 2: Manual Start
```bash
cd docs
npm install
npm run dev
```

Then open your browser and visit: **http://localhost:3000**

### Option 3: View Startup Guide
Open `docs/index.html` in your browser for a visual guide (requires server running for full functionality).

---

## 📁 Project Structure

```
aflyconsultancy/
├── docs/                    # Next.js Application (Main Website)
│   ├── public/             # Static assets (images, logos)
│   ├── src/
│   │   ├── app/           # Pages and routes
│   │   ├── components/    # React components
│   │   ├── lib/           # Utilities
│   │   └── models/        # Database models
│   ├── index.html         # Startup guide (open in browser)
│   ├── package.json       # Dependencies
│   └── next.config.ts     # Next.js configuration
├── start-website.bat      # Windows startup script
└── README.md             # This file
```

---

## 🛠️ Available Commands

From the `docs` folder:

```bash
npm run dev      # Start development server (with live reload)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 🌐 Website Features

✅ **Homepage**
- Hero section with call-to-action buttons
- Stats section (500+ Students, 50+ Universities, 15+ Years, 98% Success)
- Partner Universities showcase (4 university logos)
- Certifications section
- Services overview
- Testimonials section

✅ **Pages**
- Home (`/`)
- Services (`/services`)
- About (`/about`)
- Blog (`/blog`)
- Contact (`/contact`)

✅ **Technologies**
- Next.js 16.2.4 (React framework)
- React 19 (UI library)
- Tailwind CSS (Styling)
- TypeScript (Type safety)
- Mongoose (MongoDB connection)

---

## 📋 System Requirements

- **Node.js**: 18.0+ (Download from https://nodejs.org/)
- **npm**: 9.0+ (Comes with Node.js)
- **Browser**: Any modern browser (Chrome, Firefox, Safari, Edge)
- **RAM**: 512MB minimum
- **Disk Space**: 500MB for node_modules

---

## 🔧 Troubleshooting

### "npm: command not found"
- Node.js is not installed
- Install from: https://nodejs.org/
- Restart your computer after installation

### "Port 3000 already in use"
- Another application is using port 3000
- Kill the process or specify a different port:
  ```bash
  npm run dev -- -p 3001
  ```

### "Module not found" errors
- Run `npm install` in the `docs` folder
- Delete `node_modules` folder and run `npm install` again

### Images not loading
- Ensure all image files are in `docs/public/` folder
- Check image paths in components

### MongoDB connection errors
- MongoDB is optional for development
- The website works without it; blog features will show an error
- To enable: configure MONGODB_URI in `.env.local`

---

## 📦 Deployment

### Deploy to Vercel (Recommended for Next.js)
1. Visit https://vercel.com
2. Import your GitHub repository
3. Vercel auto-detects Next.js
4. Deploy with one click

### Deploy to Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

### Deploy to GitHub Pages
- Use the GitHub Actions workflow in `.github/workflows/`
- Automatically builds on every push

---

## 📝 Configuration Files

- **package.json** - Dependencies and scripts
- **next.config.ts** - Next.js settings
- **tsconfig.json** - TypeScript settings
- **tailwind.config.js** - Tailwind CSS configuration
- **.gitignore** - Git ignore rules
- **netlify.toml** - Netlify deployment config
- **.github/workflows/build.yml** - GitHub Actions CI/CD

---

## 🌍 Environment Variables

Create a `.env.local` file in the `docs` folder (optional):

```env
# MongoDB Connection (optional)
MONGODB_URI=your_mongodb_connection_string

# Other variables as needed
```

---

## 📞 Contact & Support

**Website**: http://localhost:3000
**Project Folder**: `docs/`

For deployment questions:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com/
- GitHub Pages: https://pages.github.com/

---

## ✨ Ready to Launch?

1. **Start the server**: Run `start-website.bat` (Windows) or `npm run dev`
2. **Open browser**: Visit http://localhost:3000
3. **Explore**: Navigate through all pages
4. **Deploy**: Push to GitHub for automatic deployment

---

**Status**: ✅ Production Ready  
**Last Updated**: May 25, 2026  
**Built with**: Next.js 16 • React 19 • Tailwind CSS
