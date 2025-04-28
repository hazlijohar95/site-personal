
# Personal Site/Portfolio

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A minimalist, responsive personal website and portfolio built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark/light mode toggle
- Animated section transitions
- Optimized loading experience
- Media showcase section
- Contact form with calendar integration

## 📋 Table of Contents

- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Customization](#customization)
  - [Personal Information](#personal-information)
  - [Theme Colors](#theme-colors)
  - [Adding New Sections](#adding-new-sections)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hazlijohar95/personal-website.git
cd personal-website

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

The development server will start on [http://localhost:8080](http://localhost:8080).

### Building for Production

```bash
# Build for production
npm run build
# or
yarn build
```

## ✏️ Customization

### Personal Information

Edit the following files to customize personal information:

- `src/features/profile/components/ProfileContent.tsx` - Bio information
- `src/features/profile/components/ProfileHeader.tsx` - Name, location, and title
- `src/components/SocialLinks.tsx` - Social media links
- `src/features/experience/data/experiences.ts` - Work experience
- `src/features/media/data/mediaItems.ts` - Media appearances

### Theme Colors

Theme colors can be customized in `tailwind.config.ts` under the `theme.extend.colors` section.

### Adding New Sections

1. Create a new directory in `src/features/your-section-name/`
2. Add component files within a `components` subdirectory
3. If needed, add data files within a `data` subdirectory
4. Import your new section in `src/pages/Index.tsx`

## 📁 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Shared UI components
│   ├── features/        # Feature modules
│   │   ├── home/        # Home feature components
│   │   ├── profile/     # Profile feature components
│   │   ├── experience/  # Experience feature components
│   │   ├── media/       # Media feature components
│   │   └── contact/     # Contact feature components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   └── App.tsx          # Main App component
├── .gitignore
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Please check out our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Icons from [Lucide](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Built with [React](https://reactjs.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/)
