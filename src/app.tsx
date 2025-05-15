import { Outlet } from "react-router";
import { SidebarProvider } from "@/features/Sidebar/ui";

export const App = () => {
  return (
    <div>
      <SidebarProvider>
        <Outlet />
      </SidebarProvider>
    </div>
  );
};
