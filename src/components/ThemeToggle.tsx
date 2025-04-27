
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from "@/components/ui/toggle";
import { useIsMobile } from '@/hooks/use-mobile';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <Toggle 
      pressed={isDarkMode}
      onPressedChange={setIsDarkMode}
      className="h-8 w-8 rounded-none"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
