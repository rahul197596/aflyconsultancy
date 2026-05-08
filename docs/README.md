# Afly Consultancy - Next.js Website

A modern, full-featured Next.js website for an overseas education consultancy services. Built with TypeScript, Tailwind CSS, MongoDB, and file upload capabilities.

## Features

✅ **Modern Design** - Beautiful, responsive UI with Tailwind CSS
✅ **Contact Forms** - Fully functional contact forms with file uploads
✅ **Blog Section** - Dynamic blog with database integration
✅ **Database Integration** - MongoDB integration for storing contacts and blog posts
✅ **File Uploads** - Support for uploading documents with contact forms
✅ **API Routes** - Backend API for handling contacts, blogs, and more
✅ **Dynamic Pages** - Services, About, Contact, Blog pages with dynamic content
✅ **Testimonials** - Student success stories section
✅ **SEO Optimized** - Meta tags and optimized structure

## Tech Stack

- **Frontend**: Next.js 14+ (App Router), React 18+, TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Mongoose ODM
- **Backend**: Next.js API Routes
- **File Handling**: Native Node.js file system APIs
- **Environment**: dotenv for configuration

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts        # Contact form API
│   │   └── blog/
│   │       ├── route.ts             # Blog CRUD API
│   │       └── [slug]/route.ts      # Single blog post API
│   ├── blog/
│   │   ├── page.tsx                 # Blog listing page
│   │   └── [slug]/page.tsx          # Single blog post page
│   ├── services/page.tsx            # Services page
│   ├── about/page.tsx               # About page
│   ├── contact/page.tsx             # Contact page
│   ├── page.tsx                     # Home page
│   ├── layout.tsx                   # Root layout
│   └── globals.css                  # Global styles
├── components/
│   ├── Navbar.tsx                   # Navigation bar
│   ├── Footer.tsx                   # Footer
│   ├── ContactForm.tsx              # Contact form component
│   ├── ServiceCard.tsx              # Service card component
│   ├── BlogCard.tsx                 # Blog card component
│   └── TestimonialCard.tsx          # Testimonial component
├── lib/
│   └── db.ts                        # Database connection utility
├── models/
│   ├── Contact.ts                   # Contact schema
│   └── Blog.ts                      # Blog schema
└── .env.local                       # Environment variables
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. **Navigate to the project directory**
   ```bash
   cd c:\Users\akhil\OneDrive\Documents\GitHub\aflyconsultancy\docs\new
   ```

2. **Install dependencies** (already installed)
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   
   Update `.env.local` with your settings:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/afly_consultancy
   NEXT_PUBLIC_MAX_FILE_SIZE=5242880
   UPLOAD_DIR=public/uploads
   ```

4. **Create uploads directory** (if not exists)
   ```bash
   mkdir -p public/uploads
   ```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Available Pages

- **Home** (`/`) - Landing page with hero section, services overview, testimonials
- **Services** (`/services`) - Detailed services catalog
- **About** (`/about`) - Company information and team
- **Blog** (`/blog`) - Blog listing and filtering
- **Blog Post** (`/blog/[slug]`) - Individual blog post view
- **Contact** (`/contact`) - Contact form with file upload

## API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form with optional file upload
- **GET** `/api/contact` - Get all contact submissions (admin only - add auth)

### Blog Posts
- **GET** `/api/blog` - Get all published blog posts
- **POST** `/api/blog` - Create a new blog post
- **GET** `/api/blog/[slug]` - Get a specific blog post by slug

## Database Setup

### MongoDB Connection

1. **Sign up for MongoDB Atlas** at https://www.mongodb.com/cloud/atlas
2. **Create a cluster** and get your connection string
3. **Update `.env.local`** with your MongoDB URI

### Database Models

#### Contact Model
```typescript
{
  name: String,
  email: String,
  phone: String,
  service: String,
  message: String,
  fileUrl: String,
  fileName: String,
  status: 'new' | 'read' | 'responded',
  createdAt: Date
}
```

#### Blog Model
```typescript
{
  title: String,
  slug: String (unique),
  excerpt: String,
  content: String,
  author: String,
  category: String,
  image: String,
  published: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## File Upload Handling

- Maximum file size: 5MB (configurable)
- Supported formats: PDF, DOC, DOCX, TXT
- Files stored in: `public/uploads/`
- File naming: `[timestamp]-[originalname]`

## Customization Guide

### Adding Services

Edit `src/app/page.tsx` and `src/app/services/page.tsx`:
```typescript
const services = [
  {
    icon: '🎓',
    title: 'Service Name',
    description: 'Description',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  // Add more services
];
```

### Updating Contact Information

Edit `src/components/Footer.tsx`:
```typescript
<li>Email: your-email@example.com</li>
<li>Phone: +1-YOUR-PHONE</li>
<li>Address: Your Address</li>
```

### Modifying Styling

All styling uses Tailwind CSS classes. Edit Tailwind configuration in `tailwind.config.ts` or override in `src/app/globals.css`.

### Adding Blog Posts

#### Via API (programmatic):
```javascript
const response = await fetch('/api/blog', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Blog Title',
    excerpt: 'Short excerpt',
    content: 'Full content',
    author: 'Author Name',
    category: 'Category',
  }),
});
```

#### Via MongoDB Directly:
Insert documents into the `Blog` collection in your MongoDB database.

## Security Considerations

⚠️ **Important**: Before deploying to production:

1. **Add Authentication** - Implement auth for admin APIs
2. **Validate Input** - Add validation for all form inputs
3. **Rate Limiting** - Implement rate limiting on API routes
4. **CORS** - Configure CORS appropriately
5. **Environment Variables** - Use a secure secrets manager
6. **File Validation** - Validate file types and scan for malware
7. **Database** - Use connection pooling and prepared statements

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

### Deploy to Other Platforms

- **Netlify**: Use `npm run build` as build command, `out` as publish directory
- **DigitalOcean**: Follow their Node.js deployment guide
- **AWS**: Use EC2 or Amplify for deployment

## Building for Production

```bash
npm run build
npm start
```

## Troubleshooting

### MongoDB Connection Issues
- Verify MongoDB URI is correct
- Check firewall rules in MongoDB Atlas
- Ensure IP whitelist includes your server

### File Upload Issues
- Check `public/uploads/` directory exists and is writable
- Verify file size doesn't exceed `NEXT_PUBLIC_MAX_FILE_SIZE`
- Check file format is in allowed list

### Build Errors
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run build`

## Future Enhancements

- [ ] User authentication and admin panel
- [ ] Email notifications for contact forms
- [ ] Advanced blog search and pagination
- [ ] Testimonials management
- [ ] Newsletter subscription system
- [ ] Appointment booking system
- [ ] Payment integration for services
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Live chat support

## License

This project is the property of Afly Consultancy Services.

## Support

For questions or issues, contact support@aflyconsultancy.com

---

**Last Updated**: May 2026
**Version**: 1.0.0


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
