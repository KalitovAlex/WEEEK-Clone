import "./index.scss";
import { Loader } from "../Loader";

export const Button = ({
  children,
  type = "button",
  onClick,
  isLoading,
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isLoading?: boolean;
}) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {isLoading ? <Loader /> : children}
    </button>
  );
};
