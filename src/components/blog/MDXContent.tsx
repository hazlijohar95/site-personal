
import React from 'react';
import { useMDXComponents } from '@mdx-js/react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface MDXContentProps {
  children: React.ReactNode;
}

export default function MDXContent({ children }: MDXContentProps) {
  const isMobile = useIsMobile();
  
  // Define custom MDX components
  const components = useMDXComponents({
    h1: ({ children }) => (
      <h1 className={cn(
        "font-georgia mt-8 mb-4 text-3xl font-bold",
        isMobile && "text-2xl"
      )}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className={cn(
        "font-georgia mt-8 mb-3 text-2xl font-semibold",
        isMobile && "text-xl"
      )}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className={cn(
        "font-georgia mt-6 mb-3 text-xl font-semibold",
        isMobile && "text-lg"
      )}>
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="my-4">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="pg-link" target={href?.startsWith('http') ? "_blank" : undefined} rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="my-4 ml-6 list-disc">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="mb-1">
        {children}
      </li>
    ),
    img: (props) => (
      <img 
        {...props} 
        className="my-8 rounded-lg max-w-full h-auto"
        alt={props.alt || "Blog image"} 
      />
    ),
    blockquote: ({ children }) => (
      <blockquote className="pl-4 italic border-l-2 border-foreground/30 my-4">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      // Inline code
      if (!className) {
        return (
          <code className="px-1.5 py-0.5 mx-0.5 bg-muted rounded-md font-mono text-sm">
            {children}
          </code>
        );
      }
      // Code block (already handled by rehype-highlight)
      return (
        <code className={className}>
          {children}
        </code>
      );
    },
    pre: (props) => (
      <pre className="p-4 my-6 overflow-x-auto rounded-lg bg-muted font-mono text-sm">
        {props.children}
      </pre>
    ),
  });

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      {children}
    </article>
  );
}
