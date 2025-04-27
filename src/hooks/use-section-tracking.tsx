
import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface UseSectionTrackingOptions {
  sections: string[];
  offset?: number;
}

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

export const useSectionTracking = ({ sections, offset }: UseSectionTrackingOptions) => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const isMobile = useIsMobile();
  const defaultOffset = isMobile ? 2 : 3;
  const effectiveOffset = offset || defaultOffset;
  
  const sectionRefs = sections.reduce<SectionRefs>((acc, section) => {
    acc[section] = useRef<HTMLDivElement>(null);
    return acc;
  }, {});
  
  useEffect(() => {
    // Debounce scroll events for better performance
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY + window.innerHeight / effectiveOffset;
        
        for (const section of sections) {
          const ref = sectionRefs[section];
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
      }, 50); // Small timeout for performance
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [sections, effectiveOffset]);

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section];
    if (ref.current) {
      // Add a small delay on mobile for smoother transitions
      if (isMobile) {
        setTimeout(() => {
          window.scrollTo({
            top: ref.current!.offsetTop - 20, // Add a small offset on mobile
            behavior: 'smooth',
          });
        }, 100);
      } else {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return {
    activeSection,
    sectionRefs,
    scrollToSection,
  };
};
