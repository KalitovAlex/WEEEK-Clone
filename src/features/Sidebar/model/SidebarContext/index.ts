import { createContext, useContext } from "react";

export const SidebarContext = createContext({
  isExpanded: true,
  toggleSidebar: () => {},
});

export const useSidebar = () => {
  const { isExpanded, toggleSidebar } = useContext(SidebarContext);
  return { isExpanded, toggleSidebar };
};
