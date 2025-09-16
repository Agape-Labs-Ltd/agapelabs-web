'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 border-b border-gray-100">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-[200px] h-[70]">
            {logoError && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <p className="text-sm">Logo</p>
              </div>
            )}
            <Image 
              src={'/images/agape-labs-logo.png'}
              alt="Agape Labs Logo" 
              fill
              style={{ objectFit: 'contain', display: logoError ? 'none' : 'block' }}
              priority
              onError={() => setLogoError(true)}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-black hover:text-gray-600 font-medium transition">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-gray-600 font-medium transition">
            About
          </Link>
          <Link href="/projects" className="text-black hover:text-gray-600 font-medium transition">
            Projects
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white z-50 shadow-lg animate-fade">
          <div className="container py-4 flex flex-col space-y-4">
            <Link href="/" className="text-black hover:text-gray-600 font-medium py-2 transition" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 font-medium py-2 transition" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/projects" className="text-black hover:text-gray-600 font-medium py-2 transition" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="/contact" className="btn btn-primary w-full text-center" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 