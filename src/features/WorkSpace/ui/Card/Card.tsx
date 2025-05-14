import { Avatar } from "@/shared/ui/Avatar";
import "./Card.scss";
import { useTranslation } from "react-i18next";
import { getItem } from "@/shared/utils/localstorage";
import { WORKSPACE_NAME } from "@/shared/constants/app";
import { ChevronLeft, Menu } from "lucide-react";
import { useState } from "react";

export const WorkSpaceCard = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpand = () => {
    const sidebar = document.querySelector(".sidebar");
    setIsExpanded((prev) => !prev);
    if (sidebar) {
      sidebar.classList.toggle("collapsed");
    }
  };

  return (
    <div className={`work-space-card `}>
      <div className="work-space-card__content">
        <div className="work-space-card__content__left">
          <Avatar initials="AB" />
          <div className="work-space-card__main">
            <p className="work-space-card__main__title">
              {t("workspace.workSpace")}
            </p>
            <h2 className="work-space-card__main__name">
              {getItem(WORKSPACE_NAME)}
            </h2>
          </div>
        </div>
        <div className="work-space-card__actions">
          {isExpanded ? (
            <ChevronLeft
              onClick={handleExpand}
              className="work-space-card__actions__icon"
            />
          ) : (
            <Menu
              onClick={handleExpand}
              className="work-space-card__actions__icon"
            />
          )}
        </div>
      </div>
    </div>
  );
};
