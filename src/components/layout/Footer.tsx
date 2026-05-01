import { SocialLink } from '@/src/lib/types';

const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/yourusername', icon: 'GH' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'LI' },
  { platform: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'TW' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>

        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a 
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              {link.platform}
            </a>
          ))}
        </div>

        <a href="mailto:you@email.com" className="text-sm hover:text-white transition-colors">
          you@email.com
        </a>
      </div>
    </footer>
  );
}