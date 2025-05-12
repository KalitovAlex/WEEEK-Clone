import "./index.scss";
import { APP_NAME } from "@/shared/constants/app";

interface LoaderProps {
  isFullScreen?: boolean;
}
export const Loader = ({ isFullScreen = false }: LoaderProps) => {
  return (
    <div className={`loader ${isFullScreen ? "full-screen" : ""}`}>
      {APP_NAME}
    </div>
  );
};
