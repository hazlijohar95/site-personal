
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from "@/components/ui/toggle";
import { useIsMobile } from '@/hooks/use-mobile';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isMobile = useIsMobile();

  // Initialize theme based on user preference or system theme, but defaulting to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // Default to light mode
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isMobile ? 'fixed' : 'absolute'} top-4 right-4 z-50`}>
      <Toggle 
        pressed={isDarkMode}
        onPressedChange={toggleTheme}
        className={`${isMobile ? 'w-9 h-9' : 'w-10 h-10'} rounded-full bg-white/40 backdrop-blur-lg border border-white/30 dark:bg-slate-700/70 dark:border-slate-600/50 hover:scale-110 active:scale-95 transition-all duration-300 shadow-md`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Moon className={`h-${isMobile ? '4' : '5'} w-${isMobile ? '4' : '5'} text-white`} />
        ) : (
          <Sun className={`h-${isMobile ? '4' : '5'} w-${isMobile ? '4' : '5'} text-black/80`} />
        )}
      </Toggle>
    </div>
  );
};

export default ThemeToggle;
