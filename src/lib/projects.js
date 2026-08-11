// src/lib/projects.js
import constuctionImage from '../assets/inCosntruction.webp';
import minigames from '../assets/minigames.png';
import agnosticPreview from '../assets/agnostic-preview.svg';
import financialCalculatorPreview from '../assets/financial-calculator-preview.svg';

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
    image: agnosticPreview,
    link: 'https://design-system-camedev.vercel.app/',
    projectType: 'Web Corporativa',
  },
  {
    title: 'Calculadora Fin.',
    description: 'Herramienta para presupuestos e inversión.',
    techStack: ['JavaScript', 'PostCSS', 'Mocha + GitHub Actions + Vercel'],
    image: financialCalculatorPreview,
    link: 'https://fin-calc.carlosmeneses.dev/',
    projectType: 'Lightweight Web',
  }
];
