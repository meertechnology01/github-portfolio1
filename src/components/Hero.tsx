import React from 'react';
import { Github, Import, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import UntitledImage from '../img/Untitled.png'; // Import the image

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                Sani Mahmud Madobi
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full-Stack Developer | Machine Learning Practitioner | Alx Certified Backend Engineer | Innovator
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Crafting innovative solutions at the intersection of full-stack development
              and machine learning. Passionate about building scalable applications
              and solving complex problems.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link
                to="/cv"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View CV
              </Link>
              <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors dark:border-blue-400 dark:text-blue-400">
                <a href="https://t.me/xcorp01">Contact on Telegram Direct!</a>
              </button>
            </div>
            <div className="flex gap-6 mt-8 justify-center lg:justify-start">
              <a href="https://github.com/meertechnology01" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mahmud-madobi-988ba31ab" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:meertechnology01@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-64 h-64 lg:w-96 lg:h-96 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
              <img
                src={UntitledImage} // Use the imported image
                alt="Sani Mahmud Madobi"
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}