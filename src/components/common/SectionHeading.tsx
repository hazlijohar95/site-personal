
import React from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface SectionHeadingProps {
  className?: string;
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ className, children }) => {
  const isMobile = useIsMobile();
  
  return (
    <h2 className={cn(
      "pg-heading",
      isMobile ? "text-xl mb-6" : "text-2xl mb-8",
      className
    )}>
      {children}
    </h2>
  );
};

export default SectionHeading;
