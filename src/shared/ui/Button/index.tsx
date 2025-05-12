import "./index.scss";
import { Loader } from "../Loader";

export const Button = ({
  children,
  type = "button",
  onClick,
  isLoading,
  variant = "primary",
  size = "small",
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isLoading?: boolean;
  variant?: "primary" | "gradient";
  size?: "small" | "large";
}) => {
  return (
    <button
      className={`button ${variant} ${size}`}
      type={type}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
