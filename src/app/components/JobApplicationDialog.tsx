import { useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { jobApplicationAPI, JobApplicationData } from '@/app/config/api';
import { toast } from 'sonner';

interface JobApplicationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export const JobApplicationDialog = ({ isOpen, onClose, jobTitle }: JobApplicationDialogProps) => {
  const { t } = useLanguage();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber.trim()) {
      toast.error(t('phoneRequired') || 'Пожалуйста, укажите номер телефона');
      return;
    }

    setIsSubmitting(true);

    try {
      const applicationData: JobApplicationData = {
        jobTitle,
        phoneNumber: phoneNumber.trim(),
        message: message.trim(),
      };

      await jobApplicationAPI.submitApplication(applicationData);
      
      toast.success(t('applicationSuccess') || 'Отклик успешно отправлен!');
      
      // Очищаем форму и закрываем диалог
      setPhoneNumber('');
      setMessage('');
      onClose();
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error(t('applicationError') || 'Ошибка при отправке отклика. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Dialog */}
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 z-10"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {t('applyForJob') || 'Откликнуться на вакансию'}
        </h2>
        <p className="text-gray-600 mb-6">{jobTitle}</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              {t('phoneNumber') || 'Номер телефона'} <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+996 XXX XXX XXX"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2D4A7C] focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              {t('message') || 'Сообщение'}
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('messagePlaceholder') || 'Расскажите о себе...'}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2D4A7C] focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors"
            >
              {t('cancel') || 'Отмена'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-[#2D4A7C] text-white rounded-xl font-bold hover:bg-[#3E5B8F] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (t('sending') || 'Отправка...') : (t('send') || 'Отправить')}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
