import { Form } from "@/shared/ui/Form";
import { registerFormSchema } from "../model/types";
import "./RegisterForm.scss";
import { useTranslation } from "react-i18next";
import { Lock, Mail, User } from "lucide-react";

export const RegisterForm = () => {
  const { t } = useTranslation();

  return (
    <div className="register-form">
      <Form
        schema={registerFormSchema}
        fields={[
          {
            name: "name",
            label: t("name"),
            type: "text",
            icon: <User size={20} />,
          },
          {
            name: "surname",
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
        onSubmit={() => {}}
      />
    </div>
  );
};
