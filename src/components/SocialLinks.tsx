
import React from 'react';
import { cn } from "@/lib/utils";
import { useSocialLinks } from '@/hooks/useSocialLinks';

interface SocialLinksProps {
  className?: string;
  showIcons?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className,
  showIcons = true 
}) => {
  const { data: socialLinks, isLoading } = useSocialLinks();

  if (isLoading) {
    return (
      <div className={cn("flex flex-wrap items-center gap-4", className)}>
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      {socialLinks?.map((link) => (
        <a 
          key={link.id}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
