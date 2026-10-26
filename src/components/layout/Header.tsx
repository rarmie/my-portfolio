'use client';
import { useState } from 'react';
import Navigation from './Navigation';
import FloatingNav from './FloatingNav';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hero-glow">
      <FloatingNav />

      {/* Logo + status — scrolls away with the page, not pinned */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-white">/dev</span>
        <span className="hidden md:flex items-center gap-2 text-sm text-neutral-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          Open to Offers
        </span>
      </div>

      {/* Hamburger (mobile) — pinned like the desktop nav pill */}
      <button
        className="md:hidden fixed top-4 right-6 z-50 w-9 h-9 flex items-center justify-center rounded-xl bg-black/85 backdrop-blur-md shadow-lg shadow-black/50 text-neutral-300"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 right-6 z-50 bg-black/95 backdrop-blur-md border border-neutral-800 rounded-xl px-6 py-4 shadow-lg shadow-black/50">
          <Navigation onLinkClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
