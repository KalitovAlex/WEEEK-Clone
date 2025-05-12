import { Logo } from "@/shared/ui/Logo";
import { useTranslation } from "react-i18next";
import "./Welcome.page.scss";
import { APP_NAME } from "@/shared/constants/app";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";

export const WelcomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="welcome-page">
      <Logo />
      <div className="welcome-page__content">
        <div className="welcome-page__content__title">
          {t("welcome.title")} {APP_NAME}
        </div>
        <div className="welcome-page__content__desc">{t("welcome.desc")}</div>
        <Button
          onClick={() => navigate(ROUTES.SETUP)}
          variant="gradient"
          type="button"
        >
          {t("welcome.button")}
        </Button>
      </div>
    </div>
  );
};

export const Component = WelcomePage;
