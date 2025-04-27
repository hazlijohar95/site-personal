
import React from 'react';
import { Mail, Calendar } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const ContactInfo: React.FC = () => {
  return (
    <div>
      <p className="mb-6">
        Feel free to reach out for collaborations, speaking engagements, or just to say hello!
      </p>
      
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <Mail size={16} className="text-black dark:text-white" />
          <a href="mailto:work@hazli.wtf" className="pg-link">work@hazli.wtf</a>
        </div>
        
        <div className="flex items-center gap-3">
          <Calendar size={16} className="text-black dark:text-white" />
          <button 
            className="pg-link" 
            data-cal-link="hazli-johar-cynco/30min" 
            data-cal-namespace="30min" 
            data-cal-config='{"layout":"month_view"}'
          >
            Schedule a meeting
          </button>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-sm font-mono mb-3">CONNECT WITH ME</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactInfo;
