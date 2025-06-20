
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center space-y-3 sm:space-y-4 py-8 sm:py-12 md:py-16">
      <div className="space-y-2 sm:space-y-3">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight px-2">
          Hazli Johar
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
