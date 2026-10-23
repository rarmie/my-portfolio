import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Reginald</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Full Stack Developer
        </p>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8">
          I build beautiful, responsive web applications with modern technologies.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects">
            <Button variant="primary">View My Work</Button>
          </a>
          <a href="#contact">
            <Button variant="outline">Contact Me</Button>
          </a>
        </div>
      </div>
    </section>
  );
}