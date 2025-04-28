
# Technology Stack & Infrastructure

This document outlines the technologies, libraries, and infrastructure used in Hazli Johar's personal website.

## Frontend Technologies

### Core Framework & Language
- **React**: A JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **Vite**: Next-generation frontend tooling for faster development and optimized builds

### Styling & UI Components
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable UI components built with Tailwind and Radix UI
- **Lucide React**: Beautiful, consistent icons
- **Embla Carousel**: Lightweight carousel/slider library
- **Recharts**: Composable chart library for React

### State Management & API Integration
- **React Query**: Data fetching, caching, and state management
- **React Hook Form**: Form validation and handling
- **Zod**: TypeScript-first schema validation
- **Supabase SDK**: Client for Supabase backend services

### UI/UX Enhancements
- **Sonner**: Toast notifications
- **CMDK**: Command menu interface
- **React Day Picker**: Date picker components
- **next-themes**: Theme management (light/dark mode)
- **Tailwind CSS Animate**: Animation utilities for Tailwind
- **Vaul**: Drawer component

## Backend Infrastructure

### Supabase
- **Database**: PostgreSQL-based database
- **Authentication**: Built-in auth services
- **Storage**: File storage system
- **Edge Functions**: Serverless functions for backend logic

## Development Tools

### Code Quality & Type Safety
- **TypeScript**: Static typing for JavaScript
- **ESLint**: Code linting
- **SWC**: Fast TypeScript/JavaScript compiler used with Vite

### Build & Deployment
- **Vite**: Build tool and development server
- **Github Actions**: CI/CD automation (if applicable)

## Performance Optimizations

- **Code Splitting**: Lazy-loaded components with React.lazy and Suspense
- **Image Optimization**: Responsive images with aspect ratio preservation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Hosting & Deployment

The website is hosted on a platform that supports static site hosting with client-side rendering. The deployment process is managed through the Lovable platform, which provides a streamlined way to build and deploy the application.

## Browser Support

The application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Considerations

Potential technology additions or migrations to consider:
- Server-Side Rendering (SSR) for improved SEO
- Integration with a CMS for easier content management
- WebAssembly for performance-critical operations
