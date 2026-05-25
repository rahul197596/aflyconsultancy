# Afly Consultancy - Deployment Guide

## GitHub Deployment Setup

This project is configured for deployment via GitHub. The website automatically builds and deploys when you push code.

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- GitHub account with repository access

### Local Development

```bash
# Navigate to the docs directory
cd docs

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The website will be available at `http://localhost:3000`

### Deployment Options

#### Option 1: Vercel (Recommended for Next.js)
1. Go to https://vercel.com
2. Click "Import Project"
3. Select your GitHub repository
4. Vercel will automatically detect Next.js and configure it
5. Deploy with one click

#### Option 2: GitHub Pages
1. Push your code to GitHub
2. The GitHub Actions workflow will automatically build the project
3. Deploy to GitHub Pages via repository settings

#### Option 3: Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy!

### Project Structure

```
/docs
├── public/           # Static assets (images, logos)
├── src/
│   ├── app/         # Next.js app router (pages, APIs)
│   ├── components/  # Reusable React components
│   ├── lib/         # Utility functions
│   └── models/      # Database models
├── package.json     # Dependencies
└── next.config.ts   # Next.js configuration
```

### Environment Variables

Create a `.env.local` file in the `/docs` directory for local development:

```
# MongoDB Connection (optional, only needed for blog features)
MONGODB_URI=your_mongodb_connection_string

# Other configuration as needed
```

### Features

✅ Responsive design with Tailwind CSS
✅ Optimized images and assets
✅ Blog functionality (requires MongoDB)
✅ Contact form
✅ Partner universities showcase
✅ Team testimonials
✅ Performance optimized

### Troubleshooting

**Issue: Build fails on GitHub**
- Check that all dependencies are installed: `npm install`
- Verify Node.js version is 18+
- Check `.gitignore` includes `node_modules/` and `.env.local`

**Issue: Images not loading**
- Ensure all image files are in the `/public` folder
- Check image paths in components

**Issue: MongoDB connection errors**
- MongoDB is optional - the site works without it
- Blog features will show a connection error if MongoDB is not configured
- Homepage and main features work without MongoDB

### Contact

For deployment questions or issues, refer to the respective platform's documentation:
- Vercel: https://vercel.com/docs
- GitHub Pages: https://pages.github.com/
- Netlify: https://docs.netlify.com/
