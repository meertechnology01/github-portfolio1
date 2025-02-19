import React from 'react';
import CVHeader from '../components/cv/CVHeader';
import CVSection from '../components/cv/CVSection';
import SkillList from '../components/cv/SkillList';

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <CVHeader />

        <CVSection title="PROFESSIONAL SUMMARY">
          <p className="text-gray-700">
            A versatile software engineer with expertise in full-stack development, machine learning, and deep learning.
            A graduate of the ALX Africa Software Engineering Program, with certifications in HCIA AI and HCIA Datacom,
            as well as Java programming from Aptech Computer Education. I specialize in building scalable applications
            and solutions in agriculture, finance, health, and task management sectors. Adept at solving real-world problems
            using innovative technologies, with a strong focus on enhancing user experience.
          </p>
        </CVSection>

        <CVSection title="TECHNICAL SKILLS">
          <SkillList category="Languages" skills={['Java', 'JavaScript', 'Python']} />
          <SkillList category="Frameworks" skills={['React', 'Node.js', 'Express.js', 'Django', 'TensorFlow', 'Keras', 'Mindspore']} />
          <SkillList category="Databases" skills={['MongoDB', 'MySQL']} />
          <SkillList category="Tools & Platforms" skills={['Git', 'Docker', 'Heroku', 'Vercel', 'AWS', 'Nginx']} />
          <SkillList category="Other" skills={['Machine Learning', 'Deep Learning', 'CNN', 'RESTful APIs', 'Agile/Scrum', 'CI/CD', 'TDD']} />
        </CVSection>

        <CVSection title="PROFESSIONAL EXPERIENCE">
          <div className="mb-4">
            <h3 className="font-semibold">Software Development Intern</h3>
            <p className="text-gray-600 italic">Blue Sapphire Hub – Kano, Nigeria</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
              <li>Troubleshot, debugged, maintained, and improved existing software according to customer and department requests.</li>
              <li>Trained and furthered knowledge of the most in-demand programming skills.</li>
              <li>Compiled and assessed customer feedback to make improvement recommendations.</li>
              <li>Wrote and maintained accurate technical documentation.</li>
              <li>Identified potential liabilities and made recommendations to resolve issues.</li>
              <li>Performed routine maintenance and backup of software programs.</li>
            </ul>
          </div>
        </CVSection>

        <CVSection title="EDUCATION">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">ALX Africa Software Engineering Program</h3>
              <p className="text-gray-600">Remote | January 2025</p>
              <p className="text-gray-700">Hands-on experience in full-stack development and software engineering.</p>
            </div>
            <div>
              <h3 className="font-semibold">Bachelor of Science in Computer Science and Information Technology</h3>
              <p className="text-gray-600">Federal University Dutsinma | December 2023</p>
            </div>
            <div>
              <h3 className="font-semibold">Java Programming Certification</h3>
              <p className="text-gray-600">Aptech Computer Education | November 2022</p>
            </div>
          </div>
        </CVSection>

        <CVSection title="CERTIFICATIONS">
          <ul className="list-disc list-inside text-gray-700">
            <li>HCIA AI – Huawei – September 2024</li>
            <li>HCIA Datacom – Huawei – November 2023</li>
            <li>Java Programming – Aptech Computer Education – November 2022</li>
          </ul>
        </CVSection>

        <CVSection title="LANGUAGES">
          <p className="text-gray-700">English – Fluent<br />Hausa – Fluent</p>
        </CVSection>
      </div>
    </div>
  );
}