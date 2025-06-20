
import React, { useState } from 'react';
import { ExternalLink, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const MediaSection: React.FC = () => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const mediaItems = [
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
  ];

  return (
    <section className="space-y-4 md:space-y-6">
      <h3 className="text-lg md:text-xl font-bold">Featured Media</h3>
      
      <div className="space-y-6">
        {/* Media Links */}
        <div className="space-y-3">
          {mediaItems.map((item, index) => (
            <Card key={index} className="p-3 md:p-4 border border-border/50 hover:border-border transition-colors">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block space-y-2">
                <p className="font-medium text-sm md:text-base leading-snug">{item.title}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{item.source}</span>
                  <ExternalLink size={12} />
                </div>
              </a>
            </Card>
          ))}
        </div>
        
        {/* Video Section */}
        <div className="space-y-3">
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
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Featured on RTM (Youtube)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
