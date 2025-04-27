
import React from 'react';
import { cn } from "@/lib/utils";

interface NavigationProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, activeSection, className }) => {
  const sections = [
    { id: 'home', label: '§ Home' },
    { id: 'profile', label: '§ About' },
    { id: 'experience', label: '§ Experience' },
    { id: 'media', label: '§ Media' },
    { id: 'contact', label: '§ Contact' }
  ];
  
  return (
    <nav className={cn("pg-nav", className)}>
      {sections.map((section) => (
        <button 
          key={section.id}
          onClick={() => onNavigate(section.id)}
          className={cn(
            activeSection === section.id ? 'pg-nav-item-active' : 'pg-nav-item'
          )}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
