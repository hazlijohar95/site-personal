
import React from 'react';
import { Github, BookOpen, Twitter, Instagram, Linkedin } from 'lucide-react';
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
    { 
      label: "GitHub", 
      url: "https://github.com/hazlijohar95",
      icon: <Github size={16} />
    },
    { 
      label: "Blog", 
      url: "https://hazli.bearblog.dev",
      icon: <BookOpen size={16} />
    },
    { 
      label: "Twitter", 
      url: "https://x.com/hazlijohar",
      icon: <Twitter size={16} />
    },
    { 
      label: "Instagram", 
      url: "https://www.instagram.com/hazlijohar/",
      icon: <Instagram size={16} />
    },
    { 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/hazli-johar/",
      icon: <Linkedin size={16} />
    }
  ];

  return (
    <div className={cn("flex flex-wrap items-center gap-4 sm:gap-6", className)}>
      {links.map((link) => (
        <a 
          key={link.url}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 min-h-[44px] sm:min-h-0 py-2 sm:py-0"
        >
          {showIcons && (
            <span className="group-hover:scale-110 transition-transform duration-200">
              {link.icon}
            </span>
          )}
          <span className="font-medium">{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
