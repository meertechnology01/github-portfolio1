import React from 'react';
import { Code2, Brain, Database, Server, Cpu, MessageSquare } from 'lucide-react';
import RoleCard from './RoleCard';

const roles = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building scalable web applications with modern technologies',
    technologies: ['React', 'TypeScript', 'Node.js', 'Next.js']
  },
  {
    icon: Server,
    title: 'Backend Engineering',
    description: 'Designing robust and scalable server-side architectures',
    technologies: ['Python', 'Django', 'FastAPI', 'PostgreSQL']
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Implementing AI solutions for complex problems',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn']
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Designing and optimizing database architectures',
    technologies: ['MongoDB', 'Redis', 'Apache Kafka', 'mysql']
  },
  {
    icon: Cpu,
    title: 'Cloud Architecture',
    description: 'Deploying and managing cloud infrastructure',
    technologies: ['AWS', 'Docker', 'Kubernetes']
  },
  {
    icon: MessageSquare,
    title: 'Prompt Engineering',
    description: 'Crafting effective prompts for AI models to achieve desired outcomes',
    technologies: ['GPT-3', 'ChatGPT', 'Prompt Design', 'NLP', 'Gemini', 'etc..']
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate software engineer with expertise in full-stack development,
            backend engineering, machine learning, and deep learning. With years of experience in building
            scalable applications and implementing AI solutions, I strive to create
            innovative technology that makes a difference.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Based in Zaria, Kaduna State, I've worked on various projects ranging from
            web applications to complex distributed systems. My approach combines
            technical expertise with creative problem-solving to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {roles.map((role, index) => (
            <RoleCard key={index} {...role} />
          ))}
        </div>
      </div>
    </section>
  );
}