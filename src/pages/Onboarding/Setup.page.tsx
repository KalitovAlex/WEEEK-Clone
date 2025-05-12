import { Steps } from "@/shared/ui/Steps";
import "./Setup.page.scss";
import { useTranslation } from "react-i18next";

export const SetupPage = () => {
  const { t } = useTranslation();
  return (
    <div className="setup-page">
      <div className="setup-page__content">
        <div className="setup-page__content__header">
          <p className="setup-page__content__header__title">
            {t("setup.title")}
            <span className="setup-page__content__header__title--highlight">
              {t("setup.yourself")}
            </span>
          </p>
        </div>
        <Steps stepsCount={3} currentStep={1} />
      </div>
    </div>
  );
};

export const Component = SetupPage;
