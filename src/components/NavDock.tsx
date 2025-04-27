
import React from 'react';

interface NavDockProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const NavDock: React.FC<NavDockProps> = ({ onNavigate, activeSection }) => {
  const sections = [
    { id: 'home', label: '§ Home' },
    { id: 'profile', label: '§ About' },
    { id: 'experience', label: '§ Experience' },
    { id: 'media', label: '§ Media' },
    { id: 'contact', label: '§ Contact' }
  ];
  
  return (
    <nav className="pg-nav">
      {sections.map((section) => (
        <button 
          key={section.id}
          onClick={() => onNavigate(section.id)}
          className={`${activeSection === section.id ? 'pg-nav-item-active' : 'pg-nav-item'}`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default NavDock;
