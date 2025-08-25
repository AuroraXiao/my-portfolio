# Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🔍 Project filtering and search
- 📊 GitHub projects integration
- 🎯 UI/UX design showcase

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

This project is configured for GitHub Pages deployment.

### Automatic Deployment (Recommended)

1. Push your code to the `master` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at: `https://[username].github.io/my-portfolio/`

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
pnpm build

# Deploy to GitHub Pages
pnpm deploy
```

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Ensure the repository is public

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/          # Static data (projects, skills, etc.)
├── lib/           # Utility functions
├── pages/         # Page components
└── assets/        # Images and static assets
```

## Customization

- **Projects**: Edit `src/data/projects.json`
- **Skills**: Edit `src/data/skills.ts`
- **Site Info**: Edit `src/data/site.ts`
- **Styling**: Modify `src/index.css` and Tailwind config

## License

MIT


