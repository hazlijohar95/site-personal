
import React, { useEffect } from 'react';
import SocialLinks from './SocialLinks';
import { Mail, Calendar } from 'lucide-react';

const ContactSection: React.FC = () => {
  useEffect(() => {
    // Initialize Cal.com
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
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="pg-section">
      <h2 className="pg-heading">Contact</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
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
              <button className="pg-link" data-cal-link="hazli-johar-cynco/30min" data-cal-namespace="30min" data-cal-config='{"layout":"month_view"}'>
                Schedule a meeting
              </button>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-sm font-mono mb-3">CONNECT WITH ME</h3>
            <SocialLinks />
          </div>
        </div>
        
        <div>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm mb-1 font-mono">
                Name
              </label>
              <input type="text" id="name" className="pg-form-input" placeholder="Your name" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm mb-1 font-mono">
                Email
              </label>
              <input type="email" id="email" className="pg-form-input" placeholder="Your email" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm mb-1 font-mono">
                Message
              </label>
              <textarea id="message" className="pg-form-input min-h-[120px]" placeholder="Your message" />
            </div>
            
            <button type="button" className="pg-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
