// src/lib/projects.js
import minigames from '../assets/minigames.png';
import agnosticPreview from '../assets/agnostic-preview.svg';
import financialCalculatorPreview from '../assets/financial-calculator-preview.svg';
import todoPreview from '../assets/todo-preview.svg';
import landingPlatziPreview from '../assets/landing-platzi-preview.svg';
import gethiredPreview from '../assets/gethired-preview.svg';
import avocadosPreview from '../assets/avocados-preview.svg';
import bootstrapPreview from '../assets/bootstrap-preview.svg';
import batatabitPreview from '../assets/batatabit-preview.svg';

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
  },
  {
    title: 'TodoList',
    description: 'Lista de deberes.',
    techStack: ['React', 'Vite', 'CSS', 'GitHub Pages'],
    image: todoPreview,
    link: 'https://carlosmen351.github.io/TodoApp/',
    projectType: 'WebApp',
  },
  {
    title: 'Landing Platzi API',
    description: 'Landing page para aprender e integrar preprocesadores de estilos con SASS.',
    techStack: ['HTML', 'SASS', 'GitHub Pages'],
    image: landingPlatziPreview,
    link: 'https://carlosmen351.github.io/landing-platzi-api/',
    projectType: 'Web Semántica',
  },
  {
    title: 'GetHired Community',
    description: 'Simulador de plataforma de empleo con sistema de login y verificación en dos factores (2FA).',
    techStack: ['React', 'CSS Modules', 'Vercel'],
    image: gethiredPreview,
    link: 'https://gethired-community-c8.vercel.app/',
    projectType: 'Web App',
  },
  {
    title: 'Tienda de Avocados',
    description: 'E-commerce interactivo de aguacates con consumo de API REST local y seguridad reCAPTCHA.',
    techStack: ['React', 'Tailwind CSS', 'Next.js', 'reCAPTCHA', 'GitHub Pages'],
    image: avocadosPreview,
    link: 'https://carlosmen351.github.io/Tienda-de-avocados/',
    projectType: 'Tienda Virtual',
  },
  {
    title: 'Bootstrap 5 Landing',
    description: 'Landing page moderna estructurada y estilizada con Bootstrap 5.',
    techStack: ['HTML', 'Bootstrap 5', 'CSS', 'GitHub Pages'],
    image: bootstrapPreview,
    link: 'https://carlosmen351.github.io/Bootstrap-5/',
    projectType: 'Web Responsiva',
  },
  {
    title: 'Batatabit Investment',
    description: 'App de criptomonedas con diseño responsive responsivo con enfoque Mobile-First.',
    techStack: ['HTML', 'CSS Grids & Flexbox', 'Mobile-First', 'GitHub Pages'],
    image: batatabitPreview,
    link: 'https://carlosmen351.github.io/Responsive-Desing_Mobile-First/',
    projectType: 'Diseño Responsivo',
  }
];
