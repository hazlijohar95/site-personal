
import React, { useState, useEffect } from 'react';
import NavDock from '../components/NavDock';
import ProfileSection from '../components/ProfileSection';
import ExperienceSection from '../components/ExperienceSection';
import MediaSection from '../components/MediaSection';
import ContactSection from '../components/ContactSection';
import ThemeToggle from '../components/ThemeToggle';
import ScrollProgressIndicator from '../components/ScrollProgressIndicator';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();
  
  const sectionRefs = {
    home: React.useRef<HTMLDivElement>(null),
    profile: React.useRef<HTMLDivElement>(null),
    experience: React.useRef<HTMLDivElement>(null),
    media: React.useRef<HTMLDivElement>(null),
    contact: React.useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section in sectionRefs) {
        const ref = sectionRefs[section as keyof typeof sectionRefs];
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: isMobile ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen">
      <ScrollProgressIndicator />
      
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <NavDock 
        onNavigate={handleNavigation} 
        activeSection={activeSection} 
      />
      
      <div className="pg-container">
        {/* Home Section */}
        <div ref={sectionRefs.home} className="min-h-[60vh] flex flex-col justify-center">
          <div>
            <h1 className="text-3xl mb-4 font-georgia">
              Hazli Johar
            </h1>
            <p className="font-mono text-sm">
              &lt;Decoding The Future of Accounting&gt;
            </p>
          </div>
        </div>

        <div ref={sectionRefs.profile}>
          <ProfileSection />
        </div>
        
        <div ref={sectionRefs.experience}>
          <ExperienceSection />
        </div>
        
        <div ref={sectionRefs.media}>
          <MediaSection />
        </div>
        
        <div ref={sectionRefs.contact}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
