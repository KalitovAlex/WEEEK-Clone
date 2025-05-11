import "./AuthForm.scss";
import { Form } from "@/shared/ui/Form";
import { Lock, Mail } from "lucide-react";
import { authFormSchema } from "../model/types";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { authStore } from "../model";
import type { AuthPayload } from "@/entities/Auth";
import { useNavigate } from "react-router";
import { ROUTES } from "@/shared/model/routes";

export const AuthForm = observer(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = async (data: AuthPayload) => {
    await authStore.auth(data);

    if (authStore.isSuccess) {
      navigate(ROUTES.HOME);
    }
  };

  return (
    <div className="auth-form">
      <Form
        schema={authFormSchema}
        fields={[
          {
            name: "email",
            label: t("email"),
            type: "email",
            icon: <Mail size={20} />,
          },
          {
            name: "password",
            label: t("password"),
            type: "password",
            icon: <Lock size={20} />,
          },
        ]}
        onSubmit={handleLogin}
      />
    </div>
  );
});
