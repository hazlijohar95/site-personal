
import React from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-up' | 'scale-in';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animationType = 'fade-in',
  delay = 0
}) => {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1 });

  const animations = {
    'fade-in': 'opacity-0 transition-opacity duration-700 ease-in-out',
    'slide-up': 'opacity-0 translate-y-10 transition-all duration-700 ease-in-out',
    'scale-in': 'opacity-0 scale-95 transition-all duration-700 ease-in-out'
  };

  return (
    <div
      // @ts-ignore - ref is properly typed but TypeScript is confused
      ref={ref}
      className={cn(
        animations[animationType],
        isInView && 'opacity-100 translate-y-0 scale-100',
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
