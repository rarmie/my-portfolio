import { SocialLink } from '@/lib/types';

const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/rarmie', icon: 'GH' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/reginald-anthony-masangya-065699293/', icon: 'LI' },
  { platform: 'Facebook', url: 'https://www.facebook.com/reginald.anthony.masangya/', icon: 'FB' },
  { platform: 'Instagram', url: 'https://www.instagram.com/rej.masangya/', icon: 'IG' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 text-neutral-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">© {new Date().getFullYear()} Reginald R. Masangya. All rights reserved.</p>

        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors text-sm font-medium"
            >
              {link.platform}
            </a>
          ))}
        </div>

        <a href="mailto:rarmmasangya@gmail.com" className="text-sm hover:text-white transition-colors">
          rarmmasangya@gmail.com
        </a>
      </div>
    </footer>
  );
}