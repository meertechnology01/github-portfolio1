import React from 'react';
import { Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';

export default function CVHeader() {
  return (
    <header className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-4">SANI MAHMUD MADOBI</h1>
      <p className="text-gray-600 mb-2">No 4, Major Abdullahi Street, Kabama Layout, Zaria, Kaduna State</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a href="mailto:sanimahmudmadobi@gmail.com" className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
          <Mail size={16} />
          <span>sanimahmudmadobi@gmail.com</span>
        </a>
        <a href="tel:+2349024419077" className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
          <Phone size={16} />
          <span>+2349024419077</span>
        </a>
        <a href="https://linkedin.com" className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
          <Linkedin size={16} />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com" className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
          <Github size={16} />
          <span>GitHub</span>
        </a>
        <a href="https://sanimahmudmadobi.meertech.tech" className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
          <Globe size={16} />
          <span>SM.MeerTech.tech</span>
        </a>
      </div>
    </header>
  );
}