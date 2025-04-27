
import React, { Suspense, lazy } from 'react';
import Navigation from '@/components/layout/Navigation';
import ThemeToggle from '@/components/layout/ThemeToggle';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import { useSectionTracking } from '@/hooks/use-section-tracking';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const { activeSection, sectionRefs, scrollToSection } = useSectionTracking({ sections });
  
  const handleNavigation = (section: string) => {
    scrollToSection(section);
  };

  return (
    <div className="min-h-screen">
      <ScrollProgressIndicator />
      
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <Navigation 
        onNavigate={handleNavigation} 
        activeSection={activeSection} 
      />
      
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
    </div>
  );
};

export default Index;
