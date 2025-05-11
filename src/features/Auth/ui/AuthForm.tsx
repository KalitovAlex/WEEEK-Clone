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
        onSubmit={async () => {}}
      />
    </div>
  );
};
