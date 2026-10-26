import Image from 'next/image';
import { Project } from '@/lib/types';
import Button from './Button';

export default function Card({ project }: { project: Project }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 hover:scale-[1.02] transition-all duration-300">
      <div className="relative w-full h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(min-width: 640px) 320px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-neutral-400 mb-4 text-sm">{project.description}</p>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="border border-neutral-700 text-neutral-300 text-xs px-2 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="outline">
              GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="primary">
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}