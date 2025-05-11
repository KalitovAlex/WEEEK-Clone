import "./AuthForm.scss";
import { Form } from "@/shared/ui/Form";
import { Lock, Mail } from "lucide-react";
import { authFormSchema } from "../model/types";
import { useTranslation } from "react-i18next";

export const AuthForm = () => {
  const { t } = useTranslation();
  return (
    <div className="auth-form">
      <Form
        schema={authFormSchema}
        fields={[
          {
            name: "email",
            label: "Email",
            type: "email",
            icon: <Mail size={20} />,
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            icon: <Lock size={20} />,
          },
        ]}
        onSubmit={() => {}}
      />
      <div className="auth-form__footer">
        <h2 className="auth-form__footer-title">{t("auth.dontHaveAccount")}</h2>
        <button className="auth-form__footer-button">
          {t("auth.register")}
        </button>
      </div>
    </div>
  );
};
