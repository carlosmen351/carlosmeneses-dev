// src/config/color-config.js

// Colors for technology labels based on category
export const techLabelColors = {
  base: 'bg-gray-400/20 text-gray-200 border-gray-400/30 dark:bg-gray-600/20 dark:text-gray-300 dark:border-gray-500/30',
  architecture: 'bg-blue-400/20 text-blue-200 border-blue-400/30 dark:bg-blue-600/20 dark:text-blue-300 dark:border-blue-500/30',
  tools: 'bg-orange-400/20 text-orange-200 border-orange-400/30 dark:bg-orange-600/20 dark:text-orange-300 dark:border-orange-500/30',
  ui: 'bg-green-400/20 text-green-200 border-green-400/30 dark:bg-green-600/20 dark:text-green-300 dark:border-green-500/30',
  git: 'bg-red-400/20 text-red-200 border-red-400/30 dark:bg-red-600/20 dark:text-red-300 dark:border-red-500/30',
  test: 'bg-purple-400/20 text-purple-200 border-purple-400/30 dark:bg-purple-600/20 dark:text-purple-300 dark:border-purple-500/30',
  default: 'bg-gray-600/20 text-gray-300 border-gray-500/30 dark:bg-gray-400/20 dark:text-gray-200 dark:border-gray-400/30',
};

// Mapping of technologies to categories
export const techCategories = {
  // Base
  'Lit': 'base',
  'Web Components': 'base',
  'JS/TS': 'base',
  'React': 'base',
  'React Native (TS)': 'base',
  'Next.js': 'base',
  'Angular': 'base',
  'Preact / Vanilla JS': 'base',
  'Ionic (Capacitor)': 'base',
  'Astro': 'base',
  'JavaScript': 'base',
  'TypeScript': 'base',
  'LitElement': 'base',
  'Monorepo (pnpm)': 'architecture',
  'Firebase': 'tools',


  // UI
  'SASS / CSS Modules': 'ui',
  'Styled Components': 'ui',
  'Tailwind CSS': 'ui',
  'PrimeNG / SCSS': 'ui',
  'PostCSS': 'ui',
  'Ionic UI / Stencil': 'ui',
  'Markdown + UnoCSS': 'ui',
  'SASS': 'ui',


  // Git
  'Git + Bitbucket': 'git',
  'Git + GitHub': 'git',
  'Git + GitLab': 'git',
  'Git + Azure DevOps': 'git',

  // Test, Automation, Deploy
  'WCT + Jenkins + Artifactory': 'test',
  'Jest + Fastlane + App Center': 'test',
  'Cypress + Playwright + Vercel': 'test',
  'Karma/Jasmine + Azure Pipelines': 'test',
  'Mocha + GitHub Actions + Netlify': 'test',
  'Appium + CircleCI + Firebase': 'test',
  'Pa11y + GitLab CI + Cloudflare': 'test',
};

// Gradients for project card backgrounds based on project type
export const projectGradients = {
  'Web Corporativa': 'from-cyan-500 to-blue-500',
  'Mobile Nativo': 'from-purple-500 to-indigo-500',
  'WebApp Moderna': 'from-green-400 to-teal-500',
  'default': 'from-gray-700 to-gray-800',
};
