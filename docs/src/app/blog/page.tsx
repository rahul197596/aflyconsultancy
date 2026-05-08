'use client';

import { useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCard';

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  slug: string;
  image?: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === selectedCategory));
    }
  }, [selectedCategory, blogs]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      // Add sample blogs if none exist
      const blogsToDisplay = data.length > 0 ? data : getSampleBlogs();
      setBlogs(blogsToDisplay);
      setFilteredBlogs(blogsToDisplay);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogs(getSampleBlogs());
      setFilteredBlogs(getSampleBlogs());
    } finally {
      setLoading(false);
    }
  };

  const getSampleBlogs = (): BlogPost[] => [
    {
      _id: '1',
      title: 'Top 10 Universities for International Students',
      excerpt: 'Discover the best universities worldwide that welcome international students with open arms. Learn about admission requirements, costs, and student experiences.',
      author: 'Dr. Arun Sharma',
      date: '2024-05-01',
      category: 'Universities',
      slug: 'top-10-universities',
      image: '🎓',
    },
    {
      _id: '2',
      title: 'Mastering the IELTS Exam: A Comprehensive Guide',
      excerpt: 'Everything you need to know about preparing for the IELTS exam. From study strategies to practice tips, we cover it all to help you achieve your target score.',
      author: 'Priya Desai',
      date: '2024-04-25',
      category: 'Test Prep',
      slug: 'ielts-guide',
      image: '📚',
    },
    {
      _id: '3',
      title: 'Visa Application Tips: What Immigration Officers Look For',
      excerpt: 'Get insider tips on what visa officers actually look for in applications. Learn how to present your profile convincingly and increase your chances of approval.',
      author: 'Rajesh Kumar',
      date: '2024-04-20',
      category: 'Visa',
      slug: 'visa-tips',
      image: '📋',
    },
    {
      _id: '4',
      title: 'Career Planning: Finding Your Path',
      excerpt: 'Confused about your career direction? Learn how to assess your skills, interests, and values to choose the right career path for your future.',
      author: 'Dr. Arun Sharma',
      date: '2024-04-15',
      category: 'Career',
      slug: 'career-planning',
      image: '💼',
    },
  ];

  const categories = ['All', 'Universities', 'Test Prep', 'Visa', 'Career', 'Scholarships'];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-blue-100">Insights, tips, and stories from our education experts</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Loading blog posts...</p>
            </div>
          ) : filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map(blog => (
                <BlogCard key={blog._id} {...blog} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8 text-orange-100">Get the latest updates, tips, and insights delivered to your inbox</p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
