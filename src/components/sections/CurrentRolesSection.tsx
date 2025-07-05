
import React from 'react';

const CurrentRolesSection: React.FC = () => {
  const roles = [
    { title: "Co-Founder & CEO", company: "Cynco", description: "AI-native accounting infrastructure" },
    { title: "Entrepreneur in Residence", company: "Mranti", description: "Startup ecosystem development" },
    { title: "Partner", company: "Accelzone Ventures", description: "Angel investor syndicate" },
    { title: "Founder & Partner", company: "Hazli Johar & Co.", description: "Global business consulting" }
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-medium">Current</h2>
      
      <div className="space-y-4">
        {roles.map((role, index) => (
          <div key={index} className="simple-card">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-sm">{role.title}</h3>
                <span className="w-2 h-2 bg-primary rounded-full"></span>
              </div>
              <p className="text-sm text-muted-foreground">{role.company}</p>
              <p className="text-xs text-muted-foreground/80">{role.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentRolesSection;
