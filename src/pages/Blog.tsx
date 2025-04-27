
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import SectionContainer from '@/components/common/SectionContainer';
import SectionHeading from '@/components/common/SectionHeading';
import ContentSkeleton from '@/components/common/ContentSkeleton';
import BlogCard from '@/components/blog/BlogCard';
import { loadAllPosts, sortPostsByDate } from '@/lib/blog-loader';
import { PostMeta } from '@/lib/blog';
import { useDocumentTitle } from '@/hooks/use-document-title';

const Blog: React.FC = () => {
  const isMobile = useIsMobile();
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [loading, setLoading] = useState(true);
  
  useDocumentTitle('Blog | Hazli Johar');
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await loadAllPosts();
        setPosts(sortPostsByDate(allPosts));
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  return (
    <SectionContainer className={cn(
      "max-w-3xl mx-auto",
      isMobile ? "mt-16" : "mt-24"
    )}>
      <SectionHeading>Blog</SectionHeading>
      
      {loading ? (
        <ContentSkeleton />
      ) : posts.length > 0 ? (
        <div className="mt-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p>No blog posts found.</p>
      )}
    </SectionContainer>
  );
};

export default Blog;
