
import React, { useState, useEffect, useRef } from 'react';

interface Position {
  x: number;
  y: number;
  timestamp: number;
}

const RainbowCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0, timestamp: Date.now() });
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const lastPositions = useRef<Position[]>([]);
  const requestRef = useRef<number>();
  
  // Function to calculate fluid position based on mouse movement history
  const getFluidPosition = () => {
    if (lastPositions.current.length < 2) return position;
    
    // Calculate weighted average of recent positions
    const recentPositions = lastPositions.current.slice(-5);
    const now = Date.now();
    
    let totalWeight = 0;
    let weightedX = 0;
    let weightedY = 0;
    
    recentPositions.forEach((pos, index) => {
      // More recent positions have higher weight
      const age = now - pos.timestamp;
      const weight = Math.max(0, 1 - age / 1000);
      
      totalWeight += weight;
      weightedX += pos.x * weight;
      weightedY += pos.y * weight;
    });
    
    if (totalWeight === 0) return position;
    
    return {
      x: weightedX / totalWeight,
      y: weightedY / totalWeight,
      timestamp: now
    };
  };
  
  // Animation loop
  const animate = () => {
    if (isVisible) {
      // Get fluid position
      const fluidPosition = getFluidPosition();
      setPosition(fluidPosition);
      
      // Determine if mouse is still moving
      const now = Date.now();
      const lastPosition = lastPositions.current[lastPositions.current.length - 1];
      const timeSinceLastMove = now - lastPosition.timestamp;
      
      // Gradually fade out when mouse stops
      if (timeSinceLastMove > 200) {
        setOpacity(prev => Math.max(0, prev - 0.05));
        if (opacity <= 0) {
          setIsVisible(false);
        }
      } else {
        setOpacity(Math.min(1, opacity + 0.1));
      }
    }
    
    requestRef.current = requestAnimationFrame(animate);
  };
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY, timestamp: Date.now() };
      
      // Save position history for fluid motion
      lastPositions.current = [...lastPositions.current.slice(-10), newPosition];
      
      // Show cursor
      setIsVisible(true);
      setOpacity(prev => Math.min(1, prev + 0.1));
      
      // Clear existing timeout
      if (timerId.current) clearTimeout(timerId.current);
      
      // Set new timeout to begin fading after inactivity
      timerId.current = setTimeout(() => {
        // We'll handle the actual fading in the animation loop
      }, 800);
    };
    
    // Start animation loop
    requestRef.current = requestAnimationFrame(animate);
    
    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (timerId.current) clearTimeout(timerId.current);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [opacity, isVisible]);
  
  // Don't render anything if not visible
  if (!isVisible) return null;
  
  return (
    <div
      className="rainbow-cursor fixed pointer-events-none z-50 whitespace-nowrap"
      style={{
        left: `${position.x + 20}px`,
        top: `${position.y - 10}px`,
        transform: 'translate(0, -50%)',
        opacity: opacity,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      <span className="text-transparent bg-clip-text" 
            style={{
              backgroundImage: 'linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
              backgroundSize: '200% auto',
              animation: 'gradient-animation 2s linear infinite',
              fontSize: '12px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.5))'
            }}>
        &lt;decoding the future of accounting/&gt;
      </span>
    </div>
  );
};

export default RainbowCursor;
