
import React from 'react';
import MacWindow from './MacWindow';
import SocialLinks from './SocialLinks';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <MacWindow className="h-full">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-white/20 hover-lift">
                  <img 
                    src="https://placehold.co/400x400" 
                    alt="Hazli Johar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-1">Hazli Johar</h2>
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                  <MapPin size={14} />
                  <span>Kuala Lumpur</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                  <Briefcase size={14} />
                  <span>Entrepreneur</span>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-lg text-blue-800 text-sm font-medium mb-4">
                  10+ Years Experience
                </div>
                <SocialLinks />
              </div>
            </MacWindow>
          </div>
          
          <div className="md:col-span-2">
            <MacWindow title="About.txt" className="h-full">
              <div className="prose prose-sm max-w-none">
                <p className="text-xl font-medium text-gray-800 mb-4">
                  "Currently on a mission @ Cynco."
                </p>
                <p className="mb-4">
                  I'm an accountant and management consultant turned startup founder, driven to make an impact in the world.
                </p>
                <p className="mb-4">
                  I have worked with over 500 companies as a chartered accountant and consultant, helping investors set up their companies worldwide. I have a strong background in strategy and market entry.
                </p>
                <p className="mb-4">
                  I've co-founded multiple ventures with friends in trading, manufacturing, F&B, fashion, and community-building.
                </p>
                <p>
                  I love building things, which is why I've learned both designing and coding.
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
