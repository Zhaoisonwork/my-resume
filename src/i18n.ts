import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from '/Users/guoguo/Desktop/my-resume/src/locales/en/translation.json';
import translationCh from '/Users/guoguo/Desktop/my-resume/src/locales/ch/translation.json';
import translationDe from '/Users/guoguo/Desktop/my-resume/src/locales/de/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEn },
      ch: { translation: translationCh },
      de: { translation: translationDe },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
