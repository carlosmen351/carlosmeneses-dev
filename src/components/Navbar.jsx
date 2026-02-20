import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/logoAzul.webp';
import ThemeSwitcher from './ThemeSwitcher';

const NavItem = ({ to, children, onClick }) => {
  const activeClasses = "text-text border-b-2 border-primary";
  const inactiveClasses = "text-primary hover:text-text";

  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `text-lg font-bold transition-colors duration-300 ${isActive ? activeClasses : inactiveClasses}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImage} alt="Logo" className="h-10 w-10 rounded-full" fetchpriority="high" loading="eager" />
          <span className="text-xl font-bold text-text">{t('navbar.name')}</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <NavItem to="/">{t('navbar.home')}</NavItem>
          <NavItem to="/projects">{t('navbar.projects')}</NavItem>
          <NavItem to="/blog">{t('navbar.blog')}</NavItem>
          <NavItem to="/contacto">{t('navbar.contact')}</NavItem>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 text-text"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-background/95 flex flex-col justify-center items-center"
            onClick={closeMenu}
          >
            <ul className="flex flex-col items-center space-y-8">
                <NavItem to="/" onClick={closeMenu}>{t('navbar.home')}</NavItem>
                <NavItem to="/projects" onClick={closeMenu}>{t('navbar.projects')}</NavItem>
                <NavItem to="/blog" onClick={closeMenu}>{t('navbar.blog')}</NavItem>
                <NavItem to="/contacto" onClick={closeMenu}>{t('navbar.contact')}</NavItem>
                <li>
                  <ThemeSwitcher />
                </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
