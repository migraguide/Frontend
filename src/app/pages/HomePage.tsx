import { useLanguage } from '@/app/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, Briefcase, Home, Shield } from 'lucide-react';

export const HomePage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const cards = [
    {
      icon: FileText,
      title: t('documentsCard'),
      description: t('documentsDesc'),
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      path: '/documents',
    },
    {
      icon: Briefcase,
      title: t('workCard'),
      description: t('workDesc'),
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      path: '/jobs',
    },
    {
      icon: Home,
      title: t('housingCard'),
      description: t('housingDesc'),
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      path: '/documents',
    },
    {
      icon: Shield,
      title: t('safetyCard'),
      description: t('safetyDesc'),
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      path: '/safety',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2D4A7C] to-[#3E5B8F] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('homeTitle')}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('homeSubtitle')}
          </motion.p>
          <motion.button
            onClick={() => navigate('/documents')}
            className="bg-white text-[#2D4A7C] px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('startButton')}
          </motion.button>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-4 border-blue-300 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-[#2D4A7C] mb-8">
            {t('mapTitle')}
          </h2>
          <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-lg">{t('mapTitle')}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`${card.color} ${card.hoverColor} rounded-xl p-6 text-white cursor-pointer transition-all shadow-lg`}
              onClick={() => navigate(card.path)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                y: -5,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-4">
                <card.icon size={48} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm opacity-90">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
