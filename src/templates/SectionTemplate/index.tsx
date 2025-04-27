
import React from 'react';
import SectionContainer from '@/components/common/SectionContainer';
import SectionHeading from '@/components/common/SectionHeading';

/**
 * Template for creating new sections
 * 
 * To use this template:
 * 1. Copy this directory to src/features/your-section-name/components/
 * 2. Rename the component and customize the content
 * 3. Add your section to src/pages/Index.tsx
 */

interface SectionTemplateProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const SectionTemplate = React.forwardRef<HTMLDivElement, SectionTemplateProps>(
  (props, ref) => {
    return (
      <SectionContainer id="section-id" ref={ref}>
        <SectionHeading>Section Title</SectionHeading>
        
        <div className="space-y-4">
          {/* Your section content goes here */}
          <p>This is a template section. Replace this content with your own.</p>
        </div>
      </SectionContainer>
    );
  }
);

SectionTemplate.displayName = "SectionTemplate";

export default SectionTemplate;
