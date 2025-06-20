
import React, { useEffect, useState } from 'react';
import { Mail, Calendar, Loader2 } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [isCalendarLoading, setIsCalendarLoading] = useState(true);

  useEffect(() => {
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
    `;
    document.head.appendChild(script);
    const timeout = setTimeout(() => setIsCalendarLoading(false), 2000);
    return () => {
      clearTimeout(timeout);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="space-y-3 md:space-y-4">
      <h3 className="text-lg md:text-xl font-bold">Let's Connect</h3>
      
      <div className="space-y-3 md:space-y-4">
        <p className="text-sm md:text-base text-muted-foreground">
          Feel free to reach out for collaborations, speaking engagements, or just to say hello!
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 md:p-0">
            <Mail size={16} className="flex-shrink-0" />
            <a href="mailto:work@hazli.wtf" className="hover:underline text-sm md:text-base">work@hazli.wtf</a>
          </div>
          
          <div className="flex items-center gap-3 p-3 md:p-0">
            <Calendar size={16} className="flex-shrink-0" />
            <button 
              className="hover:underline flex items-center gap-2 text-sm md:text-base text-left" 
              data-cal-link="hazli-johar-cynco/30min" 
              data-cal-namespace="30min" 
              data-cal-config='{"layout":"month_view"}' 
              disabled={isCalendarLoading}
            >
              {isCalendarLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin flex-shrink-0" />
                  <span>Loading scheduler...</span>
                </>
              ) : (
                'Schedule a meeting'
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
