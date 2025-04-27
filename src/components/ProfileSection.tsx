
import React from 'react';
import SocialLinks from './SocialLinks';

const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="pg-section">
      <h2 className="pg-heading">About</h2>
      
      <div className="mb-6">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden mr-6 border border-gray-200 dark:border-gray-800">
            <img 
              src="/lovable-uploads/c90088f8-4c29-43a9-a20b-4a664df5149f.png" 
              alt="Hazli Johar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-bold mb-1">Hazli Johar</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Kuala Lumpur</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Entrepreneur, 10+ Years Experience</p>
          </div>
        </div>
        
        <div className="mb-4">
          <SocialLinks />
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="font-bold">"Currently on a mission @ Cynco."</p>
        
        <p>
          I am the Co-Founder and CEO of Cynco, an AI startup I co-founded to disrupt and rethink how accounting technology is built. Before our launch, we pitched our idea at the Digital Adoption Awards by The Malaysian Institute of Accountants, where we received a recognition award. We were also named one of the top three companies—out of 30 startups—at PACE Bootcamp by Artem Ventures and ranked in the top five at the MyStartup Pre-Accelerator Program by Cradle Fund in partnership with WTF Accelerator.
        </p>
        
        <p>
          Before founding Cynco, I ran a chartered accounting firm advising multinational companies. I also worked as an auditor and served as a Fractional CFO for several multinational companies across the APAC region.
        </p>
        
        <p>
          I consider myself an accountant, consultant, and vibe coder who turned into a startup founder determined to make an impact.
        </p>
        
        <p>
          During my time as an auditor, I engaged with over 500 companies from various industries, learning firsthand how they manage their accounting processes. Transitioning into consulting, I listened to companies' daily challenges and have assisted investors with foreign direct investments over the past seven years in Malaysia, Singapore, Vietnam, and Indonesia.
        </p>
        
        <p>
          At the same time, I co-founded and co-invested, alongside other syndicates, in companies across F&B, retail, fashion, and real estate.
        </p>
        
        <p>
          I love building things. That's why I learned design, coding, and even sales.
        </p>
        
        <p>
          Specialties: Financial Reporting, Company Restructuring, Design, Entrepreneurship, Bootstrapping, Scaling, and Sales & Marketing.
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
