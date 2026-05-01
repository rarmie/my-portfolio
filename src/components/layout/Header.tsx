'use client';
import { useState } from 'react';
import Navigation from './Navigation';
import DarkModeToggle from '@/src/components/ui/DarkModeToggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="text-2xl font-bold text-blue-600">MyPortfolio</span>

        {/* Desktop nav + toggle */}
        <div className="flex items-center gap-6">
          <Navigation />
          <DarkModeToggle />
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4">
          <Navigation mobile={true} onLinkClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}