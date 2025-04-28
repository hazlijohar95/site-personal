
import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from "@/components/ui/badge";

interface TagsListProps {
  tags: string[];
  selectedTag: string;
  onSelectTag: (tag: string) => void;
}

const TagsList: React.FC<TagsListProps> = ({ tags, selectedTag, onSelectTag }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mb-4">
      <h3 className={cn(
        "mb-2 font-medium",
        isMobile ? "text-sm" : "text-base"
      )}>
        Filter by topic:
      </h3>
      <div className="flex flex-wrap gap-2">
        <Badge 
          key="all" 
          className={cn(
            "cursor-pointer",
            !selectedTag ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
          onClick={() => onSelectTag('')}
        >
          All Topics
        </Badge>
        
        {tags.map(tag => (
          <Badge 
            key={tag} 
            className={cn(
              "cursor-pointer",
              selectedTag === tag ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
            onClick={() => onSelectTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TagsList;
