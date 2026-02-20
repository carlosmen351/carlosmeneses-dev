import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/logoAzul.webp';
import { motion, AnimatePresence } from 'framer-motion'; // Keep motion for GlowButton and direct usage
import ThemeSwitcher from './ThemeSwitcher';
import { FaHome, FaFolderOpen, FaPencilAlt, FaEnvelope } from 'react-icons/fa';

const NavItem = ({ to, children, onClick, icon: Icon, isMobile = false, className = '' }) => {
  const activeClasses = "text-text border-b-2 border-primary";

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `text-lg font-bold transition-colors duration-300 ${isMobile ? 'flex items-center gap-2' : ''} ${isActive ? activeClasses : 'text-primary hover:text-text'} ${className}`
      }
    >
      {isMobile && Icon ? (
        <>
          <Icon className="h-6 w-6" fill="currentColor" />
          <span className="sr-only">{children}</span>
        </>
      ) : (
        children
      )}
    </NavLink>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // Animation variants for the mobile menu overlay
  const menuVariants = { 
    hidden: { opacity: 0, x: "100vw" }, // Slide from right
    visible: {
      opacity: 1,
      x: "0",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { 
      opacity: 0, 
      x: "100vw", // Slide back to right
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Animation variants for individual menu items
  const menuItemVariants = { 
    hidden: { opacity: 0, x: 50 }, // Slide in from right
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }, // Slide out to right
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImage} alt="Logo" className="h-10 w-10 rounded-full" fetchpriority="high" loading="eager" />
          <span className="text-xl font-bold text-text">{t('navbar.name')}</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-primary">
          <li><NavItem to="/">{t('navbar.home')}</NavItem></li>
          <li><NavItem to="/projects">{t('navbar.projects')}</NavItem></li>
          <li><NavItem to="/blog">{t('navbar.blog')}</NavItem></li>
          <li><NavItem to="/contacto">{t('navbar.contact')}</NavItem></li>
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
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="closeIcon"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key="hamburgerIcon"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden fixed inset-0 bg-background/95 flex flex-col justify-start items-end pr-4 z-[999]" // Align to right, consistent with Navbar padding, and z-index, changed justify-center to justify-start
              onClick={closeMenu}
            >
              <motion.ul
                className="flex flex-col items-end space-y-8 pt-20" // Align items to right, added pt-20
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                  <motion.li variants={menuItemVariants}>
                    <NavItem to="/" onClick={closeMenu} icon={FaHome} isMobile={true} className="text-primary">{t('navbar.home')}</NavItem>
                  </motion.li>
                  <motion.li variants={menuItemVariants}>
                    <NavItem to="/projects" onClick={closeMenu} icon={FaFolderOpen} isMobile={true} className="text-primary">{t('navbar.projects')}</NavItem>
                  </motion.li>
                  <motion.li variants={menuItemVariants}>
                    <NavItem to="/blog" onClick={closeMenu} icon={FaPencilAlt} isMobile={true} className="text-primary">{t('navbar.blog')}</NavItem>
                  </motion.li>
                  <motion.li variants={menuItemVariants}>
                    <NavItem to="/contacto" onClick={closeMenu} icon={FaEnvelope} isMobile={true} className="text-primary">{t('navbar.contact')}</NavItem>
                  </motion.li>
                  <motion.li variants={menuItemVariants}>
                    <ThemeSwitcher />
                  </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
