
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center space-y-4 md:space-y-6 py-8 md:py-12">
      <div className="space-y-3 md:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
          Hazli Johar
        </h1>
        <div className="flex items-center justify-center gap-2 text-base md:text-lg text-muted-foreground font-mono">
          <ArrowRight size={16} className="flex-shrink-0" />
          <p>Decoding The Future of Accounting</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
