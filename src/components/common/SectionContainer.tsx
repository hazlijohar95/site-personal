
import React from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}

const SectionContainer = React.forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ id, className, children, ...props }, ref) => {
    const isMobile = useIsMobile();
    
    return (
      <section 
        id={id}
        ref={ref}
        className={cn(
          "pg-section",
          isMobile ? "my-16" : "my-24",
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
