import { useTranslation } from "react-i18next";
import "./index.scss";
import { Toggle } from "../Toggle";

const LANGUAGES = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
] as const;

export const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (langCode: "ru" | "en") => {
    console.log("Changing language to:", langCode);
    i18n.changeLanguage(langCode).then(() => {
      console.log("Language changed, current:", i18n.language);
    });
  };

  return (
    <div className="language-select">
      {LANGUAGES.map((lang) => (
        <Toggle
          key={lang.code}
          size="small"
          label={lang.label}
          checked={i18n.language === lang.code}
          onChange={() => handleLanguageChange(lang.code)}
        />
      ))}
    </div>
  );
};
