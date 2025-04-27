
import React from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, activeSection, className }) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'media', label: 'Media' },
    { id: 'contact', label: 'Contact' }
  ];
  
  const handleNavigation = (section: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Use setTimeout to allow navigation to complete
      setTimeout(() => {
        onNavigate(section);
      }, 100);
    } else {
      onNavigate(section);
    }
  };
  
  const handleBlogNavigation = () => {
    navigate('/blog');
  };
  
  // Mobile Navigation
  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-t border-border py-2 px-3">
        <div className="flex justify-between items-center">
          {sections.map((section) => (
            <button 
              key={section.id}
              onClick={() => handleNavigation(section.id)}
              className={cn(
                "flex flex-col items-center p-1 rounded-md transition-colors",
                activeSection === section.id && location.pathname === '/'
                  ? 'text-black dark:text-white font-bold'
                  : 'text-gray-500 dark:text-gray-400'
              )}
              aria-label={section.label}
            >
              <span className="text-xs">{section.label}</span>
              {activeSection === section.id && location.pathname === '/' && (
                <span className="mt-1 h-1 w-1 rounded-full bg-black dark:bg-white" />
              )}
            </button>
          ))}
          <button 
            onClick={handleBlogNavigation}
            className={cn(
              "flex flex-col items-center p-1 rounded-md transition-colors",
              location.pathname.startsWith('/blog')
                ? 'text-black dark:text-white font-bold'
                : 'text-gray-500 dark:text-gray-400'
            )}
            aria-label="Blog"
          >
            <span className="text-xs">Blog</span>
            {location.pathname.startsWith('/blog') && (
              <span className="mt-1 h-1 w-1 rounded-full bg-black dark:bg-white" />
            )}
          </button>
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
          onClick={() => handleNavigation(section.id)}
          className={cn(
            activeSection === section.id && location.pathname === '/' ? 'pg-nav-item-active' : 'pg-nav-item'
          )}
        >
          {section.label}
        </button>
      ))}
      <button 
        onClick={handleBlogNavigation}
        className={cn(
          location.pathname.startsWith('/blog') ? 'pg-nav-item-active' : 'pg-nav-item'
        )}
      >
        Blog
      </button>
    </nav>
  );
};

export default Navigation;
