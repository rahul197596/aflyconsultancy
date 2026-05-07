<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Afly Consultancy Next.js Website - Development Guidelines

## Project Overview

This is a comprehensive Next.js website for Afly Consultancy Services, an overseas education consultancy. The project includes modern design, contact forms with file uploads, blog functionality, database integration with MongoDB, and complete API routes.

## Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Mongoose ODM
- **File Upload**: Native Node.js filesystem APIs
- **Environment**: dotenv for configuration management

## Project Structure

```
src/
├── app/               # Next.js App Router pages and layouts
├── components/        # Reusable React components
├── lib/              # Utility functions and database connection
├── models/           # MongoDB schema definitions
└── .env.local        # Environment variables
```

## Key Features Implemented

1. **Modern Website Pages**
   - Home: Hero section with services overview and testimonials
   - Services: Detailed service catalog
   - About: Company information and team
   - Blog: Dynamic blog with filtering
   - Contact: Contact form with file uploads

2. **Database Integration**
   - MongoDB for storing contacts and blog posts
   - Mongoose ODM for schema management
   - Models: Contact and Blog

3. **API Routes**
   - `/api/contact` - POST: Submit contact form, GET: Fetch contacts
   - `/api/blog` - GET: List blogs, POST: Create blog
   - `/api/blog/[slug]` - GET: Single blog post

4. **File Upload System**
   - Max file size: 5MB
   - Supported formats: PDF, DOC, DOCX, TXT
   - Files stored in `public/uploads/`

## Development Guidelines

### Component Naming & Organization

- Use PascalCase for component names
- Place components in `src/components/` directory
- Use 'use client' directive for client-side components
- Keep components focused and reusable

### Page Conventions

- Page files: `page.tsx` for route segments
- Dynamic routes: Use `[param]` naming convention
- Layouts: Use `layout.tsx` for shared layouts
- API Routes: Use `route.ts` in `app/api/` directory

### Database Usage

```typescript
// Always connect before querying
import { connectDB } from '@/lib/db';
await connectDB();

// Use models for database operations
import { Contact } from '@/models/Contact';
const document = await Contact.findById(id);
```

### Environment Variables

Required variables in `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
MONGODB_URI=mongodb+srv://...
NEXT_PUBLIC_MAX_FILE_SIZE=5242880
UPLOAD_DIR=public/uploads
```

### Form Handling

- Use React hooks for form state management
- Implement error boundaries for API calls
- Always validate input data before submission
- Use FormData for file uploads

Example form submission:
```typescript
const formData = new FormData();
formData.append('field', value);
const response = await fetch('/api/contact', {
  method: 'POST',
  body: formData,
});
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Responsive design: `md:` and `lg:` breakpoints
- Color scheme: Blue (#2563EB) for primary, Orange (#F97316) for accents
- Maintain consistency with existing component styles

### Error Handling

- Always implement try-catch blocks in API routes
- Return meaningful error messages
- Log errors to console for debugging
- Provide user-friendly error messages on frontend

### API Route Pattern

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    // Process data
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error message' },
      { status: 500 }
    );
  }
}
```

## Common Tasks

### Adding a New Page

1. Create `src/app/[route]/page.tsx`
2. Export default component
3. Include SEO metadata in layout if needed
4. Add navigation link to Navbar component

### Adding a New Service

1. Edit `src/app/page.tsx` or `src/app/services/page.tsx`
2. Add to `services` array:
```typescript
{
  icon: '🎓',
  title: 'Service Name',
  description: 'Description',
  features: ['Feature 1', 'Feature 2'],
}
```

### Creating a Blog Post via API

```javascript
fetch('/api/blog', {
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

### Updating Contact Information

Edit `src/components/Footer.tsx` and update:
- Email addresses
- Phone numbers
- Physical address

## Testing & Debugging

### Running Locally

```bash
npm run dev
# Open http://localhost:3000
```

### Build Testing

```bash
npm run build
npm start
```

### Checking for Errors

```bash
npm run lint
```

## Important Notes

1. **Database Connection**: Always ensure MongoDB connection before querying
2. **File Uploads**: Check file size limits and validate file types
3. **Error Messages**: Provide helpful, user-friendly error messages
4. **Security**: Validate all user inputs before processing
5. **Performance**: Optimize images and lazy-load heavy components

## Code Style

- Use TypeScript for type safety
- Follow camelCase for variables and functions
- Use descriptive names (avoid abbreviations)
- Comment complex logic
- Keep functions focused and single-responsibility

## Deployment Checklist

- [ ] Update environment variables for production
- [ ] Test all forms and file uploads
- [ ] Verify MongoDB connection string
- [ ] Run build without errors: `npm run build`
- [ ] Test on production-like environment
- [ ] Add authentication for admin features
- [ ] Implement rate limiting on APIs
- [ ] Enable HTTPS
- [ ] Set up monitoring and error tracking

## Resources & References

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Mongoose Documentation](https://mongoosejs.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## Support & Questions

When working on this project:
1. Check existing code for patterns
2. Reference the README.md for setup instructions
3. Review database models before adding new fields
4. Test API endpoints thoroughly before deployment

---

**Version**: 1.0.0
**Last Updated**: May 2026
**Maintainer**: Afly Consultancy Development Team
