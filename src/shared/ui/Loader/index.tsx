import "./index.scss";
import { APP_NAME } from "@/shared/constants/app";

export const Loader = () => {
  return <div className="loader">{APP_NAME}</div>;
};
