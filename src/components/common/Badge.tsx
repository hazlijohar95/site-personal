
import React from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface BadgeProps {
  label: string;
  active?: boolean;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, active = false, className }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      "inline-flex items-center gap-1.5", 
      isMobile ? "py-1 px-2" : "", // Add padding for touch targets on mobile
      className
    )}>
      <span className={cn(
        "inline-block rounded-full",
        isMobile ? "w-2.5 h-2.5" : "w-2 h-2", // Slightly larger indicator on mobile
        active ? "bg-black dark:bg-white" : "bg-gray-400 dark:bg-gray-600"
      )}></span>
      <span className={cn(
        isMobile ? "text-sm" : "text-xs"  // Larger text on mobile
      )}>
        {label}
      </span>
    </div>
  );
};

export default Badge;
