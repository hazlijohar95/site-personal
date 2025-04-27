
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  className?: string;
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ className, children }) => {
  return (
    <h2 className={cn("pg-heading", className)}>
      {children}
    </h2>
  );
};

export default SectionHeading;
