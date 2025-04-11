
import React, { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const RainbowCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update cursor position
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Show cursor
      setIsVisible(true);
      
      // Clear existing timeout
      if (timerId) clearTimeout(timerId);
      
      // Set new timeout to hide cursor after 1 second of inactivity
      const newTimerId = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      
      setTimerId(newTimerId);
    };
    
    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (timerId) clearTimeout(timerId);
    };
  }, [timerId]);
  
  // Don't render anything if not visible
  if (!isVisible) return null;
  
  return (
    <div
      className="rainbow-cursor fixed pointer-events-none z-50 whitespace-nowrap"
      style={{
        left: `${position.x + 20}px`,
        top: `${position.y - 10}px`,
        transform: 'translate(0, -50%)'
      }}
    >
      <span className="text-transparent bg-clip-text animate-pulse" 
            style={{
              backgroundImage: 'linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
              backgroundSize: '200% auto',
              animation: 'gradient-animation 2s linear infinite',
              fontSize: '12px',
              fontFamily: 'monospace',
              fontWeight: 'bold'
            }}>
        &lt;decoding the future of accounting/&gt;
      </span>
    </div>
  );
};

export default RainbowCursor;
