
import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <a 
        href="https://x.com/hazlijohar" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-500 transition-colors duration-300 dark:text-gray-200 dark:hover:text-blue-400"
        aria-label="Twitter"
      >
        <Twitter size={20} />
      </a>
      <a 
        href="https://www.instagram.com/hazlijohar/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-pink-500 transition-colors duration-300 dark:text-gray-200 dark:hover:text-pink-400"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
      <a 
        href="https://www.linkedin.com/in/hazli-johar/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-700 transition-colors duration-300 dark:text-gray-200 dark:hover:text-blue-400"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
