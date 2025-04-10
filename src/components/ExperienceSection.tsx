
import React from 'react';
import MacWindow from './MacWindow';
import { Calendar } from 'lucide-react';

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
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <MacWindow title="Experience.json">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </MacWindow>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: {
    role: string;
    company: string;
    period: string;
    isActive: boolean;
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="glass-panel p-6 hover-lift">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{experience.role}</h3>
          <p className="text-gray-600">{experience.company}</p>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">
          <Calendar size={12} />
          <span>{experience.period}</span>
        </div>
      </div>
      
      {experience.isActive && (
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-600 font-medium">Active</span>
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;
