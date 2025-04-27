
# Component Documentation

This document provides detailed information about the components used in this project, their props, and usage examples.

## Table of Contents

- [Common Components](#common-components)
  - [ContentSkeleton](#contentskeleton)
  - [SectionContainer](#sectioncontainer)
  - [SectionHeading](#sectionheading)
  - [Badge](#badge)
  - [MacWindow](#macwindow)
  - [SocialLinks](#sociallinks)
  - [AnimatedSection](#animatedsection)
- [Layout Components](#layout-components)
  - [Navigation](#navigation)
  - [ThemeToggle](#themetoggle)
  - [ScrollProgressIndicator](#scrollprogressindicator)
- [Feature Components](#feature-components)
  - [Hero](#hero)
  - [ProfileSection](#profilesection)
  - [ExperienceSection](#experiencesection)
  - [MediaSection](#mediasection)
  - [ContactSection](#contactsection)

## Common Components

### ContentSkeleton

A skeleton loading placeholder for content.

**Usage Example:**

```tsx
import ContentSkeleton from '@/components/common/ContentSkeleton';

const LoadingState = () => (
  <div className="min-h-[30vh]">
    <ContentSkeleton />
  </div>
);
```

### SectionContainer

A wrapper component for page sections.

**Props:**

| Name      | Type                     | Default | Description                       |
|-----------|--------------------------|---------|-----------------------------------|
| id        | string                   | -       | HTML ID for the section           |
| className | string                   | -       | Additional CSS classes            |
| children  | React.ReactNode          | -       | Section content                   |
| ref       | React.RefObject<HTMLDivElement> | - | React ref for scrolling functionality |

**Usage Example:**

```tsx
import SectionContainer from '@/components/common/SectionContainer';

const MySection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <SectionContainer id="my-section" ref={ref}>
    <h2>My Section Title</h2>
    <p>Section content goes here...</p>
  </SectionContainer>
));
```

### SectionHeading

A styled heading component for section titles.

**Props:**

| Name      | Type            | Default | Description            |
|-----------|-----------------|---------|------------------------|
| className | string          | -       | Additional CSS classes |
| children  | React.ReactNode | -       | Heading text           |

**Usage Example:**

```tsx
import SectionHeading from '@/components/common/SectionHeading';

const MySection = () => (
  <div>
    <SectionHeading>My Section Title</SectionHeading>
    <p>Content goes here...</p>
  </div>
);
```

### Badge

A small badge component for displaying status or labels.

**Props:**

| Name      | Type    | Default | Description                       |
|-----------|---------|---------|-----------------------------------|
| label     | string  | -       | Text to display in the badge      |
| active    | boolean | false   | Whether to show as active status  |
| className | string  | -       | Additional CSS classes            |

**Usage Example:**

```tsx
import Badge from '@/components/common/Badge';

const StatusDisplay = () => (
  <div>
    <Badge label="Active" active />
    <Badge label="Archived" />
  </div>
);
```

### MacWindow

A component that displays content in a Mac-style window.

**Props:**

| Name      | Type            | Default | Description            |
|-----------|-----------------|---------|------------------------|
| title     | string          | -       | Window title           |
| children  | React.ReactNode | -       | Window content         |
| className | string          | ''      | Additional CSS classes |

**Usage Example:**

```tsx
import MacWindow from '@/components/MacWindow';

const MyWindow = () => (
  <MacWindow title="My Window">
    <p>This is the content of my window.</p>
  </MacWindow>
);
```

### SocialLinks

Displays a row of social media links.

**Usage Example:**

```tsx
import SocialLinks from '@/components/SocialLinks';

const Footer = () => (
  <footer>
    <p>Connect with me:</p>
    <SocialLinks />
  </footer>
);
```

### AnimatedSection

A section that animates into view when it enters the viewport.

**Props:**

| Name          | Type                                      | Default   | Description                   |
|---------------|-------------------------------------------|-----------|-------------------------------|
| children      | React.ReactNode                           | -         | Section content               |
| className     | string                                    | -         | Additional CSS classes        |
| animationType | 'fade-in' \| 'slide-up' \| 'scale-in'     | 'fade-in' | Animation type                |
| delay         | number                                    | 0         | Animation delay in ms         |

**Usage Example:**

```tsx
import AnimatedSection from '@/components/AnimatedSection';

const MySection = () => (
  <AnimatedSection animationType="slide-up" delay={200}>
    <p>This content will slide up into view.</p>
  </AnimatedSection>
);
```

## Layout Components

### Navigation

Main navigation component for the website.

**Props:**

| Name         | Type                       | Default | Description                           |
|--------------|----------------------------|---------|---------------------------------------|
| onNavigate   | (section: string) => void  | -       | Function called on navigation click   |
| activeSection| string                     | -       | Currently active section ID           |
| className    | string                     | -       | Additional CSS classes                |

**Usage Example:**

```tsx
import Navigation from '@/components/layout/Navigation';

const Layout = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const handleNavigate = (section: string) => {
    setActiveSection(section);
    // Scroll logic here
  };
  
  return (
    <Navigation 
      onNavigate={handleNavigate}
      activeSection={activeSection}
    />
  );
};
```

## Feature Components

Documentation for each feature module component...

<!-- Add more component documentation as needed -->
