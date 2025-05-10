import "./AuthForm.scss";
import { Form } from "@/shared/ui/Form";
import { Lock, Mail } from "lucide-react";
import { authFormSchema } from "../model/types";

export const AuthForm = () => {
  return (
    <div className="auth-form">
      <Form
        schema={authFormSchema}
        fields={[
          {
            name: "email",
            label: "Email",
            type: "email",
            icon: <Mail className="auth-form__mail" size={20} />,
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            icon: <Lock className="auth-form__lock" size={20} />,
          },
        ]}
        onSubmit={() => {}}
      />
    </div>
  );
};
