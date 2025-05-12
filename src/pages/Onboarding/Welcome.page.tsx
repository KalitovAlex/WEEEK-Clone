import { Logo } from "@/shared/ui/Logo";
import { useTranslation } from "react-i18next";
import "./Welcome.page.scss";
import { APP_NAME } from "@/shared/constants/app";

export const WelcomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="welcome-page">
      <Logo />
      <div className="welcome-page__content">
        <div className="welcome-page__content__title">
          {t("welcome.title")} {APP_NAME}
        </div>
        <div className="welcome-page__content__desc">{t("welcome.desc")}</div>
      </div>
    </div>
  );
};

export const Component = WelcomePage;
