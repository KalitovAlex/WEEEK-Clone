import { Logo } from "@/shared/ui/Logo";
import { useTranslation } from "react-i18next";
import "./Welcome.page.scss";
import { APP_NAME } from "@/shared/constants/app";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";
import { useEffect } from "react";
import { SETUP_STEP } from "@/features/Setup/model/items";
import { getItem } from "@/shared/utils/localstorage";
import { SETUP_STEP_KEY } from "@/features/Setup/model/items";

export const WelcomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (getItem(SETUP_STEP_KEY) === SETUP_STEP.confirmed) {
      navigate(ROUTES.HOME);
    }
  }, [navigate]);

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
