// src/lib/projects.js
import constuctionImage from '../assets/inCosntruction.webp';

export const myProjects = [
  {
    title: 'Proyecto Secreto',
    description: 'Innovación en desarrollo, pronto más detalles.',
    techStack: ['React', 'Next.js', 'Firebase'],
    image: constuctionImage, // placeholder
    link: '/projects',
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
