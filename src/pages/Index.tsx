
import React, { useState, useEffect, useRef } from 'react';
import NavDock from '../components/NavDock';
import ProfileSection from '../components/ProfileSection';
import ExperienceSection from '../components/ExperienceSection';
import MediaSection from '../components/MediaSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const homeRef = useRef<HTMLDivElement>(null);
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
      
      // Determine which section is currently in view
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
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Home Section */}
      <div ref={homeRef} className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Hazli Johar
          </h1>
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-gray-700 font-mono border border-gray-300 bg-gray-100 p-4 rounded-lg inline-block">
              <span className="text-blue-600">&lt;</span>
              <span className="text-green-600">Decoding</span> 
              <span className="text-gray-800">The</span> 
              <span className="text-purple-600">Future</span> 
              <span className="text-orange-600">of</span> 
              <span className="text-red-600">Accounting</span>
              <span className="text-blue-600">/&gt;</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => handleNavigation('profile')}
              className="glass-button bg-blue-600 text-white"
            >
              Discover My Story
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="glass-button"
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
      
      <div ref={sectionRefs.experience}>
        <ExperienceSection />
      </div>
      
      <div ref={sectionRefs.media}>
        <MediaSection />
      </div>
      
      <div ref={sectionRefs.contact}>
        <ContactSection />
      </div>
      
      {/* Navigation Dock */}
      <NavDock 
        onNavigate={handleNavigation} 
        activeSection={activeSection} 
      />
    </div>
  );
};

export default Index;
