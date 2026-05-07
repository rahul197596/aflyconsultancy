import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  const allServices = [
    {
      icon: '🎓',
      title: 'University Selection',
      description: 'We help you find and apply to universities that align with your academic goals, budget, and career aspirations.',
      features: ['Personalized recommendations', 'Profile evaluation', 'Course matching', 'Entry requirement analysis', 'Application timeline planning'],
    },
    {
      icon: '📋',
      title: 'Visa Support',
      description: 'Navigate the complex visa application process with our expert guidance and support.',
      features: ['Document checklist', 'SOP writing', 'Interview preparation', 'Financial documentation', 'Follow-up support'],
    },
    {
      icon: '💼',
      title: 'Career Counseling',
      description: 'Discover your potential and plan your career path with our experienced career counselors.',
      features: ['Career aptitude testing', 'Goal setting workshops', 'Resume building', 'Interview coaching', 'Job market analysis'],
    },
    {
      icon: '📚',
      title: 'Test Preparation',
      description: 'Master standardized tests with our comprehensive preparation programs.',
      features: ['IELTS/TOEFL courses', 'GRE/GMAT training', 'Practice tests', 'One-on-one tutoring', 'Study materials'],
    },
    {
      icon: '✍️',
      title: 'Application Assistance',
      description: 'Get your applications polished and ready to impress admissions committees.',
      features: ['Essay editing', 'SOP refinement', 'Resume optimization', 'Cover letter writing', 'Application review'],
    },
    {
      icon: '🌍',
      title: 'Global Network',
      description: 'Benefit from our extensive partnerships with universities and organizations worldwide.',
      features: ['Partner university access', 'Scholarship opportunities', 'Networking events', 'Alumni mentoring', 'Industry connections'],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">Comprehensive support for your international education journey</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Afly Consultancy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Expert Team</h3>
              <p className="text-gray-600">Highly experienced consultants with deep knowledge of global education systems</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Proven Track Record</h3>
              <p className="text-gray-600">98% success rate with 500+ students successfully placed globally</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Personalized Approach</h3>
              <p className="text-gray-600">Customized solutions tailored to each student's unique needs and goals</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Ongoing Support</h3>
              <p className="text-gray-600">Continuous guidance throughout your application and enrollment journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to explore opportunities?</h2>
          <Link
            href="/contact"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
