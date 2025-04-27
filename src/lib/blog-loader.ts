
import matter from 'gray-matter';
import { allPosts, calculateReadingTime, PostMeta, sortPostsByDate } from './blog';

// This function would be used in a real app with a server or build process
// For our purposes, we're simulating it with imports
export async function loadPost(slug: string): Promise<{
  meta: PostMeta;
  content: string;
  Component: React.ComponentType;
}> {
  try {
    // In a real app, we'd dynamically load files from the filesystem
    // For now, we'll use a dynamic import based on the slug
    const module = await import(`../../posts/${slug}.mdx`);
    const Component = module.default;
    
    // Get the raw content for calculating reading time
    // In a real app, we'd read this from the filesystem
    const response = await fetch(`/posts/${slug}.mdx`);
    const rawContent = await response.text();
    
    // Parse frontmatter
    const { data, content } = matter(rawContent);
    
    // Assemble post metadata
    const meta: PostMeta = {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      readingTime: calculateReadingTime(content),
    };
    
    return { meta, content, Component };
  } catch (error) {
    console.error(`Failed to load post: ${slug}`, error);
    throw new Error(`Post not found: ${slug}`);
  }
}

// Export the sortPostsByDate function to be used in Blog.tsx
export { sortPostsByDate };

// In a build-time static site, we'd build this list at build time
// For our demo, we'll manually populate this with our two sample posts
export async function loadAllPosts(): Promise<PostMeta[]> {
  if (allPosts.length > 0) {
    return allPosts;
  }
  
  try {
    // Manually add our two posts
    const posts = [
      {
        slug: 'how-i-started-cynco',
        title: 'How I Started Cynco: A Journey into Open Accounting',
        date: '2024-04-10',
        excerpt: 'The story of how Cynco began and the principles that guide our open accounting approach.',
      },
      {
        slug: 'scaling-open-accounting',
        title: 'Scaling Open Accounting: Lessons from Our First Year',
        date: '2024-04-15',
        excerpt: 'What we\'ve learned about scalability, integration, and building trust in the financial ecosystem.',
      },
    ];
    
    // Calculate reading time for each post
    for (const post of posts) {
      try {
        const response = await fetch(`/posts/${post.slug}.mdx`);
        const rawContent = await response.text();
        const { content } = matter(rawContent);
        post.readingTime = calculateReadingTime(content);
        allPosts.push(post as PostMeta);
      } catch (error) {
        console.error(`Failed to load post: ${post.slug}`, error);
        allPosts.push(post as PostMeta);
      }
    }
    
    return allPosts;
  } catch (error) {
    console.error('Failed to load posts', error);
    return [];
  }
}
