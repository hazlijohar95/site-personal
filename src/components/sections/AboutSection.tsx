
import React from 'react';
import { MapPin } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const AboutSection: React.FC = () => {
  const highlights = [
    "CEO & Co-founder at Cynco — AI-native accounting infrastructure",
    "Chartered Accountant who worked with 500+ companies",
    "Accountant turned founder who codes, designs, and ships products",
    "Co-founded and invested in F&B, retail, fashion, and real estate"
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col items-center space-y-4 mb-8">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-border/20 shadow-sm hover:scale-105 transition-transform duration-300">
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
        <div className="grid gap-3">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-card/20 hover:bg-card/40 border border-border/10 hover:border-border/30 rounded-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 sm:p-5">
                <p className="text-sm sm:text-base leading-relaxed group-hover:text-foreground/90 transition-colors duration-200">
                  {highlight.includes('Cynco') ? (
                    <>
                      {highlight.split('Cynco')[0]}
                      <strong className="text-primary">Cynco</strong>
                      {highlight.split('Cynco')[1]}
                    </>
                  ) : (
                    highlight
                  )}
                </p>
              </div>
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
