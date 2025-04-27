
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ContentSkeletonProps {
  variant?: 'default' | 'profile' | 'media' | 'experience';
  className?: string;
}

/**
 * ContentSkeleton - A customizable loading skeleton component
 * 
 * @param variant - The type of content being loaded (affects skeleton layout)
 * @param className - Additional CSS classes
 */
const ContentSkeleton: React.FC<ContentSkeletonProps> = ({ 
  variant = 'default',
  className
}) => {
  return (
    <div className={cn("space-y-6 animate-fade-in", className)}>
      {variant === 'profile' && (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-20 w-20 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
        </div>
      )}
      
      {variant === 'media' && (
        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
        </div>
      )}
      
      {variant === 'experience' && (
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2 border-b border-gray-200 dark:border-gray-800 pb-4">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-[140px]" />
                <Skeleton className="h-4 w-[80px]" />
              </div>
              <Skeleton className="h-4 w-[120px]" />
            </div>
          ))}
        </div>
      )}
      
      {/* Default skeleton or additional elements for other variants */}
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[95%]" />
        <Skeleton className="h-4 w-[85%]" />
      </div>
    </div>
  );
};

export default ContentSkeleton;
