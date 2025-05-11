import { Logo } from "@/shared/ui/Logo";
import "./Auth.page.scss";
import { AuthForm } from "@/features/Auth/ui/AuthForm";
import { useTranslation } from "react-i18next";

export const AuthPage = () => {
  const { t } = useTranslation();

  return (
    <div className="auth-page">
      <div className="auth-page__form">
        <Logo />
        <div className="auth-page__form-header">
          <h2 className="auth-page__form-header-title">{t("auth.title")}</h2>
          <button className="auth-page__form-header-button">
            {t("auth.forgotPassword")}
          </button>
        </div>
        <AuthForm />
        <div className="auth-page__form-footer">
          <h2 className="auth-page__form-footer-title">
            {t("auth.dontHaveAccount")}
          </h2>
          <button className="auth-page__form-footer-button">
            {t("auth.register")}
          </button>
        </div>
      </div>
    </div>
  );
};

export const Component = AuthPage;
