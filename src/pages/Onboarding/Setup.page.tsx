import "./Setup.page.scss";
import { useTranslation } from "react-i18next";

export const SetupPage = () => {
  const { t } = useTranslation();

  return (
    <div className="setup-page">
      <div className="setup-page__header">
        <div className="setup-page__header__title">{t("setup.title")}</div>
      </div>
    </div>
  );
};

export const Component = SetupPage;
