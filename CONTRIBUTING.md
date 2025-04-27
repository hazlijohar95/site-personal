
# Contributing Guidelines

Thank you for your interest in contributing to my personal website project! This document provides guidelines and steps for contributing.

## Code of Conduct

By participating in this project, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please create an issue using the bug report template. Before creating bug reports, please check the existing issues to avoid duplicates.

When creating a bug report, include as many details as possible:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Your environment (browser, OS, etc.)

### Suggesting Enhancements

For feature requests or enhancements, create an issue using the feature request template.

Include:

- A clear and descriptive title
- Detailed description of the proposed feature
- Any relevant examples or mockups
- Why this feature would be valuable

### Pull Requests

1. Fork the repository
2. Create a new branch from `main`
3. Make your changes
4. Ensure your code follows the project's coding style
5. Test your changes thoroughly
6. Submit a pull request

#### Pull Request Guidelines

- Use a clear, descriptive title
- Reference any related issues
- Include before/after screenshots for UI changes
- Update documentation as needed

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/personal-website.git
cd personal-website

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

## Coding Guidelines

### JavaScript/TypeScript

- Use TypeScript for all new code
- Follow the existing code style
- Document complex functions with JSDoc comments
- Use meaningful variable and function names

### CSS/Tailwind

- Use Tailwind CSS for styling
- Create reusable CSS classes for common patterns
- Follow the existing class naming conventions

### Components

- Keep components focused on a single responsibility
- Use proper props typing with TypeScript
- Document component props with JSDoc comments

## Testing

- Test your changes in multiple browsers
- Ensure responsive behavior works on different screen sizes
- Verify both light and dark modes

## Git Workflow

1. Create a branch with a descriptive name
2. Make focused, incremental commits
3. Keep pull requests focused on a single issue/feature
4. Rebase on `main` before submitting your PR

## Questions?

Feel free to create an issue or reach out if you have any questions!
