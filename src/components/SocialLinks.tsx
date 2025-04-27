
import React from 'react';
import { Github } from 'lucide-react';
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  showIcons?: boolean;
}

/**
 * SocialLinks - Component for displaying social media links
 * 
 * @param className - Additional CSS classes
 * @param showIcons - Whether to show icons alongside text (default: false)
 */
const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className,
  showIcons = false 
}) => {
  const links = [
    { 
      label: "GitHub", 
      url: "https://github.com/hazlijohar95",
      icon: <Github size={16} className="mr-1" />
    },
    { 
      label: "Blog", 
      url: "https://hazli.bearblog.dev",
      icon: null
    },
    { 
      label: "Twitter", 
      url: "https://x.com/hazlijohar",
      icon: null
    },
    { 
      label: "Instagram", 
      url: "https://www.instagram.com/hazlijohar/",
      icon: null
    },
    { 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/hazli-johar/",
      icon: null
    }
  ];

  return (
    <div className={cn("font-mono text-sm", className)}>
      {links.map((link, index) => (
        <React.Fragment key={link.url}>
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline inline-flex items-center"
          >
            {showIcons && link.icon}
            {link.label}
          </a>
          {index < links.length - 1 && <span className="mx-2">|</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SocialLinks;
