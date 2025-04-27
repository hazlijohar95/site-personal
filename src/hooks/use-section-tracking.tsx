
import { useState, useEffect, useRef } from 'react';

interface UseSectionTrackingOptions {
  sections: string[];
  offset?: number;
}

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

export const useSectionTracking = ({ sections, offset = 3 }: UseSectionTrackingOptions) => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const sectionRefs = sections.reduce<SectionRefs>((acc, section) => {
    acc[section] = useRef<HTMLDivElement>(null);
    return acc;
  }, {});
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / offset;
      
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
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section];
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return {
    activeSection,
    sectionRefs,
    scrollToSection,
  };
};
