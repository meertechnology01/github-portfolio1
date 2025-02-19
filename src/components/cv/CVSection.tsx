import React, { ReactNode } from 'react';

interface CVSectionProps {
  title: string;
  children: ReactNode;
}

export default function CVSection({ title, children }: CVSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2 mb-4">{title}</h2>
      {children}
    </section>
  );
}