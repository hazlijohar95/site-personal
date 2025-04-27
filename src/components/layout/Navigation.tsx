
import React from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface NavigationProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, activeSection, className }) => {
  const isMobile = useIsMobile();
  
  const sections = [
    { id: 'home', label: '§ Home' },
    { id: 'profile', label: '§ About' },
    { id: 'experience', label: '§ Experience' },
    { id: 'media', label: '§ Media' },
    { id: 'contact', label: '§ Contact' }
  ];
  
  // Mobile Navigation
  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-t border-border py-2 px-3">
        <div className="flex justify-between items-center">
          {sections.map((section) => (
            <button 
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={cn(
                "flex flex-col items-center p-1 rounded-md transition-colors",
                activeSection === section.id 
                  ? 'text-black dark:text-white font-bold'
                  : 'text-gray-500 dark:text-gray-400'
              )}
              aria-label={section.label}
            >
              <span className="text-xs">{section.label}</span>
              {activeSection === section.id && (
                <span className="mt-1 h-1 w-1 rounded-full bg-black dark:bg-white" />
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  // Desktop Navigation
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
