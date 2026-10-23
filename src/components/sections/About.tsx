const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'FastAPI', 'Python', 'LLM APIs'];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              I&apos;m a full-stack developer, aspiring software engineer, and
              Computer Science student at Central Philippine University, graduating
              in 2027. I build applications end to end, from the database up
              through the UI, and I enjoy picking up whatever a problem actually
              calls for.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              My two main projects so far: a job application tracker that reads a
              posting and scores your resume against its requirements, and
              StudyBuddy, a peer tutoring platform where students book and pay
              tutors directly. I like the parts of a project most people skip, like
              turning a model&apos;s judgment into a repeatable score, or guarding a
              backend against fetching the wrong URL.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/profile.webp"
              alt="Reginald Anthony R. Masangya"
              className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-blue-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}