
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Progress } from './ui/progress';

interface ScrollProgressIndicatorProps {
  className?: string;
}

const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({ className }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={cn(
      "fixed top-0 left-0 w-full z-50 pointer-events-none",
      className
    )}>
      <Progress 
        value={scrollProgress} 
        className="h-1 w-full rounded-none bg-transparent"
      />
    </div>
  );
};

export default ScrollProgressIndicator;
