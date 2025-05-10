import "./index.scss";
import { forwardRef, type ReactNode } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "password" | "number" | "search" | "tel" | "url";
  placeholder?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder,
      className,
      icon,
      iconPosition = "left",
      ...props
    },
    ref
  ) => {
    return (
      <div className="input-wrapper">
        {icon && iconPosition === "left" && icon}
        <input
          ref={ref}
          type={type}
          className={`${className} ${icon ? "has-icon" : ""} ${
            icon ? `icon-${iconPosition}` : ""
          }`}
          placeholder={placeholder}
          {...props}
        />
        {icon && iconPosition === "right" && icon}
      </div>
    );
  }
);

Input.displayName = "Input";
