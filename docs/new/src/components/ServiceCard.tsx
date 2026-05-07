import Image from 'next/image';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-700">
            <span className="text-blue-600 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
