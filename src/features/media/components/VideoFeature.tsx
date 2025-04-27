
import React from 'react';

const VideoFeature: React.FC = () => {
  return (
    <div>
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
  );
};

export default VideoFeature;
