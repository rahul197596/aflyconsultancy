import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-blue-400">Afly</span>
              <span className="text-orange-400">Consultancy</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in overseas education and career advancement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-blue-400">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-blue-400">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-blue-400">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services?category=university-selection" className="text-gray-400 hover:text-blue-400">University Selection</Link></li>
              <li><Link href="/services?category=visa-support" className="text-gray-400 hover:text-blue-400">Visa Support</Link></li>
              <li><Link href="/services?category=career-counseling" className="text-gray-400 hover:text-blue-400">Career Counseling</Link></li>
              <li><Link href="/services?category=test-preparation" className="text-gray-400 hover:text-blue-400">Test Prep</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@aflyconsultancy.com</li>
              <li>Phone: +1-800-AFLY-CON</li>
              <li>Address: 123 Education Lane, NY</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Afly Consultancy Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
