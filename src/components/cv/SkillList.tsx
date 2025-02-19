import React from 'react';

interface SkillListProps {
  category: string;
  skills: string[];
}

export default function SkillList({ category, skills }: SkillListProps) {
  return (
    <div className="mb-2">
      <span className="font-semibold">{category}:</span>{' '}
      <span className="text-gray-700">{skills.join(', ')}</span>
    </div>
  );
}