
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { formatBlogDate, PostMeta } from '@/lib/blog';
import { loadPost } from '@/lib/blog-loader';
import SectionContainer from '@/components/common/SectionContainer';
import ContentSkeleton from '@/components/common/ContentSkeleton';
import MDXContent from '@/components/blog/MDXContent';
import { ArrowLeft } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/use-document-title';
import { MDXProvider } from '@mdx-js/react';
import { Badge } from "@/components/ui/badge";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const isMobile = useIsMobile();
  const [post, setPost] = useState<{
    meta: PostMeta;
    Component: React.ComponentType;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Set document title based on post title
  useDocumentTitle(post ? `${post.meta.title} | Hazli Johar` : 'Blog | Hazli Johar');
  
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      
      try {
        const { meta, Component } = await loadPost(slug);
        setPost({ meta, Component });
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [slug]);
  
  if (loading) {
    return (
      <SectionContainer className={cn(
        "max-w-3xl mx-auto",
        isMobile ? "mt-16" : "mt-24"
      )}>
        <ContentSkeleton />
      </SectionContainer>
    );
  }
  
  if (!post) {
    return (
      <SectionContainer className={cn(
        "max-w-3xl mx-auto",
        isMobile ? "mt-16" : "mt-24"
      )}>
        <div>
          <Link to="/blog" className="flex items-center text-sm mb-8 hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Back to all posts
          </Link>
          <p>Post not found</p>
        </div>
      </SectionContainer>
    );
  }
  
  return (
    <SectionContainer className={cn(
      "max-w-3xl mx-auto",
      isMobile ? "mt-16 mb-24" : "mt-24 mb-32"
    )}>
      <Link to="/blog" className="flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft size={16} className="mr-2" />
        Back to all posts
      </Link>
      
      <article>
        <header className="mb-8">
          <h1 className={cn(
            "font-georgia mb-4 text-foreground",
            isMobile ? "text-2xl" : "text-3xl"
          )}>
            {post.meta.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <time dateTime={post.meta.date}>
                {formatBlogDate(post.meta.date)}
              </time>
              {post.meta.readingTime && (
                <>
                  <span className="mx-2">•</span>
                  <span>{post.meta.readingTime}</span>
                </>
              )}
            </div>
          </div>
          
          {post.meta.tags && post.meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.meta.tags.map(tag => (
                <Link to={`/blog?tag=${tag}`} key={tag}>
                  <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    #{tag}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </header>
        
        <MDXProvider>
          <MDXContent>
            <post.Component />
          </MDXContent>
        </MDXProvider>
      </article>
    </SectionContainer>
  );
};

export default BlogPost;
