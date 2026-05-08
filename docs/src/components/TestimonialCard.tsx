interface TestimonialProps {
  name: string;
  title: string;
  content: string;
  avatar: string;
}

export default function TestimonialCard({ name, title, content, avatar }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold mr-4">
          {avatar}
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">"{content}"</p>
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    </div>
  );
}
