
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

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <HeroSection />
        <AboutSection />
        <CurrentRolesSection />
        <MediaSection />
        <ContactSection />

        {/* Footer */}
        <footer className="text-center text-xs text-muted-foreground pt-6 border-t border-border/30">
          <p>© 2025 Hazli Johar. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
