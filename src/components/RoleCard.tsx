import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RoleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
}

export default function RoleCard({ title, description, icon: Icon, technologies }: RoleCardProps) {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
      <Icon className="w-8 h-8 text-blue-600" />
      <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900 dark:text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}