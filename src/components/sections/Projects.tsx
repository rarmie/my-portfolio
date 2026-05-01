import Card from '@/src/components/ui/Card';
import { Project } from '@/src/lib/types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Dating Simulator',
    description: 'A dating simulator game that gives you a personalized dating experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://via.placeholder.com/400x200?text=E-Commerce',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'A productivity app with drag-and-drop tasks, deadlines, and team collaboration.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    imageUrl: 'https://via.placeholder.com/400x200?text=Task+Manager',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'StudyBuddy',
    description: 'An online tutoring platform that connects tutors and tutees.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    imageUrl: 'https://via.placeholder.com/400x200?text=Weather+App',
    githubUrl: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}