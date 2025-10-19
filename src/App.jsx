import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard'; // Asegúrate de que esté importado

// Datos de ejemplo para los proyectos
const myProjects = [
  {
    title: 'Proyecto Alpha',
    description: 'Una descripción breve pero impactante sobre lo que hace este increíble proyecto y su propósito principal.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    imageUrl: 'https://picsum.photos/seed/alpha/400/300',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Proyecto Beta',
    description: 'Este proyecto resuelve un problema complejo utilizando tecnologías modernas del lado del cliente.',
    tags: ['JavaScript', 'API REST', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/beta/400/300',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Proyecto Gamma',
    description: 'Una aplicación web responsiva y accesible construida con un enfoque en la experiencia de usuario.',
    tags: ['HTML5', 'CSS3', 'Accesibilidad'],
    imageUrl: 'https://picsum.photos/seed/gamma/400/300',
    liveUrl: '#',
    repoUrl: '#',
  },
];


function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        {/* Sección Hero */}
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Desarrollador Frontend Creativo
          </h1>
          <p className="mt-4 text-xl text-slate-400">
            Transformando ideas en experiencias web interactivas y memorables.
          </p>
        </section>

        {/* Nueva Sección de Proyectos */}
        <section id="proyectos">
          <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h2>
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
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App