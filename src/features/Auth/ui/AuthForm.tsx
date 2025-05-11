import "./AuthForm.scss";
import { Form } from "@/shared/ui/Form";
import { Lock, Mail } from "lucide-react";
import { authFormSchema } from "../model/types";

export const AuthForm = () => {
  return (
    <div className="auth-form">
      <div className="auth-form__header"></div>
      <Form
        schema={authFormSchema}
        fields={[
          {
            name: "email",
            label: "Email",
            type: "email",
            icon: <Mail className="auth-form__icon" size={20} />,
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            icon: <Lock className="auth-form__icon" size={20} />,
          },
        ]}
        onSubmit={() => {}}
      />
    </div>
  );
};
