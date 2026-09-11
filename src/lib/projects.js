// src/lib/projects.js
import minigames from '../assets/minigames.png';
import proyectoLogistics from '../assets/proyecto-logistics.png';
import agnosticPreview from '../assets/agnostic-preview.svg';
import financialCalculatorPreview from '../assets/financial-calculator-preview.svg';
import todoPreview from '../assets/todo-preview.svg';
import landingPlatziPreview from '../assets/landing-platzi-preview.svg';
import gethiredPreview from '../assets/gethired-preview.svg';
import avocadosPreview from '../assets/avocados-preview.svg';
import bootstrapPreview from '../assets/bootstrap-preview.svg';
import batatabitPreview from '../assets/batatabit-preview.svg';

export const myProjects = (t) => [
  {
    title: 'Global Logistics',
    description: t ? t('projects.list.logistics.desc') : 'Plataforma moderna para la gestión, cotización y seguimiento de servicios de transporte internacional y logística.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    image: proyectoLogistics,
    link: 'https://global-logistics-khaki.vercel.app/',
    projectType: t ? t('projects.list.logistics.type') : 'Web Empresarial',
  },
  {
    title: 'MenesesMinigames',
    description: t ? t('projects.list.minigames.desc') : 'Pagina web con juegos interactivos(web/movil).',
    techStack: ['React + vite', 'Tailwind CSS', 'Git + GitHub', 'Vercel'],
    image: minigames,
    link: 'https://menesesminigames.carlosmeneses.dev/',
    projectType: t ? t('projects.list.minigames.type') : 'WebApp Moderna',
  },
  {
    title: 'Agnostic D.S.',
    description: t ? t('projects.list.agnostic.desc') : 'Biblioteca de componentes UI con Monorepo.',
    techStack: ['LitElement', 'TypeScript', 'Monorepo (pnpm)', 'SASS'],
    image: agnosticPreview,
    link: 'https://design-system-camedev.vercel.app/',
    projectType: t ? t('projects.list.agnostic.type') : 'Web Corporativa',
  },
  {
    title: 'Calculadora Fin.',
    description: t ? t('projects.list.calc.desc') : 'Herramienta para presupuestos e inversión.',
    techStack: ['JavaScript', 'PostCSS', 'Mocha + GitHub Actions + Vercel'],
    image: financialCalculatorPreview,
    link: 'https://fin-calc.carlosmeneses.dev/',
    projectType: t ? t('projects.list.calc.type') : 'Lightweight Web',
  },
  {
    title: 'TodoList',
    description: t ? t('projects.list.todo.desc') : 'Lista de deberes.',
    techStack: ['React', 'Vite', 'CSS', 'GitHub Pages'],
    image: todoPreview,
    link: 'https://carlosmen351.github.io/TodoApp/',
    projectType: t ? t('projects.list.todo.type') : 'WebApp',
  },
  {
    title: 'Landing Platzi API',
    description: t ? t('projects.list.landingPlatzi.desc') : 'Landing page para aprender e integrar preprocesadores de estilos con SASS.',
    techStack: ['HTML', 'SASS', 'GitHub Pages'],
    image: landingPlatziPreview,
    link: 'https://carlosmen351.github.io/landing-platzi-api/',
    projectType: t ? t('projects.list.landingPlatzi.type') : 'Web Semántica',
  },
  {
    title: 'GetHired Community',
    description: t ? t('projects.list.gethired.desc') : 'Simulador de plataforma de empleo con sistema de login y verificación en dos factores (2FA).',
    techStack: ['React', 'CSS Modules', 'Vercel'],
    image: gethiredPreview,
    link: 'https://gethired-community-c8.vercel.app/',
    projectType: t ? t('projects.list.gethired.type') : 'Web App',
  },
  {
    title: 'Tienda de Avocados',
    description: t ? t('projects.list.avocados.desc') : 'E-commerce interactivo de aguacates con consumo de API REST local y seguridad reCAPTCHA.',
    techStack: ['React', 'Tailwind CSS', 'Next.js', 'reCAPTCHA', 'GitHub Pages'],
    image: avocadosPreview,
    link: 'https://carlosmen351.github.io/Tienda-de-avocados/',
    projectType: t ? t('projects.list.avocados.type') : 'Tienda Virtual',
  },
  {
    title: 'Bootstrap 5 Landing',
    description: t ? t('projects.list.bootstrap.desc') : 'Landing page moderna estructurada y estilizada con Bootstrap 5.',
    techStack: ['HTML', 'Bootstrap 5', 'CSS', 'GitHub Pages'],
    image: bootstrapPreview,
    link: 'https://carlosmen351.github.io/Bootstrap-5/',
    projectType: t ? t('projects.list.bootstrap.type') : 'Web Responsiva',
  },
  {
    title: 'Batatabit Investment',
    description: t ? t('projects.list.batatabit.desc') : 'App de criptomonedas con diseño responsive responsivo con enfoque Mobile-First.',
    techStack: ['HTML', 'CSS Grids & Flexbox', 'Mobile-First', 'GitHub Pages'],
    image: batatabitPreview,
    link: 'https://carlosmen351.github.io/Responsive-Desing_Mobile-First/',
    projectType: t ? t('projects.list.batatabit.type') : 'Diseño Responsivo',
  }
];
