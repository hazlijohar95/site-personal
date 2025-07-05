
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-medium text-foreground">
            Hazli Johar<span className="typewriter-cursor"></span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Accountant turned founder. Building the future of accounting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
