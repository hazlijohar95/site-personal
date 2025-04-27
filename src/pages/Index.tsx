
import React, { Suspense, lazy, useEffect, useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import ThemeToggle from '@/components/layout/ThemeToggle';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import { useSectionTracking } from '@/hooks/use-section-tracking';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowUp } from 'lucide-react';

// Lazy load section components
const Hero = lazy(() => import('@/features/home/components/Hero'));
const ProfileSection = lazy(() => import('@/features/profile/components/index'));
const ExperienceSection = lazy(() => import('@/features/experience/components/index'));
const MediaSection = lazy(() => import('@/features/media/components/index'));
const ContactSection = lazy(() => import('@/features/contact/components/index'));

// Loading fallback
const SectionLoading = () => (
  <div className="min-h-[30vh] flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

const Index = () => {
  const isMobile = useIsMobile();
  const sections = ['home', 'profile', 'experience', 'media', 'contact'];
  const { activeSection, sectionRefs, scrollToSection } = useSectionTracking({ 
    sections,
    offset: isMobile ? 2 : 3 // Adjust offset for mobile
  });
  
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show back-to-top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavigation = (section: string) => {
    scrollToSection(section);
  };
  
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={cn(
      "min-h-screen",
      isMobile && "pb-16" // Add padding at bottom for mobile navigation
    )}>
      <ScrollProgressIndicator />
      
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      {!isMobile && (
        <Navigation 
          onNavigate={handleNavigation} 
          activeSection={activeSection} 
        />
      )}
      
      <div className="pg-container">
        <Suspense fallback={<SectionLoading />}>
          <Hero ref={sectionRefs.home} />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <ProfileSection ref={sectionRefs.profile} />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <ExperienceSection ref={sectionRefs.experience} />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <MediaSection ref={sectionRefs.media} />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <ContactSection ref={sectionRefs.contact} />
        </Suspense>
      </div>
      
      {/* Back to Top Button - Mobile only */}
      {isMobile && showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-20 right-4 z-40 p-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-md"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
      
      {/* Mobile Navigation */}
      {isMobile && (
        <Navigation 
          onNavigate={handleNavigation} 
          activeSection={activeSection}
        />
      )}
    </div>
  );
};

export default Index;
