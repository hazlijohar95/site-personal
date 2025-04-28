
import React from 'react';
import SectionContainer from '@/components/common/SectionContainer';
import { cn } from "@/lib/utils";
import { ChevronRight } from 'lucide-react';
import { Command } from '@/components/ui/command';

interface HeroProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  (props, ref) => {
    return (
      <SectionContainer ref={ref} className="min-h-[90vh] flex flex-col justify-center relative">
        <div className="relative z-10">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Hazli Johar
            </h1>
            <div className="flex items-baseline gap-2 text-lg text-muted-foreground font-mono">
              <ChevronRight size={16} />
              <p>Decoding The Future of Accounting</p>
            </div>
          </div>
          
          <div className="max-w-xl">
            <Command className="rounded-lg border shadow-md">
              <p className="p-4 text-sm text-muted-foreground">
                Press or Tap to read
              </p>
            </Command>
          </div>
        </div>
        
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
        </div>
      </SectionContainer>
    );
  }
);

Hero.displayName = "Hero";

export default Hero;
