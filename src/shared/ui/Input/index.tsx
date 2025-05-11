import { Eye, EyeOff } from "lucide-react";
import "./index.scss";
import { forwardRef, type ReactNode, useState } from "react";

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
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    if (type == "password") {
      return (
        <div className="input-wrapper">
          {icon && iconPosition === "left" && icon}
          <input
            ref={ref}
            type={isPasswordVisible ? "text" : "password"}
            className={`${className} ${icon ? "has-icon" : ""} ${
              icon ? `icon-${iconPosition}` : ""
            }`}
            placeholder={placeholder}
            {...props}
          />
          <button
            className="input-wrapper__button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <EyeOff size={25} /> : <Eye size={25} />}
          </button>
        </div>
      );
    }
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
