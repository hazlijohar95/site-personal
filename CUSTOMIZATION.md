# Customization Guide

This document explains how to customize various aspects of the website to make it your own.

## Table of Contents

- [Personal Information](#personal-information)
- [Theme & Styling](#theme--styling)
- [Adding New Sections](#adding-new-sections)
- [Modifying Existing Sections](#modifying-existing-sections)
- [Media & Assets](#media--assets)
- [Social Links](#social-links)

## Personal Information

### Profile Information

Edit `src/features/profile/components/ProfileContent.tsx` to update your bio:

```tsx
const ProfileContent: React.FC = () => {
  return (
    <div className="space-y-4">
      <p className="font-bold">"Your tagline here."</p>
      
      <p>
        First paragraph of your bio...
      </p>
      
      <p>
        Second paragraph of your bio...
      </p>
      
      // Additional paragraphs...
      
      <p>
        Specialties: Your specialties here...
      </p>
    </div>
  );
};
```

### Profile Header

Edit `src/features/profile/components/ProfileHeader.tsx` to update your name, location, and image:

```tsx
<div className="flex items-center mb-6">
  <div className="w-24 h-24 rounded-full overflow-hidden mr-6 border border-gray-200 dark:border-gray-800">
    <img 
      src="/path/to/your/image.png" 
      alt="Your Name" 
      className="w-full h-full object-cover"
    />
  </div>
  <div>
    <p className="font-bold mb-1">Your Name</p>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Your Location</p>
    <p className="text-sm text-gray-600 dark:text-gray-400">Your Title</p>
  </div>
</div>
```

### Experience

Edit `src/features/experience/data/experiences.ts` to update your work experience:

```ts
export const experiences: Experience[] = [
  {
    role: "Your Role",
    company: "Company Name",
    period: "Time Period",
    isActive: true // or false for past positions
  },
  // Add more experiences
];
```

## Theme & Styling

### Colors

Modify the colors in `tailwind.config.ts`:

```ts
colors: {
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))'
  },
  // other colors...
}
```

### CSS Variables

Modify the CSS variables in `src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  /* other variables... */
}

.dark {
  --background: 0 0% 3%;
  --foreground: 0 0% 98%;
  /* other variables... */
}
```

## Adding New Sections

1. Copy the template from `src/templates/SectionTemplate/` to `src/features/your-section-name/components/`
2. Rename the component and customize it for your needs
3. Add your new section to `src/pages/Index.tsx`:

```tsx
// Import your new section
const YourSection = lazy(() => import('@/features/your-section/components/index'));

// Add a ref for the section
const { activeSection, sectionRefs, scrollToSection } = useSectionTracking({ 
  sections: ['home', 'profile', 'experience', 'media', 'contact', 'your-section'], 
  // Add your section here
  offset: isMobile ? 2 : 3
});

// Add the section in the JSX
<Suspense fallback={<SectionLoading />}>
  <YourSection ref={sectionRefs['your-section']} />
</Suspense>
```

4. Update the navigation in `src/components/layout/Navigation.tsx`:

```tsx
const sections = [
  { id: 'home', label: '§ Home' },
  // other sections...
  { id: 'your-section', label: '§ Your Section Title' }
];
```

## Modifying Existing Sections

Each section is structured with a main component in `index.tsx`, subcomponents for specific UI elements, and a data file (if applicable).

For example, to modify the Media section:

1. Edit `src/features/media/components/index.tsx` for layout changes
2. Edit `src/features/media/components/MediaList.tsx` or `VideoFeature.tsx` for component changes
3. Edit `src/features/media/data/mediaItems.ts` to update the media items

## Media & Assets

Add any new images or assets to the `public/` directory and reference them with:

```tsx
<img src="/path/to/your/image.png" alt="Description" />
```

## Social Links

Edit `src/components/SocialLinks.tsx` to update your social media links:

```tsx
const links = [
  { 
    label: "Platform", 
    url: "https://your-url.com",
    icon: <Icon size={16} className="mr-1" />
  },
  // Add more social links
];
```
