
import React from 'react';
import MacWindow from './MacWindow';
import { ExternalLink, Radio, Newspaper, Youtube } from 'lucide-react';

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
    <section id="media" className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <MacWindow title="Featured.md">
              <div className="grid grid-cols-1 gap-4">
                {mediaFeatures.map((item, index) => (
                  <MediaCard key={index} media={item} />
                ))}
              </div>
            </MacWindow>
          </div>
          
          <div className="md:col-span-1">
            <MacWindow title="Video.mp4">
              <div className="aspect-video bg-gray-100 dark:bg-slate-700 rounded-lg overflow-hidden">
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
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                <p>Featured on RTM (Youtube)</p>
              </div>
            </MacWindow>
          </div>
        </div>
      </div>
    </section>
  );
};

interface MediaCardProps {
  media: {
    title: string;
    url: string;
    source: string;
    type: string;
  };
}

const MediaCard: React.FC<MediaCardProps> = ({ media }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'radio':
        return <Radio size={16} />;
      case 'news':
        return <Newspaper size={16} />;
      case 'youtube':
        return <Youtube size={16} />;
      default:
        return <ExternalLink size={16} />;
    }
  };

  return (
    <a 
      href={media.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel p-4 hover-lift flex items-start gap-3 no-underline"
    >
      <div className="mt-1 text-blue-500 dark:text-blue-400">
        {getIcon(media.type)}
      </div>
      <div>
        <h3 className="text-base font-medium text-gray-800 dark:text-white mb-1">{media.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">{media.source}</p>
      </div>
    </a>
  );
};

export default MediaSection;
