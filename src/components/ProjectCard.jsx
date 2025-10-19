const ProjectCard = ({ title, description, tags, imageUrl, liveUrl, repoUrl }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
      {/* Imagen del Proyecto */}
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        {/* Título */}
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

        {/* Descripción */}
        <p className="text-slate-400 mb-4">{description}</p>

        {/* Etiquetas de Tecnología */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-cyan-900 text-cyan-300 text-sm font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex space-x-4">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Ver Demo
          </a>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Código
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;