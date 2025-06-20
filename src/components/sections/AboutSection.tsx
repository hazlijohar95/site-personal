
import React from 'react';
import { MapPin } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const AboutSection: React.FC = () => {
  return (
    <section className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-border flex-shrink-0">
          <img src="/lovable-uploads/c90088f8-4c29-43a9-a20b-4a664df5149f.png" alt="Hazli Johar" className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1 space-y-3 md:space-y-4 text-center md:text-left">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Hazli Johar</h2>
            <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground justify-center md:justify-start mb-3">
              <MapPin size={16} className="flex-shrink-0" />
              <span>Kuala Lumpur • Entrepreneur, 10+ Years Experience</span>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        <div className="space-y-2 md:space-y-3">
          <div className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-sm md:text-base">CEO & Co-founder at <strong>Cynco</strong> — building AI-native accounting infrastructure for businesses and accounting firms</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-sm md:text-base">Chartered Accountant who worked with 500+ companies</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-sm md:text-base">Accountant turned founder who learn to code, designs, and ships products</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-sm md:text-base">Co-founded and invested in F&B, retail, fashion, and real estate businesses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
