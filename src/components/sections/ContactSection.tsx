
import React, { useState, useEffect } from 'react';
import { Mail, Calendar, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

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
    const timeout = setTimeout(() => setIsCalendarLoading(false), 3000);
    return () => {
      clearTimeout(timeout);
      document.head.removeChild(script);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold">Let's Connect</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Feel free to reach out for collaborations, speaking engagements, or just to say hello!
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail size={16} />
              <a href="mailto:work@hazli.wtf" className="hover:underline">work@hazli.wtf</a>
            </div>
            
            <div className="flex items-center gap-3">
              <Calendar size={16} />
              <button 
                className="hover:underline flex items-center gap-2" 
                data-cal-link="hazli-johar-cynco/30min" 
                data-cal-namespace="30min" 
                data-cal-config='{"layout":"month_view"}' 
                disabled={isCalendarLoading}
              >
                {isCalendarLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Loading scheduler...</span>
                  </>
                ) : (
                  'Schedule a meeting'
                )}
              </button>
            </div>
          </div>
        </div>
        
        <Card className="p-4 border border-border/50">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono mb-1">Name</label>
                <Input id="name" placeholder="Your name" required className="text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono mb-1">Email</label>
                <Input id="email" type="email" placeholder="Your email" required className="text-sm" />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs font-mono mb-1">Message</label>
              <Textarea id="message" placeholder="Your message" className="min-h-[80px] text-sm" required />
            </div>
            
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
