
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}

const SectionContainer = React.forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ id, className, children, ...props }, ref) => {
    return (
      <section 
        id={id}
        ref={ref}
        className={cn("pg-section", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
