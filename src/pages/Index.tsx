
import React from 'react';
import ThemeToggle from '@/components/layout/ThemeToggle';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import CurrentRolesSection from '@/components/sections/CurrentRolesSection';
import MediaSection from '@/components/sections/MediaSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12 space-y-16">
        <HeroSection />
        
        <div className="section-divider"></div>
        <AboutSection />
        
        <div className="section-divider"></div>
        <CurrentRolesSection />
        
        <div className="section-divider"></div>
        <MediaSection />
        
        <div className="section-divider"></div>
        <ContactSection />

        {/* Simple footer */}
        <footer className="text-center text-xs text-muted-foreground pt-12 border-t border-border/20">
          <p>© 2025 Hazli Johar</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
