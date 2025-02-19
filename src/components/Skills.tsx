import React from 'react';

const skills = {
  'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
  'Frameworks': ['React', 'Node.js', 'Django', 'TensorFlow', 'PyTorch'],
  'Tools & Platforms': ['Git', 'Linux', 'Docker', 'AWS', 'GCP'],
  'Databases': ['MongoDB', 'MySQL', 'Redis', 'PostgreSQL'],
  'Other': ['Deep Learning', 'Machine Learning', 'DevOps', 'Agile']
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {90 - index * 5}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${90 - index * 5}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}