import Link from 'next/link';

interface BlogCardProps {
  _id?: string;
  id?: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  slug?: string;
  image?: string;
}

export default function BlogCard({ _id, id, title, excerpt, author, date, category, slug, image }: BlogCardProps) {
  const href = slug || _id || id || '#';
  return (
    <Link href={`/blog/${href}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer h-full">
        {image && (
          <div className="w-full h-40 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-4xl">{image}</span>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
              {category}
            </span>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">By {author}</span>
            <span className="text-blue-600 font-medium text-sm">Read More →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
