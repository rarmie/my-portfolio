import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-heading' });

export const metadata: Metadata = {
  metadataBase: new URL('https://reginald-masangya-dev.vercel.app'),
  title: '/dev — Reginald R. Masangya',
  description: 'Fullstack developer and aspiring software engineer building end-to-end applications, from the database up through the UI.',
  openGraph: {
    title: '/dev — Reginald R. Masangya',
    description: 'Fullstack developer and aspiring software engineer building end-to-end applications, from the database up through the UI.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '/dev — Reginald R. Masangya',
    description: 'Fullstack developer and aspiring software engineer building end-to-end applications, from the database up through the UI.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}