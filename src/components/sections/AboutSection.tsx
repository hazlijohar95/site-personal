
import React from 'react';
import SocialLinks from '@/components/SocialLinks';
import { useProfile } from '@/hooks/useProfile';

const AboutSection: React.FC = () => {
  const { data: profile, isLoading } = useProfile();

  if (isLoading) {
    return (
      <section className="space-y-8">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse flex-shrink-0"></div>
          <div className="space-y-3 flex-1">
            <div className="space-y-2">
              <div className="h-5 bg-gray-200 rounded animate-pulse w-32"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 rounded-full overflow-hidden border border-border/40 flex-shrink-0">
          <img 
            src={profile?.profile_image_url || "/lovable-uploads/c90088f8-4c29-43a9-a20b-4a664df5149f.png"} 
            alt={profile?.name || "Hazli Johar"} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="space-y-3">
          <div>
            <p className="font-medium">{profile?.location || 'Kuala Lumpur'}</p>
            <p className="text-sm text-muted-foreground">{profile?.title || 'Entrepreneur, 10+ Years'}</p>
          </div>
          <SocialLinks className="flex gap-4" showIcons={false} />
        </div>
      </div>

      <div className="prose space-y-4 text-sm leading-relaxed">
        {profile?.bio ? (
          profile.bio.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>Loading profile information...</p>
        )}
        
        <p>
          <strong>Specialties:</strong> {profile?.specialties || 'Financial Reporting, Company Restructuring, Design, Entrepreneurship, Bootstrapping, Sales & Marketing.'}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
