
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center space-y-4 py-6 sm:py-8">
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
          Hazli Johar
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
