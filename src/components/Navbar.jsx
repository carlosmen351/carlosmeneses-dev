import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-6">
      <div className="container mx-auto flex justify-between items-center px-4">

        {/* Links de Navegación para Escritorio (Desktop) */}
        <ul className="hidden md:flex items-center space-x-6">
          <li><a href="/#proyectos" className="text-primary hover:text-text">Proyectos</a></li>
          <li><Link to="/blog" className="text-primary hover:text-text">Blog</Link></li>
          <li><Link to="/contacto" className="text-primary hover:text-text">Contacto</Link></li>
        </ul>

        {/* 3. Botón del Menú Hamburguesa (solo visible en móvil) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {isMenuOpen && (
          <div
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-background flex flex-col justify-center items-center space-y-8"
          >
            <a href="/#proyectos" className="text-3xl text-primary hover:text-text" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
            <Link to="/blog" className="text-3xl text-primary hover:text-text" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contacto" className="text-3xl text-primary hover:text-text" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;