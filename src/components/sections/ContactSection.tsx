
import React, { useEffect } from 'react';
import { useProfile } from '@/hooks/useProfile';

const ContactSection: React.FC = () => {
  const { data: profile, isLoading } = useProfile();

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
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  if (isLoading) {
    return (
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Contact</h2>
        <div className="space-y-4">
          <div className="simple-card">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="simple-card">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-medium">Contact</h2>
      
      <div className="space-y-4">
        <div className="simple-card">
          <a href={`mailto:${profile?.email || 'work@hazli.wtf'}`} className="block">
            <p className="text-xs text-muted-foreground mb-1">Email</p>
            <p className="text-sm font-medium">{profile?.email || 'work@hazli.wtf'}</p>
          </a>
        </div>
        
        <div className="simple-card">
          <button 
            className="w-full text-left" 
            data-cal-link="hazli-johar-cynco/30min" 
            data-cal-namespace="30min" 
            data-cal-config='{"layout":"month_view"}'
          >
            <p className="text-xs text-muted-foreground mb-1">Schedule</p>
            <p className="text-sm font-medium">Book a meeting</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
