
import React from 'react';

const CurrentRolesSection: React.FC = () => {
  const roles = [
    {
      title: "Co-Founder & CEO",
      company: "Cynco",
      description: "AI-native accounting infrastructure",
      isActive: true
    },
    {
      title: "Entrepreneur in Residence",
      company: "Mranti",
      description: "Startup ecosystem development",
      isActive: true
    },
    {
      title: "Partner",
      company: "Accelzone Ventures",
      description: "Angel investor syndicate",
      isActive: true
    },
    {
      title: "Founder & Partner",
      company: "Hazli Johar & Co.",
      description: "Global business consulting",
      isActive: true
    }
  ];

  return (
    <section className="space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold px-2 sm:px-0">Current Roles</h3>
      
      <div className="grid gap-3 px-2 sm:px-0">
        {roles.map((role, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden bg-card/20 hover:bg-card/40 border border-border/10 hover:border-border/30 rounded-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-sm min-h-[80px] sm:min-h-[90px] flex items-center"
          >
            <div className="p-4 sm:p-5 w-full">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors duration-200">{role.title}</h4>
                    {role.isActive && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                        <span className="text-xs text-muted-foreground font-medium">Live</span>
                      </div>
                    )}
                  </div>
                  <p className="text-primary/80 font-medium text-sm mb-1">{role.company}</p>
                  <p className="text-muted-foreground/80 text-xs leading-relaxed">{role.description}</p>
                </div>
              </div>
            </div>
            
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentRolesSection;
