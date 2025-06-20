
import React from 'react';

const CurrentRolesSection: React.FC = () => {
  return (
    <section className="space-y-3 md:space-y-4">
      <h3 className="text-lg md:text-xl font-bold">Current Roles</h3>
      
      <div className="space-y-3 md:space-y-2">
        <div className="p-3 md:p-0">
          <p className="text-sm md:text-base"><strong>Co-Founder & CEO</strong> at Cynco — Disrupting accounting with AI-native infrastructure</p>
        </div>
        <div className="p-3 md:p-0">
          <p className="text-sm md:text-base"><strong>Entrepreneur in Residence</strong> at Mranti — Supporting startup ecosystem development</p>
        </div>
        <div className="p-3 md:p-0">
          <p className="text-sm md:text-base"><strong>Partner</strong> at Accelzone Ventures — backing cash-flowing businesses with a syndicate of angel investors</p>
        </div>
        <div className="p-3 md:p-0">
          <p className="text-sm md:text-base"><strong>Founder & Partner</strong> at Hazli Johar & Co. — helping global companies build and grow in Malaysia and beyond</p>
        </div>
      </div>
    </section>
  );
};

export default CurrentRolesSection;
