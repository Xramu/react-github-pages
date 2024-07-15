import i18n from "i18next";
import TranslationsEN from "./translationsEN.json"
import TranslationsFI from "./translationsFI.json"
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
  en: {
    translation: TranslationsEN
  },
  fi: {
    translation: TranslationsFI
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    lng: "fi"
  });

export default i18n;