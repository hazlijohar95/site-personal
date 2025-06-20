import React from 'react';
import { ArrowRight } from 'lucide-react';
const HeroSection: React.FC = () => {
  return <section className="text-center space-y-4 sm:space-y-6 py-6 sm:py-8 md:py-12">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight px-2">
          Hazli Johar
        </h1>
        
      </div>
    </section>;
};
export default HeroSection;