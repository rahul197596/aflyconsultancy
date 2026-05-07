import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  const services = [
    {
      icon: '🎓',
      title: 'University Selection',
      description: 'Find the perfect institution that matches your goals',
      features: ['Top-ranked universities', 'Custom matching', 'Career alignment'],
    },
    {
      icon: '📋',
      title: 'Visa Support',
      description: 'Complete guidance through the visa application process',
      features: ['Document preparation', 'Interview coaching', 'Quick processing'],
    },
    {
      icon: '💼',
      title: 'Career Counseling',
      description: 'Navigate your career path with expert guidance',
      features: ['Career assessment', 'Job market insights', 'Professional mentoring'],
    },
    {
      icon: '📚',
      title: 'Test Preparation',
      description: 'Ace your standardized tests with our expert coaching',
      features: ['IELTS/TOEFL prep', 'GRE/GMAT training', 'Practice materials'],
    },
    {
      icon: '✍️',
      title: 'Application Assistance',
      description: 'Strengthen your applications with professional editing',
      features: ['Essay writing', 'Resume crafting', 'SOP preparation'],
    },
    {
      icon: '🌍',
      title: 'Global Network',
      description: 'Access our extensive network of educational partners',
      features: ['Partner universities', 'Networking events', 'Alumni connections'],
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      title: 'MS Computer Science, Stanford',
      content: 'Afly Consultancy helped me navigate the entire application process. Their guidance was invaluable in securing admission to my dream university.',
      avatar: 'RK',
    },
    {
      name: 'Priya Sharma',
      title: 'MBA, Harvard Business School',
      content: 'The career counseling session gave me clarity on my goals. The team is professional, knowledgeable, and genuinely cares about their clients.',
      avatar: 'PS',
    },
    {
      name: 'Arjun Patel',
      title: 'MPhil Physics, Cambridge',
      content: 'Excellent support throughout my visa application process. The visa support team made everything smooth and stress-free.',
      avatar: 'AP',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Gateway to Global Education
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert guidance for overseas education and career success
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/services"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700">Students Placed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700">Partner Universities</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-700">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-700">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with our experts today and take the first step towards your international education goals.
          </p>
          <Link
            href="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
