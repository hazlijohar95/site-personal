
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const VideoFeature: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      <div className="aspect-video bg-muted/20 mb-2 overflow-hidden rounded-md border border-border/30 relative">
        {isLoading && (
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
          onLoad={() => setIsLoading(false)}
        ></iframe>
      </div>
      <p className="text-sm text-muted-foreground">
        Featured on RTM (Youtube)
      </p>
    </div>
  );
};

export default VideoFeature;
