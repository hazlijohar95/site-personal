
import React from 'react';

const MediaSection: React.FC = () => {
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
    <section className="space-y-6">
      <h2 className="text-lg font-medium">Media</h2>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">Recent Features</h3>
          <div className="space-y-2">
            {mediaItems.map((item, index) => (
              <div key={index} className="simple-card">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block space-y-1">
                  <p className="text-sm font-medium leading-snug">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.source}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">Video</h3>
          <div className="simple-card">
            <div className="aspect-video bg-muted/20 mb-2">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube-nocookie.com/embed/6-vCOhPvleQ" 
                title="Featured on RTM" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
              />
            </div>
            <p className="text-xs text-muted-foreground">Featured on RTM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
