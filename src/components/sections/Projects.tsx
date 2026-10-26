import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';
import { Project } from '@/lib/types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Job Tracker',
    description: 'A job application tracker that fills in a job from a pasted posting or link, then scores your resume against that job’s requirements.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'FastAPI', 'Python', 'LLM APIs'],
    imageUrl: '/projects/job-tracker.png',
    githubUrl: 'https://github.com/rarmie/WorkSpace',
  },
  {
    id: 3,
    title: 'StudyBuddy',
    description: 'A peer-to-peer tutoring platform for students — students book and pay tutors, tutors manage sessions and cash out earnings.',
    technologies: ['Vue 3', 'Vite', 'Pinia', 'Django REST', 'PostgreSQL', 'JWT'],
    imageUrl: '/projects/studybuddy.webp',
    githubUrl: 'https://github.com/llariesalinas/studybuddy-ui',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold mb-12 text-white">
            My Projects
          </h2>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <Reveal key={project.id} className="w-full sm:w-80 text-left">
              <Card project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}