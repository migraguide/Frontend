import { useLanguage } from '@/app/contexts/LanguageContext';
import { motion } from 'motion/react';
import { Phone, AlertCircle, Scale, FileDown } from 'lucide-react';

export const SafetyPage = () => {
  const { t } = useLanguage();

  const emergencyNumbers = [
    { number: '102', title: t('policeTitle'), icon: '🚔', color: 'bg-blue-500' },
    { number: '103', title: t('ambulanceTitle'), icon: '🚑', color: 'bg-red-500' },
    { number: '101', title: t('fireTitle'), icon: '🚒', color: 'bg-orange-500' },
    { number: '112', title: t('emergencyTitle2'), icon: '📞', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D4A7C] mb-4">
            {t('safetyTitle')}
          </h1>
          <p className="text-lg text-gray-600">{t('safetySubtitle')}</p>
        </motion.div>

        {/* Emergency Numbers */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <AlertCircle className="text-red-600" size={36} />
            {t('emergencyTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyNumbers.map((item, index) => (
              <motion.div
                key={index}
                className={`${item.color} rounded-2xl p-6 text-white shadow-lg cursor-pointer`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <div className="text-4xl font-bold mb-2">{item.number}</div>
                <div className="text-lg opacity-90">{item.title}</div>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-center text-gray-600 mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {t('quickDial')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Legal Help */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-100 p-4 rounded-xl">
                <Scale size={32} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('legalHelpTitle')}</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <h4 className="font-bold text-lg mb-2">{t('legalOrgTitle')}</h4>
                <p className="text-gray-600 mb-3">{t('legalOrgDesc')}</p>
                <motion.button
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={20} />
                  {t('callButton')}
                </motion.button>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                <h4 className="font-bold text-lg mb-2">{t('migrantUnionTitle')}</h4>
                <motion.button
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={20} />
                  {t('callButton')}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Embassy */}
          <motion.div
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur">
                <div className="text-4xl">🏛️</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{t('uzbekEmbassyTitle')}</h3>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <p className="flex items-start gap-2">
                <span className="opacity-80">📍</span>
                <span>{t('uzbekEmbassyAddress')}</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="opacity-80">☎️</span>
                <span className="font-semibold">{t('uzbekEmbassyPhone')}</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="opacity-80">🌐</span>
                <span>{t('uzbekEmbassyWebsite')}</span>
              </p>
            </div>

            <motion.button
              className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('howToGetButton')}
            </motion.button>
          </motion.div>
        </div>

        {/* Problems Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#2D4A7C] mb-6">{t('problemsTitle')}</h2>
          <div className="space-y-4">
            {[
              t('problemsStep1'),
              t('problemsStep2'),
              t('problemsStep3'),
              t('problemsStep4'),
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <p className="text-gray-700 text-lg">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.button
            className="bg-[#2D4A7C] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#3E5B8F] transition-all shadow-lg inline-flex items-center gap-3"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(45, 74, 124, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FileDown size={24} />
            {t('downloadMemory')}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
