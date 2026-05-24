'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/afly_logo_uploaded.png" 
              alt="Afly Consultancy Logo" 
              width={120} 
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
              Blog
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 py-2">
              Home
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-blue-600 py-2">
              Services
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600 py-2">
              About
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-blue-600 py-2">
              Blog
            </Link>
            <Link href="/contact" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
