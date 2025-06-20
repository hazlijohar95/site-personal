
import React from 'react';

const CurrentRolesSection: React.FC = () => {
  const roles = [
    {
      title: "Co-Founder & CEO",
      company: "Cynco",
      description: "Disrupting accounting with AI-native infrastructure",
      isActive: true
    },
    {
      title: "Entrepreneur in Residence",
      company: "Mranti",
      description: "Supporting startup ecosystem development",
      isActive: true
    },
    {
      title: "Partner",
      company: "Accelzone Ventures",
      description: "Backing cash-flowing businesses with a syndicate of angel investors",
      isActive: true
    },
    {
      title: "Founder & Partner",
      company: "Hazli Johar & Co.",
      description: "Helping global companies build and grow in Malaysia and beyond",
      isActive: true
    }
  ];

  return (
    <section className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold">Current Roles</h3>
      
      <div className="grid gap-4 sm:gap-5">
        {roles.map((role, index) => (
          <div key={index} className="group p-4 sm:p-5 bg-card/30 rounded-lg border border-border/20 hover:border-border/40 hover:bg-card/50 transition-all duration-200">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-sm sm:text-base">{role.title}</h4>
                  {role.isActive && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded-full">
                      <span className="w-1.5 h-1.5 bg-white dark:bg-black rounded-full"></span>
                      Active
                    </span>
                  )}
                </div>
                <p className="text-primary font-medium text-sm sm:text-base mb-2">{role.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentRolesSection;
