import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en' | 'kg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  ru: {
    // Navigation
    documents: 'Документы',
    work: 'Работа',
    help: 'Помощь',
    
    // Home Page
    homeTitle: 'ВАШ ГИД ДЛЯ ЛЕГАЛЬНОЙ РАБОТЫ',
    homeSubtitle: 'Документы, работа, безопасность - все в одном месте',
    startButton: 'Начать',
    mapTitle: 'Интерактивная карта Бишкека',
    documentsCard: 'Документы',
    documentsDesc: 'Инструкции по патентам и регистрации',
    workCard: 'Работа',
    workDesc: 'Проверенные вакансии в Бишкеке',
    housingCard: 'Жилье',
    housingDesc: 'Как найти и снять квартиру',
    safetyCard: 'Безопасность',
    safetyDesc: 'Экстренные номера и помощь',
    
    // Documents Page
    documentsTitle: 'Документы и легализация',
    documentsSubtitle: 'Пошаговые инструкции для легальной работы в Бишкеке',
    registrationTitle: 'Регистрация по месту пребывания',
    registrationDesc: 'Сделать в течение 5 дней после приезда. Нужен договор аренды жилья и паспорт.',
    registrationLink: 'Подробная инструкция на сайте МВД КР',
    patentTitle: 'Патент на работу',
    patentDesc: 'Нужен договор с работодателем, медсправка, оплата госпошлины.',
    patentLink: 'Список документов и образцы',
    medicalTitle: 'Медицинский осмотр',
    medicalDesc: 'Обязателен для получения патента. Адреса клиник в Бишкеке',
    medicalLink: 'Контакты и цены',
    importantTitle: 'Важно знать',
    importantDesc: 'Пропуск сроков ведет к штрафам. Храните копии всех документов',
    
    // Jobs Page
    jobsTitle: 'Работа в Бишкеке',
    jobsSubtitle: 'Проверенные вакансии от лицензированных работодателей',
    searchPlaceholder: 'Сварщик, строитель, швея...',
    searchButton: 'Найти',
    constructorTitle: 'Строитель-отделочник',
    constructorSalary: 'Зарплата: 800-1,200$ в месяц',
    constructorSchedule: 'График: 6/1, проживание предоставляется',
    constructorReq: 'Требования: опыт от1 года',
    sewingTitle: 'Швея на фабрику',
    sewingSalary: 'ЗП 600-800$, питание, спецодежда',
    sewingDocs: 'Список документов',
    baristaTitle: 'Бариста',
    baristaSalary: 'ЗП 400-600$, обучение, график 2/2',
    baristaApply: 'Откликнуться',
    warningTitle: 'Как не попасть к мошенникам',
    warningPoint1: 'Требуйте официальный договор',
    warningPoint2: 'Проверяйте лицензию компании на сайте МВД',
    warningPoint3: 'Никогда не платите за "оформление документов"',
    applyButton: 'Откликнуться',
    
    // Job Application Dialog
    applyForJob: 'Откликнуться на вакансию',
    phoneNumber: 'Номер телефона',
    message: 'Сообщение',
    messagePlaceholder: 'Расскажите о себе...',
    cancel: 'Отмена',
    send: 'Отправить',
    sending: 'Отправка...',
    phoneRequired: 'П��жалуйста, укажите номер телефона',
    applicationSuccess: 'Отклик успешно отправлен!',
    applicationError: 'Ошибка при отправке отклика. Попробуйте позже.',
    
    // Safety Page
    safetyTitle: 'Помощь и безопасность',
    safetySubtitle: 'Экстренные контакты и организации, которые помогут',
    emergencyTitle: 'Экстренные службы',
    policeTitle: '102 - Полиция',
    ambulanceTitle: '103 - Скорая помощь',
    fireTitle: '101 - Пожарная служба',
    emergencyTitle2: '112 - Единый номер',
    quickDial: 'Сохраните в быстрый набор',
    legalHelpTitle: 'Правовая помощь',
    legalOrgTitle: '"Бир Дуйно" Кыргызстан',
    legalOrgDesc: 'Бесплатные консультации',
    callButton: 'Позвонить',
    migrantUnionTitle: 'Профсоюз мигрантов',
    uzbekEmbassyTitle: 'Посольство Узбекистана',
    uzbekEmbassyAddress: 'Бишкек, ул. Ч.Айтматова,177',
    uzbekEmbassyPhone: '+996 312 98 62 95',
    uzbekEmbassyWebsite: 'usembassy/kg',
    howToGetButton: 'Как добраться',
    problemsTitle: 'Если у вас проблемы',
    problemsStep1: '1. Немедленно звоните в свое посольство',
    problemsStep2: '2. Обратитесь в правозащитную организацию',
    problemsStep3: '3. Не подписывайте документы без переводчика',
    problemsStep4: '4. Требуйте копии всех документов',
    downloadMemory: 'Скачать памятку (PDF)',
  },
  en: {
    // Navigation
    documents: 'Documents',
    work: 'Work',
    help: 'Help',
    
    // Home Page
    homeTitle: 'YOUR GUIDE FOR LEGAL WORK',
    homeSubtitle: 'Documents, work, safety - all in one place',
    startButton: 'Start',
    mapTitle: 'Interactive map of Bishkek',
    documentsCard: 'Documents',
    documentsDesc: 'Instructions for patents and registration',
    workCard: 'Work',
    workDesc: 'Verified vacancies in Bishkek',
    housingCard: 'Housing',
    housingDesc: 'How to find and rent an apartment',
    safetyCard: 'Safety',
    safetyDesc: 'Emergency numbers and help',
    
    // Documents Page
    documentsTitle: 'Documents and Legalization',
    documentsSubtitle: 'Step-by-step instructions for legal work in Bishkek',
    registrationTitle: 'Registration at place of stay',
    registrationDesc: 'Must be done within 5 days of arrival. Need rental agreement and passport.',
    registrationLink: 'Detailed instructions on MVD KR website',
    patentTitle: 'Work Patent',
    patentDesc: 'Need employment contract, medical certificate, state fee payment.',
    patentLink: 'Document list and samples',
    medicalTitle: 'Medical Examination',
    medicalDesc: 'Required for obtaining a patent. Clinic addresses in Bishkek',
    medicalLink: 'Contacts and prices',
    importantTitle: 'Important to know',
    importantDesc: 'Missing deadlines leads to fines. Keep copies of all documents',
    
    // Jobs Page
    jobsTitle: 'Work in Bishkek',
    jobsSubtitle: 'Verified vacancies from licensed employers',
    searchPlaceholder: 'Welder, builder, seamstress...',
    searchButton: 'Search',
    constructorTitle: 'Builder-finisher',
    constructorSalary: 'Salary: 800-1,200$ per month',
    constructorSchedule: 'Schedule: 6/1, accommodation provided',
    constructorReq: 'Requirements: experience from 1 year',
    sewingTitle: 'Seamstress for factory',
    sewingSalary: 'Salary 600-800$, meals, work clothes',
    sewingDocs: 'Document list',
    baristaTitle: 'Barista',
    baristaSalary: 'Salary 400-600$, training, schedule 2/2',
    baristaApply: 'Apply',
    warningTitle: 'How not to fall for scammers',
    warningPoint1: 'Require official contract',
    warningPoint2: 'Check company license on MVD website',
    warningPoint3: 'Never pay for "document processing"',
    applyButton: 'Apply',
    
    // Job Application Dialog
    applyForJob: 'Apply for job',
    phoneNumber: 'Phone number',
    message: 'Message',
    messagePlaceholder: 'Tell about yourself...',
    cancel: 'Cancel',
    send: 'Send',
    sending: 'Sending...',
    phoneRequired: 'Please enter phone number',
    applicationSuccess: 'Application sent successfully!',
    applicationError: 'Error sending application. Try again later.',
    
    // Safety Page
    safetyTitle: 'Help and Safety',
    safetySubtitle: 'Emergency contacts and organizations that will help',
    emergencyTitle: 'Emergency Services',
    policeTitle: '102 - Police',
    ambulanceTitle: '103 - Ambulance',
    fireTitle: '101 - Fire Service',
    emergencyTitle2: '112 - Universal Number',
    quickDial: 'Save to quick dial',
    legalHelpTitle: 'Legal Help',
    legalOrgTitle: '"Bir Duino" Kyrgyzstan',
    legalOrgDesc: 'Free consultations',
    callButton: 'Call',
    migrantUnionTitle: 'Migrant Union',
    uzbekEmbassyTitle: 'Embassy of Uzbekistan',
    uzbekEmbassyAddress: 'Bishkek, Ch.Aitmatov str., 177',
    uzbekEmbassyPhone: '+996 312 98 62 95',
    uzbekEmbassyWebsite: 'usembassy/kg',
    howToGetButton: 'How to get there',
    problemsTitle: 'If you have problems',
    problemsStep1: '1. Immediately call your embassy',
    problemsStep2: '2. Contact a human rights organization',
    problemsStep3: '3. Do not sign documents without a translator',
    problemsStep4: '4. Demand copies of all documents',
    downloadMemory: 'Download memo (PDF)',
  },
  kg: {
    // Navigation
    documents: 'Документтер',
    work: 'Иш',
    help: 'Жардам',
    
    // Home Page
    homeTitle: 'МЫЙЗАМДУУ ИШ ҮЧҮН ЖЕТЕКЧИҢИЗ',
    homeSubtitle: '��окументтер, иш, коопсуздук - баары бир жерде',
    startButton: 'Баштоо',
    mapTitle: 'Бишкектин интерактивдүү картасы',
    documentsCard: 'Документтер',
    documentsDesc: 'Патенттер жана каттоо боюнча нускамалар',
    workCard: 'Иш',
    workDesc: 'Бишкектеги текшерилген вакансиялар',
    housingCard: 'Турак жай',
    housingDesc: 'Квартира кантип табууга жана ижарага алууга',
    safetyCard: 'Коопсуздук',
    safetyDesc: 'Шашылыш номерлер жана жардам',
    
    // Documents Page
    documentsTitle: 'Документтер жана мыйзамдаштыруу',
    documentsSubtitle: 'Бишкекте мыйзамдуу иштөө үчүн кадамдык нускамалар',
    registrationTitle: 'Жашаган жер боюнча каттоо',
    registrationDesc: 'Келгенден кийин 5 күндүн ичинде жасоо керек. Үйдү ижарага алуу келишими жана паспорт керек.',
    registrationLink: 'ИИМ сайтындагы толук нускама',
    patentTitle: 'Иш патенти',
    patentDesc: 'Иш берүүчү менен келишим, медициналык справка, мамлекеттик божту төлөө керек.',
    patentLink: 'Документтердин тизмеси жана үлгүлөр',
    medicalTitle: 'Медициналык текшерүү',
    medicalDesc: 'Патент алуу үчүн милдеттүү. Бишкектеги клиникалардын дареги',
    medicalLink: 'Байланыштар жана баалар',
    importantTitle: 'Билүү керек',
    importantDesc: 'Мөөнөттөрдү өткөрүп жиберүү айыпка алып келет. Бардык документтердин көчүрмөсүн сактаңыз',
    
    // Jobs Page
    jobsTitle: 'Бишкекте иш',
    jobsSubtitle: 'Лицензияланган иш берүүчүлөрдөн текшерилген вакансиялар',
    searchPlaceholder: 'Электр ашкачы, курулушчу, тигүүчү...',
    searchButton: 'Издөө',
    constructorTitle: 'Курулушчу-бүтүрүүчү',
    constructorSalary: 'Айлык: 800-1,200$ айына',
    constructorSchedule: 'График: 6/1, жашаган жер берилет',
    constructorReq: 'Талаптар: 1 жылдан тажрыйба',
    sewingTitle: 'Фабрикага тигүүчү',
    sewingSalary: 'Айлык 600-800$, тамак, иш кийими',
    sewingDocs: 'Документтердин тизмеси',
    baristaTitle: 'Бариста',
    baristaSalary: 'Айлык 400-600$, үйрөтүү, график 2/2',
    baristaApply: 'Арыз берүү',
    warningTitle: 'Алдамчыларга кантип тийбөө керек',
    warningPoint1: 'Расмий келишимди талап кылыңыз',
    warningPoint2: 'ИИМ сайтында компаниянын лицензиясын текшериңиз',
    warningPoint3: '"Документтерди даярдоо" үчүн эч качан акча төлөбөңүз',
    applyButton: 'Арыз берүү',
    
    // Job Application Dialog
    applyForJob: 'Вакансияга арыз берүү',
    phoneNumber: 'Телеграм номери',
    message: 'Хабар',
    messagePlaceholder: 'Өзүңүздү жөнүндө айткаңыз...',
    cancel: 'Башкаруу',
    send: 'Жөнгө салуу',
    sending: 'Жөнгө салууда...',
    phoneRequired: 'Телеграм номерин киргизүү керек',
    applicationSuccess: 'Арыз сәләмдүүлүк менен жөнгө салынды!',
    applicationError: 'Арыз жөнгө салууда ылдамдуу. Кийин кайталап көрүңүз.',
    
    // Safety Page
    safetyTitle: 'Жардам жана коопсуздук',
    safetySubtitle: 'Шашылыш байланыштар жана жардам берүүчү уюмдар',
    emergencyTitle: 'Шашылыш кызматтар',
    policeTitle: '102 - Полиция',
    ambulanceTitle: '103 - Тез жардам',
    fireTitle: '101 - Өрт өчүрүү кызматы',
    emergencyTitle2: '112 - Бирдиктүү номер',
    quickDial: 'Тез чалууга сактаңыз',
    legalHelpTitle: 'Укуктук жардам',
    legalOrgTitle: '"Бир Дуйно" Кыргызстан',
    legalOrgDesc: 'Акысыз консультациялар',
    callButton: 'Чалуу',
    migrantUnionTitle: 'Мигранттардын кесиптик союзу',
    uzbekEmbassyTitle: 'Өзбекстандын элчилиги',
    uzbekEmbassyAddress: 'Бишкек, Ч.Айтматов көч., 177',
    uzbekEmbassyPhone: '+996 312 98 62 95',
    uzbekEmbassyWebsite: 'usembassy/kg',
    howToGetButton: 'Кантип баруу керек',
    problemsTitle: 'Эгер көйгөйлөр болсо',
    problemsStep1: '1. Дароо элчилигиңизге чалыңыз',
    problemsStep2: '2. Адам укуктарын коргоочу уюмга кайрылыңыз',
    problemsStep3: '3. Котормочусуз документтерге кол коюбаңыз',
    problemsStep4: '4. Бардык документтердин көчүрмөсүн талап кылыңыз',
    downloadMemory: 'Эскертмени жүктөп алуу (PDF)',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ru] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};