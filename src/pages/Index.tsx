import React, { useState, useEffect, useRef } from 'react';
import NavDock from '../components/NavDock';
import ProfileSection from '../components/ProfileSection';
import ExperienceSection from '../components/ExperienceSection';
import MediaSection from '../components/MediaSection';
import ContactSection from '../components/ContactSection';
import ThemeToggle from '../components/ThemeToggle';
import ScrollProgressIndicator from '../components/ScrollProgressIndicator';
import RainbowCursor from '../components/RainbowCursor';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const homeRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const sectionRefs = {
    home: homeRef,
    profile: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    media: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
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
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Rainbow Cursor */}
      <RainbowCursor />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      {/* Navigation */}
      <NavDock 
        onNavigate={handleNavigation} 
        activeSection={activeSection} 
      />
      
      <div className="pg-container pt-16">
        {/* Home Section */}
        <div ref={homeRef} className="min-h-[80vh] flex flex-col justify-center">
          <div>
            <h1 className="text-4xl mb-4 font-georgia">
              Hazli Johar
            </h1>
            <p className="font-mono mb-6 text-sm">
              &lt;Decoding The Future of Accounting&gt;
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button 
                onClick={() => handleNavigation('profile')}
                className="pg-button"
              >
                Discover My Story
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="pg-button"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <div ref={sectionRefs.profile}>
          <ProfileSection />
        </div>
        
        <hr className="pg-divider" />
        
        <div ref={sectionRefs.experience}>
          <ExperienceSection />
        </div>
        
        <hr className="pg-divider" />
        
        <div ref={sectionRefs.media}>
          <MediaSection />
        </div>
        
        <hr className="pg-divider" />
        
        <div ref={sectionRefs.contact}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
