
import React, { useState } from 'react';
import { Home, User, Briefcase, Play, AtSign } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavDockProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const NavDock: React.FC<NavDockProps> = ({ onNavigate, activeSection }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`dock ${isMobile ? 'mobile-dock' : ''}`}>
      <DockItem 
        icon={<Home size={isMobile ? 20 : 24} />} 
        label="Home"
        isActive={activeSection === 'home'} 
        onClick={() => onNavigate('home')} 
      />
      <DockItem 
        icon={<User size={isMobile ? 20 : 24} />} 
        label="About"
        isActive={activeSection === 'profile'} 
        onClick={() => onNavigate('profile')} 
      />
      <DockItem 
        icon={<Briefcase size={isMobile ? 20 : 24} />} 
        label="Experience"
        isActive={activeSection === 'experience'} 
        onClick={() => onNavigate('experience')} 
      />
      <DockItem 
        icon={<Play size={isMobile ? 20 : 24} />} 
        label="Media"
        isActive={activeSection === 'media'} 
        onClick={() => onNavigate('media')} 
      />
      <DockItem 
        icon={<AtSign size={isMobile ? 20 : 24} />} 
        label="Contact"
        isActive={activeSection === 'contact'} 
        onClick={() => onNavigate('contact')} 
      />
    </div>
  );
};

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const DockItem: React.FC<DockItemProps> = ({ icon, label, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`dock-item ${isActive ? 'bg-white/30 dark:bg-slate-500/90' : ''} ${isMobile ? 'active:scale-90 transition-transform' : ''}`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => isMobile && setIsHovered(true)}
        onTouchEnd={() => isMobile && setTimeout(() => setIsHovered(false), 500)}
      >
        <div className={`text-black/80 dark:text-white ${isHovered ? 'scale-110' : ''} transition-transform duration-200`}>
          {icon}
        </div>
      </div>
      {isHovered && (
        <div className="absolute -top-8 bg-black/80 text-white text-xs px-2 py-1 rounded-md animate-fade-in">
          {label}
        </div>
      )}
    </div>
  );
};

export default NavDock;
