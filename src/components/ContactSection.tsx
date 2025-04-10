
import React, { useEffect } from 'react';
import MacWindow from './MacWindow';
import SocialLinks from './SocialLinks';
import { Mail, Send, Calendar } from 'lucide-react';

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
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <MacWindow title="Contact.app">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Get in touch</h2>
              <p className="text-gray-600 mb-6 dark:text-gray-200">
                Feel free to reach out for collaborations, speaking engagements, or just to say hello!
              </p>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900">
                  <Mail size={18} className="text-blue-600 dark:text-blue-300" />
                </div>
                <a 
                  href="mailto:work@hazlijohar.com"
                  className="text-blue-600 hover:underline dark:text-blue-300"
                >
                  work@hazlijohar.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900">
                  <Calendar size={18} className="text-green-600 dark:text-green-300" />
                </div>
                <button 
                  className="text-green-600 hover:underline dark:text-green-300"
                  data-cal-link="hazli-johar-cynco/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Schedule a meeting
                </button>
              </div>
              
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-500 mb-3 dark:text-gray-300">CONNECT WITH ME</h3>
                <SocialLinks />
              </div>
            </div>
            
            <div className="glass-panel p-6">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-white/70 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800/50 dark:border-slate-600 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-white/70 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800/50 dark:border-slate-600 dark:text-white"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-2 bg-white/70 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] dark:bg-slate-800/50 dark:border-slate-600 dark:text-white"
                    placeholder="Your message"
                  />
                </div>
                
                <button 
                  type="button"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </MacWindow>
      </div>
    </section>
  );
};

export default ContactSection;
