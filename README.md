# Portfolio - React + TypeScript + Vite + Aceternity UI

A modern portfolio website built with React, TypeScript, Vite, and enhanced with Aceternity UI components for beautiful animations and interactions.

## Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 19** - Latest React with modern features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌙 **Dark Mode** - Toggle between light and dark themes
- ✨ **Aceternity UI** - Beautiful animated components
- 🎭 **Motion** - Smooth animations and transitions
- 📱 **Responsive Design** - Works on all devices
- 🔧 **TypeScript** - Type-safe development

## Aceternity UI Integration

This project includes a complete Aceternity UI setup with:

- **Utility Functions**: `cn()` function for clean class name merging using `clsx` and `tailwind-merge`
- **Motion Animations**: Smooth animations powered by the motion library
- **Enhanced Tailwind Config**: Custom animations and keyframes for better UI interactions
- **Sample Components**: Demonstration components showing Aceternity UI capabilities

### Dependencies

- `motion` - Animation library (React 19 compatible)
- `clsx` - Utility for constructing className strings
- `tailwind-merge` - Merge Tailwind CSS classes without style conflicts

### Usage

```tsx
import { cn } from './lib/utils';
import { motion } from 'motion/react';

// Example component using Aceternity UI utilities
const MyComponent = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "base-styles here",
        "conditional-styles",
        className
      )}
    >
      Content here
    </motion.div>
  );
};
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
