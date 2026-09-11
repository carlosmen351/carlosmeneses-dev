// src/components/LanguageSwitcher.jsx
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'es';

  const toggleLanguage = () => {
    const nextLang = currentLanguage.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center justify-center font-bold text-sm tracking-wider px-3 py-1 rounded-md border border-primary/20 bg-slate-800/35 hover:bg-slate-800/60 hover:border-primary/50 text-text transition-all duration-300 min-w-[50px] overflow-hidden"
      aria-label="Change Language"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentLanguage}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="uppercase"
        >
          {currentLanguage.substring(0, 2)}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default LanguageSwitcher;
