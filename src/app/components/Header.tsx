import { useLanguage } from '@/app/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const languages = [
    { code: 'ru' as const, label: 'RU' },
    { code: 'kg' as const, label: 'KG' },
    { code: 'en' as const, label: 'EN' },
  ];

  const navLinks = [
    { to: '/documents', label: t('documents') },
    { to: '/jobs', label: t('work') },
    { to: '/safety', label: t('help') },
  ];

  return (
    <header className="bg-[#2D4A7C] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            MigraGuide
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-lg hover:text-gray-200 transition-colors ${
                  location.pathname === link.to ? 'text-white' : 'text-gray-300'
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex gap-2">
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1 rounded transition-all ${
                  language === lang.code
                    ? 'bg-white text-[#2D4A7C] font-bold'
                    : 'bg-transparent border border-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {lang.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex gap-4 mt-4 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1 rounded text-sm ${
                location.pathname === link.to
                  ? 'bg-white text-[#2D4A7C] font-bold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
