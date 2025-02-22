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
            A graduate of the ALX Africa Software Engineering Program, with certifications in HCIA AI, HCIA Datacom, and Java programming
            from Aptech Computer Education. Specializing in building scalable applications across agriculture, finance, health, and task management sectors.
            Passionate about solving real-world problems using innovative technologies, with a strong focus on enhancing user experience and system scalability.
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
            <h3 className="font-semibold">Backend Software Engineer / AI Engineer Graduate Trainee</h3>
            <p className="text-gray-600 italic">MIDS Dynamics Ltd – Nigeria | August 2024 – February 2025</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
              <li>Developed and optimized backend APIs for AI-powered applications.</li>
              <li>Designed and implemented machine learning models for predictive analytics.</li>
              <li>Integrated AI models with cloud-based solutions for scalable deployment.</li>
              <li>Worked with FastAPI and Django to build efficient backend services.</li>
              <li>Conducted data preprocessing, feature engineering, and model training for AI-based solutions.</li>
              <li>Collaborated with cross-functional teams to deploy AI-powered products.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Software Development Intern</h3>
            <p className="text-gray-600 italic">Blue Sapphire Hub – Kano, Nigeria | July 2023 – January 2024</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
              <li>Debugged, maintained, and improved existing software based on customer and department requirements.</li>
              <li>Learned and applied in-demand programming skills to complete job assignments effectively.</li>
              <li>Compiled customer feedback and recommended improvements to enhance software products.</li>
              <li>Created and maintained technical documentation for ongoing and future development projects.</li>
              <li>Identified potential liabilities and recommended solutions to mitigate risks in software development.</li>
              <li>Performed routine maintenance and backup of software applications pre- and post-deployment.</li>
            </ul>
          </div>
        </CVSection>

        <CVSection title="EDUCATION">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">ALX Africa Software Engineering Program</h3>
              <p className="text-gray-600">Remote | Graduated: February 2025</p>
            </div>
            <div>
              <h3 className="font-semibold">Bachelor of Science in Computer Science and Information Technology</h3>
              <p className="text-gray-600">Federal University Dutsinma | August 2024</p>
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

