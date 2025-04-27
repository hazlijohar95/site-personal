
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavDockProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const NavDock: React.FC<NavDockProps> = ({ onNavigate, activeSection }) => {
  const isMobile = useIsMobile();
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'media', label: 'Media' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <div className="fixed top-4 left-0 right-0 z-50 pg-container">
      <nav className="pg-nav">
        {sections.map((section) => (
          <button 
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className={`pg-nav-item ${activeSection === section.id ? 'pg-nav-item-active' : ''}`}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default NavDock;
