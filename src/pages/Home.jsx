// src/pages/Home.jsx
import ProjectCard from '../components/ProjectCard';
import constuctionImage from '../assets/inCosntruction.jpg'

const myProjects = [
  {
    title: 'Proyecto Secreto X',
    description: 'Un ambicioso proyecto que está tomando forma. Pronto revelaremos más detalles sobre sus innovadoras características y su impacto.',
    tags: ['React', 'Next.js', 'Firebase'],
    imageUrl: constuctionImage,
    liveUrl: '#', // No hay demo aún
    repoUrl: '#', // No hay repo público aún
    projectState: 'En Desarrollo', // Nueva propiedad para indicar el estado
  },
  {
    title: 'Agnostic Design System',
    description: 'Biblioteca de componentes UI escalable construida con arquitectura Monorepo. Separa la lógica de los componentes (Package) de la aplicación de consumo (Showcase), implementando TypeScript estricto y estándares web modernos.',
    tags: ['LitElement', 'TypeScript', 'React (Vite)', 'Monorepo (pnpm)', 'Web Components', 'Tailwind CSS', 'SASS'],
    imageUrl: constuctionImage, // TODO:
    liveUrl: 'https://design.carlosmeneses.dev',
    repoUrl: 'https://github.com/carlosmen351/design-system-camedev',
    projectState: 'Live / MVP',
  },
  {
    title: 'Calculadora Financiera',
    description: 'Una herramienta sencilla pero poderosa para gestionar presupuestos personales y proyecciones de inversión.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: constuctionImage,
    liveUrl: '#',
    repoUrl: '#',
    projectState: 'En Desarrollo', // Puedes añadir un estado a tus proyectos completados también
  }
];


const Home = () => {
  return (
    <>
      {/* Sección Hero */}
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        >
          Desarrollador Frontend Creativo
        </h1>
        <p className="mt-4 text-xl text-primary/70">
          Creando experiencias de usurario intuitivas con React Lit y WebComponents.
        </p>
      </section>

      {/* Sección de Proyectos */}
      <section id="proyectos">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Mis Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              projectState={project.projectState}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default Home;