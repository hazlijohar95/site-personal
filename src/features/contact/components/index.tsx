
import React, { useEffect, useState } from 'react';
import SectionContainer from '@/components/common/SectionContainer';
import SectionHeading from '@/components/common/SectionHeading';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import { Skeleton } from '@/components/ui/skeleton';

interface ContactSectionProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const ContactSection = React.forwardRef<HTMLDivElement, ContactSectionProps>(
  (props, ref) => {
    const [isCalendarLoading, setIsCalendarLoading] = useState(true);
    
    useEffect(() => {
      // Initialize Cal.com with loading state
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `
        (function (C, A, L) { 
          let p = function (a, ar) { a.q.push(ar); }; 
          let d = C.document; 
          C.Cal = C.Cal || function () { 
            let cal = C.Cal; 
            let ar = arguments; 
            if (!cal.loaded) { 
              cal.ns = {}; 
              cal.q = cal.q || []; 
              d.head.appendChild(d.createElement("script")).src = A; 
              cal.loaded = true; 
            } 
            if (ar[0] === L) { 
              const api = function () { p(api, arguments); }; 
              const namespace = ar[1]; 
              api.q = api.q || []; 
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar); 
              return;
            } 
            p(cal, ar); 
          }; 
        })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "30min", {origin:"https://cal.com"});
        Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        
        // Add event listener for when Cal.com is fully loaded
        document.addEventListener("cal:ready", function() {
          document.dispatchEvent(new CustomEvent("calendarLoaded"));
        });
      `;
      
      document.head.appendChild(script);
      
      // Create event listener for when Cal.com is loaded
      const handleCalendarLoaded = () => {
        setIsCalendarLoading(false);
      };
      
      document.addEventListener("calendarLoaded", handleCalendarLoaded);
      
      // Fallback in case the event doesn't fire
      const timeout = setTimeout(() => {
        setIsCalendarLoading(false);
      }, 3000);
      
      return () => {
        document.removeEventListener("calendarLoaded", handleCalendarLoaded);
        clearTimeout(timeout);
        document.head.removeChild(script);
      };
    }, []);

    return (
      <SectionContainer id="contact" ref={ref}>
        <SectionHeading>Contact</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ContactInfo isCalendarLoading={isCalendarLoading} />
            {isCalendarLoading && (
              <div className="mt-3">
                <Skeleton className="h-4 w-40 mb-2" />
                <Skeleton className="h-10 w-48" />
              </div>
            )}
          </div>
          <ContactForm />
        </div>
      </SectionContainer>
    );
  }
);

ContactSection.displayName = "ContactSection";

export default ContactSection;
