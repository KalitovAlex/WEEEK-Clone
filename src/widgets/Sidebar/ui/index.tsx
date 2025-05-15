import { Input } from "@/shared/ui/Input";
import { useTranslation } from "react-i18next";
import "./index.scss";
import { Search } from "lucide-react";
import { useSidebar } from "@/features/Sidebar/model";

export const Sidebar = () => {
  const { t } = useTranslation();
  const { isExpanded, toggleSidebar } = useSidebar();

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar__content">
        <Input
          {...(!isExpanded && {
            onlyIcon: true,
            onClick: () => {
              toggleSidebar();
            },
          })}
          filled
          iconLeft={<Search width={22} height={22} />}
          placeholder={t("project.name")}
        />
        <div className="sidebar__content__projects">
          <div className="sidebar__content__projects__header">
            <h3>Projects</h3>
            <img
              className="sidebar__content__projects__header__add"
              src="/add.svg"
              alt="add"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
