
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
    <div className={`macos-window ${isMobile ? 'mobile-window' : ''} ${className}`}>
      <div className="macos-window-header">
        <div className="window-action window-close" />
        <div className="window-action window-minimize" />
        <div className="window-action window-maximize" />
      </div>
      
      {title && (
        <div className="text-center text-sm font-medium text-gray-500 dark:text-gray-300 pt-2 pb-4">
          {title}
        </div>
      )}
      
      <div className={`${isMobile ? 'pt-6' : 'pt-8'}`}>
        {children}
      </div>
    </div>
  );
};

export default MacWindow;
