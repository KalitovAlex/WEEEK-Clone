import { Form } from "@/shared/ui/Form";
import { registerFormSchema } from "../model/types";
import "./RegisterForm.scss";
import { useTranslation } from "react-i18next";
import { Lock, Mail, User } from "lucide-react";
import { authStore } from "../model";
import { toast } from "sonner";
import type { RegisterPayload } from "@/entities/Auth";
import { ROUTES } from "@/shared/model/routes";
import { useNavigate } from "react-router";
import { setCookie } from "@/shared/utils/cookie";
import { TOKEN } from "@/shared/constants/api";

export const RegisterForm = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleRegister = async (data: RegisterPayload) => {
    await authStore.register(data);

    if (authStore.isSuccess) {
      toast.success(t("auth.register.success"));
      setCookie(TOKEN, authStore.data?.token || "");
      navigate(ROUTES.WELCOME);
    } else {
      toast.error(authStore.error || t("auth.register.error"));
    }
  };

  return (
    <div className="register-form">
      <Form
        schema={registerFormSchema}
        fields={[
          {
            name: "firstName",
            label: t("name"),
            type: "text",
            icon: <User size={20} />,
          },
          {
            name: "lastName",
            label: t("surname"),
            type: "text",
            icon: <User size={20} />,
          },
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
        onSubmit={handleRegister}
      />
    </div>
  );
};
