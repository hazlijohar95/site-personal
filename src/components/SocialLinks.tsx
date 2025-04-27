
import React from 'react';

const SocialLinks: React.FC = () => {
  const links = [
    { label: "Blog", url: "https://hazli.bearblog.dev" },
    { label: "Twitter", url: "https://x.com/hazlijohar" },
    { label: "Instagram", url: "https://www.instagram.com/hazlijohar/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/hazli-johar/" }
  ];

  return (
    <div className="font-mono text-sm">
      {links.map((link, index) => (
        <React.Fragment key={link.url}>
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {link.label}
          </a>
          {index < links.length - 1 && <span className="mx-2">|</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SocialLinks;
