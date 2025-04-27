
import React from 'react';
import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  active?: boolean;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, active = false, className }) => {
  return (
    <div className={cn(
      "inline-flex items-center gap-1.5", 
      className
    )}>
      <span className={cn(
        "inline-block w-2 h-2 rounded-full",
        active ? "bg-black dark:bg-white" : "bg-gray-400 dark:bg-gray-600"
      )}></span>
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default Badge;
