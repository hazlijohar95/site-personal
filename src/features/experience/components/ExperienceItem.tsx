
import React from 'react';
import { cn } from "@/lib/utils";
import Badge from '@/components/common/Badge';
import type { Experience } from '../data/experiences';

interface ExperienceItemProps {
  experience: Experience;
  className?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, className }) => {
  return (
    <div className={cn("border-b border-gray-200 dark:border-gray-800 pb-4 last:border-0", className)}>
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="font-bold">{experience.role}</h3>
        <span className="pg-timestamp">{experience.period}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-2">{experience.company}</p>
      
      {experience.isActive && (
        <Badge label="Active" active />
      )}
    </div>
  );
};

export default ExperienceItem;
