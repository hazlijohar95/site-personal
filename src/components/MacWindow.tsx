
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface MacWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const MacWindow: React.FC<MacWindowProps> = ({ title, children, className = '' }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`pg-section ${className}`}>
      {title && (
        <h3 className="text-lg font-mono mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
          {title}
        </h3>
      )}
      
      <div className="font-georgia">
        {children}
      </div>
    </div>
  );
};

export default MacWindow;
