'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  slug: string;
}

export default function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  return <BlogPostContent params={props.params} />;
}

function BlogPostContent({ params }: { params: Promise<{ slug: string }> }) {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    params.then(({ slug }) => {
      fetchBlogPost(slug);
    });
  }, [params]);

  const fetchBlogPost = async (slug: string) => {
    try {
      const response = await fetch(`/api/blog/${slug}`);
      if (!response.ok) {
        throw new Error('Blog post not found');
      }
      const data = await response.json();
      setBlog(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load blog post');
      setSampleBlog();
    } finally {
      setLoading(false);
    }
  };

  const setSampleBlog = () => {
    setBlog({
      _id: 'sample',
      title: 'Blog Post Coming Soon',
      content: 'This blog post will be available soon. Please check back later or explore our other articles.',
      author: 'Afly Team',
      date: new Date().toISOString().split('T')[0],
      category: 'General',
      slug: 'coming-soon',
    });
  };

  if (loading) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-600 text-lg">Loading blog post...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="py-16 text-center">
        <p className="text-red-600 text-lg mb-4">{error || 'Blog post not found'}</p>
        <Link href="/blog" className="text-blue-600 hover:text-blue-800">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
          <div className="flex gap-4 text-blue-100">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{new Date(blog.date).toLocaleDateString()}</span>
            <span>•</span>
            <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">{blog.category}</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-gray-800 leading-relaxed mb-8">{blog.content}</div>

          <div className="mt-16 p-8 bg-blue-50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
            <p className="text-gray-700 mb-6">
              Contact our consultants to discuss how we can help you achieve your educational goals.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
