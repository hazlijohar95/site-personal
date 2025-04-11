
import React, { useState, useEffect, useRef } from 'react';

interface Position {
  x: number;
  y: number;
  timestamp: number;
}

const RainbowCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0, timestamp: Date.now() });
  const [isVisible, setIsVisible] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const blinkTimerId = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY, timestamp: Date.now() };
      setPosition(newPosition);
      
      // Show cursor
      setIsVisible(true);
      
      // Reset blinking when moving
      setBlinking(false);
      
      // Clear existing timeouts
      if (timerId.current) clearTimeout(timerId.current);
      if (blinkTimerId.current) clearTimeout(blinkTimerId.current);
      
      // Set timeout to start blinking after inactivity
      timerId.current = setTimeout(() => {
        setBlinking(true);
        
        // Set interval for blinking effect
        blinkTimerId.current = setInterval(() => {
          setBlinking(prev => !prev);
        }, 500); // Classic blink rate
        
      }, 800);
    };
    
    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (timerId.current) clearTimeout(timerId.current);
      if (blinkTimerId.current) clearInterval(blinkTimerId.current);
    };
  }, []);
  
  // Don't render anything if not visible
  if (!isVisible) return null;
  
  return (
    <div
      className="retro-cursor fixed pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: blinking ? 0.7 : 1,
        imageRendering: 'pixelated',
        transform: 'translate(10px, 10px)'
      }}
    >
      <div 
        style={{
          width: '16px',
          height: '24px',
          backgroundColor: 'transparent',
          position: 'relative',
          transformOrigin: 'top left'
        }}
      >
        <div 
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            border: '2px solid #fff',
            boxShadow: '0 0 0 1px #000',
            backgroundColor: '#000',
            color: '#33ff33'
          }}
        >
          <span 
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '18px',
              fontWeight: 'bold',
              marginTop: '-2px'
            }}
          >
            _
          </span>
        </div>
      </div>
    </div>
  );
};

export default RainbowCursor;
