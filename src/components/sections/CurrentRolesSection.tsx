
import React from 'react';

const CurrentRolesSection: React.FC = () => {
  return (
    <section className="space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl font-bold px-2">Current Roles</h3>
      
      <div className="space-y-4 sm:space-y-5">
        <div className="bg-card/50 p-4 sm:p-5 rounded-lg border border-border/30">
          <p className="text-sm sm:text-base leading-relaxed"><strong>Co-Founder & CEO</strong> at Cynco — Disrupting accounting with AI-native infrastructure</p>
        </div>
        <div className="bg-card/50 p-4 sm:p-5 rounded-lg border border-border/30">
          <p className="text-sm sm:text-base leading-relaxed"><strong>Entrepreneur in Residence</strong> at Mranti — Supporting startup ecosystem development</p>
        </div>
        <div className="bg-card/50 p-4 sm:p-5 rounded-lg border border-border/30">
          <p className="text-sm sm:text-base leading-relaxed"><strong>Partner</strong> at Accelzone Ventures — backing cash-flowing businesses with a syndicate of angel investors</p>
        </div>
        <div className="bg-card/50 p-4 sm:p-5 rounded-lg border border-border/30">
          <p className="text-sm sm:text-base leading-relaxed"><strong>Founder & Partner</strong> at Hazli Johar & Co. — helping global companies build and grow in Malaysia and beyond</p>
        </div>
      </div>
    </section>
  );
};

export default CurrentRolesSection;
