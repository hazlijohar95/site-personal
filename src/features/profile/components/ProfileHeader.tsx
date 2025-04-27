
import React from 'react';
import SocialLinks from '@/components/SocialLinks';

const ProfileHeader: React.FC = () => {
  return (
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
  );
};

export default ProfileHeader;
