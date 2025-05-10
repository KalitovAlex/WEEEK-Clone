import { Logo } from "@/shared/ui/Logo";
import "./Auth.page.scss";
import { Form } from "@/shared/ui/Form";
import { z } from "node_modules/zod/lib";
import { Mail } from "lucide-react";

export const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-page__form">
        <Logo />
        <Form
          schema={z.object({
            email: z.string().email(),
            password: z.string().min(8),
          })}
          fields={[
            {
              name: "email",
              label: "Email",
              type: "email",
              icon: <Mail />,
            },
          ]}
          onSubmit={() => {}}
        />
      </div>
    </div>
  );
};

export const Component = AuthPage;
