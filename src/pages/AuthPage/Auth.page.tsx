import { Logo } from "@/shared/ui/Logo";
import "./Auth.page.scss";
import { AuthForm } from "@/features/Auth/ui/AuthForm";

export const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-page__form">
        <Logo />
        <AuthForm />
      </div>
    </div>
  );
};

export const Component = AuthPage;
