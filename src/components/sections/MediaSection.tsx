
import React, { useState } from 'react';
import { ExternalLink, Loader2, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';

const MediaSection: React.FC = () => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const mediaItems = [
    {
      title: "Cynco Raising $125k to Take on Xero and QuickBooks",
      source: "BFM 89.9",
      type: "Radio Interview",
      url: "https://www.bfm.my/content/podcast/cynco-raising-dollar125k-to-take-on-xero-and-quickbooks"
    },
    {
      title: "MyStartup Pre-Accelerator Cohort 5 Winners",
      source: "Business Today",
      type: "News Article",
      url: "https://www.businesstoday.com.my/2025/03/04/mystartup-pre-accelerator-cohort-5-concludes-with-five-winning-startups/"
    }
  ];

  return (
    <section className="space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold px-2 sm:px-0">Featured Media</h3>
      
      <div className="grid gap-6 lg:grid-cols-2 px-2 sm:px-0">
        {/* Media Articles */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-base sm:text-lg font-semibold text-muted-foreground">Recent Features</h4>
          <div className="space-y-3">
            {mediaItems.map((item, index) => (
              <Card key={index} className="group border border-border/20 hover:border-border/40 transition-all duration-200 overflow-hidden min-h-[80px] sm:min-h-[90px]">
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block p-4 sm:p-5 space-y-2 sm:space-y-3 h-full flex flex-col justify-center touch-manipulation"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h5 className="font-medium text-sm sm:text-base leading-snug group-hover:text-primary transition-colors line-clamp-2 flex-1">{item.title}</h5>
                    <ExternalLink size={16} className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium">{item.source}</span>
                    <span>•</span>
                    <span>{item.type}</span>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Video Section */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-base sm:text-lg font-semibold text-muted-foreground">Video Feature</h4>
          <div className="space-y-3">
            <div className="relative group">
              <div className="aspect-video bg-muted/20 overflow-hidden rounded-lg border border-border/20 relative">
                {isVideoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm z-10">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                      <span className="text-sm">Loading video...</span>
                    </div>
                  </div>
                )}
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube-nocookie.com/embed/6-vCOhPvleQ" 
                  title="Hazli Johar featured on RTM" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                  onLoad={() => setIsVideoLoading(false)}
                />
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <Play size={12} />
                <span>Featured on RTM (YouTube)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
