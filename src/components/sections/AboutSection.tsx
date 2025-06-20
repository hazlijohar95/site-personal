
import React from 'react';
import { MapPin } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const AboutSection: React.FC = () => {
  return (
    <section className="space-y-4 sm:space-y-5">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-border/20 shadow-sm">
          <img src="/lovable-uploads/c90088f8-4c29-43a9-a20b-4a664df5149f.png" alt="Hazli Johar" className="w-full h-full object-cover" />
        </div>
        
        <div className="text-center space-y-3">
          <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground justify-center">
            <MapPin size={16} className="flex-shrink-0" />
            <span>Kuala Lumpur • Entrepreneur, 10+ Years Experience</span>
          </div>
          <SocialLinks className="justify-center" />
        </div>
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        <div className="grid gap-2 sm:gap-3">
          <div className="p-3 sm:p-4 bg-card/30 rounded-lg border border-border/20 hover:border-border/40 transition-colors">
            <p className="text-sm sm:text-base leading-relaxed">• CEO & Co-founder at <strong>Cynco</strong> — building AI-native accounting infrastructure for businesses and accounting firms</p>
          </div>
          <div className="p-3 sm:p-4 bg-card/30 rounded-lg border border-border/20 hover:border-border/40 transition-colors">
            <p className="text-sm sm:text-base leading-relaxed">• Chartered Accountant who worked with 500+ companies</p>
          </div>
          <div className="p-3 sm:p-4 bg-card/30 rounded-lg border border-border/20 hover:border-border/40 transition-colors">
            <p className="text-sm sm:text-base leading-relaxed">• Accountant turned founder who learn to code, designs, and ships products</p>
          </div>
          <div className="p-3 sm:p-4 bg-card/30 rounded-lg border border-border/20 hover:border-border/40 transition-colors">
            <p className="text-sm sm:text-base leading-relaxed">• Co-founded and invested in F&B, retail, fashion, and real estate businesses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
