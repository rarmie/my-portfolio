import { NavigationItem } from '@/lib/types';

const navItems: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

interface NavigationProps {
  onLinkClick?: () => void;
}

export default function Navigation({ onLinkClick }: NavigationProps) {
  const baseStyle =
    'relative text-neutral-400 hover:text-white font-medium transition-colors duration-200 pb-1 ' +
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full " +
    'after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ' +
    'hover:after:scale-x-100';

  return (
    <nav className="flex flex-col gap-4">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={baseStyle}
          onClick={onLinkClick}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
