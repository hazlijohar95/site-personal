
import React from 'react';

interface HJLogoProps {
  size?: number;
  className?: string;
}

const HJLogo: React.FC<HJLogoProps> = ({ size = 24, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="10" fill="currentColor" />
      <g fill="white">
        {/* H letter */}
        <rect x="20" y="25" width="10" height="50" />
        <rect x="20" y="45" width="30" height="10" />
        <rect x="50" y="25" width="10" height="50" />
        
        {/* J letter */}
        <rect x="70" y="25" width="10" height="45" />
        <rect x="55" y="70" width="25" height="10" rx="5" />
        <rect x="55" y="25" width="25" height="10" />
      </g>
    </svg>
  );
};

export default HJLogo;
