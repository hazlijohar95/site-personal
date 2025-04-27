
import React from 'react';
import SectionContainer from '@/components/common/SectionContainer';
import SectionHeading from '@/components/common/SectionHeading';
import ExperienceItem from './ExperienceItem';
import { experiences } from '../data/experiences';

interface ExperienceSectionProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const ExperienceSection = React.forwardRef<HTMLDivElement, ExperienceSectionProps>(
  (props, ref) => {
    return (
      <SectionContainer id="experience" ref={ref}>
        <SectionHeading>Experience</SectionHeading>
        
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </SectionContainer>
    );
  }
);

ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
