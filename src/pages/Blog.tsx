
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import SectionContainer from '@/components/common/SectionContainer';
import SectionHeading from '@/components/common/SectionHeading';
import ContentSkeleton from '@/components/common/ContentSkeleton';
import BlogCard from '@/components/blog/BlogCard';
import TagsList from '@/components/blog/TagsList';
import SearchBar from '@/components/blog/SearchBar';
import BlogPagination from '@/components/blog/BlogPagination';
import { loadAllPosts, sortPostsByDate, getAllTags, filterPostsByTag, searchPosts } from '@/lib/blog-loader';
import { PostMeta } from '@/lib/blog';
import { useDocumentTitle } from '@/hooks/use-document-title';

const POSTS_PER_PAGE = 5;

const Blog: React.FC = () => {
  const isMobile = useIsMobile();
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [allTags, setAllTags] = useState<string[]>([]);
  
  // Get query parameters
  const currentTag = searchParams.get('tag') || '';
  const searchQuery = searchParams.get('q') || '';
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  
  useDocumentTitle('Blog | Hazli Johar');
  
  // Fetch all posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await loadAllPosts();
        const sortedPosts = sortPostsByDate(allPosts);
        setPosts(sortedPosts);
        setAllTags(getAllTags(sortedPosts));
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  // Filter posts by tag and search query
  useEffect(() => {
    if (posts.length > 0) {
      let result = [...posts];
      
      // Apply tag filter
      if (currentTag) {
        result = filterPostsByTag(result, currentTag);
      }
      
      // Apply search filter
      if (searchQuery) {
        result = searchPosts(result, searchQuery);
      }
      
      setFilteredPosts(result);
    }
  }, [posts, currentTag, searchQuery]);
  
  // Handle tag selection
  const handleTagSelect = (tag: string) => {
    const params = new URLSearchParams(searchParams);
    if (tag) {
      params.set('tag', tag);
    } else {
      params.delete('tag');
    }
    params.delete('page'); // Reset to first page when changing tags
    setSearchParams(params);
  };
  
  // Handle search
  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }
    params.delete('page'); // Reset to first page when searching
    setSearchParams(params);
  };
  
  // Handle pagination
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    setSearchParams(params);
  };
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  return (
    <SectionContainer className={cn(
      "max-w-3xl mx-auto",
      isMobile ? "mt-16" : "mt-24"
    )}>
      <SectionHeading>Blog</SectionHeading>
      
      {loading ? (
        <ContentSkeleton />
      ) : (
        <div className="mt-8">
          <div className="mb-6">
            <SearchBar initialValue={searchQuery} onSearch={handleSearch} />
          </div>
          
          {allTags.length > 0 && (
            <div className="mb-8">
              <TagsList 
                tags={allTags} 
                selectedTag={currentTag} 
                onSelectTag={handleTagSelect} 
              />
            </div>
          )}
          
          {paginatedPosts.length > 0 ? (
            <>
              <div>
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="mt-8">
                  <BlogPagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No blog posts found.</p>
              {(currentTag || searchQuery) && (
                <button 
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </SectionContainer>
  );
};

export default Blog;
