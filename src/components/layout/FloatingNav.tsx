'use client';
import { useEffect, useRef, useState } from 'react';
import { NavigationItem } from '@/lib/types';

const navItems: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function FloatingNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicator, setIndicator] = useState({ width: 0, left: 0 });
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.href.slice(1)));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const link = linkRefs.current[activeIndex];
    if (link) {
      setIndicator({ width: link.offsetWidth, left: link.offsetLeft });
    }
  }, [activeIndex]);

  return (
    <nav className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex gap-0.5 rounded-xl bg-black/85 backdrop-blur-md shadow-lg shadow-black/50 px-1.5 pt-2.5 pb-2">
        <span
          className="absolute top-0 left-0 h-[2px] rounded-b-sm bg-white shadow-[0_0_6px_rgba(255,255,255,0.7)] transition-all duration-300 ease-out"
          style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }}
        />
        {navItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            ref={(el) => {
              linkRefs.current[i] = el;
            }}
            className={`relative z-10 px-3.5 py-1 text-xs font-medium transition-colors duration-200 ${
              i === activeIndex ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
