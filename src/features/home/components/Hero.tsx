
import React from 'react';
import SectionContainer from '@/components/common/SectionContainer';

interface HeroProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  (props, ref) => {
    return (
      <SectionContainer ref={ref} className="min-h-[60vh] flex flex-col justify-center">
        <div>
          <h1 className="text-3xl mb-4 font-georgia">
            Hazli Johar
          </h1>
          <p className="font-mono text-sm">
            &lt;Decoding The Future of Accounting&gt;
          </p>
        </div>
      </SectionContainer>
    );
  }
);

Hero.displayName = "Hero";

export default Hero;
