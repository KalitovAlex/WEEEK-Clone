import "./Setup.page.scss";
import { useTranslation } from "react-i18next";

export const SetupPage = () => {
  const { t } = useTranslation();
  return (
    <div className="setup-page">
      <div className="setup-page__header">
        <p className="setup-page__header__title">
          {t("setup.title")}{" "}
          <span className="setup-page__header__title--highlight">
            {t("setup.yourself")}
          </span>
        </p>
      </div>
    </div>
  );
};

export const Component = SetupPage;
