
import React from 'react';

const mediaFeatures = [
  {
    title: "Cynco Raising $125k to Take on Xero and QuickBooks",
    url: "https://www.bfm.my/content/podcast/cynco-raising-dollar125k-to-take-on-xero-and-quickbooks",
    source: "BFM 89.9",
    type: "radio"
  },
  {
    title: "Cradle Powers Startup Growth as Five Winners Emerge Victorious from MyStartup Pre-Accelerator",
    url: "https://www.disruptr.com.my/cradle-powers-startup-growth-as-five-winners-emerge-victorious-from-mystartup-pre-accelerator/",
    source: "Disruptr Media",
    type: "news"
  },
  {
    title: "MyStartup Pre-Accelerator Cohort 5 Concludes with Five Winning Startups",
    url: "https://www.businesstoday.com.my/2025/03/04/mystartup-pre-accelerator-cohort-5-concludes-with-five-winning-startups/",
    source: "Business Today",
    type: "news"
  }
];

const MediaSection: React.FC = () => {
  return (
    <section id="media" className="pg-section">
      <h2 className="pg-heading">Media</h2>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="pg-subheading">Featured</h3>
          <ul className="space-y-4">
            {mediaFeatures.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pg-link block"
                >
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.source} • {item.type}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="pg-subheading">Video</h3>
          <div className="aspect-video bg-gray-100 dark:bg-gray-900 mb-2">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/6-vCOhPvleQ?si=NTNkg44hUYLkyUnP" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Featured on RTM (Youtube)
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
