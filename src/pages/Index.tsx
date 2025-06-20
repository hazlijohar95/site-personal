
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
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-12 sm:space-y-16 md:space-y-20">
        <HeroSection />
        <AboutSection />
        <CurrentRolesSection />
        <MediaSection />
        <ContactSection />

        {/* Footer */}
        <footer className="text-center text-xs text-muted-foreground pt-8 border-t border-border/20">
          <p>© 2025 Hazli Johar. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
