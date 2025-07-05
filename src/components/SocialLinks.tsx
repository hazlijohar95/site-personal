
import React from 'react';
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  showIcons?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className,
  showIcons = true 
}) => {
  const links = [
    { label: "GitHub", url: "https://github.com/hazlijohar95" },
    { label: "Twitter", url: "https://x.com/hazlijohar" },
    { label: "Instagram", url: "https://www.instagram.com/hazlijohar/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/hazli-johar/" }
  ];

  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      {links.map((link) => (
        <a 
          key={link.url}
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
