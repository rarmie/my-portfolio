import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'FastAPI', 'Python', 'LLM APIs'];

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-neutral-900">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            About Me
          </h2>

          <Image
            src="/profile.jpg"
            alt="Reginald Anthony R. Masangya"
            width={256}
            height={256}
            priority
            className="w-64 h-64 rounded-full object-cover border border-neutral-700 mb-10"
          />

          <p className="text-neutral-400 text-lg mb-4">
            I&apos;m a full-stack developer, aspiring software engineer, and
            Computer Science student at Central Philippine University, graduating
            in 2027. I build applications end to end, from the database up
            through the UI, and I enjoy picking up whatever a problem actually
            calls for.
          </p>
          <p className="text-neutral-400 text-lg mb-6">
            My two main projects so far: a job application tracker that reads a
            posting and scores your resume against its requirements, and
            StudyBuddy, a peer tutoring platform where students book and pay
            tutors directly. I like the parts of a project most people skip, like
            turning a model&apos;s judgment into a repeatable score, or guarding a
            backend against fetching the wrong URL.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-neutral-800 text-neutral-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}