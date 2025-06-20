
import React from 'react';
import { Github, BookOpen, Twitter, Instagram, Linkedin } from 'lucide-react';
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  showIcons?: boolean;
}

/**
 * SocialLinks - Component for displaying social media links
 * 
 * @param className - Additional CSS classes
 * @param showIcons - Whether to show icons alongside text (default: true for minimalist design)
 */
const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className,
  showIcons = true 
}) => {
  const links = [
    { 
      label: "GitHub", 
      url: "https://github.com/hazlijohar95",
      icon: <Github size={16} className="flex-shrink-0" />
    },
    { 
      label: "Blog", 
      url: "https://hazli.bearblog.dev",
      icon: <BookOpen size={16} className="flex-shrink-0" />
    },
    { 
      label: "Twitter", 
      url: "https://x.com/hazlijohar",
      icon: <Twitter size={16} className="flex-shrink-0" />
    },
    { 
      label: "Instagram", 
      url: "https://www.instagram.com/hazlijohar/",
      icon: <Instagram size={16} className="flex-shrink-0" />
    },
    { 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/hazli-johar/",
      icon: <Linkedin size={16} className="flex-shrink-0" />
    }
  ];

  return (
    <div className={cn("font-mono text-sm flex flex-wrap items-center gap-3 md:gap-4", className)}>
      {links.map((link, index) => (
        <a 
          key={link.url}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline inline-flex items-center gap-2 transition-colors hover:text-foreground/80"
        >
          {showIcons && (
            <span className="text-foreground/70">
              {link.icon}
            </span>
          )}
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
