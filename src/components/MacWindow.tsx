
import React from 'react';

interface MacWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const MacWindow: React.FC<MacWindowProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`macos-window ${className}`}>
      <div className="macos-window-header">
        <div className="window-action window-close" />
        <div className="window-action window-minimize" />
        <div className="window-action window-maximize" />
      </div>
      
      {title && (
        <div className="text-center text-sm font-medium text-gray-500 dark:text-gray-200 pt-2 pb-4">
          {title}
        </div>
      )}
      
      <div className="pt-8">
        {children}
      </div>
    </div>
  );
};

export default MacWindow;
