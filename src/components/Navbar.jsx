const Navbar = () => {
  return (
    <nav className="py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo o Nombre */}
        <a href="/" className="font-bold text-xl text-white">
          Carlos Meneses
        </a>

        {/* Links de Navegación */}
        <ul className="flex items-center space-x-6">
          <li><a href="#proyectos" className="text-gray-400 hover:text-white">Proyectos</a></li>
          <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
          <li><a href="#contacto" className="text-gray-400 hover:text-white">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;