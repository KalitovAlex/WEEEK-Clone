import { RegisterForm } from "@/features/Auth/ui/RegisterForm";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";
import { AuthPagesWrapper } from "@/widgets/Auth/ui/AuthWrapper";

export const RegisterPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <AuthPagesWrapper
      form={<RegisterForm />}
      header={{
        title: t("auth.register.title"),
      }}
      footer={{
        text: t("auth.alreadyHaveAccount"),
        actionButton: {
          text: t("login"),
          onClick: () => navigate(ROUTES.LOGIN),
        },
      }}
      footerText={t("auth.footer.title")}
    />
  );
};

export const Component = RegisterPage;
