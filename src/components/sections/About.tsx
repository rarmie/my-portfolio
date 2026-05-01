const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 text-lg mb-4">
              I'm a passionate developer with a love for creating clean, efficient, and
              user-friendly applications. I enjoy solving complex problems and turning
              ideas into reality through code.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Currently studying [Your Course] at [Your School], graduating in [Year].
            </p>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Profile photo placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
              YN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}