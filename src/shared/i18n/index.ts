import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { ru } from "./locales/ru";

i18n.use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "ru",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ru: {
      translation: ru,
    },
    en: {
      translation: en,
    },
  },
});

export default i18n;
