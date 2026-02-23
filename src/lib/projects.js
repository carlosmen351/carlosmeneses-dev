// src/lib/projects.js
import constuctionImage from '../assets/inCosntruction.webp';
import minigames from '../assets/minigames.png';

export const myProjects = [
  {
    title: 'MenesesMinigames',
    description: 'Pagina web con juegos interactivos(web/movil).',
    techStack: ['React + vite', 'Tailwind CSS', 'Git + GitHub', 'Vercel'],
    image: minigames,
    link: 'https://menesesminigames.carlosmeneses.dev/',
    projectType: 'WebApp Moderna',
  },
  {
    title: 'Agnostic D.S.',
    description: 'Biblioteca de componentes UI con Monorepo.',
    techStack: ['LitElement', 'TypeScript', 'Monorepo (pnpm)', 'SASS'],
    image: constuctionImage, // placeholder
    link: '/projects',
    projectType: 'Web Corporativa',
  },
  {
    title: 'Calculadora Fin.',
    description: 'Herramienta para presupuestos e inversión.',
    techStack: ['JavaScript', 'PostCSS', 'Mocha + GitHub Actions + Netlify'],
    image: constuctionImage, // placeholder
    link: '/projects',
    projectType: 'Lightweight Web', // This type is not in gradients, will fall to default
  }
];
