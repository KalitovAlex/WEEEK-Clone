import { LanguageSelect } from "@/shared/ui/Language";
import { Logo } from "@/shared/ui/Logo";
import type { ReactNode } from "react";
import "./AuthWrapper.scss";

interface AuthPagesWrapperProps {
  form: ReactNode;
  header: {
    title: string;
    actionButton?: {
      text: string;
      onClick?: () => void;
    };
  };
  footer: {
    text: string;
    actionButton: {
      text: string;
      onClick: () => void;
    };
  };
  footerText: string;
}

export const AuthPagesWrapper = ({
  form,
  header,
  footer,
  footerText,
}: AuthPagesWrapperProps) => {
  return (
    <div className="form-page">
      <div className="form-page__content">
        <Logo />
        <div className="form-page__header">
          <h2 className="form-page__header-title">{header.title}</h2>
          {header.actionButton && (
            <button
              onClick={header.actionButton.onClick}
              className="form-page__header-button"
            >
              {header.actionButton.text}
            </button>
          )}
        </div>
        {form}
        <div className="form-page__footer">
          <h2 className="form-page__footer-title">{footer.text}</h2>
          <button
            onClick={footer.actionButton.onClick}
            className="form-page__footer-button"
          >
            {footer.actionButton.text}
          </button>
        </div>
        <div className="form-page__bottom">
          <h2 className="form-page__bottom-title">{footerText}</h2>
          <LanguageSelect />
        </div>
      </div>
    </div>
  );
};
