
import React from 'react';

const experiences = [
  {
    role: "Co-Founder & CEO",
    company: "Cynco",
    period: "Present",
    isActive: true
  },
  {
    role: "Entrepreneur in Residence",
    company: "Mranti",
    period: "Present",
    isActive: true
  },
  {
    role: "Partner",
    company: "Accelzone Ventures",
    period: "Present",
    isActive: true
  },
  {
    role: "Founding Partner",
    company: "Hazi Johar & Co. and PACCT Malaysia",
    period: "Present",
    isActive: true
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="pg-section">
      <h2 className="pg-heading">Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-4 last:border-0">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold">{exp.role}</h3>
              <span className="pg-timestamp">{exp.period}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
            
            {exp.isActive && (
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 bg-black dark:bg-white rounded-full"></span>
                <span className="text-xs">Active</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
