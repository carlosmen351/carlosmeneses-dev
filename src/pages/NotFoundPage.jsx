import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';

const NotFoundPage = () => (
  <section className="mx-auto max-w-2xl py-20 text-center">
    <SeoHead
      title="Página no encontrada | Carlos Meneses"
      description="La página solicitada no existe."
      noIndex
    />
    <p className="text-primary font-bold">404</p>
    <h1 className="mt-3 text-4xl font-bold text-text">Página no encontrada</h1>
    <p className="mt-4 text-text/80">La dirección puede haber cambiado o no estar disponible.</p>
    <nav aria-label="Enlaces para continuar" className="mt-8 flex flex-wrap justify-center gap-4">
      <Link className="rounded-md bg-primary px-5 py-3 font-bold text-background" to="/">
        Ir al inicio
      </Link>
      <Link className="rounded-md border-2 border-primary px-5 py-3 font-bold text-primary" to="/projects">
        Ver proyectos
      </Link>
    </nav>
  </section>
);

export default NotFoundPage;