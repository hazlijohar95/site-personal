
import React from 'react';
import type { MediaItem } from '../data/mediaItems';

interface MediaListProps {
  items: MediaItem[];
}

const MediaList: React.FC<MediaListProps> = ({ items }) => {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
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
  );
};

export default MediaList;
