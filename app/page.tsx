import Hero from '@/src/components/sections/Hero';
import About from '@/src/components/sections/About';
import Projects from '@/src/components/sections/Projects';
import Contact from '@/src/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}