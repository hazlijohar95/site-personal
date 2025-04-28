
import React from 'react';
import { Link } from 'react-router-dom';
import { formatBlogDate } from '@/lib/blog';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import type { PostMeta } from '@/lib/blog';

interface BlogCardProps {
  post: PostMeta;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const isMobile = useIsMobile();
  
  return (
    <article className="mb-8 animate-fade-in">
      <Link to={`/blog/${post.slug}`} className="no-underline">
        <div className={cn(
          "border border-border rounded-lg transition-all hover:border-foreground/40",
          isMobile ? "p-4" : "p-6"
        )}>
          <h3 className={cn(
            "font-georgia mb-2 text-foreground",
            isMobile ? "text-lg" : "text-xl"
          )}>
            {post.title}
          </h3>
          
          <div className="flex items-center mb-3 text-sm text-muted-foreground">
            <time dateTime={post.date}>
              {formatBlogDate(post.date)}
            </time>
            {post.readingTime && (
              <>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
              </>
            )}
          </div>
          
          <p className="text-muted-foreground">{post.excerpt}</p>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `/blog?tag=${tag}`;
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="mt-4">
            <span className="font-mono text-sm text-foreground hover:underline">
              Read post →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
