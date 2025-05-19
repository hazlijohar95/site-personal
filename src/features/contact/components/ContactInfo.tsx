
import React from 'react';
import SocialLinks from '@/components/SocialLinks';
import { Mail, Calendar, Loader2 } from 'lucide-react';

interface ContactInfoProps {
  isCalendarLoading?: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ isCalendarLoading = false }) => {
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
            className="pg-link flex items-center" 
            data-cal-link="hazli-johar-cynco/30min" 
            data-cal-namespace="30min" 
            data-cal-config='{"layout":"month_view"}'
            disabled={isCalendarLoading}
          >
            {isCalendarLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Loading scheduler...</span>
              </>
            ) : (
              'Schedule a meeting'
            )}
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
