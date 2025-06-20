
import React, { useState, useEffect } from 'react';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { ArrowRight, Mail, Calendar, MapPin, Briefcase, ExternalLink, Loader2 } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';
import SocialLinks from '@/components/SocialLinks';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const isMobile = useIsMobile();
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isCalendarLoading, setIsCalendarLoading] = useState(true);

  // Initialize Cal.com
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
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Hazli Johar
            </h1>
            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground font-mono">
              <ArrowRight size={16} />
              <p>Decoding The Future of Accounting</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden border border-border flex-shrink-0 mx-auto md:mx-0">
              <img 
                src="/lovable-uploads/c90088f8-4c29-43a9-a20b-4a664df5149f.png" 
                alt="Hazli Johar" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <h2 className="text-2xl font-bold mb-2">Hazli Johar</h2>
                <div className="flex items-center gap-2 text-muted-foreground justify-center md:justify-start mb-3">
                  <MapPin size={16} />
                  <span>Kuala Lumpur • Entrepreneur, 10+ Years Experience</span>
                </div>
                <SocialLinks />
              </div>
            </div>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
            <p className="text-lg font-medium">
              "Currently on a mission @ Cynco."
            </p>
            
            <p>
              I'm the co-founder of <strong>Cynco</strong>. We're building the AI-native accounting infrastructure — rethinking how financial data flows, from ingestion to reporting. Most accounting tools were designed for another era — slow, manual, and backward-looking. We're building from first principles: real-time, automated, and built around how data actually moves today.
            </p>
            
            <p>
              Before Cynco, I ran a chartered firm and worked with 500+ companies. I saw how much time was lost wrangling data instead of advising. We're changing that. I'm an accountant turned founder who learns to write code, designs workflows, and ships product.
            </p>
            
            <p>
              Outside of accounting, I co-founded and co-invested in F&B, retail, fashion, and real estate businesses alongside other syndicates.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Briefcase size={20} />
            Current Roles
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { role: "Co-Founder & CEO", company: "Cynco" },
              { role: "Entrepreneur in Residence", company: "Mranti" },
              { role: "Partner", company: "Accelzone Ventures" },
              { role: "Founding Partner", company: "Hazi Johar & Co. and PACCT Malaysia" }
            ].map((exp, index) => (
              <Card key={index} className="p-4 border border-border/50">
                <div className="space-y-2">
                  <h4 className="font-semibold">{exp.role}</h4>
                  <p className="text-muted-foreground text-sm">{exp.company}</p>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-xs text-muted-foreground">Active</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Media Section */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold">Featured Media</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Recent Features</h4>
              <div className="space-y-3">
                {[
                  {
                    title: "Cynco Raising $125k to Take on Xero and QuickBooks",
                    source: "BFM 89.9",
                    url: "https://www.bfm.my/content/podcast/cynco-raising-dollar125k-to-take-on-xero-and-quickbooks"
                  },
                  {
                    title: "MyStartup Pre-Accelerator Cohort 5 Winners",
                    source: "Business Today",
                    url: "https://www.businesstoday.com.my/2025/03/04/mystartup-pre-accelerator-cohort-5-concludes-with-five-winning-startups/"
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-4 border border-border/50 hover:border-border transition-colors">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="block space-y-2">
                      <p className="font-medium line-clamp-2">{item.title}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{item.source}</span>
                        <ExternalLink size={14} />
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Video Feature</h4>
              <div className="relative">
                <div className="aspect-video bg-muted/20 overflow-hidden rounded-md border border-border/30 relative">
                  {isVideoLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    </div>
                  )}
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/6-vCOhPvleQ" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    onLoad={() => setIsVideoLoading(false)}
                  ></iframe>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Featured on RTM (Youtube)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Let's Connect</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Feel free to reach out for collaborations, speaking engagements, or just to say hello!
              </p>
              
              <div className="space-y-4">
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
            
            <Card className="p-6 border border-border/50">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono mb-1">Name</label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-mono mb-1">Email</label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-mono mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[100px]" required />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border/30">
          <p>© 2025 Hazli Johar. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
