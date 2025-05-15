import { Header } from "@/widgets/Header/ui";
import "./MainLayout.scss";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/widgets/Sidebar/ui";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout__content">
        <Sidebar />
        <div className="main-layout__content-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
