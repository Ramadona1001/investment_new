import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import english from "../public/locale/en/translation.json";
import arabic from "../public/locale/ar/translation.json";
import Cookies from "js-cookie";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: english,
      },
      ar: {
        translation: arabic,
      },
    },
    fallbackLng: "ar",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/public/locale/{{lng}}/translation.json",
    },

    interpolation: {
      escapeValue: false,
    },
  });
i18n.changeLanguage(Cookies.get("i18next") || "ar");
