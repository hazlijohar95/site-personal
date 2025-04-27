
import matter from 'gray-matter';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime?: string;
}

// Function to format date for blog posts
export function formatBlogDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Function to calculate reading time
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// This will be populated by our import mechanism
export const allPosts: PostMeta[] = [];

// We'll use this in the blog pages to sort posts by date
export function sortPostsByDate(posts: PostMeta[]): PostMeta[] {
  return [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
