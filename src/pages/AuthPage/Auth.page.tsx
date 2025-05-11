import "./Auth.page.scss";
import { AuthForm } from "@/features/Auth/ui/AuthForm";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";
import { AuthPagesWrapper } from "@/widgets/Auth/ui/AuthWrapper";

export const AuthPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <AuthPagesWrapper
      form={<AuthForm />}
      header={{
        title: t("auth.title"),
        actionButton: {
          text: t("auth.forgotPassword"),
          onClick: () => {},
        },
      }}
      footer={{
        text: t("auth.dontHaveAccount"),
        actionButton: {
          text: t("auth.register.title"),
          onClick: () => navigate(ROUTES.REGISTER),
        },
      }}
      footerText={t("auth.footer.title")}
    />
  );
};

export const Component = AuthPage;
