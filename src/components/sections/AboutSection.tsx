
import React from 'react';
import { MapPin } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const AboutSection: React.FC = () => {
  return (
    <section className="space-y-4 sm:space-y-6">
      <div className="flex flex-col items-center space-y-4 sm:space-y-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-border flex-shrink-0">
          <img src="/lovable-uploads/c90088f8-4c29-43a9-a20b-4a664df5149f.png" alt="Hazli Johar" className="w-full h-full object-cover" />
        </div>
        
        <div className="text-center space-y-3 sm:space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Hazli Johar</h2>
            <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground justify-center mb-4">
              <MapPin size={14} className="flex-shrink-0 sm:w-4 sm:h-4" />
              <span className="text-center">Kuala Lumpur • Entrepreneur, 10+ Years Experience</span>
            </div>
            <div className="flex justify-center">
              <SocialLinks className="justify-center" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 px-2">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start gap-3 px-2">
            <span className="inline-block w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-sm sm:text-base leading-relaxed">CEO & Co-founder at <strong>Cynco</strong> — building AI-native accounting infrastructure for businesses and accounting firms</p>
          </div>
          <div className="flex items-start gap-3 px-2">
            <span className="inline-block w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-sm sm:text-base leading-relaxed">Chartered Accountant who worked with 500+ companies</p>
          </div>
          <div className="flex items-start gap-3 px-2">
            <span className="inline-block w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-sm sm:text-base leading-relaxed">Accountant turned founder who learn to code, designs, and ships products</p>
          </div>
          <div className="flex items-start gap-3 px-2">
            <span className="inline-block w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-sm sm:text-base leading-relaxed">Co-founded and invested in F&B, retail, fashion, and real estate businesses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
