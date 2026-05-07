import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100">We're here to help you on your educational journey</p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@aflyconsultancy.com</p>
              <p className="text-gray-600">support@aflyconsultancy.com</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+1-800-AFLY-CON</p>
              <p className="text-gray-600">+91-XXXX-XXX-XXX</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-600">123 Education Lane</p>
              <p className="text-gray-600">New York, NY 10001</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What is the typical timeline for the consultancy process?',
                a: 'The timeline varies based on your goals and the universities you target. Typically, the entire process from initial consultation to admission takes 12-18 months.',
              },
              {
                q: 'Do you guarantee admission to universities?',
                a: 'We do not guarantee admission, as final decisions rest with universities. However, our 98% success rate reflects our commitment to helping students create competitive applications.',
              },
              {
                q: 'What is your consultation fee?',
                a: 'We offer free initial consultations. Our service packages are customized based on your specific needs. Contact us to discuss options.',
              },
              {
                q: 'Can you help with financial aid and scholarships?',
                a: 'Yes! We help identify and apply for various scholarships and financial aid options available through our partner universities.',
              },
              {
                q: 'Do you offer online consultations?',
                a: 'Yes, we offer both in-person and online consultations to accommodate students from around the world.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
