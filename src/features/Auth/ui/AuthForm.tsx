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
import { toast } from "sonner";
import { setCookie } from "@/shared/utils/cookie";
import { TOKEN } from "@/shared/constants/api";

export const AuthForm = observer(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = async (data: AuthPayload) => {
    await authStore.auth(data);

    if (authStore.isSuccess) {
      toast.success(t("auth.success"));
      setCookie(TOKEN, authStore.data?.token || "");
      navigate(ROUTES.HOME);
    } else {
      toast.error(authStore.error || t("auth.error"));
    }
  };

  return (
    <div className="auth-form">
      <Form
        schema={authFormSchema}
        isLoading={authStore.isLoading}
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
