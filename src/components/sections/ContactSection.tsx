
import React, { useEffect, useState } from 'react';
import { Mail, Calendar, Loader2, Send } from 'lucide-react';

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
    
    const timeout = setTimeout(() => setIsCalendarLoading(false), 1500);
    return () => {
      clearTimeout(timeout);
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="space-y-4 sm:space-y-6">
      <div className="text-center space-y-2 px-4">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Let's Connect</h3>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
          Feel free to reach out for collaborations, speaking engagements, or just to say hello!
        </p>
      </div>
      
      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 max-w-2xl mx-auto px-2 sm:px-0">
        <div className="group flex items-center gap-3 p-4 sm:p-5 bg-card/30 rounded-lg border border-border/20 hover:border-border/40 hover:bg-card/50 transition-all duration-200 min-h-[70px] sm:min-h-[80px] touch-manipulation">
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-foreground rounded-full group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
            <Mail size={16} sm:size={18} className="text-background" />
          </div>
          <div className="flex-1 min-w-0">
            <a href="mailto:work@hazli.wtf" className="block hover:text-primary transition-colors">
              <p className="text-xs text-muted-foreground mb-1">Email</p>
              <p className="text-sm sm:text-base font-medium break-all">work@hazli.wtf</p>
            </a>
          </div>
          <Send size={14} sm:size={16} className="text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
        </div>
        
        <div className="group flex items-center gap-3 p-4 sm:p-5 bg-card/30 rounded-lg border border-border/20 hover:border-border/40 hover:bg-card/50 transition-all duration-200 min-h-[70px] sm:min-h-[80px] touch-manipulation">
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-foreground rounded-full group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
            <Calendar size={16} sm:size={18} className="text-background" />
          </div>
          <div className="flex-1 min-w-0">
            <button 
              className="w-full text-left hover:text-primary transition-colors touch-manipulation" 
              data-cal-link="hazli-johar-cynco/30min" 
              data-cal-namespace="30min" 
              data-cal-config='{"layout":"month_view"}' 
              disabled={isCalendarLoading}
            >
              <p className="text-xs text-muted-foreground mb-1">Schedule</p>
              <div className="flex items-center gap-2">
                {isCalendarLoading ? (
                  <>
                    <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                    <span className="text-sm sm:text-base">Loading...</span>
                  </>
                ) : (
                  <span className="text-sm sm:text-base font-medium">Book a meeting</span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
