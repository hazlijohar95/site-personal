
import React from 'react';
import { useProfile } from '@/hooks/useProfile';

const HeroSection: React.FC = () => {
  const { data: profile, isLoading } = useProfile();

  if (isLoading) {
    return (
      <section className="py-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-medium text-foreground">
            {profile?.name || 'Hazli Johar'}<span className="typewriter-cursor"></span>
          </h1>
          <p className="text-muted-foreground text-sm">
            {profile?.tagline || 'Accountant turned founder. Building the future of accounting.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
