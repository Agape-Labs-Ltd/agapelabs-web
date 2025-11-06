'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 20;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-lg'
          : 'py-4 bg-transparent border-b border-black/5'
      }`}
    >
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
          <Link href="/contact" className="px-6 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none text-black"
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl z-50 shadow-lg animate-fade border-b border-black/10">
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
            <Link href="/contact" className="px-6 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition w-full text-center" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 