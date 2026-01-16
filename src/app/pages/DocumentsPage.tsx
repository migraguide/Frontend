import { useLanguage } from '@/app/contexts/LanguageContext';
import { motion } from 'motion/react';
import { FileText, ClipboardCheck, Activity, AlertTriangle } from 'lucide-react';

export const DocumentsPage = () => {
  const { t } = useLanguage();

  const documents = [
    {
      icon: FileText,
      title: t('registrationTitle'),
      description: t('registrationDesc'),
      link: t('registrationLink'),
      color: 'bg-blue-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: ClipboardCheck,
      title: t('patentTitle'),
      description: t('patentDesc'),
      link: t('patentLink'),
      color: 'bg-green-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
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
            {t('documentsTitle')}
          </h1>
          <p className="text-lg text-gray-600">{t('documentsSubtitle')}</p>
        </motion.div>

        {/* Main Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className={`${doc.iconBg} p-4 rounded-xl`}>
                  <doc.icon size={32} className={doc.iconColor} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{doc.title}</h3>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  <motion.button
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    {doc.link} →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Medical & Important sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Medical */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-4 rounded-xl">
                <Activity size={32} className="text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {t('medicalTitle')}
                </h3>
                <p className="text-gray-600 mb-4">{t('medicalDesc')}</p>
                <motion.button
                  className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  {t('medicalLink')} →
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Important Warning */}
          <motion.div
            className="bg-yellow-50 rounded-2xl p-6 shadow-lg border-2 border-yellow-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-4 rounded-xl">
                <AlertTriangle size={32} className="text-yellow-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                  {t('importantTitle')}
                </h3>
                <p className="text-gray-700">{t('importantDesc')}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="bg-[#2D4A7C] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#3E5B8F] transition-all shadow-lg inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(45, 74, 124, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={24} />
            {t('downloadMemory')}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
