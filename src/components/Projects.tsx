import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'MaizeGuard',
    description: 'An AI-powered system for early detection of maize diseases using computer vision and deep learning.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?fit=crop&w=800&q=80',
    tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    github: '#',
    demo: '#'
  },
  {
    title: 'TaskMaster App',
    description: 'A productivity application with AI-driven task prioritization and time management features.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?fit=crop&w=800&q=80',
    tech: ['React', 'Node.js', 'MongoDB', 'Machine Learning'],
    github: '#',
    demo: '#'
  },
  {
    title: 'TechJournal Web App',
    description: 'A collaborative platform for tech professionals to share knowledge and experiences.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?fit=crop&w=800&q=80',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'GraphQL'],
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}