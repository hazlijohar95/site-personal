
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Hazli Johar
        </h1>
        <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground font-mono">
          <ArrowRight size={16} />
          <p>Decoding The Future of Accounting</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
