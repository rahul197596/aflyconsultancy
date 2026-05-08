import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Blog } from '@/models/Blog';

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Fetch blogs error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { title, excerpt, content, author, category, image } = body;

    if (!title || !excerpt || !content || !author || !category) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    const blog = new Blog({
      title,
      slug,
      excerpt,
      content,
      author,
      category,
      image,
    });

    await blog.save();

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error('Create blog error:', error);
    return NextResponse.json(
      { message: 'Failed to create blog' },
      { status: 500 }
    );
  }
}
