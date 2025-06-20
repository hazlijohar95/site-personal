
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center space-y-6 py-8 sm:py-12 md:py-16">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
          Hazli Johar
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground font-medium">
          Decoding The Future of Accounting
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
