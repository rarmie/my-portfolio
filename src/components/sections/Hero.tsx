import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section id="home" className="bg-black hero-glow">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Reginald R. Masangya
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 mb-8">
          Fullstack Developer · Aspiring Software Engineer
        </p>
        <div className="flex gap-4 justify-center">
          <Button href="#projects" variant="primary">View My Work</Button>
          <Button href="#contact" variant="outline">Contact Me</Button>
        </div>
      </div>
    </section>
  );
}