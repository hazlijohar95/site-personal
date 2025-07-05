
import React from 'react';
import { useMedia } from '@/hooks/useMedia';

const MediaSection: React.FC = () => {
  const { data: media, isLoading } = useMedia();

  if (isLoading) {
    return (
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Media</h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">Recent Features</h3>
            <div className="space-y-2">
              {[1, 2].map((index) => (
                <div key={index} className="simple-card">
                  <div className="space-y-1">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const featuredMedia = media?.filter(item => item.type !== 'video') || [];
  const videoMedia = media?.find(item => item.type === 'video');

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-medium">Media</h2>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">Recent Features</h3>
          <div className="space-y-2">
            {featuredMedia.map((item) => (
              <div key={item.id} className="simple-card">
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
