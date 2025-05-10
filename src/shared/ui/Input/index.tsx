import "./index.scss";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "password" | "number" | "search" | "tel" | "url";
  placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", placeholder, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className="input"
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
