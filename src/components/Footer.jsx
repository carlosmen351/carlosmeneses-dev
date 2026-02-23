import { useTranslation } from 'react-i18next';
import { useParticles } from '../hooks/useParticles.jsx';
import { FaSnowflake, FaSun } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const { particlesEnabled, toggleParticles } = useParticles();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-default mt-24">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-primary/80 text-sm mb-4 sm:mb-0">
          {t('footer.copyright', { year: currentYear })}
        </p>

        {/* Enlaces y Controles */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com/carlosmen351" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-text transition-colors duration-300">
            {t('footer.github')}
          </a>
          <a href="https://www.linkedin.com/in/carlosmen351/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-text transition-colors duration-300">
            {t('footer.linkedin')}
          </a>
          <a href="/cv-carlos-meneses.pdf" download="cv-carlos-meneses.pdf" className="text-primary/80 hover:text-text transition-colors duration-300">
            Download CV
          </a>
          <button
            onClick={toggleParticles}
            className="text-primary/80 hover:text-text transition-colors duration-300 flex items-center"
            aria-label="Toggle Particles"
          >
            {particlesEnabled ? <FaSun className="mr-1" /> : <FaSnowflake className="mr-1" />}
            {particlesEnabled ? 'On' : 'Off'}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;