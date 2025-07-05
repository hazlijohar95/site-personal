
import React from 'react';
import SocialLinks from '@/components/SocialLinks';

const AboutSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 rounded-full overflow-hidden border border-border/40 flex-shrink-0">
          <img src="/lovable-uploads/c90088f8-4c29-43a9-a20b-4a664df5149f.png" alt="Hazli Johar" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Kuala Lumpur</p>
            <p className="text-sm text-muted-foreground">Entrepreneur, 10+ Years</p>
          </div>
          <SocialLinks className="flex gap-4" showIcons={false} />
        </div>
      </div>

      <div className="prose space-y-4 text-sm leading-relaxed">
        <p>
          I'm the Co-Founder and CEO of <strong>Cynco</strong>, an AI startup building accounting infrastructure. 
          We've been recognized at the Digital Adoption Awards by The Malaysian Institute of Accountants 
          and ranked top 3 at PACE Bootcamp by Artem Ventures.
        </p>
        
        <p>
          Before Cynco, I ran a chartered accounting firm advising multinational companies and worked 
          as a Fractional CFO across the APAC region. I've engaged with 500+ companies from various 
          industries, learning their accounting challenges firsthand.
        </p>
        
        <p>
          I consider myself an accountant who learned to code, design, and build products. 
          I love creating things that solve real problems.
        </p>
        
        <p>
          <strong>Specialties:</strong> Financial Reporting, Company Restructuring, Design, 
          Entrepreneurship, Bootstrapping, Sales & Marketing.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
