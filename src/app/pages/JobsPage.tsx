import { useLanguage } from '@/app/contexts/LanguageContext';
import { motion } from 'motion/react';
import { Search, Hammer, Scissors, Coffee, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export const JobsPage = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const jobs = [
    {
      icon: Hammer,
      title: t('constructorTitle'),
      salary: t('constructorSalary'),
      details: t('constructorSchedule'),
      requirements: t('constructorReq'),
      color: 'bg-blue-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Scissors,
      title: t('sewingTitle'),
      salary: t('sewingSalary'),
      details: t('sewingDocs'),
      requirements: '',
      color: 'bg-green-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Coffee,
      title: t('baristaTitle'),
      salary: t('baristaSalary'),
      details: '',
      requirements: '',
      color: 'bg-purple-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
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
            {t('jobsTitle')}
          </h1>
          <p className="text-lg text-gray-600">{t('jobsSubtitle')}</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="text-gray-400" size={24} />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-lg"
              />
            </div>
            <motion.button
              className="bg-[#2D4A7C] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#3E5B8F] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('searchButton')}
            </motion.button>
          </div>
        </motion.div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
            >
              <div className={`${job.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                <job.icon size={32} className={job.iconColor} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{job.title}</h3>
              <p className="text-gray-700 font-semibold mb-2">{job.salary}</p>
              {job.details && <p className="text-gray-600 text-sm mb-2">{job.details}</p>}
              {job.requirements && <p className="text-gray-600 text-sm mb-4">{job.requirements}</p>}
              <motion.button
                className={`w-full ${job.color} text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity mt-4`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('applyButton')}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Warning Section */}
        <motion.div
          className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start gap-6">
            <div className="bg-orange-100 p-4 rounded-2xl flex-shrink-0">
              <AlertCircle size={48} className="text-orange-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-orange-800 mb-4">{t('warningTitle')}</h2>
              <ul className="space-y-3">
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-orange-600 text-2xl">•</span>
                  <span className="text-gray-700 text-lg">{t('warningPoint1')}</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="text-orange-600 text-2xl">•</span>
                  <span className="text-gray-700 text-lg">{t('warningPoint2')}</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-orange-600 text-2xl">•</span>
                  <span className="text-gray-700 text-lg">{t('warningPoint3')}</span>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
