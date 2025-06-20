
import React from 'react';
import { MapPin, Sparkles, Building2, Code, TrendingUp } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const AboutSection: React.FC = () => {
  const highlights = [{
    text: "CEO & Co-founder at Cynco — AI-native accounting infrastructure",
    icon: <Building2 size={20} />,
    featured: true
  }, {
    text: "Chartered Accountant who worked with 500+ companies",
    icon: <TrendingUp size={18} />,
    featured: false
  }, {
    text: "Accountant turned founder who codes, designs, and ships products",
    icon: <Code size={18} />,
    featured: false
  }, {
    text: "Co-founded and invested in F&B, retail, fashion, and real estate",
    icon: <Sparkles size={18} />,
    featured: false
  }];

  return (
    <section className="space-y-6 sm:space-y-8">
      <div className="flex flex-col items-center space-y-4 sm:space-y-6 mb-8 sm:mb-10">
        <div className="relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-border/20 shadow-lg hover:scale-105 transition-all duration-500 hover:shadow-xl">
            <img src="/lovable-uploads/c90088f8-4c29-43a9-a20b-4a664df5149f.png" alt="Hazli Johar" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="text-center space-y-3 sm:space-y-4 px-4">
          <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground justify-center">
            <MapPin size={16} className="flex-shrink-0 text-primary" />
            <span className="text-center">Kuala Lumpur • Entrepreneur, 10+ Years Experience</span>
          </div>
          <SocialLinks className="justify-center" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-2 sm:px-0">
        {/* Featured highlight - mobile optimized */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-border/30 hover:border-primary/30 rounded-xl p-4 sm:p-6 mb-4 transition-all duration-300 hover:shadow-lg">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
              {highlights[0].icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                {highlights[0].text.includes('Cynco') ? <>
                    {highlights[0].text.split('Cynco')[0]}
                    <strong className="text-primary">Cynco</strong>
                    {highlights[0].text.split('Cynco')[1]}
                  </> : highlights[0].text}
              </p>
            </div>
          </div>
        </div>

        {/* Regular highlights - mobile-first grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {highlights.slice(1).map((highlight, index) => (
            <div key={index} className="group relative overflow-hidden bg-card/40 hover:bg-card/60 border border-border/20 hover:border-border/40 rounded-lg p-4 sm:p-5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md min-h-[100px] sm:min-h-[120px] flex items-start">
              <div className="flex items-start gap-3 w-full">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-foreground/10 rounded-lg group-hover:bg-foreground/20 transition-colors duration-300 flex-shrink-0 mt-1">
                  {highlight.icon}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-200 flex-1">
                  {highlight.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
