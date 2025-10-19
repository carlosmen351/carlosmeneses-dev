const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 mt-24">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-slate-400 text-sm mb-4 sm:mb-0">
          &copy; {currentYear} Carlos Meneses. Todos los derechos reservados.
        </p>

        {/* Enlaces a Redes Sociales */}
        <div className="flex space-x-4">
          <a href="https://github.com/carlosmen351" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/carlosmen351/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
            LinkedIn
          </a>
          <a href="https://https//twitter.com/carlosmen351" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
            Twitter/X
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;