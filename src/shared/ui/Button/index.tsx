import "./index.scss";
import { Loader } from "../Loader";

export const Button = ({
  children,
  type = "button",
  onClick,
  isLoading,
  variant = "primary",
  size = "small",
  disabled = false,
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isLoading?: boolean;
  variant?: "primary" | "gradient";
  size?: "small" | "large";
  disabled?: boolean;
}) => {
  return (
    <button
      className={`button ${variant} ${size} ${disabled ? "disabled" : ""}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
