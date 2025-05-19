
import React from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import AnimatedSection from '@/components/AnimatedSection';

interface SectionHeadingProps {
  className?: string;
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ className, children }) => {
  const isMobile = useIsMobile();
  
  return (
    <AnimatedSection animationType="slide-up" delay={50}>
      <h2 className={cn(
        "pg-heading",
        isMobile ? "text-xl mb-6" : "text-2xl mb-8",
        "relative pb-2",
        className
      )}>
        {children}
        <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-foreground/30 rounded-full"></span>
      </h2>
    </AnimatedSection>
  );
};

export default SectionHeading;
