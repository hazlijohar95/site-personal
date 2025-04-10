
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from "@/components/ui/toggle";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on user preference or system theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
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
    <div className="absolute top-4 right-4 z-50">
      <Toggle 
        pressed={isDarkMode}
        onPressedChange={toggleTheme}
        className="w-10 h-10 rounded-full bg-white/40 backdrop-blur-lg border border-white/30 dark:bg-slate-700/70 dark:border-slate-600/50 hover:scale-110 transition-all duration-300 shadow-md"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Moon className="h-5 w-5 text-white" />
        ) : (
          <Sun className="h-5 w-5 text-black/80" />
        )}
      </Toggle>
    </div>
  );
};

export default ThemeToggle;
