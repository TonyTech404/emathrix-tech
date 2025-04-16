# Emathrix Technologies Website

This is the official website for Emathrix Technologies, built with [Astro](https://astro.build/) and deployed on GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18.20.8 or higher recommended)
- Git
- npm (comes with Node.js)

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/TonyTech404/emathrix-tech.git
   cd emathrix-tech
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 📝 Development Workflow

1. **Make and Test Changes**
   ```bash
   # Start development server
   npm run dev
   
   # View your changes at http://localhost:4321
   # Make your code changes and test them
   ```

2. **Build the Site**
   ```bash
   # This automatically creates/updates the docs/ folder
   npm run build
   ```

3. **Deploy**
   ```bash
   # Add all changes (both source code and docs/)
   git add .
   
   # Commit your changes
   git commit -m "Describe your changes"
   
   # Push to GitHub
   git push origin main
   ```

4. **Wait for Deployment**
   - GitHub Pages will automatically update from the `docs/` folder
   - Your changes will be live at https://tonytech404.github.io/emathrix-tech/
   - This usually takes 1-2 minutes

### ⚠️ Important Notes About Deployment

- The `npm run build` command automatically puts files in `docs/`
- GitHub Pages automatically deploys when you push to main
- You MUST run `build` before committing - changes to source code alone won't update the site
- Always test your changes locally before deploying

### 🔍 Common Workflow Examples

1. **Updating a Page:**
   ```bash
   npm run dev              # Start local server
   # Make your changes
   # Test at localhost:4321
   npm run build           # Build the site
   git add .              # Add all changes
   git commit -m "Update page content"
   git push origin main   # Deploy
   ```

2. **Fixing a Bug:**
   ```bash
   npm run dev              # Start local server
   # Fix the bug
   # Test thoroughly
   npm run build           # Build the site
   git add .              # Add all changes
   git commit -m "Fix navigation bug"
   git push origin main   # Deploy
   ```

## 🏗️ Project Structure

```
/
├── docs/               # Built files (used for GitHub Pages)
├── public/            # Static assets
├── src/
│   ├── assets/       # Images and other assets
│   ├── components/   # Reusable components
│   ├── layouts/      # Page layouts
│   ├── pages/        # Page components
│   ├── styles/       # Global styles
│   └── utils/        # Utility functions
└── package.json
```

## 🔧 Configuration

- `astro.config.ts`: Astro configuration
- `src/config.yaml`: Site configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

## 🎨 Making Style Changes

1. CSS styles are managed with Tailwind CSS
2. Global styles are in `src/styles/`
3. Component-specific styles should be added within the component files

## 📝 Content Updates

1. Page content is in `src/pages/`
2. Components are in `src/components/`
3. Navigation links are configured in `src/navigation.ts`

## ⚠️ Important Notes

- Always use `getPermalink()` for internal links to ensure proper base path handling
- The site uses Node.js v18.20.8 or higher
- The site is deployed from the `docs/` directory in the main branch
- Make sure to test all navigation links after making changes

## 🐛 Troubleshooting

If you encounter any issues:

1. Make sure you're using the correct Node.js version
2. Clear your npm cache: `npm cache clean --force`
3. Delete `node_modules` and run `npm install` again
4. Check the console for any error messages
5. Ensure all links include the correct base path (`/emathrix-tech/`)

## 📫 Contact

For questions or support, please reach out to the team or create an issue on GitHub.

## 📄 License

All rights reserved. © Emathrix Technologies
