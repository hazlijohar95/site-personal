
import React from 'react';
import { MapPin, Sparkles, Building2, Code, TrendingUp } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      text: "CEO & Co-founder at Cynco — AI-native accounting infrastructure",
      icon: <Building2 size={20} />,
      accent: "primary",
      size: "large"
    },
    {
      text: "Chartered Accountant who worked with 500+ companies",
      icon: <TrendingUp size={18} />,
      accent: "secondary",
      size: "medium"
    },
    {
      text: "Accountant turned founder who codes, designs, and ships products",
      icon: <Code size={18} />,
      accent: "tertiary",
      size: "medium"
    },
    {
      text: "Co-founded and invested in F&B, retail, fashion, and real estate",
      icon: <Sparkles size={18} />,
      accent: "quaternary",
      size: "small"
    }
  ];

  return (
    <section className="space-y-8">
      <div className="flex flex-col items-center space-y-6 mb-10">
        <div className="relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-border/20 shadow-lg hover:scale-105 transition-all duration-500 hover:shadow-xl">
            <img src="/lovable-uploads/c90088f8-4c29-43a9-a20b-4a664df5149f.png" alt="Hazli Johar" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <Sparkles size={16} className="text-primary-foreground" />
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground justify-center">
            <MapPin size={16} className="flex-shrink-0 text-primary" />
            <span>Kuala Lumpur • Entrepreneur, 10+ Years Experience</span>
          </div>
          <SocialLinks className="justify-center" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Masonry-style grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {/* Large featured card */}
          <div 
            className="group relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 hover:border-primary/40 rounded-xl p-6 lg:col-span-2 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-xl"
            style={{ animationDelay: '0ms' }}
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {highlights[0].icon}
              </div>
              <div className="flex-1">
                <p className="text-base sm:text-lg font-medium leading-relaxed group-hover:text-primary/90 transition-colors duration-300">
                  {highlights[0].text.includes('Cynco') ? (
                    <>
                      {highlights[0].text.split('Cynco')[0]}
                      <strong className="text-primary">Cynco</strong>
                      {highlights[0].text.split('Cynco')[1]}
                    </>
                  ) : (
                    highlights[0].text
                  )}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* Medium cards */}
          <div 
            className="group relative overflow-hidden bg-card/40 hover:bg-card/60 border border-border/20 hover:border-border/40 rounded-lg p-5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
            style={{ animationDelay: '100ms' }}
          >
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-foreground/10 rounded-lg group-hover:bg-foreground/20 transition-colors duration-300">
                {highlights[1].icon}
              </div>
              <p className="text-sm sm:text-base leading-relaxed group-hover:text-foreground/90 transition-colors duration-200">
                {highlights[1].text}
              </p>
            </div>
          </div>

          <div 
            className="group relative overflow-hidden bg-card/40 hover:bg-card/60 border border-border/20 hover:border-border/40 rounded-lg p-5 md:col-span-2 lg:col-span-1 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
            style={{ animationDelay: '200ms' }}
          >
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-foreground/10 rounded-lg group-hover:bg-foreground/20 transition-colors duration-300">
                {highlights[2].icon}
              </div>
              <p className="text-sm sm:text-base leading-relaxed group-hover:text-foreground/90 transition-colors duration-200">
                {highlights[2].text}
              </p>
            </div>
          </div>

          {/* Compact card */}
          <div 
            className="group relative overflow-hidden bg-gradient-to-br from-card/60 to-card/30 hover:from-card/80 hover:to-card/50 border border-border/30 hover:border-border/50 rounded-lg p-4 md:col-span-2 lg:col-span-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
            style={{ animationDelay: '300ms' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-foreground/10 rounded-full group-hover:bg-foreground/20 transition-colors duration-300">
                {highlights[3].icon}
              </div>
              <p className="text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-200 flex-1">
                {highlights[3].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
