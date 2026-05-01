import { NavigationItem } from '@/src/lib/types';

const navItems: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

interface NavigationProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

export default function Navigation({ mobile = false, onLinkClick }: NavigationProps) {
  const baseStyle = 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200';
  const containerStyle = mobile ? 'flex flex-col gap-4' : 'hidden md:flex gap-8';

  return (
    <nav className={containerStyle}>
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