
import React from 'react';

interface Item {
  title: string;
  description: string;
}

interface SectionItemProps {
  item: Item;
}

/**
 * Template for individual items within a section
 */
const SectionItem: React.FC<SectionItemProps> = ({ item }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800 pb-4 last:border-0">
      <h3 className="font-bold mb-1">{item.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
    </div>
  );
};

export default SectionItem;
