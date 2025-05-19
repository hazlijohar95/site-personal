
import React, { Suspense, lazy, useEffect, useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import ThemeToggle from '@/components/layout/ThemeToggle';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import { useSectionTracking } from '@/hooks/use-section-tracking';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowUp } from 'lucide-react';
import { cn } from "@/lib/utils";
import ContentSkeleton from '@/components/common/ContentSkeleton';
import { CommandMenu } from '@/components/CommandMenu';
import AnimatedSection from '@/components/AnimatedSection';
import { Separator } from '@/components/ui/separator';

// Lazy load section components
const Hero = lazy(() => import('@/features/home/components/Hero'));
const ProfileSection = lazy(() => import('@/features/profile/components/index'));
const ExperienceSection = lazy(() => import('@/features/experience/components/index'));
const MediaSection = lazy(() => import('@/features/media/components/index'));
const ContactSection = lazy(() => import('@/features/contact/components/index'));

// Loading fallback
const SectionLoading = () => (
  <div className="min-h-[30vh] animate-fade-in">
    <ContentSkeleton />
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
      isMobile && "pb-16"
    )}>
      <CommandMenu />
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

        {/* Add subtle divider between sections */}
        <Separator className="my-12 md:my-24 opacity-30 max-w-[200px] mx-auto" />
        
        <Suspense fallback={<SectionLoading />}>
          <AnimatedSection animationType="fade-in">
            <ProfileSection ref={sectionRefs.profile} />
          </AnimatedSection>
        </Suspense>
        
        <Separator className="my-12 md:my-24 opacity-30 max-w-[200px] mx-auto" />
        
        <Suspense fallback={<SectionLoading />}>
          <AnimatedSection animationType="fade-in" delay={100}>
            <ExperienceSection ref={sectionRefs.experience} />
          </AnimatedSection>
        </Suspense>
        
        <Separator className="my-12 md:my-24 opacity-30 max-w-[200px] mx-auto" />
        
        <Suspense fallback={<SectionLoading />}>
          <AnimatedSection animationType="fade-in" delay={150}>
            <MediaSection ref={sectionRefs.media} />
          </AnimatedSection>
        </Suspense>
        
        <Separator className="my-12 md:my-24 opacity-30 max-w-[200px] mx-auto" />
        
        <Suspense fallback={<SectionLoading />}>
          <AnimatedSection animationType="fade-in" delay={200}>
            <ContactSection ref={sectionRefs.contact} />
          </AnimatedSection>
        </Suspense>
      </div>
      
      {/* Back to Top Button - Mobile only */}
      {isMobile && showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-20 right-4 z-40 p-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-md hover:scale-110 transition-transform duration-200"
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
