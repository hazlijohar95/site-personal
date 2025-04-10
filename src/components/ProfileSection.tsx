
import React from 'react';
import MacWindow from './MacWindow';
import SocialLinks from './SocialLinks';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <MacWindow className="h-full">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-white/20 dark:border-slate-400/50 hover-lift">
                  <img 
                    src="/lovable-uploads/c90088f8-4c29-43a9-a20b-4a664df5149f.png" 
                    alt="Hazli Johar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-1 dark:text-white">Hazli Johar</h2>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-300 mb-2">
                  <MapPin size={14} />
                  <span>Kuala Lumpur</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-300 mb-4">
                  <Briefcase size={14} />
                  <span>Entrepreneur</span>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/50 px-4 py-2 rounded-lg text-blue-800 dark:text-blue-200 text-sm font-medium mb-4">
                  10+ Years Experience
                </div>
                <SocialLinks />
              </div>
            </MacWindow>
          </div>
          
          <div className="md:col-span-2">
            <MacWindow title="About.txt" className="h-full">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <p className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-4">
                  "Currently on a mission @ Cynco."
                </p>
                <p className="mb-4 dark:text-gray-200">
                  I am the Co-Founder and CEO of Cynco, an AI startup I co-founded to disrupt and rethink how accounting technology is built. Before our launch, we pitched our idea at the Digital Adoption Awards by The Malaysian Institute of Accountants, where we received a recognition award. We were also named one of the top three companies—out of 30 startups—at PACE Bootcamp by Artem Ventures and ranked in the top five at the MyStartup Pre-Accelerator Program by Cradle Fund in partnership with WTF Accelerator.
                </p>
                <p className="mb-4 dark:text-gray-200">
                  Before founding Cynco, I ran a chartered accounting firm advising multinational companies. I also worked as an auditor and served as a Fractional CFO for several multinational companies across the APAC region.
                </p>
                <p className="mb-4 dark:text-gray-200">
                  I consider myself an accountant, consultant, and vibe coder who turned into a startup founder determined to make an impact.
                </p>
                <p className="mb-4 dark:text-gray-200">
                  During my time as an auditor, I engaged with over 500 companies from various industries, learning firsthand how they manage their accounting processes. Transitioning into consulting, I listened to companies' daily challenges and have assisted investors with foreign direct investments over the past seven years in Malaysia, Singapore, Vietnam, and Indonesia.
                </p>
                <p className="mb-4 dark:text-gray-200">
                  At the same time, I co-founded and co-invested, alongside other syndicates, in companies across F&B, retail, fashion, and real estate.
                </p>
                <p className="mb-4 dark:text-gray-200">
                  I love building things. That's why I learned design, coding, and even sales.
                </p>
                <p className="dark:text-gray-200">
                  Specialties: Financial Reporting, Company Restructuring, Design, Entrepreneurship, Bootstrapping, Scaling, and Sales & Marketing.
                </p>
              </div>
            </MacWindow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
